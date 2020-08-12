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

  onClickOpenMap = () => {
    console.log("hihihi");
  };
  onClickAddPlace = () => {
    console.log("add");
  };
  onClickDelete = (item) => {
    Alert.alert(
      "",
      "Do you want to remove this place?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            this.setState({}),
              //this.props.navigation.replace("ConfirmDetailSchedule");
              this.onClickConfirmDelete(item);
          },
        },
      ],
      { cancelable: false }
    );
  };
  onClickConfirmDelete = (item) => {
    let itemDelete = item;
    let array = this.state.data;
    const result = array.filter((item) => item !== itemDelete);
    this.setState({ data: result });
  };
  componentDidMount = async () => {
    let arrayFull = [];
    const locationEndId = this.props.id;
    // const info = firebaseApp.database().ref("location").child(locationEndId).child("places")
    // const infoSet = await info.once("value")
    const call = this.props.data;
    const data = Object.values(call);
    data.map((item) => {
      let info = firebaseApp
        .database()
        .ref("location")
        .child(locationEndId)
        .child("places")
        .child(item.id)
        .once("value");

      arrayFull.push(info.val());
      //console.log(infoValue)
    });
    console.log(arrayFull);
  };
  UNSAFE_componentWillMount = async () => {
    let arr = [];

    const key = this.props.keys;
    const day = this.props.days;
    const call = this.props.data;
    const allData = this.props.dataAll;
    const data = Object.values(call);

    // data.map(item=>{
    //   let info = firebaseApp.database().ref("location").child(locationEndId).child("places").child(item.id).once("value")

    //   arrayFull.push(info)
    //   //console.log(infoValue)
    // })
    // console.log(arrayFull)
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
          <TouchableOpacity onPress={() => this.onClickDelete(item)}>
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
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          //onDragEnd={({ data }) => this.props.onDragEnd(data)}
          onDragEnd={({ data }) => {
            this.props.onDragEnd(data, this.props.dayNumber),
              this.setState({ data });
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
        <View style={styles.bottomContainer}>
          <View style={styles.floatButton}>
            <TouchableOpacity onPress={() => this.onClickOpenMap()}>
              <Text style={{ color: "white" }}>Open Map</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addButton}>
            <TouchableOpacity onPress={() => this.onClickAddPlace()}>
              <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>
          </View>
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
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#DB5823",
    alignItems: "center",
    justifyContent: "center",
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
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  addButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "gray",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
  },
});
