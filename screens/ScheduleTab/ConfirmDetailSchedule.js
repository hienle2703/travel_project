import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert
} from "react-native";
import {
  ScrollableTabView,
  DefaultTabBar,
  ScrollableTabBar,
} from "@valdio/react-native-scrollable-tabview";
import CustomTabBar from "./CustomTabBar";
import TimeLineDetail from "./TimeLineDetail";
import { firebaseApp } from "../../components/FirebaseConfig.js";

export default class ConfirmDetailSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      flexin: false,
      flexinImg: false,
      imgHero: null,
      dateStart: null,
      dateEnd: null,
      locationStart: null,
      locationEnd: null,
      name:null,
    };
  }

  UNSAFE_componentWillMount = async () => {
    const days = this.props.route.params.days;
    const imgHero = this.props.route.params?.imgHero;
    //Gọi database lấy ngày đi mẫu ra
    const dataCall = firebaseApp
      .database()
      .ref("detail_schedule")
      .child("example_DaLat")
      .child(days);
    const dataExample = await dataCall.once("value");
    let data = dataExample.val();

    this.setState({ data, flexin: true });
    if (imgHero != null) {
      this.setState({ flexinImg: true, imgHero: imgHero });
    }
    const dateStart = this.props.route.params.dateStart;
    const dateEnd = this.props.route.params.dateEnd;
    const locationStart = this.props.route.params.locationStart;
    const locationEnd = this.props.route.params.locationEnd;
    const name = this.props.route.params.name;
    this.setState({ dateStart, dateEnd, locationStart, locationEnd,days,name });
  };
  onDragEnd = (data,dayNumber)=>{
    // console.log(dayNumber,"DAY")
    // console.log(this.state.data,data)
    let dataAll = this.state.data
    let dataFirst = {};
   
    let i =0;
    data.map(item=>{

      dataFirst[i]=item
      i++
    })
    dataAll[dayNumber]= dataFirst
    
    this.setState({data: dataAll})
    //this.setState({ data })
    //console.log(this.state.data, "thay đổi")
  }
  onClickSaveSchedule = async () => {
    //Lấy thời gian hiện tại
    let date = new Date();
    let n = date.getDate();
    let h = date.getMinutes();
    let g = date.getSeconds();
    let s = n + h * n + g;

    //Gọi tới người dùng
    const userAuth = firebaseApp.auth().currentUser;
    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@")); // Tên người dùng đang đăng nhập

    // Tạo ra cái mã lịch trình lưu nó vô schedule của user
    const userRef = firebaseApp
      .database()
      .ref("user")
      .child(splitted)
      .child("schedule")
      .child("schedule_" + splitted + "_" + s);
    const newSche = "schedule_" + splitted + "_" + s;
    await userRef.set({
      name: newSche,
    });
    //Tạo ra cái mã chi tiết hành trình để nhét vô schedule nha, tự chế đê
    const newDetail = "detail_schedule_" + splitted + "_" + s;

    // Lấy ngày đi, ngày kết thúc
    const dateStart = this.state.dateStart;
    const dateEnd = this.state.dateEnd;
    // Lấy hình
    const imgHero = this.state.imgHero;
    // Lấy điểm đi điểm đến
    const locationStart = this.state.locationStart;
    const locationEnd = this.state.locationEnd;
    // Lấy tổng ngày đi
    const days = this.state.days;
    // Tạo ra cái lịch trình chi tiết lưu vô schedule tổng
    const scheduleRef = firebaseApp
      .database()
      .ref("schedule")
      .child("schedule_" + splitted + "_" + s);
    await scheduleRef.set({
      name: this.state.name,
      detail: newDetail,
      dateStart: dateStart,
      dateEnd: dateEnd,
      imgHero: imgHero,
      start: locationStart,
      end: locationEnd,
      days: days,
    });
    // Tạo ra cái hành trình chi tiết nhét vào detail_schedule, lấy tên đã tạo ở trên luôn
    const detailRef = firebaseApp
      .database()
      .ref("detail_schedule")
      .child("user")
      .child("detail_schedule_" + splitted + "_" + s);
    await detailRef.set(this.state.data);
    //Thông báo và trở lại trang chủ
    Alert.alert(
      "",
      "You schedule has been saved",
      [
        {
          text: "OK",
          onPress: () => {
            this.setState({
              start: "",
              end: "",
              scheName: "",
              dateStart: null,
              dateEnd: null,
              curTime: null,
            }),
              this.props.navigation.replace("ScheduleScreen");
          },
        },
      ],
      { cancelable: false }
    );
  };
  _renderItem = () => {
    let array = [];
    let countday = 0;
    const days = this.props.route.params.days;
    const dateStart = this.props.route.params.dateStart;
    let getDay = dateStart.substring(3, 5);
    let getMonth = dateStart.substring(0, 2);
    let dateGet = this.state.data;
    console.log(dateGet,"hihi")
    for (let i = 1; i <= days; i++) {
      let month = getMonth;
      let label = getDay + "/" + month;
      let day = this.state.days;
      let id = "day" + i;
      getDay++;

      let datas = dateGet[id];

      array.push(
        <TimeLineDetail
          keys={i}
          dayNumber = {id}
          days={day}
          tabLabel={label}
          data={datas}
          dataAll={dateGet}
          dateStart={this.state.dateStart}
          dateEnd={this.state.dateEnd}
          locationStart={this.state.locationStart}
          locationEnd={this.state.locationEnd}
          onClickDetail={this.props.navigation}
          imgHero={this.state.imgHero}
          onClickSaveSchedule={this.onClickSaveSchedule}
          onDragEnd = {this.onDragEnd}
        />
      );
    }
    return array;
  };
  
  render() {
    console.log(this.state.data)
    const days = this.props.route.params.days;
    const { imgHero } = this.props.route.params.imgHero;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          
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
});
