import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import TabBarIcon from "../../components/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

export default class PostAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickDetail() {
    this.props.navigation.navigate("DetailFeed");
    this.props.navigation.setOptions({
      headerTitle: "Trang chi tiết",
    });
  }
  render() {
    return (
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

        <ScrollView>
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
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  header: {
    height: 100,
    justifyContent: "center",
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
  postContainer: {
    width: "90%",
    marginBottom: 180,
    left: 20,
  },
  feedTxt: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    left: 10,
    top: 10,
    width: 150,
    height: 100,
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
});
