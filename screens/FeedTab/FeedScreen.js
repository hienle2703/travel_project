import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

const item = firebase.auth().currentUser;
const b = function onClickFriends() {
  const ref = React.useRef(null);

  console.log(ref);
  return ref;
};
const scheduleData = [
  {
    id: 1,
    imgSource:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-1.png",
    name: "Da Lat For Life",
    start: "HCM",
    end: "Da Lat",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 2,
    imgSource:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg",
    name: "Hoi An Vintage Town",
    start: "HCM",
    end: "Hoi An",
    member: "4",
    date: "14/6 to 18/6",
  },
  {
    id: 3,
    imgSource:
      "https://aroma.vn/wp-content/uploads/2018/11/aafed9d6-h%C3%A0-n%E1%BB%99i.jpg",
    name: "Viet Nam Capital",
    start: "HCM",
    end: "Ha Noi",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 4,
    imgSource:
      "https://tour.dulichvietnam.com.vn/uploads/tour/1553224096_sapa-5.jpg",
    name: "The City In The Fog",
    start: "HCM",
    end: "Sapa",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 5,
    imgSource:"https://saigonstartravel.com/wp-content/uploads/2019/03/26-2.jpg",
    name: "Get Some Vitamin Sea",
    start: "HCM",
    end: "Vung Tau",
    member: "4",
    date: "14/6 to 17/6",
  },
];
const postData = [
  {
    id: 1,
    name: "Đà Lạt Trips",
    author: "Hien Le",
    day: "3",
    points: "HCM - Da Lat, Lam Dong",
    imgSource:
      "https://wikidulich.org/wp-content/uploads/2018/08/Ngu%E1%BB%93n-g%E1%BB%91c-c%C3%A1i-t%C3%AAn-%C4%90%C3%A0-L%E1%BA%A1t.jpg",
    view: "102",
    comment: "10",
  },
  {
    id: 2,
    name: "Đi Vũng Tàu nào",
    author: "Ngoc Thien",
    day: "3",
    points: "HCM - Ba Ria, Vung Tau",
    imgSource:
      "https://media.baodautu.vn/Images/phongvien/2018/08/25/festival-bien-ba-ria---vung-tau-se-duoc-to-chuc-tu-ngay-288-den-3920181535178310.jpg",
    view: "12",
    comment: "1",
  },
  {
    id: 3,
    name: "Hít Hà",
    author: "Nam Tran",
    day: "3",
    points: "Vinh Long - HCM",
    imgSource:
      "https://d3jyiu4jpn0ihr.cloudfront.net/wp-content/uploads/sites/6/20190918160006/ve-may-bay-di-sai-gon1.jpg",
    view: "23",
    comment: "2",
  },
  {
    id: 4,
    name: "Chiếc du lịch nhỏ xinh",
    author: "Huy Le",
    day: "3",
    points: "HCM - Da Nang",
    imgSource:
      "https://travel.com.vn/Images/destination/tf_190311041030_727050.jpg",
    view: "300",
    comment: "21",
  },
  {
    id: 5,
    name: "Abacaxibala",
    author: "Anh Tuyet",
    day: "3",
    points: "HCM - Bao Loc",
    imgSource:
      "https://sites.google.com/site/vuoncva5461dulich/_/rsrc/1529544852694/dl-55/TP%20Bao%20Loc%202.jpg",
    view: "63",
    comment: "22",
  },
];
export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.itemRef = firebaseApp.database();
    this.itemRef1 = firebaseApp.auth().currentUser;
    this.state = {
      user: this.itemRef1,
      isLoading: true,
      listArticles: [],
      totalResults: 0,
      page: 1,
      isLoadMore: false,
      visible: false,
      itemRef: null,
    };
  }

  onClickDetail() {
    this.props.navigation.navigate("DetailFeed");
    this.props.navigation.setOptions({
      headerTitle: "Trang chi tiết",
    });
  }
  onCancelWarn() {
    this.setState({ visible: false });
  }
  onSignInWarn() {
    this.setState({ visible: false });
    this.props.navigation.navigate("ProfileStack", { screen: "ProfileScreen" });
  }
  onClickWritePost = async () => {
    //console.log("User đang đăng nhập", this.itemRef1);
    //console.log("this.state.user DAYYYYYYYY", this.state.user);
    // const userRef = firebaseApp
    //   .database()
    //   .ref("user")
    //   .child(this.state.user.uid);

    // console.log("userRef", userRef);
    // const itemRef = await firebaseApp
    //   .database()
    //   .ref("user")
    //   .child(this.state.user.uid);
    const itemRef = await firebaseApp.auth().currentUser;
    if (itemRef !== null) {
      //await this.setState({ logged: true, flexin: true });
      await this.setState({ visible: false });
      await console.log("Đã lấy được");
      await this.props.navigation.navigate("createFeedScreen");
    } else {
      await this.setState({ visible: true });
    }
  };
  onClickMakeSchedule = async () => {
    const itemRef = await firebaseApp.auth().currentUser;
    if (itemRef !== null) {
      //await this.setState({ logged: true, flexin: true });
      await this.setState({ visible: false });
      await console.log("Đã lấy được");
      await this.props.navigation.navigate("ScheduleStack", {
        screen: "createScheduleScreen",
      });
    } else {
      await this.setState({ visible: true });
    }
  };
  onClickFriendProfile() {
    this.props.navigation.navigate("FriendProfile");
  }
  // UNSAFE_componentWillMount = async () => {
  //   const item = await firebaseApp.auth().currentUser;
  //   console.log("HELLO");
  //   console.log("user ddang dang nhap", item);
  //   // if (itemRef !== null) {
  //   //console.log("itemRef trong ComponentMount", itemRef);
  //   // }
  //   this.setState({
  //     isLoading: true,
  //   });
  // };
  componentDidMount = async () => {
    const itemRef = await firebaseApp
      .database()
      .ref("user")
      .child(this.state.user.uid);

    if (itemRef !== null) {
      //await this.setState({ logged: true, flexin: true });
      //await console.log("Đã lấy được");
      await this.setState({ visible: false });
    } else {
      //await console.log("Chưa lấy được");
    }

    //await this.setState({ name, email, phone, ava });
  };
  // componentDidMount = async () => {
  //   const item = firebaseApp.auth().currentUser;

  //   console.log("user ddang dang nhap", item);
  //   // if (itemRef !== null) {
  //   //console.log("itemRef trong ComponentMount", itemRef);
  //   // }
  //   this.setState({
  //     isLoading: true,
  //   });
  // };
  render() {
    return (
      <ScrollView>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <View style={styles.dialogContainer}>
              <View style={styles.warnImage}>
                <Image
                  style={styles.warnImageSource}
                  source={{
                    uri:
                      "https://images.vexels.com/media/users/3/128332/isolated/preview/13bcbc98044bbd2bd1d614b83db76de7-oops-bubble-svg-by-vexels.png",
                  }}
                />
              </View>

              <View style={styles.warnTextContainer}>
                <Text style={styles.wanText}>
                  You must sign in to use this feature
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onCancelWarn()}
                  >
                    <Text style={{ fontSize: 15 }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSignInWarn()}
                  >
                    <Text style={{ fontSize: 15 }}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </DialogContent>
        </Dialog>

        <View style={styles.container}>
          {/* <View style={styles.header}>
            <TouchableOpacity
              style={styles.btnDetail}
              onPress={() => this.onClickDetail()}
            >
              <Text style={styles.txt}>Detail</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.body}>
            <View style={styles.headerDes}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Your trusted friend on your vacation
                </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>
                  Plan your vacation, gather friends, pick your location and
                  just go
                </Text>
              </View>
              {/* <View style={styles.findBtn}>
                <TouchableOpacity>
                  <Entypo name="magnifying-glass" size={22} color="gray" />
                </TouchableOpacity>
              </View> */}
            </View>

            <View style={styles.content}>
              <View style={styles.findBox}>
                <TextInput
                  placeholder="Find Anything"
                  placeholderTextColor="#969696"
                  style={{ left: 10, top: 3 }}
                ></TextInput>
              </View>

              <View style={styles.planBtn}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DB5823",
                    width: "90%",
                    height: 35,
                    top: 30,
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                  onPress={() => this.onClickMakeSchedule()}
                >
                  <Text style={{ alignSelf: "center", top: 6, color: "white" }}>
                    Plan Your Own Vacation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DB5823",
                    width: "90%",
                    height: 35,
                    top: 40,
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                  onPress={() => this.onClickWritePost()}
                >
                  <Text style={{ alignSelf: "center", top: 6, color: "white" }}>
                    Write A Post About Your Trip
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.ads}>
                <Image
                  style={{ width: "90%", height: 120, borderRadius: 20 }}
                  source={require("../../assets/images/ads.jpg")}
                />
              </View>

              <View style={styles.locationContainer}>
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  Your Location:{" "}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#DB5823" }}> HCM, Dist.5</Text>
                    <MaterialIcons
                      name="location-on"
                      size={15}
                      color="#DB5823"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.scheduleListContainer}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Schedules start at your local location:
                </Text>

                <View style={styles.tripsList}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                  >
                    {scheduleData.map((item) => {
                      return (
                        <View style={styles.cardTodo}>
                          <Image
                            style={styles.imgTodo}
                            source={{ uri: item.imgSource }}
                          />
                          {/* <Text>Day: {item.id}</Text> */}
                          <View style={{height:30, left: 5}}>
                            <Text style={{ color: "tomato", fontSize: 12 }}>
                              {item.name}
                            </Text>
                          </View>

                          <View style={{left:5}}>
                            <Text style={{ color: "gray", fontSize: 10 }}>
                              From: {item.start}
                            </Text>
                            <Text style={{ color: "gray", fontSize: 10 }}>
                              To: {item.end}
                            </Text>
                            <Text style={{ color: "gray", fontSize: 10 }}>
                              Members: {item.member}
                            </Text>
                            <Text style={{ color: "gray", fontSize: 10 }}>
                              Time: {item.date}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                    
                  </ScrollView>
                </View>
              </View>
              <View style={styles.feedListContainer}>
                <View style={styles.feedList}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Feed of interesting trips
                  </Text>
                  {postData.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => this.onClickDetail()}
                        style={{ marginBottom: 20 }}
                      >
                        <View style={styles.feedCard}>
                          <View>
                            <Image
                              style={{
                                height: "100%",
                                width: 160,
                                borderRadius: 20,
                              }}
                              source={{ uri: item.imgSource }}
                            />
                          </View>
                          <View style={styles.feedTxt}>
                            <Text
                              style={{ color: "#DB5823", fontWeight: "bold" }}
                            >
                              {item.name}
                            </Text>
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              {item.author}
                            </Text>
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              {item.points}
                            </Text>
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              {item.day} Days
                            </Text>
                            {/* Rating */}
                            <View
                              style={{ marginTop: 35, flexDirection: "row" }}
                            >
                              <AntDesign name="staro" size={15} color="black" />
                              <AntDesign name="staro" size={15} color="black" />
                              <AntDesign name="staro" size={15} color="black" />
                              <AntDesign name="staro" size={15} color="black" />
                              <AntDesign name="staro" size={15} color="black" />
                            </View>

                            <View
                              style={{
                                flexDirection: "row",
                                right: 10,
                                left: 2,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  marginBottom: 10,
                                }}
                              >
                                <Text style={{ fontSize: 12, color: "gray" }}>
                                  {item.view}{" "}
                                </Text>
                                <Ionicons
                                  name="md-eye"
                                  size={15}
                                  color="gray"
                                />
                              </View>

                              <View style={{ flexDirection: "row", left: 10 }}>
                                <Text style={{ fontSize: 12, color: "gray" }}>
                                  {item.comment}{" "}
                                </Text>
                                <FontAwesome
                                  name="comment-o"
                                  size={15}
                                  color="gray"
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 70,
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    width: "100%",
  },
  btnDetail: {
    alignSelf: "center",
  },
  headerDes: {
    left: 20,
    top: 25,
    marginTop: 30,
    marginBottom:10,
    flexDirection: "row",
    width: "75%",
  },
  findBtn: {
    alignSelf: "center",
    bottom: 10,
    left: 20,
  },
  findBox: {
    backgroundColor: "#D8D8D8",
    width: "90%",
    height: 35,
    top: 30,
    alignSelf: "center",
    borderRadius: 10,
  },
  planBtn: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  body: {
    //height: 1000,
  },
  ads: {
    alignItems: "center",
    justifyContent: "center",
    top: 60,
  },
  content: {},
  scheduleListContainer: {
    top: 80,
    left: 20,
  },
  feedListContainer: {
    top: 80,
    alignSelf: "center",
    width:"95%"
  },
  cardTodo: {
    width: 100,
    height: 200,
    top: 10,
    marginRight: 15,
    backgroundColor: "#E6E6E6",
    borderRadius:10,
  },
  imgTodo: {
    width: "95%",
    height: 100,
    borderRadius: 10,
    alignSelf:"center"
  },
  tripsList: {
    height: 220,
    width: "90%",
    marginBottom:20,
  },
  feedList: {
    //height: 600,
    width: "100%",
    marginBottom: 90,
  },
  feedCard: {
    height: 150,
    backgroundColor: "#EAEAEA",
    top: 10,
    borderRadius: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  feedTxt: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    left: 10,
    top: 10,
    width: 150,
    height: 100,
  },

  dialogContainer: {
    height: 230,
    width: 200,
  },

  warnImage: {
    height: 150,
    alignSelf: "center",
    width: "90%",
    //backgroundColor:"red"
  },
  warnTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"red"
  },
  wanText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DB5823",
    textAlign: "center",
  },
  warnImageSource: {
    height: "100%",
    width: "100%",
    right: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    height: 30,
    width: 150,
    //backgroundColor:"red",
    top: 20,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  button: {},
  locationContainer: {
    width: "90%",
    left: 20,
    top: 70,
  },
});
