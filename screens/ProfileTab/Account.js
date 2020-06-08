import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.itemRef = firebaseApp.database();
    this.state = {
      text: "",
      name: "",
      email: "",
      phone: "",
      ava: null,
      logged: "true",
    };
  }
  logOut = async () => {
    try {
      await firebaseApp.auth().signOut();
      Alert.alert("", "You have signed out ", [
        {
          text: "OK",
          onPress: () => {
            console.log("log out")
            this.props.navigation.navigate("SignIn")
          },
        },
      ]);
      // .then(function () {
      //   Alert.alert("", "You have signed out ", [
      //     {
      //       text: "OK",
      //       onPress: () => {
      //         //this.props.navigation.navigate("SignIn")

      //       },
      //     },
      //   ]);
      //})
    } catch (error) {
      console.log(error);
    }
  };
  onClickBtn() {
    this.props.navigation.navigate("EditAccount");
    this.props.navigation.setOptions({});
  }
  componentDidMount = async () => {
    const itemRef = firebaseApp.database().ref("user").child("user1");
    const snapshot = await itemRef.child("name").once("value");
    const snapshot1 = await itemRef.child("email").once("value");
    const snapshot2 = await itemRef.child("phone").once("value");
    const snapshot3 = await itemRef.child("ava").once("value");
    let name = snapshot.val();
    let email = snapshot1.val();
    let phone = snapshot2.val();
    let ava = snapshot3.val();
    this.setState({ name, email, phone, ava });
  };
  //"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
  render() {
    const { name, email, phone, ava } = this.state;
    console.log(ava);
    return (
      <View style={styles.container}>
        <View style={styles.avataArea}>
          <View style={styles.avataEdit}>
            {(() => {
              switch (this.state.ava) {
                case null:
                  return (
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh6iD4NmOaeFexRWXdkckExxeLGUbRniiyCwQ6duX3Xw047r_q&usqp=CAU",
                      }}
                    />
                  );

                default:
                  return (
                    <Image style={styles.tinyLogo} source={{ uri: ava }} />
                  );
              }
            })()}
          </View>
        </View>
        <View style={styles.infArea}>
          <View style={styles.titleInf}>
            <Text style={styles.textName}>{name}</Text>
          </View>

          <View style={styles.infEdit}>
            <View style={styles.txtInf}>
              {/* <Ionicons name="ios-mail" size={15} color="black" /> */}
              <Text style={styles.txt}>Email: {email}</Text>
            </View>

            <View style={styles.txtInf}>
              {/* <Feather name="phone" size={15} color="black" /> */}
              <Text style={styles.txt}>Phone number : {phone} </Text>
            </View>
          </View>
          <View style={styles.bntEdit}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.onClickBtn()}
            >
              <Text style={styles.txtEdit}>Edit you profile</Text>
              <View>
                <FontAwesome name="pencil" size={12} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bntEdit}>
            <TouchableOpacity style={styles.btn} onPress={() => this.logOut()}>
              <Text style={styles.txtEdit}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.feedArea}></View>
        <View style={styles.footter}>
          <ScrollView style={styles.imgArea}>
            <Text></Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  //Done
  header: {
    flex: 0.3,
  },
  avataArea: {
    flex: 0.3,
    backgroundColor: "#fafafa",
  },
  infArea: {
    flex: 0.27,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  tinyLogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  avataEdit: {
    height: 102,
    width: 102,
    backgroundColor: "white",
    borderRadius: 51,
    position: "absolute",
    bottom: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  feedArea: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,
    height: 30,
    flexDirection: "row",
    marginTop: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 1,
  },
  textName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
  },
  txtEdit: {
    fontSize: 15,
    fontWeight: "400",
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  txtInf: {
    flexDirection: "row",
    left: 27,
  },
  infEdit: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
  txt: {
    fontSize: 15,
    color: "gray",
    fontWeight: "300",
    marginLeft: 10,
    marginRight: 10,
  },
  txtBold: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  feedEdit: {
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
  },
  imgArea: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  titleInf: {
    color: "orange",
    flex: 0.87,
  },
  name: {
    fontSize: 30,
  },
  bntEdit: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
