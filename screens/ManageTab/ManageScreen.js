//         ---------------
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
import TabBarIcon from "../../components/TabBarIcon";

import { AntDesign } from "@expo/vector-icons";
const groupData = [
  {
    id: 1,
    imgSource:
      "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
    name: "Your Group #1",
    member: "10",
    schedule: "HCM to Vung Tau",
  },
  {
    id: 2,
    imgSource:
      "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
    name: "Your Group #2",
    member: "4",
    schedule: "HCM to Dalat",
  },
  {
    id: 3,
    imgSource:
      "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
    name: "Your Group #3",
    member: "2",
    schedule: "Dalat to Bao Loc, Lam Dong",
  },
  {
    id: 4,
    imgSource:
      "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
    name: "Your Group #4",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
  {
    id: 5,
    imgSource:
      "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
    name: "Your Group #5",
    member: "4",
    schedule: "HCM to Dalat",
  },
];
const imgData = [
  {
    id: 1,
    imgSource:
      "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/p720x720/53333197_652869575170142_39286602727424000_o.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=Z-EL7EAurIEAX9X3arC&_nc_ht=scontent.fsgn2-6.fna&_nc_tp=6&oh=12715ba6ae837e7bc5abbc69d0dec0f4&oe=5F05DC1B",
    name: "Huy Le's",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
  {
    id: 2,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/10678739_1455418871406014_3371157832838506507_n.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=JZjOlWRER50AX-JGFIi&_nc_ht=scontent.fsgn2-5.fna&oh=996aa425e3cc86bc044378424716d6c1&oe=5F08E568",
    name: "Ngoc Thien's",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
  {
    id: 3,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/22308933_713259742197326_5228048315610088764_n.jpg?_nc_cat=106&_nc_sid=d4cf07&_nc_ohc=0qPSSvea2hoAX_kEAJw&_nc_ht=scontent.fsgn2-5.fna&oh=be77aa2f75240bc96375722e242e774f&oe=5F067808",
    name: "Nam Tran's",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
  {
    id: 4,
    imgSource:
      "https://danviet.mediacdn.vn/upload/4-2019/images/2019-12-26/Tong-gia-tri-tai-san-cua-Zlatan-Ibrahimovic-lon-co-nao-ibra-01-1577378106-width493height343.jpg",
    name: "Thao Vu's",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
  {
    id: 5,
    imgSource:
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.0-8/p720x720/12983415_601918796633368_5700499175963364530_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=TO0PfpMvdOIAX82pAYO&_nc_ht=scontent.fsgn2-5.fna&_nc_tp=6&oh=9b63540f166eb58ecd117caac1f7c889&oe=5F064514",
    name: "Anh Tuyet's",
    member: "6",
    schedule: "HCM to Da Lat, Lam Dong",
  },
];
export default class ManageScreen extends Component {
  state = {};
  onClickDetailGroup() {
    this.props.navigation.navigate("DetailGroup");
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* <View style={styles.header}>
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
          </View> */}
          <View style={styles.header}></View>
          <View style={styles.search}>
            <View style={styles.title}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Search your groups
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchBox}>
                <TextInput
                  style={{ left: 10, color: "black" }}
                  placeholder="Find your groups"
                ></TextInput>
              </View>
              <View style={styles.searchIcon}>
                <TouchableOpacity>
                  <AntDesign name="search1" size={24} color="#DB5823" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btnFriendList}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("createGroup")}
              >
                <Text>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.invite}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Your Groups
              </Text>
              <View style={styles.countInvite}>
                <Text>23</Text>
              </View>
            </View>

            <View style={styles.inviteContainer}>
              {groupData.map((item) => {
                return (
                  <TouchableOpacity onPress={() => this.onClickDetailGroup()}>
                    <View style={styles.inviteCard}>
                      <View style={styles.ava}>
                        <Image
                          style={{ height: 70, width: 70, borderRadius: 80 }}
                          source={{ uri: item.imgSource }}
                        />
                      </View>
                      <View style={styles.buttonGroup}>
                        <View style={styles.nameInvite}>
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {item.name}
                          </Text>
                          <Text style={{ color: "gray", fontSize: 12 }}>
                            Member: {item.member}
                          </Text>
                          <Text style={{ color: "gray", fontSize: 12 }}>
                            Schedule: {item.schedule}
                          </Text>
                        </View>
                        {/* <View style={styles.buttonSplit}>
                        <TouchableOpacity style={styles.buttonAcceptStyle}>
                          <Text style={{ color: "white" }}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDeleteStyle}>
                          <Text>Delete</Text>
                        </TouchableOpacity>
                      </View> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.loadMore}>
                <TouchableOpacity>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.advice}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Groups you're in
              </Text>
              {/* <View style={styles.countInvite}>
                <Text>23</Text>
              </View> */}
            </View>
            <View style={styles.inviteContainer}>
              {imgData.map((item) => {
                return (
                  <TouchableOpacity onPress={() => this.onClickDetailGroup()}>
                    <View style={styles.inviteCard}>
                      <View style={styles.ava}>
                        <Image
                          style={{ height: 70, width: 70, borderRadius: 80 }}
                          source={{ uri: item.imgSource }}
                        />
                      </View>
                      <View style={styles.buttonGroup}>
                        <View style={styles.nameInvite}>
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {item.name}
                          </Text>
                          <Text style={{ color: "gray", fontSize: 12 }}>
                            Member: {item.member}
                          </Text>
                          <Text style={{ color: "gray", fontSize: 12 }}>
                            Schedule: {item.schedule}
                          </Text>
                        </View>
                        {/* <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity style={styles.buttonAddtStyle}>
                          <Text style={{ color: "white" }}>Add</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.buttonDeleteStyle}>
                          <Text>Delete</Text>
                        </TouchableOpacity> 
                      </View> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.loadMore}>
                <TouchableOpacity>
                  <Text style={{ color: "gray", fontWeight: "bold" }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: "center",
  },
  title: {
    left: 15,
    top: 15,
    height: 20,
    flexDirection: "row",
  },
  titleInvite: {
    marginLeft: 30,
    marginTop: 15,
    height: 30,
    flexDirection: "row",
  },
  countInvite: {
    left: 15,
  },
  search: {
    height: 170,
    width: "90%",
    alignSelf: "center",
    //flexDirection:"row"
    //backgroundColor: "gray",
    // alignItems:"center",
    // justifyContent:"center"

    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  searchBox: {
    width: "85%",
    backgroundColor: "#E6E6E6",
    height: 30,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginTop: 30,
  },
  btnFriendList: {
    marginLeft: 13,
    marginTop: 20,
    height: 35,
    width: 100,
    backgroundColor: "#DBD7DA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  invite: {
    height: 510,
    width: "90%",
    //backgroundColor:"yellow",
    marginLeft: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  inviteContainer: {
    height: 200,
    alignSelf: "center",
    width: "90%",

    marginTop: 10,
  },
  inviteCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 80,
  },
  ava: {
    height: 80,
    width: 80,
    marginLeft: -10,
  },
  nameInvite: {
    left: 10,
    top: 5,
    // backgroundColor:"yellow",
  },
  buttonGroup: {
    width: "80%",
    marginLeft: 0,
    top: -10,
    marginTop: 10,
    backgroundColor: "#EBE6EA",
    borderRadius: 10,
  },
  loadMore: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  advice: {
    height: 500,
    //backgroundColor:"gray",
    alignSelf: "center",
    width: "90%",
  },
  buttonAddtStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    top: -8,
  },
});
