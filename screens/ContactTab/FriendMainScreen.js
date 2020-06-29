import React, { Component } from "react";
import { View, Text, StyleSheet, Image,Alert } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import TabBarIcon from "../../components/TabBarIcon";

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

export default class FriendMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayFriend: [],
      arrayFriendInformation: [],
      arrayAdvice: [],
      newFriend: null,
      flexin: false,
      arrayUsed: [],
      countFriend: null,
    };
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickAddFriend = async (email) => {
    //Lấy email user hiện tại
    const userAuth = firebaseApp.auth().currentUser;
    const cut = userAuth.email;
    const cutted = cut.substring(0, cut.lastIndexOf("@"));
    //Thêm user hiện tại vào danh sách friendRequest của người nhận
    const splitted = email.substring(0, email.lastIndexOf("@"));
    const addRequest = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friendRequest/" + cutted);

      addRequest.set({
      name: cutted,
    });
    //Thêm user được nhận lời vào danh sách friendSent của người gửi
    const addSent = firebaseApp
      .database()
      .ref("user/" +cutted)
      .child("friendSent/" + splitted);
      addSent.set({
        name: splitted,
      });
    Alert.alert(
      "You have added this user",
      "The request has been sent",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  onClickAcceptFriend = async (node, key) => {
    //console.log(key,"NODE NÈ===========");
    const userAuth = firebaseApp.auth().currentUser;
    //console.log(userAuth);

    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@"));
    //console.log("Splitted nè", splitted);
    const add = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friend/" + key);

    const remove = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friendRequest/" + key);
    //console.log("Đường link của list friend nè mày", takeArray);
    //Lấy ra object list friend của User sở tại
    remove.remove();

    add.set({
      name: key,
    });

    let newArrayFriend = this.state.arrayFriendInformation.filter(
      (item) => item.key !== key
    );
    console.log(newArrayFriend);
    this.setState({
      arrayFriendInformation: newArrayFriend,
      countFriend: newArrayFriend.length,
    });
  };
  componentDidMount = async () => {
    const userAuth = firebaseApp.auth().currentUser;

    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@")); //log Toan Hien
    //console.log(splitted)
    const allUser = firebaseApp.database().ref("user");
    const snapAll = await allUser.once("value");
    let alo = snapAll.val();

    // //Lấy thông tin bạn bè
    let arrayFriendZone = []; // cái này
    const friendZone = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friend");
    const takeFriend = await friendZone.once("value");
    let hihi = takeFriend.val();
    //console.log(hihi, "HIHIHIIHIHI");
    for (var key in hihi) {
      arrayFriendZone.push(key);
    }
    let arrayAlreadyFriend = [];
    for (var i in arrayFriendZone) {
      const combine = arrayFriendZone[i] + "@gmail.com";
      //console.log(combine,"COMBINE ----------------")
      arrayAlreadyFriend.push(combine);
    }
    let b = JSON.stringify(arrayAlreadyFriend);

    let arrayAdvice = []; // lấy ra mảng tất cả user trừ cái thằng user đang dùng
    for (var key in alo) {
      arrayAdvice.push(alo[key]);
    }
    //console.log(arrayAdvice)

    const a = arrayAdvice.filter((item) => item.email !== split);

    const takeArray = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("friendRequest");
    //Lấy ra object list friend của User sở tại
    const snapshot = await takeArray.once("value");
    //const snap = await JSON.stringify(snapshot)
    //console.log("Snapshot", snapshot);
    let test = snapshot.val();
    let count = Object.keys(test).length;
    let arrayFriendInformation = []; // cái này
    for (var key in test) {
      //const convert = JSON.stringify(test[key]).replace(/[^a-zA-Z ]/g, "");
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
      arrayFriendInformation.push({
        name: userName,
        ava: userAva,
        node: test[key],
        key: key,
      });
    }
    this.setState({
      arrayAdvice: a,
      arrayFriendInformation,
      countFriend: count,
    });
  };
  render() {
    //console.log(this.state.arrayFriendInformation);
    //console.log(typeof this.state.arrayFriendInformation);
    //console.log(this.state.arrayAdvice)
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flexGrow: 1 }}
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

          <View style={styles.search}>
            <View style={styles.title}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Search your friends
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchBox}>
                <TextInput
                  style={{ left: 10, color: "black" }}
                  placeholder="Find your friends"
                ></TextInput>
              </View>
              <View style={styles.searchIcon}>
                <TouchableOpacity>
                  <AntDesign name="search1" size={24} color="#DB5823" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btnFriendList}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("FriendAll")}
              >
                <Text>Friend List</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.invite}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Friend Requests
              </Text>
              <View style={styles.countInvite}>
                <Text>{this.state.countFriend}</Text>
              </View>
            </View>
            {/* =====Friend Request Section===== */}
            <View style={styles.inviteContainer}>
              {this.state.arrayFriendInformation.map((item) => {
                var obj = JSON.stringify(item);
                var objectValue = JSON.parse(obj);
                //console.log("ARRAYFRIENDINFORMATION",this.state.arrayFriendInformation)
                //console.log("ARRAYFRIEND THƯỜNG",this.state.arrayFriend)
                //console.log("countFriend THƯỜNG",this.state.countFriend)
                return (
                  <View style={styles.inviteCard}>
                    <View style={styles.ava}>
                      <Image
                        style={{ height: 70, width: 70, borderRadius: 80 }}
                        source={{ uri: objectValue.ava }}
                      />
                    </View>
                    <View style={styles.buttonGroup}>
                      <View style={styles.nameInvite}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {objectValue.name}
                        </Text>
                      </View>
                      <View style={styles.buttonSplit}>
                        <TouchableOpacity
                          style={styles.buttonAcceptStyle}
                          onPress={() =>
                            this.onClickAcceptFriend(
                              objectValue.node,
                              objectValue.key
                            )
                          }
                        >
                          <Text style={{ color: "white" }}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDeleteStyle}>
                          <Text>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
              {/* <View style={styles.loadMore}>
                <TouchableOpacity>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>

          <View style={styles.advice}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Someone you might know
              </Text>
              {/* <View style={styles.countInvite}>
                <Text>23</Text>
              </View> */}
            </View>
            <View style={styles.inviteContainer}>
              {this.state.arrayAdvice.map((item) => {
                console.log(this.state.arrayAdvice)
                var obj = JSON.stringify(item);
                var objectValue = JSON.parse(obj);
                return (
                  <View style={styles.inviteCard}>
                    <View style={styles.ava}>
                      <Image
                        style={{ height: 70, width: 70, borderRadius: 80 }}
                        source={{ uri: item.ava }}
                      />
                    </View>
                    <View style={styles.buttonGroup}>
                      <View style={styles.nameInvite}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {item.name}
                        </Text>
                      </View>
                      <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          style={styles.buttonAddtStyle}
                          onPress={() =>
                            this.onClickAddFriend(objectValue.email)
                          }
                        >
                          <Text style={{ color: "white" }}>Add</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.buttonDeleteStyle}>
                          <Text>Delete</Text>
                        </TouchableOpacity> */}
                      </View>
                    </View>
                  </View>
                );
              })}
              <View style={styles.loadMore}>
                <TouchableOpacity>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    left: 15,
    top: 15,
    height: 20,
    flexDirection: "row",
  },
  titleInvite: {
    marginLeft: 30,
    marginTop: 15,
    height: 30,
    flexDirection: "row",
  },
  countInvite: {
    left: 15,
  },
  search: {
    height: 170,
    width: "90%",
    alignSelf: "center",
    //flexDirection:"row"
    // backgroundColor: "gray",
    // alignItems:"center",
    // justifyContent:"center"

    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  searchBox: {
    width: "85%",
    backgroundColor: "#E6E6E6",
    height: 30,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginTop: 30,
  },
  btnFriendList: {
    marginLeft: 13,
    marginTop: 20,
    height: 35,
    width: 100,
    backgroundColor: "#DBD7DA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  invite: {
    //backgroundColor:"yellow",
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  inviteContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 40,
    marginTop: 10,
  },
  inviteCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 80,
  },
  ava: {
    height: 80,
    width: 80,
    marginLeft: -10,
  },
  nameInvite: {
    height: 40,
    left: 15,
    top: 3,
  },
  buttonGroup: {
    width: "70%",
    marginLeft: -20,
    top: -10,
    marginTop: 10,
    backgroundColor: "#EBE6EA",
    borderRadius: 10,
  },
  buttonSplit: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: -8,
  },
  buttonAcceptStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonDeleteStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#CDCDCD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loadMore: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  advice: {},
  buttonAddtStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    top: -8,
  },
});
