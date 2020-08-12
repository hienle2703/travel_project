import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import TabBarIcon from "../../components/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { firebaseApp } from "../../components/FirebaseConfig.js";


export default class searchLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayFriend: [],
      arrayFriendInformation: [],
      friendAva: null,
      friendEmail: null,
      friendName: null,
      friendNumber: null,
      flexin: false,
      arrayUsed: [],
      countFriend: null,


      locationName: "",
      arrayLocation:[],
    };
  }
  componentDidMount = async () => {
    const locationCall = firebaseApp.database().ref("location")
    const locationTake = await locationCall.once("value")
    let location = locationTake.val()
    let arrayLocation = [];
    for(var key in location){

      const locationName  = await firebaseApp
        .database()
        .ref("location")
        .child(key)
        .child("name")
        .once("value");
        const locationId  = await firebaseApp
        .database()
        .ref("location")
        .child(key)
        .child("id")
        .once("value");
        arrayLocation.push({name: locationName,id: locationId})
    }

    this.setState({arrayLocation}) // Lấy được mảng Object tên của các địa điểm


    const userAuth = firebaseApp.auth().currentUser;


    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@"));

    const takeArray = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friend");
    //Lấy ra object list friend của User sở tại

    const snapshot = await takeArray.once("value");

    let test = snapshot.val();
    let count = Object.keys(test).length;

    let arrayFriendInformation = []; // cái này
    for (var key in test) {
      //const convert = JSON.stringify(test[key]).replace(/[^a-zA-Z ]/g, "");
      //const convert = JSON.stringify(key).replace(/[^a-zA-Z ]/g, "");

      const userName = await firebaseApp
        .database()
        .ref("user")
        .child(key)
        .child("name")
        .once("value");
      const userAva = await firebaseApp
        .database()
        .ref("user")
        .child(key)
        .child("ava")
        .once("value");
      arrayFriendInformation.push({ name: userName, ava: userAva });
    }
    this.setState({
      arrayFriendInformation,
      countFriend: count,
    });
  };

  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickFriendProfile() {
    this.props.navigation.navigate("FriendProfile");
  }
  render() {

    return (
      <View style={styles.container}>
        {(() => {
          switch (this.state.flexin) {
            case false:
              setTimeout(
                function () {
                  this.setState({ flexin: true });
                }.bind(this),
                1000
              );
              return <ActivityIndicator size="large" color="#DB5823" />;

            default:
              return (
                <ScrollView
                  style={styles.scrollView}
                  showsVerticalScrollIndicator={false}
                >
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
                  <View style={styles.searchContainer}>
                    <View style={styles.searchBarrr}>
                      <AntDesign
                        name="search1"
                        size={20}
                        color="gray"
                        style={{ marginLeft: 10, top: 10 }}
                      />
                      <TextInput
                        style={styles.searchBar}
                        placeholder="Search location"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.listContainer}>
                    <View style={styles.listFriends}>
                      {this.state.arrayLocation.map((item) => {
                        var obj = JSON.stringify(item);
                        var objectValue = JSON.parse(obj);
                        return (
                          <View style={styles.friendCard}>
                            <TouchableOpacity
                              //onPress={() => this.onClickFriendProfile()}
                              onPress={() => {
                                // Pass params back to home screen
                                this.props.navigation.navigate('createScheduleScreen', { locationStart: objectValue.name, locationStartId: objectValue.id });
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  marginLeft: 10,
                                }}
                              >
                                <View style={styles.avatarContainer}>
                                  <Image
                                    style={styles.avatar}
                                    source={{ uri: "https://img.freepik.com/free-vector/flat-color-location-icon-paper-map_52465-148.jpg?size=626&ext=jpg" }}
                                  />
                                </View>
                                <View style={styles.friendName}>
                                  <Text
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                  >
                                    {objectValue.name}
                                  </Text>
                                  
                                </View>
                              </View>
                            </TouchableOpacity>

                            {/* <View style={styles.buttonContainer}>
                              <TouchableOpacity>
                                <Ionicons
                                  name="ios-more"
                                  size={24}
                                  color="black"
                                />
                              </TouchableOpacity>
                            </View> */}
                          </View>
                        );
                      })}
                    </View>
                  </View>

                  <View style={styles.footer}></View>
                </ScrollView>
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
    //backgroundColor: "yellow",
  },
  header: {
    height: 100,
    justifyContent: "center",
  },
  listContainer: {
    height: 600,
    //backgroundColor: "red",
    width: "90%",
    alignSelf: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  footer: {
    height: 300,
    //backgroundColor: "green",
  },
  searchContainer: {
    height: 70,
    //backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
  },
  searchBarrr: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    borderRadius: 13,
  },
  searchBar: {
    height: 40,
    width: "85%",
    //backgroundColor:"white",
    borderRadius: 13,
    paddingLeft: 5,
  },
  countFriends: {
    top: 20,
    left: 20,
    height: 60,
  },
  countTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#DB5823",
  },
  listFriends: {
    //backgroundColor: "yellow",
    height: 500,
    width: "100%",
  },
  friendCard: {
    height: 60,
    width: "100%",
    backgroundColor: "#EBEBEB",
    //backgroundColor:"red",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 10,
  },
  avatarContainer: {
    height: 60,
    width: 60,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  friendName: {
    top: 20,
    left: 10,
  },
  buttonContainer: {
    height: 40,
    width: 80,
    //backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: 10,
  },
});
