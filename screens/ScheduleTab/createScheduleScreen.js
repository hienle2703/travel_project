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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.choiceTravel}>
          <View style={styles.line}>         
            <View>
                <Text style={styles.txtTitle}>Starting location: </Text>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate("searchLocation");
                }}>
                  <View style={styles.inputBox}>
                    <Text style={styles.txtTap}>Tap to pick a location</Text>
                  </View>
                </TouchableOpacity>
            </View>          
          </View>
          <View style={styles.line}>
            <View>
              <Text style={styles.txtTitle}>Destination: </Text>
              <TouchableOpacity onPress={() => this.onClickDestination()}>
                <View style={styles.inputBox}>
                    <Text style={styles.txtTap}>Tap to pick another location</Text>
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
                                      
                      borderColor:'white'
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({ date: date });
                  }}
                />
              </View>
              <View style={styles.dateView}>
                <Text style={styles.txtTitle} > Date End </Text>
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
                                      
                      borderColor: "white"
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({ date: date });
                  }}
                />
              </View>
            </View>
            
            
          </View>
          <View style={styles.line}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtTitle}>Members :</Text>
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("SearchFriend")}
              >
                <View style={styles.inputBox}>
                    <Text style={styles.txtTap}>Choose friends from your connections</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    
  },
  choiceTravel:{
    flex:0.9,
    backgroundColor: "white",
    borderRadius: 20,
    width: 350,
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
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    margin:15,
    
    
  },
  datePicker: {
    width: 200,
    borderColor: "white",
    borderWidth:1,
    borderColor: 'gray',
    marginLeft:5,
    borderWidth:2,
    margin:10
  },
  dateView:{
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  txtTitle:{
    fontSize: 15,
    fontWeight: "bold",
    margin:10,
  },
  inputBox: {
    margin:5,    
    width: 310,
    borderColor: "gray",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: "#DB5823",
  },
  txtTap:{
    margin: 10,
    color: 'gray'
    

  }
});
