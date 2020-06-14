import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import TabBarIcon from "../../components/TabBarIcon";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ChatScreen from "./ChatScreen";

export default class ManageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressButton(screen) {
    this.props.navigation.navigate(screen);
    this.props.navigation.setOptions({});
  }
  onClickAddMember(){
    this.props.navigation.navigate("AddMember")
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }

  render() {
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

        <View style={styles.content}>
          <View style={styles.groupName}>
            <Text style={styles.groupNameText}>Infamous Team</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onClickAddMember()}
            >
              <View style={styles.iconEdit}>
                {/* <MaterialIcons name="person-add" size={25} color="black" /> */}
                <Image style={{height:40, width:40, borderRadius:40,}} source={{uri: "https://plus24h.com/upload/images/add-person-2646097_960_720.png"}}/>
              </View>
              <Text style={styles.txt}>Add Member</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onPressButton("MemberListScreen")}
            >
              <View style={styles.iconEdit}>
                {/* <Ionicons name="ios-people" size={25} color="black" /> */}
                <Image style={{height:40, width:40, borderRadius:40,}} source={{uri: "https://thumbs.dreamstime.com/b/people-flat-icon-group-round-colorful-button-team-circular-vector-sign-shadow-effect-style-design-92997577.jpg"}}/>
              </View>
              <Text style={styles.txt}>Manage members </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onPressButton("ManageSchedule")}
            >
              <View style={styles.iconEdit}>
                {/* <AntDesign name="find" size={25} color="black" /> */}
                <Image style={{height:40, width:40, borderRadius:40,}} source={{uri: "https://img.freepik.com/free-vector/hand-with-pen-mark-calendar_1325-126.jpg?size=338&ext=jpg"}}/>
              </View>
              <Text style={styles.txt}>Your Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onPressButton(ChatScreen)}
            >
              <View style={styles.iconEdit}>
                {/* <MaterialIcons name="chat" size={25} color="black" /> */}
                <Image style={{height:40, width:40, borderRadius:40,}} source={{uri: "https://image.freepik.com/free-vector/chat-bubble_53876-25540.jpg"}}/>
              </View>
              <Text style={styles.txt}>Group Chat</Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onPressButton("ChoiceTravelScreen")}
            >
              <View style={styles.iconEdit}>
              {/* <AntDesign name="search1" size={25} color="black" /> */}
              <Image style={{height:40, width:40, borderRadius:40,}} source={{uri: "https://img.freepik.com/free-vector/street-map_23-2147510569.jpg?size=338&ext=jpg"}}/>
              </View>
              <Text style={styles.txt}>Tracking Members</Text>
            </TouchableOpacity>
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
    //backgroundColor: "yellow",
    height: 100,
    justifyContent: "center",
  },
  content: {
    height: 600,
    //backgroundColor:"green",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#DB5823",
    color: "white",
    alignItems: "center",
    flexDirection:"row",
    width: 300,
    height: 70,
    borderRadius: 20,
  },
  txt: {
    color: "white",
    left:10,
    fontWeight:"bold",
  },
  btnContainer: {
    marginBottom:10,
    //backgroundColor:"white",
  },
  iconEdit: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:60,
  },
  groupName: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20,
  },
  groupNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DB5823",
  },
});
