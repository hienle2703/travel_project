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
import { TabView, SceneMap } from "react-native-tab-view";
import { TabBar } from "react-native-tab-view";
import TabBarIcon from "../../components/TabBarIcon";
import { Entypo } from "@expo/vector-icons";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";
import FirstRoute from "../ScheduleTab/FirstRoute"

const imgData = [
  {
    id: 1,
    imgSource: require("../../assets/images/imgHero.jpg"),
    location: "Ho Chi Minh city - Da Lat, Lam Dong",
    date: "15/10 to 18/10",
    title: "A SHORT TRIP TO DA LAT THIS AUTUMN",
    status: "Private",
    member: 2,
    view: "2 views",
  },
  {
    id: 2,
    imgSource: require("../../assets/images/imgHero1.jpg"),
    location: "Ho Chi Minh city - Hoi An",
    date: "15/11 to 18/11",
    title: "HOI AN VINTAGE TOWN",
    status: "Open",
    member: 1,
    view: "102 views",
  },
  {
    id: 3,
    imgSource: require("../../assets/images/imgHero2.jpg"),
    location: "Ho Chi Minh city - Ha Noi",
    date: "03/12 to 07/12",
    title: "VIET NAM CAPITAL",
    status: "Open",
    member: 1,
    view: "200 views",
  },
  {
    id: 4,
    imgSource: require("../../assets/images/imgHero3.jpg"),
    location: "Ha Noi - Sapa",
    date: "07/12 to 12/12",
    title: "THE CITY IN THE FOG",
    status: "Private",
    member: 5,
    view: "13 views",
  },
  {
    id: 5,
    imgSource: require("../../assets/images/imgHero4.jpg"),
    location: "Ho Chi Minh city - Vung Tau, Ba Ria",
    date: "20/12 to 22/12",
    title: "GET SOME VITAMIN SEA",
    status: "Open",
    member: 12,
    view: "142 views",
  },
];
const initialLayout = { width: Dimensions.get("window").width };

export default class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      index: 0,
      routes: [
        { key: "first", title: "Your Plans" },
        { key: "second", title: "ONGOING" },
        { key: "third", title: "COMPLETED" },
      ],
      arrayAllSchedule:[],
    };
  }
  onClickDetail() {
    this.props.navigation.navigate("ScheduleDetail");
  }
  onClickAdd(){
    this.props.navigation.navigate("createScheduleScreen");
  }
  setIndex = (index) => {
    console.log(index);
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
    this.setState({ arrayAllSchedule: arrayFullInfor });
  };

  FirstRoute = () => (
    <View style={[styles.scene]}>
      <ScrollView>
        <View>
          {imgData.map((item) => {
            console.log(this.state.arrayAllSchedule,"===============")
            return (
              <TouchableOpacity onPress={() => this.onClickDetail()}>
                <View style={styles.containerScene}>
                  <View style={styles.cardSchedule}>
                    <Image
                      style={{
                        height: "50%",
                        width: "90%",
                        alignSelf: "center",
                        borderRadius: 20,
                      }}
                      source={ item.imgSource}
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
                        <Text style={{ color: "gray" }}>{item.location}</Text>
                      </View>
                      <View style={styles.titleCard}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#DB5823",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <View style={styles.detailCard}>
                        <View>
                          <Text style={{ color: "gray" }}>
                            Date: {item.date}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ color: "gray", bottom: 2 }}>
                            {item.view}{" "}
                          </Text>
                          <Ionicons name="md-eye" size={15} color="gray" />
                        </View>
                      </View>
                      <View style={styles.descriptionCard}>
                        <Text>Status: {item.status}</Text>
                        <Text>Member: {item.member}</Text>
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

  SecondRoute = () => (
    <View style={[styles.scene]}>
      <ScrollView>
        <View>
          {imgData.map((item) => {
            return (
              <TouchableOpacity>
                <View style={styles.containerScene}>
                  <View style={styles.cardSchedule}>
                    <Image
                      style={{
                        height: "50%",
                        width: "90%",
                        alignSelf: "center",
                        borderRadius: 20,
                      }}
                      source={item.imgSource}
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
                        <Text style={{ color: "gray" }}>{item.location}</Text>
                      </View>
                      <View style={styles.titleCard}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#DB5823",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <View style={styles.detailCard}>
                        <View>
                          <Text style={{ color: "gray" }}>
                            Date: {item.date}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ color: "gray", bottom: 2 }}>
                            {item.view}{" "}
                          </Text>
                          <Ionicons name="md-eye" size={15} color="gray" />
                        </View>
                      </View>
                      <View style={styles.descriptionCard}>
                        <Text>Status: {item.status}</Text>
                        <Text>Member: {item.member}</Text>
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

  ThirdRoute = () => (
    <View style={[styles.scene]}>
      <ScrollView>
        <View>
          {imgData.map((item) => {
            return (
              <TouchableOpacity>
                <View style={styles.containerScene}>
                  <View style={styles.cardSchedule}>
                    <Image
                      style={{
                        height: "50%",
                        width: "90%",
                        alignSelf: "center",
                        borderRadius: 20,
                      }}
                      source={item.imgSource}
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
                        <Text style={{ color: "gray" }}>{item.location}</Text>
                      </View>
                      <View style={styles.titleCard}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#DB5823",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <View style={styles.detailCard}>
                        <View>
                          <Text style={{ color: "gray" }}>
                            Date: {item.date}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ color: "gray", bottom: 2 }}>
                            {item.view}{" "}
                          </Text>
                          <Ionicons name="md-eye" size={15} color="gray" />
                        </View>
                      </View>
                      <View style={styles.descriptionCard}>
                        <Text>Status: {item.status}</Text>
                        <Text>Member: {item.member}</Text>
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

  renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "#DB5823" }}
    />
  );
  renderScene = SceneMap({
    first: FirstRoute,
    second: this.SecondRoute,
    third: this.ThirdRoute,
  });
  render() {
    const { index, routes } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                top: 13,
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                left: 10,
              }}
            >
              Your Schedule
            </Text>
          </View>

          <View style={styles.addBtn}>
            <TouchableOpacity style={{ color: "#DB5823" }} onPress={() => this.onClickAdd()}>
              <TabBarIcon
                style={{ color: "#DB5823", alignItems: "flex-end" }}
                name="ios-add-circle"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.setIndex(index)}
          initialLayout={initialLayout}
          style={{ backgroundColor: "white" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
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
});
