import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { TabView, SceneMap } from "react-native-tab-view";
import { TabBar } from "react-native-tab-view";
import TabBarIcon from "../../components/TabBarIcon";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
import ScheduleDay from "../ScheduleTab/ScheduleDay";

const initialLayout = { width: Dimensions.get("window").width };
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
const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
    index * 5
  }, ${132})`,
}));
export default class ScheduleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "15/08" },
        { key: "second", title: "16/08" },
        { key: "third", title: "17/08" },
      ],
      data: exampleData,
    };
  }
  onClickOpenMap() {
    this.props.navigation.navigate("MapSchedule");
  }
  onClickDetail() {
    this.props.navigation.navigate("ScheduleDetail");
  }
  onClickTest() {
    this.props.navigation.navigate("test_DragAndDrop");
  }
  setIndex = (index) => {
    console.log(index);
    this.setState({ index });
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      // <TouchableOpacity
      //   style={{
      //     backgroundColor: isActive ? "gray" : item.backgroundColor,
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      //   onLongPress={drag}
      // >
      //   <View style={styles.cardContainer}>
      //     <View style={styles.card}>
      //       <View style={styles.contentInside}>
      //         <View style={styles.imgContainer}>
      //           <Image style={styles.img} source={item.imgSource} />
      //         </View>
      //         <View style={styles.infor}>
      //           <Text style={{ fontSize: 15, fontWeight: "bold" }}>
      //             {item.title}
      //           </Text>
      //           <Text>Time: {item.duration}</Text>
      //           <Text>Reached by: {item.reach}</Text>
      //           <TouchableOpacity>
      //             <Text style={{ color: "gray" }}>Ghi chú</Text>
      //           </TouchableOpacity>
      //         </View>
      //         <View style={styles.timeContainer}>
      //           <Text style={{ color: "gray" }}>{item.time1}</Text>
      //           <Text style={{ color: "gray" }}>{item.time2}</Text>
      //         </View>
      //       </View>
      //     </View>
      //   </View>
      // </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? "blue" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
        onPress={()=> this.onPressNumber()}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };
  FirstRoute = () => (
    <View style={[styles.scene]}>
      <ScrollView>
        <View style={styles.bao}>
          {imgData.map((item) => {
            return (
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
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.floatButton}>
        <TouchableOpacity onPress={() => this.onClickOpenMap()}>
          <Text style={{ color: "white" }}>Open Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  SecondRoute = () => (
    <View style={[styles.scene]}>
      <ScrollView>
        <View style={styles.bao}>
          {imgData.map((item) => {
            return (
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
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.floatButton}>
        <TouchableOpacity onPress={() => this.onClickOpenMap()}>
          <Text style={{ color: "white" }}>Open Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  ThirdRoute = () => (
    <View style={styles.bao}>
      <DraggableFlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        //onDragEnd={({ data }) => this.setState({ data })}
      />
    </View>
  );
  setIndex = (index) => {
    this.setState({ index });
  };
  renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#DB5823" }}
      style={{ backgroundColor: "white", color: "#DB5823" }}
      renderLabel={({ route }) => (
        <Text style={{ color: "#DB5823", fontSize: 15 }}>{route.title}</Text>
      )}
    />
  );
  renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <ScheduleDay/>;
      case "second":
        return this.SecondRoute;
        case "third":
          return this.ThirdRoute;
    }
  };
  // renderScene = SceneMap({
  //   first: this.FirstRoute,
  //   second: this.SecondRoute,
  //   third: this.ThirdRoute,
  // });

  render() {
    const { index, routes } = this.state;
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
                width: "100%",
                zIndex: 1,
                position: "absolute",
                alignSelf: "center",
              }}
              blurRadius={2}
              source={require("../../assets/images/imgHero.jpg")}
            />
            <Text
              style={{
                top: 13,
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                zIndex: 100,
                color: "white",
              }}
            >
              A SHORT TRIP TO DALAT THIS AUTUMM
            </Text>
            <TouchableOpacity
              style={{
                top: 13,
                alignSelf: "center",
                zIndex: 100,
              }}
              onPress={() => this.onClickTest()}
            >
              <Text
                style={{ color: "yellow", fontSize: 15, fontWeight: "bold" }}
              >
                Drag and Drop
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.setIndex(index)}
          initialLayout={initialLayout}
          style={{ backgroundColor: "white", color: "#DB5823" }}
        />
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

    marginTop: 8,
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
