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
  ActivityIndicator,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { TabView, SceneMap } from "react-native-tab-view";
import { Entypo } from "@expo/vector-icons";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";
import FeedScreen from "../FeedTab/FeedScreen";
//import ScheduleDetail from "../ScheduleTab/ScheduleDetail";

export default class FirstRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayAllSchedule: [],
      flexin: false,
    };
  }
  // onClickDetail() {
  //   this.props.navigation.navigate("ScheduleDetail");
  //   //console.log(this.props.navigation)
  // }

  setIndex = (index) => {
    this.setState({ index });
  };
  UNSAFE_componentWillMount = async () => {
    // Lấy tên người dùng đang đăng nhập
    const userAuth = firebaseApp.auth().currentUser;
    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@"));
    // const splitted = this.props.splitted
    //Gọi tới lấy ra mã lịch trình của người dùng đang đăng nhập
    const postCall = firebaseApp
      .database()
      .ref("user/" + splitted)
      .child("schedule");
    const postTake = await postCall.once("value");
    let val = postTake.val();
    let arrayPost = [];
    for (var key in val) {
      arrayPost.push(key);
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
   
    
    if ( arrayFullInfor.length>0) {
      this.setState({ arrayAllSchedule: arrayFullInfor, flexin: true });
    }
    
  };

  render() {
    let val = this.props.val;
    return (
      <View style={styles.scene}>
        {(() => {
          switch (val) {
            case null:
              return (
                <View style={styles.emptyView}>
                  <Text>Oops, you haven't created any schedule.</Text>
                  <Image style={styles.nullImage} source={{uri: "https://cdn.dribbble.com/users/13395/screenshots/6455348/screen_shot_2019-05-08_at_3.32.42_pm.png"}}/>
                </View>
              );

            default:
              return (
                <View>
                  {!this.state.flexin ? (
                    <ActivityIndicator size="large" color="#DB5823" />
                  ) : (
                    
                    <ScrollView>
                      <View>
                        {this.state.arrayAllSchedule.map((item) => {
                          var obj = JSON.stringify(item);
                          var objectValue = JSON.parse(obj);
                          return (
                            <TouchableOpacity
                              onPress={() =>
                                this.props.onClickDetail.navigate(
                                  "ScheduleDetail"
                                )
                              }
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
                                        <Text style={{ color: "gray" }}>
                                          Places: 4
                                        </Text>
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
                  )}
                </View>
              );
          }
        })()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 0.11,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  emptyView:{
    height:"100%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  nullImage:{
    width:"80%",
    height:"50%",
    
  }
});
