import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import TabBarIcon from "../../components/TabBarIcon";
import { firebaseApp } from "../../components/FirebaseConfig";
const image = require("../../assets/images/signin.png");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onClickBtn() {
    this.props.navigation.navigate("ProfileScreen");
  }
  GetUser(){
    var takeKey = firebaseApp.auth().currentUser;
    console.log(takeKey)
  }
  DangNhap() {
    firebaseApp
      .auth()
      // .onAuthStateChanged((user) => {
      //   console.log(user);
      // })
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        
        console.log("hihi")
        Alert.alert(
          "",
          "You have logged in: " + this.state.email,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("FeedScreen"),
            },
          ],
          { cancelable: false }
        );
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch(function (error) {
        Alert.alert(
          "d e p r e s s i o n",
          "Login Failed",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("Okay...") },
          ],
          { cancelable: false }
        );
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={image}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "#DB5823", alignItems: "flex-start" }}
                name="ios-arrow-back"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signInTxt}>
            <Text style={{ fontSize: 20 }}>Sign In</Text>
          </View>

          <View style={styles.signInCard}>
            {/* <View style={styles.txtWrap}>
              <Text style={{fontSize:12, color:"gray", marginBottom:-30, marginLeft:-70, backgroundColor:"white"}}>User Name</Text>
              </View> */}

            <View style={styles.card}>
              <TabBarIcon
                style={{
                  color: "#DB5823",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                name="ios-person"
              />

              <TextInput
                style={styles.inputBox}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            {/* <Text>Password</Text> */}
            <View style={styles.card}>
              <TabBarIcon
                style={{
                  color: "#DB5823",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                name="ios-lock"
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.card1}>
              <TouchableOpacity
                style={styles.btnBox}
                onPress={() => this.DangNhap()}
              >
                <Text style={styles.btnSubmit}>Log In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card1}>
              <TouchableOpacity
                style={styles.btnBox}
                onPress={() => this.GetUser()}
              >
                <Text style={styles.btnSubmit}>GetUser</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{ color: "gray", marginTop: -10 }}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  header: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  signInCard: {
    flex: 0.4,
    backgroundColor: "white",
    borderRadius: 20,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  signInTxt: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    marginLeft: 15,
    width: 250,
    borderColor: "gray",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: "#DB5823",
  },
  card: {
    flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -20,
  },
  card1: {
    flex: 0.3,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  txtWrap: {
    backgroundColor: "white",
    width: 15,
  },
  btnBox: {
    marginTop: 10,
    backgroundColor: "#DB5823",
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  },
});
