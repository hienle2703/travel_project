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
  Alert,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ScheduleItem from "../../components/ScheduleItem";
import { MonoText } from "../../components/StyledText";
import TabBarIcon from "../../components/TabBarIcon";
import DatePicker from "react-native-datepicker";
import { auth } from "firebase";
import { firebaseApp } from "../../components/FirebaseConfig";

export default class UseSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      scheName: "",
      locationStart: "",
      locationEnd: "",
      dateStart: null,
      dateEnd: null,
      curTime: null,
      imgHero: null,
      locationKey: null,
    };
  }
  onClickDestination() {
    this.props.navigation.navigate("searchLocation");
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  onClickSaveSchedule = async () => {

    const a = this.props.route.params?.locationStart;
    if (a !== null) {
      this.setState({ locationStart: a })
    }

    const b = this.props.route.params?.locationEnd;
    if (b !== null) {
      this.setState({ locationEnd: b });
    }
    const c = this.props.route.params?.locationKey;
    const d = this.props.route.params?.locationImage;

    const date = this.state.curTime;
    const user = this.state.user;
    const saveCall = firebaseApp
      .database()
      .ref("schedule")
      .child("schedule_" + user + "_" + date);

     


    // const userCall = firebaseApp.database().ref("user/"+user)
    const newSche = "schedule_"+user+"_"+date; 
    const userCall = firebaseApp.database().ref("user/"+user+"/schedule/"+ newSche)
    await userCall.set({
      name: newSche
    })

   
    await saveCall.set({
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
      start: this.state.locationStart,
      end: this.state.locationEnd,
      name: this.state.scheName,
      imgHero: d
    });
    
    Alert.alert(
      "",
      "Successfully Added Your New Adventure",
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
  componentDidMount() {
    let date = new Date();
    let n = date.getDate();
    let h = date.getMinutes();
    let g = date.getSeconds();
    let s = n + h * n + g;

    this.setState({ curTime: s });
    //
    const userAuth = firebaseApp.auth().currentUser;
    const split = userAuth.email;
    const splitted = split.substring(0, split.lastIndexOf("@")); // Tên người dùng đang đăng nhập

    const a = this.props.route.params?.locationStart;
    if (a !== null) {
      this.setState({ locationStart: a })
    }

    const b = this.props.route.params?.locationEnd;
    if (b !== null) {
      this.setState({ locationEnd: b });
    }
    const c = this.props.route.params?.locationKey;
    const d = this.props.route.params?.locationImage;

    this.setState({ user: splitted, locationKey: c, imgHero: d });
    
    
  }
  render() {
    const a = this.props.route.params?.locationStart;
    const b = this.props.route.params?.locationEnd;

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

        <View style={styles.formContainer}>
          <View style={styles.choiceTravel}>
            <View style={styles.line}>
              <View style={{ width: "90%" }}>
                <Text style={styles.txtTitle}>Schedule Name: </Text>
                <TextInput
                  value={this.state.scheName}
                  onChangeText={(scheName) => this.setState({ scheName })}
                  style={styles.txtInput}
                ></TextInput>
              </View>
            </View>

            <View style={styles.line}>
              <View style={{ width: "90%" }}>
                <Text style={styles.txtTitle}>Starting location: </Text>
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => {
                    this.props.navigation.navigate("searchLocationScreen");
                    
                  }}
                >
                  <View style={styles.inputBox}>
                    {(() => {
                      switch (this.state.locationStart) {
                        case "":
                          return (
                            <Text style={styles.txtTap}>
                              Tap to pick a location
                            </Text>
                          );
                        default:
                          return <Text style={styles.txtTap}>{a}</Text>;
                      }
                    })()}
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.line}>
              <View style={{ width: "90%" }}>
                <Text style={styles.txtTitle}>Destination: </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("searchDestinationScreen");
                    
                  }}
                  style={styles.btnContainer}
                >
                  <View style={styles.inputBox}>
                    {(() => {
                      switch (this.state.locationEnd) {
                        case "":
                          return (
                            <Text style={styles.txtTap}>
                              Tap to pick your destination
                            </Text>
                          );
                        default:
                          return <Text style={styles.txtTap}>{b}</Text>;
                      }
                    })()}
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
                    date={this.state.dateStart}
                    mode="date"
                    placeholder="Select date"
                    format="DD/MM"
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
                      this.setState({ dateStart: date });
                      console.log(this.state.dateStart);
                    }}
                  />
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.txtTitle}> Date End </Text>
                  <DatePicker
                    style={styles.datePicker}
                    date={this.state.dateEnd}
                    mode="date"
                    placeholder="Select date"
                    format="DD/MM"
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
                      this.setState({ dateEnd: date });
                      console.log(this.state.dateEnd);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.saveBtnContainer}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => this.onClickSaveSchedule()}
          >
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
  txtInput: {
    height: 30,
    width: "100%",
    backgroundColor: "#D4D4D4",
    alignSelf: "center",
    borderRadius: 10,
    color: "black",
    left: 5,
  },
  formContainer: {
    marginTop: 40,
  },
});