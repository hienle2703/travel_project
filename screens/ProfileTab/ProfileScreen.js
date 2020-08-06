import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import { actions, types } from "../../redux/Reducers/profileReducer";

const item = firebase.auth().currentUser;

const b = function onClickFriends() {
  const ref = React.useRef(null);

  console.log(ref);
  return ref;
};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      text: "",
      name: "",
      email: "",
      phone: "",
      ava: null,
      logged: null,
      flexin: false,
    };
  }
  logOut = async () => {
    try {
      await firebaseApp.auth().signOut();
      Alert.alert("", "You have signed out ", [
        {
          text: "OK",
          onPress: () => {
            this.props.navigation.replace("ProfileScreen");
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  onClickBtn() {
    this.props.navigation.navigate("EditAccount");
    this.props.navigation.setOptions({});
  }
  onPressButton(screen) {
    this.props.navigation.navigate(screen);
    this.props.navigation.setOptions({});
  }
  onClickBtnSI() {
    this.props.navigation.navigate("SignIn");
    this.props.navigation.setOptions({});
  }
  onClickGroup() {
    this.props.navigation.navigate("ManageStack", { screen: "ManageScreen" });
  }
  onClickFriends() {
    this.props.navigation.navigate("FriendMainScreen");
  }
  onClickSchedule() {
    this.props.navigation.navigate("Schedule");
  }
  onClickPost() {
    this.props.navigation.navigate("PostAll");
  }
  UNSAFE_componentWillMount = async () => {
    await this.props.get_all_profile();
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.type === types.GET_PROFILE) {
      if (nextProps.profile.data.user !== null) {
        this.setState({
          name: nextProps.profile.data.name,
          email: nextProps.profile.data.email,
          phone: nextProps.profile.data.phone,
          ava: nextProps.profile.data.ava,
          logged: true,
          flexin: true,
        });
      }
    }
  }
  componentDidMount = async () => {};
  render() {
    const Stack = createStackNavigator();
    const { name, email, phone, ava, user, logged } = this.state;
    return (
      <View style={styles.container}>
        {(() => {
          switch (this.state.flexin) {
            case false:
              setTimeout(
                function () {
                  this.setState({ flexin: "true" });
                }.bind(this),
                3000
              );
              return <ActivityIndicator size="large" color="#DB5823" />;

            default:
              return (
                <View>
                  {/*SWITCH CASE DỰA VÀO CURRENT USER */}
                  {(() => {
                    switch (logged) {
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
                                  <Text
                                    style={{ color: "#DB5823", fontSize: 12 }}
                                  >
                                    Sign In
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                            {/* <View style={{ top: 40 }}>
                              <TouchableOpacity
                                style={styles.btn}
                                onPress={() => this.onPressButton("Account")}
                              >
                                <Text style={{ color: "white" }}>
                                  Manage Profile
                                </Text>
                              </TouchableOpacity>
                            </View> */}
                          </View>

                          // {/*-----END-----*/}
                        );

                      default:
                        //console.log("HẾT NULL RỒI");
                        return (
                          //NẾU ĐÃ ĐĂNG NHẬP RỒI
                          <View style={styles.container2}>
                            <ScrollView
                              style={{ flexGrow: 1 }}
                              showsVerticalScrollIndicator={false}
                            >
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

                                {/* <View style={styles.infEdit}>
                                  <View style={styles.txtInf}>
                                    <Ionicons name="ios-mail" size={15} color="black" />
                                    <Text
                                      style={(styles.txt1, { color: "black" })}
                                    >
                                      Email: {email}
                                    </Text>
                                  </View>

                                  <View style={styles.txtInf}>
                                    <Feather name="phone" size={15} color="black" />
                                    <Text style={styles.txt1}>
                                      Phone number : {phone}
                                    </Text>
                                  </View>
                                </View> */}

                                <View style={styles.contentBtn}>
                                  <View>
                                    <TouchableOpacity
                                      style={styles.contentBox1}
                                      onPress={() => this.onClickGroup()}
                                    >
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          Group
                                        </Text>
                                        <Text
                                          style={{
                                            fontWeight: "bold",
                                            color: "#DB5823",
                                          }}
                                        >
                                          9 news
                                        </Text>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                      style={styles.contentBox}
                                      onPress={() => this.onClickSchedule()}
                                    >
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSYlqJMwYKhgozsoE3e9fMaRfSLl3DzcEAm3Tgbwl8-_aoGcBw&usqp=CAU",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          My Trips
                                        </Text>
                                      </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.contentBox}>
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://www.freepngimg.com/thumb/map/66960-maps-google-computer-icons-free-png-hq.png",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          Near Trips
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>

                                  {/* TEST NAVIGATION CONTAINER */}
                                  {/* <NavigationContainer ref={b.ref} independent={true}>
                                    
                                    <Stack.Navigator initialRouteName="Empty">
                                      <Stack.Screen
                                        name="FriendMainScreen"
                                        component={FriendMainScreen}
                                      />
                                    </Stack.Navigator>
                                  </NavigationContainer> */}
                                  <View>
                                    {/* Button quản lý bạn bè */}
                                    <TouchableOpacity
                                      style={styles.contentBox}
                                      onPress={() => this.onClickFriends()}
                                      //onPress={()=> console.log(b)}
                                    >
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://cdn3.iconfinder.com/data/icons/internet-flat-icons-vol-1/256/42-512.png",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          Friends
                                        </Text>
                                      </View>
                                    </TouchableOpacity>

                                    {/* Button Bài viết của tôi */}
                                    <TouchableOpacity
                                      style={styles.contentBox}
                                      onPress={() => this.onClickPost()}
                                    >
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://i.ya-webdesign.com/images/transparent-clipboard-flat-1.png",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          My Posts
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.contentBox}>
                                      <View
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: 30,
                                          top: 10,
                                          left: 15,
                                        }}
                                      >
                                        <Image
                                          style={{
                                            height: 30,
                                            width: 30,
                                            borderRadius: 30,
                                          }}
                                          source={{
                                            uri:
                                              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUqDrJd2bbDnjchbWE581SAtjvm3Bfs0_6mYs41-7G2mzrDNeX&usqp=CAU",
                                          }}
                                        />
                                      </View>
                                      <View style={{ left: 15, top: 12 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                          Feeling Lucky
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                  }}
                                >
                                  <View style={styles.bntEdit}>
                                    <TouchableOpacity
                                      style={styles.btnEditPro}
                                      onPress={() => this.onClickBtn()}
                                    >
                                      <Text style={styles.txtEdit}>
                                        Edit you profile
                                      </Text>
                                      <View>
                                        <FontAwesome
                                          name="pencil"
                                          size={12}
                                          color="white"
                                        />
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                                <View
                                  style={{ marginTop: 0, marginBottom: 20 }}
                                >
                                  <View style={styles.bntEdit}>
                                    <TouchableOpacity
                                      style={styles.btnLogOut}
                                      onPress={() => this.logOut()}
                                    >
                                      <Text style={styles.txtEdit}>
                                        Log Out
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>

                              {/* <View style={styles.footter}>
                             <ScrollView style={styles.imgArea}>
                                <Text></Text>
                              </ScrollView> 
                            </View> */}
                            </ScrollView>
                          </View>
                        );
                    }
                  })()}
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
    marginTop: 70,
  },
  btnEditPro: {
    marginBottom: -5,
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
  btnLogOut: {
    marginBottom: -5,
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
    height: 100,
    margin: 80,
    marginTop: 150,
    marginBottom: -100,
  },
  infArea: {
    alignItems: "center",
  },
  avataEdit: {
    //flex:0.3,
    //borderRadius: 51,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },

  tinyLogo: {
    position: "absolute",
    height: 120,
    width: 120,
    borderRadius: 70,
    alignSelf: "center",
  },
  txt: {
    color: "white",
  },
  txt1: {
    color: "black",
  },
  bntEdit: {
    //flex:0.3,
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titleInf: {
    color: "orange",
    // flex: 0.2,
    top: 70,
    height: 100,
    bottom: 30,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 30,
    width: 400,
  },
  //màu facebook: #177DEE
  contentBtn: {
    height: 310,
    marginTop: 15,
    borderRadius: 20,
    width: 380,
    flexDirection: "row",
    //backgroundColor: "#DB5823",
    justifyContent: "center",
  },
  contentBox: {
    height: 80,
    width: 175,
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentBox1: {
    height: 110,
    width: 175,
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
const mapStateToProps = ({ profile }) => {
  return {
    profile: profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_all_profile: () => {
      dispatch(actions.get_all_profile());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
