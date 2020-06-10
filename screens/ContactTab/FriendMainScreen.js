import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default class FriendMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}></View>

          <View style={styles.search}>
            <View style={styles.title}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Search your friends
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.searchBox}>
                <TextInput
                  style={{ left: 10, color: "black" }}
                  placeholder="Find your friends"
                ></TextInput>
              </View>
              <View style={styles.searchIcon}>
                <TouchableOpacity>
                  <AntDesign name="search1" size={24} color="#DB5823" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.invite}>
            <View style={styles.titleInvite}>
              <Text style={{ color: "#DB5823", fontWeight: "bold" }}>
                Friend Requests
              </Text>
              <View style={styles.countInvite}>
                <Text>23</Text>
              </View>
            </View>

            <View style={styles.inviteContainer}>
              <View style={styles.inviteCard}>
                <View style={styles.ava}>
                  <Image
                    style={{ height: 70, width: 70, borderRadius: 80 }}
                    source={{
                      uri:
                        "https://png.pngtree.com/element_our/png_detail/20181026/avatar-vector-icon-man-vector-symbol-avatar-icon-png_219941.jpg",
                    }}
                  />
                </View>
                <View style={styles.buttonGroup}>
                  <View style={styles.nameInvite}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>Huy Le</Text>
                  </View>
                  <View style={styles.buttonSplit}>
                    <TouchableOpacity style={styles.buttonAcceptStyle}>
                      <Text style={{color:"white"}}>Accept</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.buttonDeleteStyle}>
                      <Text >Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.advice}>
            <Text>Gợi ý kết bạn</Text>
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
    height: 100,
    backgroundColor: "yellow",
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
    height: 200,
    width: "90%",
    alignSelf: "center",
    //flexDirection:"row"
    // backgroundColor: "gray",
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
  invite: {
    height: 600,
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
  nameInvite:{
    height:40,
    left:15,
    top:8
  },
  buttonGroup: {
    width: "70%",
    marginLeft: -20,
    top:-5,
  },
  buttonSplit: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonAcceptStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#DB5823",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonDeleteStyle: {
    height: 30,
    width: 100,
    backgroundColor: "#CDCDCD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  advice: {
    height: 300,
    backgroundColor: "blue",
  },
});
