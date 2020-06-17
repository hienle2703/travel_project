import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import TabBarIcon from "../../components/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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

export default class FriendProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ava: null,
    };
  }
  onClickDetail() {
    this.props.navigation.navigate("DetailFeed");
    this.props.navigation.setOptions({
      headerTitle: "Trang chi tiết",
    });
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  render() {
    //Lấy params được truyền từ FriendAll
    const { ava,name } = this.props.route.params;
    console.log("Ava nè",ava);
    console.log("Name nè", name)
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
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
                      <Image style={styles.tinyLogo} source={{ uri: ava }} />
                    );
                }
              })()}
            </View>
            <View style={styles.infArea}>
              <View style={styles.titleInf}>
            <Text style={styles.textName}>{name}</Text>
              </View>
            </View>

            <View style={styles.mssgContainer}>
              <TouchableOpacity style={styles.messageBtn}>
                <Text style={{ color: "white" }}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreBtn}>
                <Ionicons name="ios-more" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.postContainer}>
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
                        <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
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
                        <View style={{ marginTop: 35, flexDirection: "row" }}>
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
                            style={{ flexDirection: "row", marginBottom: 10 }}
                          >
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              {item.view}{" "}
                            </Text>
                            <Ionicons name="md-eye" size={15} color="gray" />
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
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "yellow",
  },
  header: {
    height: 100,
    justifyContent: "center",
  },
  avataArea: {
    height: 250,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  avataEdit: {
    //flex:0.3,
    //borderRadius: 51
  },
  tinyLogo: {
    height: 120,
    width: 120,
    borderRadius: 70,
    alignSelf: "center",
  },
  infArea: {
    alignItems: "center",
  },
  titleInf: {
    color: "orange",
    // flex: 0.2,
    marginTop: 7,
  },
  textName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
  },
  mssgContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  messageBtn: {
    height: 40,
    width: 200,
    backgroundColor: "#DB5823",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  moreBtn: {
    height: 40,
    width: 40,
    backgroundColor: "#C5C1C4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    left: 10,
  },
  postContainer: {
    width: "90%",
    marginBottom: 50,
    marginTop: 10,
    left: 20,
  },
  feedCard: {
    width: "100%",
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
});
