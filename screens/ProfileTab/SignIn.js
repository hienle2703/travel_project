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
import { YellowBox } from "react-native";
import _ from "lodash";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
const image = require("../../assets/images/signin.png");

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  // UNSAFE_componentWillMount= async () => {
  //   let  takeKey = await this.GetUser();
  //   console.log("DITMEMAY",takeKey);
  //   if(takeKey !== null){
  //     console.log("HELLOOOOOO")
  //     this.props.navigation.navigate("ProfileScreen")
  //   }
  // }
  onClickBtn() {
    this.props.navigation.navigate("ProfileScreen");
  }
  GetUser = async () => {
    var takeKey = await firebaseApp.auth().currentUser;
    console.log(takeKey);
    return takeKey;
  };
  DangNhap() {
    firebaseApp
      .auth()
      // .onAuthStateChanged((user) => {
      //   console.log(user);
      // })
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("hihi");
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
              onPress: () => {
                //this.forceUpdate();
                this.props.navigation.replace("ProfileScreen");
                this.props.navigation.navigate("FeedScreen");
              },
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
        <View style={styles.header}>
          {/* BACK BUTTON */}
          <View styles={styles.backBtn}>
            <TouchableOpacity
              style={{
                left: 30,
                top: 12,
                flexDirection: "row",
                position: "absolute",
                zIndex: 100,
              }}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "white", alignItems: "flex-start" }}
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
        {/* <View style={styles.signInTxt}>
            <Text style={{ fontSize: 20 }}>Sign In</Text>
          </View> */}
        <View style={styles.space}></View>
        <View style={styles.signInCard}>
          {/* <View style={styles.txtWrap}>
              <Text style={{fontSize:12, color:"gray", marginBottom:-30, marginLeft:-70, backgroundColor:"white"}}>User Name</Text>
              </View> */}

          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text
                style={{
                  color: "#DB5823",
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                }}
              >
                Email
              </Text>
            </View>

            <TextInput
              style={styles.inputBox}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              placeholder="Your email"
            />
          </View>
          <View style={styles.card}>
          <View style={styles.textContainer}>
              <Text
                style={{
                  color: "#DB5823",
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                }}
              >
                Password
              </Text>
            </View>
            <TextInput
              style={styles.inputBox}
              placeholder="Your password"
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

          {/* <View style={styles.card1}>
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
          </View> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  header: {
    flex: 0.2,
    justifyContent: "center",
  },
  space: {
    flex: 0.3,
  },
  signInCard: {
    height: 300,
    backgroundColor: "white",
    borderRadius: 20,
    width: 320,
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
    // marginLeft: 15,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    width: "85%",
    color: "#DB5823",
    alignSelf: "center",
  },
  card: {
    //flexDirection: "row",
    width: "100%",
    top:10,
    marginTop:18,
  },
  textContainer:{
    width:"85%",
    alignSelf:"center"
  },
  card1: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
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
