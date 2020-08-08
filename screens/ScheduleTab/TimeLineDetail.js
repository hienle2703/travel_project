import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { firebaseApp } from "../../components/FirebaseConfig";
import { Feather } from "@expo/vector-icons";

export default class TimeLineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: this.props.tabLabel,
      data: null,
      key: null,
      flexin: false,
      allData: null,
      arr: [],
      dataTake: null,
      call: null,
    };
  }
  // onClickSaveSchedule = async () => {
  //   //Lấy thời gian hiện tại
  //   let date = new Date();
  //   let n = date.getDate();
  //   let h = date.getMinutes();
  //   let g = date.getSeconds();
  //   let s = n + h * n + g;

  //   //Gọi tới người dùng
  //   const userAuth = firebaseApp.auth().currentUser;
  //   const split = userAuth.email;
  //   const splitted = split.substring(0, split.lastIndexOf("@")); // Tên người dùng đang đăng nhập

  //   // Tạo ra cái mã lịch trình lưu nó vô schedule của user
  //   const userRef = firebaseApp
  //     .database()
  //     .ref("user")
  //     .child(splitted)
  //     .child("schedule")
  //     .child("schedule_" + splitted + "_" + s);
  //   const newSche = "schedule_" + splitted + "_" + s;
  //   await userRef.set({
  //     name: newSche,
  //   });
  //   //Tạo ra cái mã chi tiết hành trình để nhét vô schedule nha, tự chế đê
  //   const newDetail = "detail_schedule_" + splitted + "_" + s;

  //   // Lấy ngày đi, ngày kết thúc
  //   const dateStart = this.props.dateStart;
  //   const dateEnd = this.props.dateEnd;
  //   // Lấy hình
  //   const imgHero = this.props.imgHero;
  //   // Lấy điểm đi điểm đến
  //   const locationStart = this.props.locationStart;
  //   const locationEnd = this.props.locationEnd;
  //   // Lấy tổng ngày đi
  //   const days = this.props.days;
  //   // Tạo ra cái lịch trình chi tiết lưu vô schedule tổng
  //   const scheduleRef = firebaseApp
  //     .database()
  //     .ref("schedule")
  //     .child("schedule_" + splitted + "_" + s);
  //   await scheduleRef.set({
  //     name: newSche,
  //     detail: newDetail,
  //     dateStart: dateStart,
  //     dateEnd: dateEnd,
  //     //imgHero: imgHero,
  //     start: locationStart,
  //     end: locationEnd,
  //     days: days,
  //   });
  //   // Tạo ra cái hành trình chi tiết nhét vào detail_schedule, lấy tên đã tạo ở trên luôn
  //   const detailRef = firebaseApp
  //     .database()
  //     .ref("detail_schedule")
  //     .child("user")
  //     .child("detail_schedule_" + splitted + "_" + s);
  //   await detailRef.set(this.state.arr);
  //   // Thông báo và trở lại trang chủ
  //   // Alert.alert(
  //   //   "",
  //   //   "You schedule has been saved",
  //   //   [
  //   //     {
  //   //       text: "OK",
  //   //       onPress: () => {
  //   //         this.setState({
  //   //           start: "",
  //   //           end: "",
  //   //           scheName: "",
  //   //           dateStart: null,
  //   //           dateEnd: null,
  //   //           curTime: null,
  //   //         }),
  //   //           this.props.onClickDetail.navigate("FeedScreen");
  //   //       },
  //   //     },
  //   //   ],
  //   //   { cancelable: false }
  //   // );
  // };
  onClickOpenMap=()=>{
    console.log("hihihi")
  }
  UNSAFE_componentWillMount = async () => {
    let arr = [];
    const key = this.props.keys;
    const day = this.props.days;
    const call = this.props.data;
    const allData = this.props.dataAll;
    const data = Object.values(call);
    arr.push(call);

    //console.log("=============", data, "Data truyền vào");
    this.setState({ data, flexin: true, allData, arr, call });
  };
  renderItem = ({ item, index, drag, isActive }) => {
    //const item = Object.values(this.state.call)
    return (
      <TouchableOpacity
        style={{
          backgroundColor: isActive ? "#DADADA" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        onLongPress={drag}
      >
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.contentInside}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: item.imgHero }} />
              </View>
              <View style={styles.infor}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text>Time: {item.index}</Text>
                <Text>Reached by: {item.by}</Text>
                <TouchableOpacity>
                  <Text style={{ color: "gray" }}>Ghi chú</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.timeContainer}>
                <Text style={{ color: "gray" }}>{item.timeStart}</Text>
                <Text style={{ color: "gray" }}>{item.timeEnd}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.deleteBtn}>
          <TouchableOpacity>
            <Feather name="x" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const a = this.props.tabLabel;
    const b = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          //data={Object.values(this.state.call)}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          //onDragEnd={({ data }) => this.props.onDragEnd(data)}
          onDragEnd={({ data }) => {
            this.props.onDragEnd(data,this.props.dayNumber), this.setState({ data });
            //console.log(data, "========");
          }}
        />

        {/* {(() => {
          switch (this.state.flexin) {
            case false:
              setTimeout(
                function () {
                  this.setState({ flexin: "true" });
                }.bind(this),
                3000
              );
              return <ActivityIndicator size="large" color="#DB5823" />;

            default:
              return (
                <DraggableFlatList
                  data={this.state.data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => `draggable-item-${item.id}`}
                  onDragEnd={({ data }) => this.setState({ data })}
                />
              );
          }
        })()} */}
        <View style={styles.floatButton}>
          <TouchableOpacity onPress={() => this.onClickOpenMap()}>
            <Text style={{ color: "white" }}>Open Map</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "yellow",
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
    width: "80%",
    flexDirection: "row",
  },
  deleteBtn: {
    backgroundColor: "#E0E0E0",
    left: 10,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",

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
});
