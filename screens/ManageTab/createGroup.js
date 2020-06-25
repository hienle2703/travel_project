import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ScheduleItem from "../../components/ScheduleItem";
import { MonoText } from "../../components/StyledText";
import TabBarIcon from "../../components/TabBarIcon";
import DatePicker from "react-native-datepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { firebaseApp } from "../../components/FirebaseConfig";
export default class createGroupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayValue: [],
      user: null,
      curTime: null,
      groupName: null,
    };
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickAddGroup() {
    this.props.navigation.navigate("PickFriend");
  }
  onClickCreateGroup= async ()=>{
    //Lấy mảng tên bạn bè
    let array = [];
    let value = this.props.route.params?.arrayFriendChoose;
    if (value !== undefined) {
      array = value;
    }
    //Lấy mảng item bạn bè
    let item =[];
    let itemArray = this.props.route.params?.arrayItemChoose
    if (itemArray !== null) {
      item = itemArray;
    }
    //Lấy mã hành trình
    let key = "";
    let scheduleKey = this.props.params?.scheduleKey
    if (scheduleKey !== null) {
      key = scheduleKey;
    }
    //Lấy tên hành trình
    let name = "";
    let scheduleName = this.props.route.params?.scheduleName;
    if (scheduleName !== null) {
      name = scheduleName;
    }
    let groupCall = this.state.groupName
    const date = this.state.curTime;
    let userName = this.state.user
    const itemRef = firebaseApp.database().ref("group").child("group_"+userName).child("group_"+userName+"_"+date)
    await itemRef.set({
      groupName: groupCall,
      memberName: array,
      //memberKey: item,
      //scheduleKey: key,
      node: "group_"+userName+"_"+date,
      scheduleName: name,
      leader: this.state.user
    })
    for(var i in item){
      const itemRefMember = firebaseApp.database().ref("group").child("group_"+userName).child("group_"+userName+"_"+date).child("memberKey").child(item[i])
      await itemRefMember.set({
        name: item[i]
      })
    }
    const userRef = firebaseApp.database().ref("user/"+userName).child("group").child("group_"+userName+"_"+date)
    await userRef.set({
      name: "group_"+userName+"_"+date
    })
    Alert.alert(
      "Travel group created",
      "Wish you guys a wonderful trip",
      [
        
        { text: "OK", onPress: () => this.props.navigation.replace("ManageScreen") },
      ],
      { cancelable: false }
    );
    
  }
  
  componentDidMount() {
    let date = new Date();
    let n = date.getDate();
    let h = date.getMinutes();
    let g = date.getSeconds();
    let s = n + h * n + g;

    this.setState({ curTime: s });
    //Lấy thông tin user hiện tại
    const userCur = firebaseApp.auth().currentUser;
    const split = userCur.email;
    //Cắt chuỗi để lấy cụm trước @
    const splitted =  split.substring(0, split.lastIndexOf("@"));
    this.setState({user: splitted})
  }
  render() {
    let { image } = this.state;
    //Lấy mảng tên bạn bè
    let array = [];
    let value = this.props.route.params?.arrayFriendChoose;
    if (value !== undefined) {
      array = value;
    }
    //Lấy mảng item bạn bè
    let item =[];
    let itemArray = this.props.route.params?.arrayItemChoose
    if (itemArray !== null) {
      item = itemArray;
    }
    //Lấy mã hành trình
    let key = "";
    let scheduleKey = this.props.params?.scheduleKey
    if (scheduleKey !== null) {
      key = scheduleKey;
    }
    //Lấy tên hành trình
    let name = "";
    let scheduleName = this.props.route.params?.scheduleName;
    if (scheduleName !== null) {
      name = scheduleName;
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View styles={styles.backBtn}>
            <TouchableOpacity
              style={{ left: 30, top: 15, flexDirection: "row" }}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "gray", alignItems: "flex-start" }}
                name="ios-arrow-back"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "gray",
                  left: 10,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          {/* Group Name */}
          <View style={styles.line}>
            {/* <Entypo name="edit" size={24} color="black" /> */}

            <Text>Your group name</Text>
            <TextInput style={styles.inputForm} onChangeText={(groupName) => this.setState({ groupName })}></TextInput>
          </View>
          {/* Pick Friends */}
          <View style={styles.line}>
            <View>
              <Text>Pick members</Text>
              <TouchableOpacity
                style={styles.inputForm}
                onPress={() => this.onClickAddGroup()}
              >
                <Text style={{ color: "white", left: 10, top: 5 }}>Choose</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.showMemberPicked}>
              {array.map((item) => {
                return (
                  <View style={styles.friendPickContainer}>
                    <Text style={styles.friendPickText}>{item}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* Pick Location */}
          <View style={styles.line}>
            {/* <Feather name="map" size={24} color="black" /> */}
            <View>
              <Text>Pick a schedule</Text>
              <TouchableOpacity
                style={styles.inputForm}
                onPress={() => this.props.navigation.navigate("PickSchedule")}
              >
                <Text style={{ color: "white", left: 10, top: 5 }}>
                  Open schedule list
                </Text>
              </TouchableOpacity>
              <View style={styles.showMemberPicked}>
                <View style={styles.friendPickContainer}>
                  <Text style={styles.friendPickText}>{name}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.buttonCreate} onPress={()=> this.onClickCreateGroup()}>
                <Text style={{ color: "white" }}>Create Your Group</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    //backgroundColor: "yellow",
    justifyContent: "center",
  },
  formContainer: {
    height: 500,
    //backgroundColor: "green",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  line: {
    width: "85%",
    margin: 20,
  },
  buttonContainer: {
    height: 50,
    //backgroundColor:"yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCreate: {
    height: 40,
    width: 200,
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
  inputForm: {
    backgroundColor: "#C9C9C9",
    width: "100%",
    height: 30,
    borderRadius: 10,
    marginTop: 5,
    color: "white",
  },
  showMemberPicked: {
    backgroundColor: "#E6E6E6",
    width: "80%",
    alignSelf: "center",
    top: 15,
    borderRadius: 10,
  },
  friendPickContainer: {
    //height: 30,
    marginBottom: 10,
  },
  friendPickText: {
    marginLeft: 10,
    top: 5,
    color: "#DB5823",
  },
});
