import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
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
import TabBarIcon from "../../components/TabBarIcon";
import { Entypo } from "@expo/vector-icons";

const imgData = [
  {
    id: 1,
    imgSource: require("../../assets/images/imgHero.jpg"),
    location: "Ho Chi Minh city - Da Lat, Lam Dong",
    date: "15/10 to 18/10",
    title: "A SHORT TRIP TO DA LAT THIS AUTUMN",
    status: "Private",
    member: 2,
    view: "2 views",
  },
  {
    id: 2,
    imgSource: require("../../assets/images/imgHero1.jpg"),
    location: "Ho Chi Minh city - Hoi An",
    date: "15/11 to 18/11",
    title: "HOI AN VINTAGE TOWN",
    status: "Open",
    member: 1,
    view: "102 views",
  },
  {
    id: 3,
    imgSource: require("../../assets/images/imgHero2.jpg"),
    location: "Ho Chi Minh city - Ha Noi",
    date: "03/12 to 07/12",
    title: "VIET NAM CAPITAL",
    status: "Open",
    member: 1,
    view: "200 views",
  },
  {
    id: 4,
    imgSource: require("../../assets/images/imgHero3.jpg"),
    location: "Ha Noi - Sapa",
    date: "07/12 to 12/12",
    title: "THE CITY IN THE FOG",
    status: "Private",
    member: 5,
    view: "13 views",
  },
  {
    id: 5,
    imgSource: require("../../assets/images/imgHero4.jpg"),
    location: "Ho Chi Minh city - Vung Tau, Ba Ria",
    date: "20/12 to 22/12",
    title: "GET SOME VITAMIN SEA",
    status: "Open",
    member: 12,
    view: "142 views",
  },
];
const FirstRoute = () => (
  <View style={[styles.scene]}>
    <ScrollView>
      <View>
        {imgData.map((item) => {
          return (
            <TouchableOpacity>
              <View style={styles.containerScene}>
                <View style={styles.cardSchedule}>
                  <Image
                    style={{
                      height: "50%",
                      width: "90%",
                      alignSelf: "center",
                      borderRadius: 20,
                    }}
                    source={item.imgSource}
                  />
                  <View style={styles.txt}>
                    <View style={styles.location}>
                      <View>
                        <Entypo name="location-pin" size={15} color="#DB5823" />
                      </View>
                      <Text style={{ color: "gray" }}>{item.location}</Text>
                    </View>
                    <View style={styles.titleCard}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#DB5823",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={styles.detailCard}>
                      <View>
                        <Text style={{ color: "gray" }}>Date: {item.date}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "gray", bottom: 2 }}>
                          {item.view}{" "}
                        </Text>
                        <Ionicons name="md-eye" size={15} color="gray" />
                      </View>
                    </View>
                    <View style={styles.descriptionCard}>
                      <Text>Status: {item.status}</Text>
                      <Text>Member: {item.member}</Text>
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

const SecondRoute = () => <View style={[styles.scene]}>
<ScrollView>
  <View>
    {imgData.map((item) => {
      return (
        <TouchableOpacity>
          <View style={styles.containerScene}>
            <View style={styles.cardSchedule}>
              <Image
                style={{
                  height: "50%",
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                source={item.imgSource}
              />
              <View style={styles.txt}>
                <View style={styles.location}>
                  <View>
                    <Entypo name="location-pin" size={15} color="#DB5823" />
                  </View>
                  <Text style={{ color: "gray" }}>{item.location}</Text>
                </View>
                <View style={styles.titleCard}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#DB5823",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={styles.detailCard}>
                  <View>
                    <Text style={{ color: "gray" }}>Date: {item.date}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "gray", bottom: 2 }}>
                      {item.view}{" "}
                    </Text>
                    <Ionicons name="md-eye" size={15} color="gray" />
                  </View>
                </View>
                <View style={styles.descriptionCard}>
                  <Text>Status: {item.status}</Text>
                  <Text>Member: {item.member}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
</ScrollView>
</View>;

const ThirdRoute = () => <View style={[styles.scene]}>
<ScrollView>
  <View>
    {imgData.map((item) => {
      return (
        <TouchableOpacity>
          <View style={styles.containerScene}>
            <View style={styles.cardSchedule}>
              <Image
                style={{
                  height: "50%",
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                source={item.imgSource}
              />
              <View style={styles.txt}>
                <View style={styles.location}>
                  <View>
                    <Entypo name="location-pin" size={15} color="#DB5823" />
                  </View>
                  <Text style={{ color: "gray" }}>{item.location}</Text>
                </View>
                <View style={styles.titleCard}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#DB5823",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={styles.detailCard}>
                  <View>
                    <Text style={{ color: "gray" }}>Date: {item.date}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "gray", bottom: 2 }}>
                      {item.view}{" "}
                    </Text>
                    <Ionicons name="md-eye" size={15} color="gray" />
                  </View>
                </View>
                <View style={styles.descriptionCard}>
                  <Text>Status: {item.status}</Text>
                  <Text>Member: {item.member}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
</ScrollView>
</View>;

const initialLayout = { width: Dimensions.get("window").width };

export default function ScheduleScreen() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Your Plans" },
    { key: "second", title: "ONGOING TRIP" },
    { key: "third", title: "COMPLETED" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              top: 13,
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "center",
              left: 10,
            }}
          >
            Your Schedule
          </Text>
        </View>

        <View style={styles.addBtn}>
          <TouchableOpacity style={{ color: "#DB5823" }}>
            <TabBarIcon
              style={{ color: "#DB5823", alignItems: "flex-end" }}
              name="ios-add-circle"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ backgroundColor: "white" }}
        //indicatorStyle={{ backgroundColor: "white", color: "#DB5823" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 0.11,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  addBtn: {
    justifyContent: "flex-end",
    left: 105,
    top: 13,
  },
  cardSchedule: {
    height: 300,
    width: "100%",
    top: 30,
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
});
