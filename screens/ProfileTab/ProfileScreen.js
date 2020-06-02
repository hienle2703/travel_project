import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export default class ProfileScreen extends Component {
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
        <Text>Quản lý hồ sơ</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onPressButton("Account")}>
            <Text style={styles.txt}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onPressButton("SignUp")}
          >
            <Text style={styles.txt}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#DB5823",
    color: "white",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 150,
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txt: {
    color: "white",
  },
  btnContainer: {
    flexDirection: "row"
  }
});
