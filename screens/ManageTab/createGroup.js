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
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ScheduleItem from "../../components/ScheduleItem";
import { MonoText } from "../../components/StyledText";
import TabBarIcon from "../../components/TabBarIcon";
import DatePicker from "react-native-datepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default class createGroupScreen extends Component {
  state = {
 
  };

  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickAddGroup(){
    this.props.navigation.navigate("PickFriend")
  }
  componentDidMount(){
    
  }

  render() {
    let { image } = this.state;
    const a = this.props.route.params?.arrayFriendChoose;
    console.log(a,"Mảng truyển vào")
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
            <TextInput style={styles.inputForm}></TextInput>
          </View>
          {/* Pick Friends */}
          <View style={styles.line}>
            <View>
              <Text>Pick members</Text>
              <TouchableOpacity style={styles.inputForm} onPress={()=>this.onClickAddGroup()}>
                <Text style={{ color: "white", left: 10, top: 5 }}>Choose</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.showMemberPicked}>
            
            </View>
          </View>
          {/* Pick Location */}
          <View style={styles.line}>
            {/* <Feather name="map" size={24} color="black" /> */}
            <View>
              <Text>Pick a schedule</Text>
              <TouchableOpacity style={styles.inputForm}>
                <Text style={{ color: "white", left: 10, top: 5 }}>
                  Open schedule list
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.buttonCreate}>
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
});
