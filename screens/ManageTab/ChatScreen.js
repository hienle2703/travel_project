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
  TextInput
} from "react-native";
export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: null,
    };
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
        <View style={styles.textBox}>
          <View style={styles.input}>
                <TextInput style={{marginLeft:10,top:3,}} placeholder="Chat"></TextInput>
          </View>
          <View style={styles.likeButton}>
          <AntDesign name="like1" size={24} color="#DB5823" />
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
  textBox: {
    backgroundColor: "#D9D9D9",
    height:50,
    width:"100%",
    position:"absolute",
    top:769,
    flexDirection:"row"
  },
  likeButton:{
    justifyContent: 'center',
    
  },
  input:{
    width:"85%",
    backgroundColor:"white",
    height:"70%",
    alignSelf: 'center',
    marginRight:10,
    marginLeft:10,
    borderRadius:20,
  }
});
