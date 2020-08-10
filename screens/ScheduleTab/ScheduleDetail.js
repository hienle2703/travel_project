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
import {
  ScrollableTabView,
  DefaultTabBar,
  ScrollableTabBar,
} from "@valdio/react-native-scrollable-tabview";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { TabView, SceneMap } from "react-native-tab-view";
import { TabBar } from "react-native-tab-view";
import TabBarIcon from "../../components/TabBarIcon";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
import ScheduleDay from "../ScheduleTab/ScheduleDay";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import CustomTabBar from "./CustomTabBar";
import TimeLineDetail from "./TimeLineDetail";

const initialLayout = { width: Dimensions.get("window").width };
const imgData = [
  {
    id: 1,
    imgSource: require("../../assets/images/imgList.jpg"),
    title: "Đà Lạt Train Station",
    duration: "1 hr",
    time1: "09:00 AM",
    time2: "10:00 AM",
    reach: "Car",
  },
  {
    id: 2,
    imgSource: require("../../assets/images/imgList1.jpg"),
    title: "Tuyen Lam Lake",
    duration: "1 hr",
    time1: "11:00 AM",
    time2: "12:00 AM",
    reach: "Boat",
  },
  {
    id: 3,
    imgSource: require("../../assets/images/imgList2.jpg"),
    title: "Phuc Duc Mountain",
    duration: "2 hr",
    time1: "02:00 PM",
    time2: "04:00 PM",
    reach: "Car",
  },
  {
    id: 4,
    imgSource: require("../../assets/images/imgList3.jpg"),
    title: "Nem Nuong Ba Hung",
    duration: "1 hr",
    time1: "04:30 PM",
    time2: "05:30 PM",
    reach: "Car",
  },
];
const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
    index * 5
  }, ${132})`,
}));
export default class ScheduleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleData,
      name: null,
      imgHero: null,
      days: null,
      dateStart: null,
      objectValue: null,
      flexin: false,
      data: null,
    };
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  UNSAFE_componentWillMount = async () => {
    const objectValue = this.props.route.params.objectValue;
    const name = objectValue.name;
    const imgHero = objectValue.imgHero;
    const days = objectValue.days;
    const dateStart = objectValue.dateStart;
    const detailCode = objectValue.detail;
    const detailRef = firebaseApp
      .database()
      .ref("detail_schedule/" + "user")
      .child(detailCode);
    const detailTake = await detailRef.once("value");
    let data = detailTake.val();

    this.setState({
      name,
      imgHero,
      days,
      dateStart,
      objectValue,
      flexin: true,
      data,
    });
  };

  onDragEnd = (data, dayNumber) => {
    // console.log(dayNumber,"DAY")
    // console.log(this.state.data,data)
    let dataAll = this.state.data;
    let dataFirst = {};

    let i = 0;
    data.map((item) => {
      dataFirst[i] = item;
      i++;
    });
    dataAll[dayNumber] = dataFirst;

    this.setState({ data: dataAll });
    //this.setState({ data })
    //console.log(this.state.data, "thay đổi")
  };
  _renderItem = () => {
    let array = [];
    const { days, dateStart } = this.state;
    let getDay = dateStart.substring(3, 5);
    let getMonth = dateStart.substring(0, 2);
    let dateGet = this.state.data;
    console.log(days, "=============");
    for (let i = 1; i <= days; i++) {
      let month = getMonth;
      let label = getDay + "/" + month;

      let id = "day" + i;
      getDay++;

      let datas = dateGet[id];

      array.push(
        <TimeLineDetail
          keys={i}
          dayNumber={id}
          days={days}
          tabLabel={label}
          data={datas}
          dataAll={dateGet}
          dateStart={this.state.dateStart}
          dateEnd={this.state.dateEnd}
          locationStart={this.state.locationStart}
          locationEnd={this.state.locationEnd}
          onClickDetail={this.props.navigation}
          imgHero={this.state.imgHero}
          onDragEnd = {this.onDragEnd}
        />
      );
    }
    return array;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
                  color: "white",
                  left: 10,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
            }}
          >
            <Image
              style={{
                // height: "100%",
                // width: "100%",
                height: "100%",
                width: "100%",
                zIndex: 1,
                position: "absolute",
                alignSelf: "center",
              }}
              blurRadius={2}
              source={{
                uri:
                  "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
            />

            <View style={styles.saveBtnContainer}>
              <TouchableOpacity onPress={this.onClickSaveSchedule}>
                <Text style={{ color: "white" }}>Save your trip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {!this.state.flexin ? (
          <ActivityIndicator size="large" color="#DB5823" />
        ) : (
          <ScrollableTabView
            renderTabBar={() => <DefaultTabBar />}
            ref={(tabView) => {
              this.tabView = tabView;
            }}
          >
            {this._renderItem()}
          </ScrollableTabView>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  addBtn: {
    justifyContent: "flex-end",
    left: 19,
    top: 13,
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
  cardContainer: {
    height: 120,

    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 20,
    marginTop: 10,
    bottom: 8,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  imgContainer: {
    height: "100%",
    width: "25%",
  },
  contentInside: {
    flexDirection: "row",
  },
  infor: {
    left: 10,
    top: 8,
    width: "50%",
  },
  timeContainer: {
    width: "25%",
    //backgroundColor: "#DB5823",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bao: {
    height: "100%",
    marginTop: 8,
    marginBottom: 23,
  },
  floatButton: {
    height: 50,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#DB5823",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  saveBtnContainer: {
    backgroundColor: "#DB5823",
    zIndex: 100,
    width: 100,
    height: 40,
    top: 25,
    right: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  backBtn: {
    position: "absolute",
    zIndex: 100,
  },
});
