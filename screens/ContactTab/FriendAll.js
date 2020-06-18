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
import * as firebase from "firebase";

const imgData = [
  {
    id: 1,
    imgSource:
      "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/p720x720/53333197_652869575170142_39286602727424000_o.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=Z-EL7EAurIEAX9X3arC&_nc_ht=scontent.fsgn2-6.fna&_nc_tp=6&oh=12715ba6ae837e7bc5abbc69d0dec0f4&oe=5F05DC1B",
    name: "Huy Le",
  },
  {
    id: 2,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/10678739_1455418871406014_3371157832838506507_n.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=JZjOlWRER50AX-JGFIi&_nc_ht=scontent.fsgn2-5.fna&oh=996aa425e3cc86bc044378424716d6c1&oe=5F08E568",
    name: "Ngoc Thien",
  },
  {
    id: 3,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/22308933_713259742197326_5228048315610088764_n.jpg?_nc_cat=106&_nc_sid=d4cf07&_nc_ohc=0qPSSvea2hoAX_kEAJw&_nc_ht=scontent.fsgn2-5.fna&oh=be77aa2f75240bc96375722e242e774f&oe=5F067808",
    name: "Nam Tran",
  },
  {
    id: 4,
    imgSource:
      "https://danviet.mediacdn.vn/upload/4-2019/images/2019-12-26/Tong-gia-tri-tai-san-cua-Zlatan-Ibrahimovic-lon-co-nao-ibra-01-1577378106-width493height343.jpg",
    name: "Thao Vu",
  },
  {
    id: 5,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.0-8/p720x720/12983415_601918796633368_5700499175963364530_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=TO0PfpMvdOIAX82pAYO&_nc_ht=scontent.fsgn2-5.fna&_nc_tp=6&oh=9b63540f166eb58ecd117caac1f7c889&oe=5F064514",
    name: "Anh Tuyet",
  },
];

export default class FriendAll extends Component {
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
    };
  }
  componentDidMount = async () => {
    const userAuth = firebaseApp.auth().currentUser;
    //console.log(userAuth);

    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@"));
    //console.log("Splitted nè", splitted);
    const takeArray = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friend");
    //console.log("Đường link của list friend nè mày", takeArray);
    //Lấy ra object list friend của User sở tại
    
    const snapshot = await takeArray.once("value");
    //const snap = await JSON.stringify(snapshot)
    //console.log("Snapshot", snapshot);
    let test = snapshot.val();
    console.log(test, "Test nè")
    let count = Object.keys(test).length

    let arrayFriendInformation = []; // cái này
    for (var key in test){
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
    //console.log("arrayFriendInformation nè", this.state.arrayFriendInformation);

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
              //console.log(typeof this.state.arrayFriendInformation,"KIỂU DỮ LIỆU======================")
              //console.log(this.state.arrayFriend,"arrayFriend đây nè ==================")
              //console.log(this.state.arrayFriendInformation,"this.state.arrayFriendInformation đây nè =================")

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
                        placeholder="Search for friends"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.listContainer}>
                    <View style={styles.countFriends}>
                      <Text style={styles.countTitle}>
                        {this.state.countFriend} Friends
                      </Text>
                    </View>

                    <View style={styles.listFriends}>
                      {/* FAKE DATA */}
                      {/* {imgData.map((item) => {
                return (
                  <View style={styles.friendCard}>
                    <TouchableOpacity
                      onPress={() => this.onClickFriendProfile()}
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
                            source={{ uri: item.imgSource }}
                          />
                        </View>
                        <View style={styles.friendName}>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.name}
                          </Text>
                          <Text style={{ fontSize: 13, color: "gray" }}>
                            4 friends in common
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={styles.buttonContainer}>
                      <TouchableOpacity>
                        <Ionicons name="ios-more" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })} */}
                      {this.state.arrayFriendInformation.map((item) => {
                        //console.log(item, "ITEM ITEM ITEM ITEM ITEM ITEM")
                        var obj = JSON.stringify(item);
                        var objectValue = JSON.parse(obj);
                        return (
                          <View style={styles.friendCard}>
                            <TouchableOpacity
                              //onPress={() => this.onClickFriendProfile()}
                              onPress={() =>
                                this.props.navigation.navigate(
                                  "FriendProfile",
                                  {
                                    ava: objectValue.ava,
                                    name: objectValue.name,
                                  }
                                )
                              }
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
                                    source={{ uri: objectValue.ava }}
                                  />
                                </View>
                                <View style={styles.friendName}>
                                  <Text
                                    style={{ fontSize: 18, fontWeight: "bold" }}
                                  >
                                    {objectValue.name}
                                  </Text>
                                  <Text style={{ fontSize: 13, color: "gray" }}>
                                    4 friends in common
                                  </Text>
                                </View>
                              </View>
                            </TouchableOpacity>

                            <View style={styles.buttonContainer}>
                              <TouchableOpacity>
                                <Ionicons
                                  name="ios-more"
                                  size={24}
                                  color="black"
                                />
                              </TouchableOpacity>
                            </View>
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
    top: 10,
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
