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
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ScheduleItem from "../../components/ScheduleItem";
import { MonoText } from "../../components/StyledText";
import TabBarIcon from "../../components/TabBarIcon";
import DatePicker from "react-native-datepicker";
import { auth } from "firebase";

export default class createScheduleScreen extends Component {
  state = {};
  onClickDestination() {
    this.props.navigation.navigate("searchLocation");
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
        </View>
        <View style={styles.choiceTravel}>
          <View style={styles.line}>
            <View style={{ width: "90%" }}>
              <Text style={styles.txtTitle}>Schedule Name: </Text>
              <TextInput style={styles.txtInput}></TextInput>
            </View>
          </View>

          <View style={styles.line}>
            <View style={{ width: "90%" }}>
              <Text style={styles.txtTitle}>Starting location: </Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  this.props.navigation.navigate("searchLocation");
                }}
              >
                <View style={styles.inputBox}>
                  <Text style={styles.txtTap}>Tap to pick a location</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}>
            <View style={{ width: "90%" }}>
              <Text style={styles.txtTitle}>Destination: </Text>
              <TouchableOpacity
                onPress={() => this.onClickDestination()}
                style={styles.btnContainer}
              >
                <View style={styles.inputBox}>
                  <Text style={styles.txtTap}>
                    Tap to pick another location
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}>
            <View>
              <View style={styles.dateView}>
                <Text style={styles.txtTitle}>Start Date</Text>
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date}
                  mode="date"
                  placeholder="Select date"
                  format="DD-MM"
                  minDate={this.state.date}
                  maxDate="2021-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={true}
                  customStyles={{
                    dateIcon: {
                      position: "relative",
                    },
                    dateInput: {
                      borderColor: "white",
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({ date: date });
                  }}
                />
              </View>
              <View style={styles.dateView}>
                <Text style={styles.txtTitle}> Date End </Text>
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date}
                  mode="date"
                  placeholder="Select date"
                  format="DD-MM"
                  minDate="2020-05-01"
                  maxDate="2021-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={true}
                  customStyles={{
                    dateIcon: {
                      position: "relative",
                    },
                    dateInput: {
                      borderColor: "white",
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({ date: date });
                  }}
                />
              </View>
            </View>
          </View>
          {/* <View style={styles.line}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtTitle}>Members :</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SearchFriend")}
              >
                <View style={styles.inputBox}>
                  <Text style={styles.txtTap}>
                    Choose friends from your connections
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>

        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save Your Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
  },
  header: {
    height: 100,
    justifyContent: "center",
  },
  choiceTravel: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flatList: {
    margin: 20,
    marginTop: 5,
  },
  line: {
    //margin: 15,
    marginTop: 10,
    marginLeft: 15,
  },
  datePicker: {
    width: 200,
    borderColor: "white",
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: 5,
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
  },
  dateView: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    marginBottom: 20,
    top: 10,
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
    color: "#DB5823",
  },
  inputBox: {
    margin: 5,
    width: "100%",
    borderColor: "gray",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: "#DB5823",
  },
  txtTap: {
    margin: 10,
    color: "gray",
  },
  btnContainer: {
    width: "100%",
    //backgroundColor: "gray",
    alignSelf: "center",
  },
  saveBtnContainer: {
    //backgroundColor:"gray",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  saveBtn: {
    backgroundColor: "#DB5823",
    height: 40,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  saveBtnText: {
    color: "white",
  },
  txtInput:{
    height:30,
    width:"100%",
    backgroundColor:"#D4D4D4",
    alignSelf:"center",
    borderRadius:10,
    color:"black",
    left:5,
  }
});
