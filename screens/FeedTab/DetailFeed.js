import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import TabBarIcon from "../../components/TabBarIcon";

const imgData = [
  {
    id: 1,
    imgSource: require("../../assets/images/avacmt.jpg"),
    name: "Vinh Dai",
    time: "15m",
    cmt:
      "Wow, what a nice trip you have! I'm so jealous lmao . I sure will try this plan next month.",
  },
  {
    id: 2,
    imgSource: require("../../assets/images/avacmt1.jpg"),
    name: "Tuyet Nguyen",
    time: "25m",
    cmt: "Abacaxibala",
  },
  {
    id: 3,
    imgSource: require("../../assets/images/avacmt2.jpg"),
    name: "Huy Le",
    time: "30m",
    cmt: "I miss you Mon :(",
  },
  {
    id: 4,
    imgSource: require("../../assets/images/avacmt3.jpg"),
    name: "Sang Senpai",
    time: "45m",
    cmt: "Em lam giao dien xau qua",
  },
  {
    id: 5,
    imgSource: require("../../assets/images/avacmt4.jpg"),
    name: "Huy Truong",
    time: "2hrs",
    cmt: "Nice trip bro, how much did you spend on this vacation?",
  },
];

export default class DetailFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickUseSchedule(){
    this.props.navigation.navigate("ScheduleStack",{screen:"UseSchedule"})
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "red", alignItems: "flex-start" }}
                name="ios-arrow-back"
              />
            </TouchableOpacity>
            <Image
              style={styles.imgHero}
              source={require("../../assets/images/imgHero.jpg")}
            />
            <View style={styles.containerCpnt}>
              <View style={styles.titileBoard}>
                <View style={styles.titileBoard1}>
                  <Text style={styles.titleTxt}>Đà Lạt Trip</Text>
                  <Text style={{ color: "gray", fontSize: 10 }}>
                    Created by: Hien Le
                  </Text>
                  <Text style={{ color: "gray", fontSize: 10 }}>
                    Start point: HCM City, Dist.10
                  </Text>
                  <Text style={{ color: "gray", fontSize: 10 }}>
                    Status: Done
                  </Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.titileBoard2}>
                  <Text style={{ color: "gray" }}>Rating:</Text>
                  <Text
                    style={{
                      color: "#DB5823",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    4.6/5
                  </Text>
                </View>
              </View>
            </View>
            
              
            
            <View
              style={{
                height: 50,
                width: 140,
                borderRadius: 10,
                backgroundColor: "#DB5823",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 100,
                left: 240,
                top: 290,
              }}
            >
              <TouchableOpacity onPress={()=>this.onClickUseSchedule()}>
              <Text style={{color:"white"}}>Use this schedule</Text>
              </TouchableOpacity>
              
            </View>
          </View>

          <View style={styles.bodyComponent}>
            <Text
              style={{ color: "#DB5823", fontSize: 17, fontWeight: "bold" }}
            >
              Trip Description
            </Text>
            <View style={styles.txtDes}>
              <View style={styles.owner}>
                <Image
                  style={{ height: 90, width: 90, borderRadius: 100 }}
                  source={require("../../assets/images/owner.jpg")}
                />
                <Text>Hien Le</Text>
                <Text style={{ fontSize: 8, color: "gray" }}>
                  Created on: May 26th
                </Text>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginTop: -5,
                  width: "70%",
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </View>
            </View>

            <View style={styles.txtDes1}>
              <Text
                style={{ color: "#DB5823", fontSize: 17, fontWeight: "bold" }}
              >
                Location
              </Text>
              <View style={styles.map}>
                <Image
                  style={{ width: 350, height: 200 }}
                  source={require("../../assets/images/map.jpg")}
                />
              </View>
            </View>

            <View style={styles.txtDes2}>
              <Text
                style={{ color: "#DB5823", fontSize: 17, fontWeight: "bold" }}
              >
                Good To Know
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    Start Date
                  </Text>
                  <Text>May 5th</Text>
                </View>

                <View style={{ marginLeft: 150 }}>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    End Date
                  </Text>
                  <Text>May 8th</Text>
                </View>
              </View>
            </View>

            <View style={styles.txtDes3}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#DB5823",
                    fontSize: 17,
                    fontWeight: "bold",
                    marginTop: 15,
                  }}
                >
                  Your Schedule
                </Text>
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    borderWidth: 0.5,
                    borderRadius: 10,
                    width: 60,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 180,
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("ScheduleDetail")
                  }
                >
                  <Text style={{ color: "gray" }}>Detail</Text>
                </TouchableOpacity>
              </View>

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
                    9 Locations
                  </Text>
                </View>
                <View style={styles.cardTodo}>
                  <Image
                    style={styles.imgTodo}
                    source={require("../../assets/images/lichtrinh2.jpg")}
                  />
                  <Text>Day 2</Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    6 Locations
                  </Text>
                </View>
                <View style={styles.cardTodo}>
                  <Image
                    style={styles.imgTodo}
                    source={require("../../assets/images/lichtrinh3.jpg")}
                  />
                  <Text>Day 3</Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    3 Locations
                  </Text>
                </View>
                <View style={styles.cardTodo}>
                  <Image
                    style={styles.imgTodo}
                    source={require("../../assets/images/lichtrinh4.jpg")}
                  />
                  <Text>Day 4</Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    4 Locations
                  </Text>
                </View>
                <View style={styles.cardTodo}>
                  <Image
                    style={styles.imgTodo}
                    source={require("../../assets/images/lichtrinh.jpg")}
                  />
                  <Text>Day 5</Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    2 Locations
                  </Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.commentSec}>
              <Text
                style={{
                  color: "#DB5823",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Comment
              </Text>

              <View style={{ flexDirection: "column" }}>
                {imgData.map((item) => {
                  return (
                    <View style={styles.cardComment}>
                      <View style={styles.imgCmt}>
                        <Image
                          style={{ height: 50, width: 50, borderRadius: 100 }}
                          source={item.imgSource}
                        />
                      </View>

                      <View style={styles.commentBox}>
                        <View style={styles.comments}>
                          <View style={styles.info}>
                            <Text style={{ fontWeight: "bold" }}>
                              {item.name}
                            </Text>
                          </View>

                          <View style={styles.txtCmt}>
                            <Text>{item.cmt}</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              color: "gray",
                              fontSize: 12,
                              marginLeft: 10,
                              marginTop: -4,
                            }}
                          >
                            {item.time}
                          </Text>
                          <TouchableOpacity>
                            <Text
                              style={{
                                color: "#DB5823",
                                fontSize: 12,
                                marginLeft: 10,
                                marginTop: -4,
                              }}
                            >
                              Like
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    zIndex: 100,
    position: "absolute",
    marginLeft: 25,
    marginTop: 50,
  },
  containerHeader: {
    height: 300,
  },
  imgHero: {
    zIndex: 2,
    position: "relative",
    width: "100%",
    height: 250,
    alignSelf: "center",
    zIndex: 1,
  },
  titileBoard: {
    width: 300,
    zIndex: 50,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: -40,
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
  titileBoard1: {
    marginTop: 20,
    marginLeft: 20,
    alignItems: "flex-start",
  },
  line: {
    borderRightColor: "gray",
    borderRightWidth: 0.5,
    zIndex: 0,
    width: 15,
  },
  titileBoard2: {
    marginTop: 25,
    marginLeft: 50,
    alignItems: "flex-end",
  },
  containerCpnt: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 55,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DB5823",
  },
  bodyComponent: {
    //height: 200,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "105%",
    marginTop: 30,
    marginLeft: 30,
  },
  txtDes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "85%",
    height: 150,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  txtDes1: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "85%",
    height: 250,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  txtDes2: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "85%",
    height: 90,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  txtDes3: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "85%",
    height: 250,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  map: {
    justifyContent: "center",
    alignItems: "center",
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
  commentSec: {
    height: "100%",
    marginBottom: 25,
  },
  owner: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardComment: {
    width: "85%",
    flexDirection: "row",
    marginTop: 15,
  },
  comments: {
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    //marginLeft: 5,
    marginBottom: 10,
    width: "110%",
  },
  info: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 2,
  },
  txtCmt: {
    marginLeft: 10,
    marginBottom: 5,
    width: "100%",
  },
  commentBox: {
    marginLeft: 5,
    width: "87%",
  },
});
