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
import FeedItem from "../../components/FeedItem";
import { MonoText } from "../../components/StyledText";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

                  <TouchableOpacity onPress={() => this.onClickDetail()}>
                    <View style={styles.feedCard}>
                      <View>
                        <Image
                          style={{
                            height: "100%",
                            width: 160,
                            borderRadius: 20,
                          }}
                          source={require("../../assets/images/imgHero.jpg")}
                        />
                      </View>
                      <View style={styles.feedTxt}>
                        <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                          ĐÀ LẠT TRIP
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>
                          Author: Hien Le
                        </Text>

                        <View
                          style={{ flexDirection: "row", right: 10, top: 10 }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              102{" "}
                            </Text>
                            <Ionicons name="md-eye" size={15} color="gray" />
                          </View>

                          <View style={{ flexDirection: "row", left: 10 }}>
                            <Text style={{ fontSize: 12, color: "gray" }}>
                              5{" "}
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
    marginTop:30,
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
    height: 1000,
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
    height: 600,
    width: "90%",
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
    justifyContent: "center",
    alignItems: "flex-end",
    left: 40,
  },
});
