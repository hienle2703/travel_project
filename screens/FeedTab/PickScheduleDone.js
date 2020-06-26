import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import TabBarIcon from "../../components/TabBarIcon";

import { Entypo } from "@expo/vector-icons";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";
import FeedScreen from "../FeedTab/FeedScreen";

export default class PickScheduleDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayAllSchedule: [],
      arrayScheduleKey: [],
    };
  }
  onClickChoose(txt, key) {
    let array = this.state.arrayScheduleKey;
    let keyA = key;
    let scheduleKey = "";
    for (var i in array) {
      let string = JSON.stringify(array[i].name);
      let stringTake = JSON.parse(string);
      
      if (stringTake === keyA) {
        scheduleKey = array[i].key;
      }
    }
    this.props.navigation.navigate("createFeedScreen", {
      scheduleName: txt,
      scheduleNode: scheduleKey,
    });
  }
  setIndex = (index) => {
    this.setState({ index });
  };
  componentDidMount = async () => {
    // Lấy tên người dùng đang đăng nhập
    const userAuth = firebaseApp.auth().currentUser;
    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@"));

    //Gọi tới lấy ra mã lịch trình của người dùng đang đăng nhập
    const postCall = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("schedule");
    const postTake = await postCall.once("value");
    let val = postTake.val();
    let arrayPost = [];
    let arrayName = [];
    for (var key in val) {
      arrayPost.push(key);
      let nameCall = firebaseApp
        .database()
        .ref("user/" + splitted + "/schedule")
        .child(key)
        .child("name");
      const nameTake = await nameCall.once("value");
      let name = nameTake.val();

      //gọi tới schedule tổng lấy ra thông tin
      let scheCall = firebaseApp
        .database()
        .ref("schedule")
        .child(name)
        .child("name");
      const nameSche = await scheCall.once("value");
      arrayName.push({ name: nameSche, key: name });
    }
    //Gọi vào post để lấy ra tất cả mã bài viết cho vào mảng
    const allPost = firebaseApp.database().ref("schedule");
    const snapAll = await allPost.once("value");
    let all = snapAll.val();
    let arrayAllPost = [];
    let arrayFullInfor = [];
    for (var key in all) {
      arrayAllPost.push(key); // lấy ra tên các bài viết
    }
    //Giao giữa 2 mảng, lấy ra những phần chung
    let intersect = arrayAllPost.filter((value) => arrayPost.includes(value)); // lấy ra tên các bài viết chung

    //Chỉ lấy ra những phần tử đó từ trong arrayAllPost để có đầy đủ thông tin bài viết

    for (var i in intersect) {
      let child = intersect[i];
      let a = firebaseApp.database().ref("schedule").child(child);
      let takeA = await a.once("value");
      arrayFullInfor.push(takeA);
    }
    //SetState
    this.setState({
      arrayAllSchedule: arrayFullInfor,
      arrayScheduleKey: arrayName,
    });
  };

  render() {
    return (
      <View style={[styles.scene]}>
        <ScrollView>
          <View style={styles.header}>
            <View styles={styles.backBtn}>
              <TouchableOpacity
                style={{ left: 30, top: 15, flexDirection: "row" }}
                onPress={() =>
                  this.props.navigation.goBack()
                }
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
          <View>
            {this.state.arrayAllSchedule.map((item) => {
              var obj = JSON.stringify(item);
              var objectValue = JSON.parse(obj);
              var name = objectValue.name;
              return (
                <TouchableOpacity
                  onPress={() => this.onClickChoose(objectValue.name, name)}
                >
                  <View style={styles.containerScene}>
                    <View style={styles.cardSchedule}>
                      <Image
                        style={{
                          height: "50%",
                          width: "90%",
                          alignSelf: "center",
                          borderRadius: 20,
                        }}
                        source={{ uri: objectValue.imgHero }}
                      />
                      <View style={styles.txt}>
                        <View style={styles.location}>
                          <View>
                            <Entypo
                              name="location-pin"
                              size={15}
                              color="#DB5823"
                            />
                          </View>
                          <Text style={{ color: "gray" }}>
                            {objectValue.start} to {objectValue.end}
                          </Text>
                        </View>
                        <View style={styles.titleCard}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              color: "#DB5823",
                            }}
                          >
                            {objectValue.name}
                          </Text>
                        </View>
                        <View style={styles.detailCard}>
                          <View>
                            <Text style={{ color: "gray" }}>
                              Date: From {objectValue.dateStart} to{" "}
                              {objectValue.dateEnd}
                            </Text>
                            <Text style={{ color: "gray" }}>Places: 4</Text>
                          </View>
                          {/* <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "gray", bottom: 2 }}>
                              {item.view}{" "}
                            </Text>
                            <Ionicons name="md-eye" size={15} color="gray" />
                          </View> */}
                        </View>
                        <View style={styles.descriptionCard}>
                          {/* <Text>Status: {item.status}</Text> */}
                          {/* <Text>Member: {item.member}</Text> */}
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: "row",
    left: -0,
  },
  addBtn: {
    justifyContent: "flex-end",
    left: 95,
    top: 13,
  },
  cardSchedule: {
    height: 300,
    width: "100%",
    top: 30,
  },
  txt: {
    left: 20,
    top: 5,
  },
  location: {
    flexDirection: "row",
    color: "gray",
  },
  detailCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  titleCard: {
    marginTop: 5,
  },
});
