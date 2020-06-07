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
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      text: "",
      name: "",
      email: "",
      phone: "",
      ava: null,
      logged: "true",
    };
  }
  logOut() {
    firebaseApp
      .auth()
      .signOut()
      .then(function () {
        Alert.alert("", "You have signed out ", [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("SignIn"),
          },
        ]);
        this.setState({
          logged: "false",
        });
      })
      .catch(function (error) {
        // An error happened.
      });
  }
  onClickBtn() {
    this.props.navigation.navigate("EditAccount");
    this.props.navigation.setOptions({});
  }
  onPressButton(screen) {
    this.props.navigation.navigate(screen);
    this.props.navigation.setOptions({
      headerTitle: "Đăng ký",
    });
  }
  onClickBtnSI() {
    this.props.navigation.navigate("SignIn");
    this.props.navigation.setOptions({
      headerTitle: "Đăng nhập",
    });
  }
  componentDidMount = async () => {
    const itemRef = firebaseApp.database().ref("user").child("user1");
    this.itemRef1 = firebaseApp.auth().currentUser;

    const snapshot = await itemRef.child("name").once("value");
    const snapshot1 = await itemRef.child("email").once("value");
    const snapshot2 = await itemRef.child("phone").once("value");
    const snapshot3 = await itemRef.child("ava").once("value");
    let name = snapshot.val();
    let email = snapshot1.val();
    let phone = snapshot2.val();
    let ava = snapshot3.val();
    let user = this.itemRef1;
    this.setState({ name, email, phone, ava, user });
  };
  render() {
    const { name, email, phone, ava, user } = this.state;
    return (
      <View style={styles.container}>
        {/*SWITCH CASE DỰA VÀO CURRENT USER */}
        {(() => {
          console.log(user);
          switch (user) {
            case null:
              return (
                // {/* NẾU CHƯA ĐĂNG NHẬP */}
                <View style={styles.container}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 50,
                      marginBottom: 50,
                      marginLeft: 40,
                    }}
                  >
                    You haven't yet signed in !
                  </Text>
                  <View style={styles.btnContainer}>
                    {/* <TouchableOpacity
          style={styles.btn}
          onPress={() => this.onClickBtnSI()}
        >
          <Text style={styles.txt}>Sign In</Text>
        </TouchableOpacity> */}

                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => this.onPressButton("SignUp")}
                    >
                      <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity>

                    <View
                      style={{
                        flexDirection: "row",
                        top: 10,
                        alignSelf: "center",
                      }}
                    >
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Already have an account?{" "}
                      </Text>
                      <TouchableOpacity
                        style={{}}
                        onPress={() => this.onClickBtnSI()}
                      >
                        <Text style={{ color: "#DB5823", fontSize: 12 }}>
                          Sign In
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ top: 40 }}>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => this.onPressButton("Account")}
                    >
                      <Text style={{ color: "white" }}>Manage Profile</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                // {/*-----END-----*/}
              );

            default:
              return (
                //NẾU ĐÃ ĐĂNG NHẬP RỒI
                <View style={styles.container2}>
                  <View style={styles.avataArea}>
                    <View style={styles.avataEdit}>
                      {(() => {
                        switch (ava) {
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
                              <Image
                                style={styles.tinyLogo}
                                source={{ uri: ava }}
                              />
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
                        <Text style={(styles.txt1, { color: "black" })}>
                          Email: {email}
                        </Text>
                      </View>

                      <View style={styles.txtInf}>
                        {/* <Feather name="phone" size={15} color="black" /> */}
                        <Text style={styles.txt1}>Phone number : {phone}</Text>
                      </View>
                    </View>

                    <View style={{marginTop:50,}}>
                      <View style={styles.bntEdit}>
                        <TouchableOpacity
                          style={styles.btnEditPro}
                          onPress={() => this.onClickBtn()}
                        >
                          <Text style={styles.txtEdit}>Edit you profile</Text>
                          <View>
                            <FontAwesome
                              name="pencil"
                              size={12}
                              color="white"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.bntEdit}>
                        <TouchableOpacity
                          style={styles.btnEditPro}
                          onPress={() => this.logOut()}
                        >
                          <Text style={styles.txtEdit}>Log Out</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.footter}>
                    <ScrollView style={styles.imgArea}>
                      <Text></Text>
                    </ScrollView>
                  </View>
                </View>
              );
          }
        })()}
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
  header: {
    flex: 0.3,
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
    flex: 0.4,
  },
  btnEditPro: {
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
  btn: {
    backgroundColor: "#DB5823",
    color: "white",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 240,
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
  avataArea: {
    flex:0.5,
  },
  infArea: {
    top: 200,
    backgroundColor: "#fafafa",
    alignItems: "center",

  },
  avataEdit: {
    height: 102,
    width: 102,
    borderRadius: 51,
    justifyContent: "center",
    alignSelf: "center",
  },

  tinyLogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  txt: {
    color: "white",
  },
  txt1: {
    color: "black",
  },
  bntEdit: {
    width: "80%",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleInf: {
    color: "orange",
    flex: 0.5,
  },
  container2:{
    justifyContent:"center",
    alignItems:"center"
  }
});
