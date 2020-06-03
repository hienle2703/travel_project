import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
    this.props.navigation.setOptions({
    })
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image

            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.areaView}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => alert(" Chua lam nghen")}
              >
                <View style={styles.iconEdit}><MaterialIcons name="person-add" size={35} color="black" /></View>
                <Text style={styles.txt}>Add Member</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton("MemberListScreen")}
              >
                <View style={styles.iconEdit}><Ionicons name="ios-people" size={35} color="black" /></View>
                <Text style={styles.txt}>MemberList </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.areaView1}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton("ChoiceTravelScreen")}
              >
                <View style={styles.iconEdit}><AntDesign name="find" size={35} color="black" /></View>
                <Text style={styles.txt}>Travel Information</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton(ChatScreen)}
              >
                <View style={styles.iconEdit}><MaterialIcons name="chat" size={35} color="black" /></View>
                <Text style={styles.txt}>MessageGroup</Text>
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
    // 

  },
  header: {
    backgroundColor: 'white',
    flex: 0.2
  },
  content: {
    flex: 0.8,

  },
  areaView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  areaView1: {
    flexDirection: "row",

    marginTop: 10,
    justifyContent: "center"

  },
  btn: {
    backgroundColor: '#68a0cf',
    color: "white",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",

    width: 150,
    height: 150,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txt: {
    color: "white",
  },
  btnContainer: {
    flexDirection: "row"

  },
  iconEdit: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }
});
