import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

const exampleData = [...Array(20)].map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: index,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
      index * 5
    }, ${132})`,
  }));
  const imgData = [
    {
      id: 1,
      imgSource: require("../../assets/images/imgList.jpg"),
      title: "Đà Lạt Train Station",
      duration: "1 hr",
      time1: "09:00 AM",
      time2: "10:00 AM",
      reach: "Car",
    },
    {
      id: 2,
      imgSource: require("../../assets/images/imgList1.jpg"),
      title: "Tuyen Lam Lake",
      duration: "1 hr",
      time1: "11:00 AM",
      time2: "12:00 AM",
      reach: "Boat",
    },
    {
      id: 3,
      imgSource: require("../../assets/images/imgList2.jpg"),
      title: "Phuc Duc Mountain",
      duration: "2 hr",
      time1: "02:00 PM",
      time2: "04:00 PM",
      reach: "Car",
    },
    {
      id: 4,
      imgSource: require("../../assets/images/imgList3.jpg"),
      title: "Nem Nuong Ba Hung",
      duration: "1 hr",
      time1: "04:30 PM",
      time2: "05:30 PM",
      reach: "Car",
    },
    {
      id: 5,
      imgSource: require("../../assets/images/imgList3.jpg"),
      title: "Nem Nuong Ba Hung",
      duration: "1 hr",
      time1: "04:30 PM",
      time2: "05:30 PM",
      reach: "Car",
    },
    {
      id: 6,
      imgSource: require("../../assets/images/imgList3.jpg"),
      title: "Nem Nuong Ba Hung",
      duration: "1 hr",
      time1: "04:30 PM",
      time2: "05:30 PM",
      reach: "Car",
    },
    {
      id: 7,
      imgSource: require("../../assets/images/imgList3.jpg"),
      title: "Nem Nuong Ba Hung",
      duration: "1 hr",
      time1: "04:30 PM",
      time2: "05:30 PM",
      reach: "Car",
    },
  ];
export default class ScheduleDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: imgData,
    };
  }
  renderItem = ({ item, index, drag, isActive }) => {
    return (
       <TouchableOpacity
        style={{
          backgroundColor: isActive ? "gray" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.contentInside}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={item.imgSource} />
              </View>
              <View style={styles.infor}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text>Time: {item.duration}</Text>
                <Text>Reached by: {item.reach}</Text>
                <TouchableOpacity>
                  <Text style={{ color: "gray" }}>Ghi chú</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.timeContainer}>
                <Text style={{ color: "gray" }}>{item.time1}</Text>
                <Text style={{ color: "gray" }}>{item.time2}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
        <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
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
    scene: {
      flex: 1,
    },
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
  });
  