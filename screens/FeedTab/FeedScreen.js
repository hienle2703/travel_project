import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import FeedItem from "../../components/FeedItem";
import { MonoText } from "../../components/StyledText";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

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
      "https://lh3.googleusercontent.com/proxy/icLRnyEaQgnCk7PPoTVB2PhjkAHUeqeKXZZ8mX6JqmmqH1Mdrykx4SIzSfRYZ-dZMjpz8q8Ec-XHcqG_yp08CFKzqi6RCUy2Kh1wZaSPTRg54e1fnlYUKMQbqtQOwPxB2y-l_n2I4advtMuU0WrVR78CkUlA7zDxqVPFjr4w4uVAGPj85jVoPFe6ytsEWVi5Rfd4JacMD4GhcOPakA8AcMf3o_FXRlvymfChl0D35cidwvN5shVgvYg",
    view: "63",
    comment: "22",
  },
  
];
export default class FeedScreen extends Component {
  state = {
    isLoading: true,
    listArticles: [],
    totalResults: 0,
    page: 1,
    isLoadMore: false,
  };

  onClickDetail() {
    this.props.navigation.navigate("DetailFeed");
    this.props.navigation.setOptions({
      headerTitle: "Trang chi tiết",
    });
  }
  onClickWritePost() {
    this.props.navigation.navigate("createFeedScreen");
    this.props.navigation.setOptions({
      headerTitle: "Viết bài",
    });
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  componentDidMount = async () => {
    const { page } = this.state;
    this.getPermissionAsync();
    this.setState({
      isLoading: true,
    });
  };
  render() {
    return (
      <ScrollView>
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
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Your trusted friend on your vacation
                </Text>
                <Text style={{ fontSize: 10, color: "gray" }}>
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

              <View style={{ width: "90%", left: 20, top: 70 }}>
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

              <View style={styles.scheduleList}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Trips that start at your local location:
                </Text>

                <View style={styles.tripsList}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                  >
                    <View style={styles.cardTodo}>
                      <Image
                        style={styles.imgTodo}
                        source={require("../../assets/images/lichtrinh.jpg")}
                      />
                      <Text>Day 1</Text>
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Thung Lũng Vàng
                      </Text>
                    </View>
                    <View style={styles.cardTodo}>
                      <Image
                        style={styles.imgTodo}
                        source={require("../../assets/images/lichtrinh2.jpg")}
                      />
                      <Text>Day 2</Text>
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Cáp Treo
                      </Text>
                    </View>
                    <View style={styles.cardTodo}>
                      <Image
                        style={styles.imgTodo}
                        source={require("../../assets/images/lichtrinh3.jpg")}
                      />
                      <Text>Day 3</Text>
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Nhà Thờ Con Gà
                      </Text>
                    </View>
                    <View style={styles.cardTodo}>
                      <Image
                        style={styles.imgTodo}
                        source={require("../../assets/images/lichtrinh4.jpg")}
                      />
                      <Text>Day 4</Text>
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Hồ Xuân Hương
                      </Text>
                    </View>
                    <View style={styles.cardTodo}>
                      <Image
                        style={styles.imgTodo}
                        source={require("../../assets/images/lichtrinh.jpg")}
                      />
                      <Text>Day 5</Text>
                      <Text style={{ color: "gray", fontSize: 12 }}>
                        Hồ Than Thở
                      </Text>
                    </View>
                  </ScrollView>
                </View>

                <View style={styles.feedList}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Feed of interesting trips
                  </Text>
                  {postData.map((item) => {
                    return (
                      <TouchableOpacity onPress={() => this.onClickDetail()} style={{marginBottom:20,}}>
                        <View style={styles.feedCard}>
                          <View>
                            <Image
                              style={{
                                height: "100%",
                                width: 160,
                                borderRadius: 20,
                              }}
                              source={{uri: item.imgSource}}
                            />
                          </View>
                          <View style={styles.feedTxt}>
                            <Text
                              style={{ color: "#DB5823", fontWeight: "bold",}}
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
                              <View style={{ flexDirection: "row", marginBottom:10,}}>
                                <Text style={{ fontSize: 12, color: "gray" }}>
                                  {item.view} {" "}
                                </Text>
                                <Ionicons
                                  name="md-eye"
                                  size={15}
                                  color="gray"
                                />
                              </View>

                              <View style={{ flexDirection: "row", left: 10 }}>
                                <Text style={{ fontSize: 12, color: "gray" }}>
                                  {item.comment} {" "}
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
  scheduleList: {
    top: 80,
    left: 20,
  },
  cardTodo: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginRight: 15,
  },
  imgTodo: {
    width: "100%",
    height: 130,
    borderRadius: 10,
  },
  tripsList: {
    height: 200,
    width: "90%",
  },
  feedList: {
    //height: 600,
    width: "90%",
    marginBottom:90,
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
    width:150,
    height:100,
  },
});
