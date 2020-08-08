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
import { firebaseApp } from "../../components/FirebaseConfig";
import Dialog, { DialogContent } from "react-native-popup-dialog";
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
  constructor(props) {
    super(props);
    this.state = {
      member: null,
      memberCount: null,
      groupNam: null,
      scheduleName: null,
      user: null,
      arrayGroup: [],
      flexin: false,
      allContainer: null,
      visible: false,
      userCur: null,
    };
  }
  onClickCreateGroup = () => {
    console.log(this.state.userCur,"=============")
    if (this.state.userCur !== null) {
      this.props.navigation.navigate("createGroup");
    } else {
      this.setState({ visible: true });
    }
  };
  onClickDetailGroup(node, name) {
    let nodeA = node;
    let nameA = name;
    this.props.navigation.navigate("DetailGroup", { nodeA, nameA });
  }
  UNSAFE_componentWillMount = async () => {
    const userCur = firebaseApp.auth().currentUser;
    const split = userCur.email;
    //Cắt chuỗi để lấy cụm trước @
    const splitted = split.substring(0, split.lastIndexOf("@"));
    const itemRefContainer = firebaseApp
      .database()
      .ref("group")
      .child("group_" + splitted);
    let test2 = await itemRefContainer.once("value");
    let allContainer = test2.val();
    this.setState({ allContainer });
  };
  componentDidMount = async () => {
    //Lấy thông tin user hiện tại
    const userCur = firebaseApp.auth().currentUser;
    const split = userCur.email;
    //Cắt chuỗi để lấy cụm trước @
    const splitted = split.substring(0, split.lastIndexOf("@"));

    //Gọi lấy ra tất cả mã nhóm của người dùng đang đăng nhập
    let arrayAll = [];
    const itemRef = firebaseApp
      .database()
      .ref("user")
      .child(splitted)
      .child("group");
    let test = await itemRef.once("value");
    let all = test.val();
    for (var key in all) {
      arrayAll.push(key);
    }

    //Gọi tới "group" ở ngoài để lấy ra tất cả mã nhóm
    let arrayContainer = [];
    const itemRefContainer = firebaseApp
      .database()
      .ref("group")
      .child("group_" + splitted);
    let test2 = await itemRefContainer.once("value");
    let allContainer = test2.val();
    for (var key in allContainer) {
      arrayContainer.push(key);
    }
    //Giao giữa 2 mảng, lấy ra những phần chung
    let intersect = arrayContainer.filter((value) => arrayAll.includes(value)); // lấy ra mã nhóm chung

    let arrayFullInfor = [];
    //Chỉ lấy ra những phần tử đó từ trong arrayContainer để có đầy đủ thông tin nhóm
    for (var i in intersect) {
      let child = intersect[i];
      let a = firebaseApp
        .database()
        .ref("group")
        .child("group_" + splitted)
        .child(child);
      let takeA = await a.once("value");
      arrayFullInfor.push(takeA);
    }
    this.setState({ arrayGroup: arrayFullInfor, flexin: true, userCur });
  };
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
              <TouchableOpacity onPress={() => this.onClickCreateGroup()}>
                <Text>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.invite}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Your Groups
              </Text>
            </View>
            {(() => {
              switch (this.state.allContainer) {
                case null:
                  // setTimeout(
                  //   function () {
                  //     this.setState({  });
                  //   }.bind(this),
                  //   1000
                  // );
                  return (
                    <View style={styles.emptyView}>
                      <Text style={{ alignSelf: "center" }}>
                        Oops, you don't have any group.
                      </Text>
                      <Image
                        style={styles.nullImage}
                        source={{
                          uri:
                            "https://image.flaticon.com/icons/png/512/16/16441.png",
                        }}
                      />
                    </View>
                  );

                default:
                  return (
                    <View>
                      {!this.state.flexin ? (
                        <View style={styles.indicatorContainer}>
                          <ActivityIndicator
                            size="large"
                            color="#DB5823"
                            style={styles.indicatorStyle}
                          />
                        </View>
                      ) : (
                        <View style={styles.inviteContainer}>
                          {this.state.arrayGroup.map((item) => {
                            var obj = JSON.stringify(item);
                            var objectValue = JSON.parse(obj);

                            let countMem = [];
                            countMem = objectValue;
                            return (
                              <TouchableOpacity
                                onPress={() =>
                                  this.onClickDetailGroup(
                                    { node: objectValue.node },
                                    { name: objectValue.groupName }
                                  )
                                }
                              >
                                <View style={styles.inviteCard}>
                                  <View style={styles.ava}>
                                    <Image
                                      style={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: 80,
                                      }}
                                      source={{
                                        uri:
                                          "https://www.kindpng.com/picc/m/382-3825510_flat-people-icon-png-transparent-png.png",
                                      }}
                                    />
                                  </View>
                                  <View style={styles.buttonGroup}>
                                    <View style={styles.nameInvite}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {objectValue.groupName}
                                      </Text>
                                      {/* <Text style={{ color: "gray", fontSize: 12 }}>
                                Member: {item.count}
                              </Text> */}
                                      <Text
                                        style={{ color: "gray", fontSize: 12 }}
                                      >
                                        Schedule: {objectValue.scheduleName}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            );
                          })}
                          {/* <View style={styles.loadMore}>
                    <TouchableOpacity>
                      <Text style={{ color: "gray", fontWeight: "bold" }}>
                        More
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                        </View>
                      )}
                    </View>
                  );
              }
            })()}
          </View>

          <View style={styles.advice}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Groups you're in
              </Text>
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
        </View>
      </ScrollView>
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
    width: "90%",
    marginLeft: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  inviteContainer: {
    alignSelf: "center",
    width: "90%",

    marginTop: 10,
    marginBottom: 10,
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
  indicatorContainer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorStyle: {
    marginTop: 60,
  },
  emptyView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  nullImage: {
    width: 130,
    height: 120,
    alignSelf: "center",
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
