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

export default class createScheduleScreen extends Component {
  state = {};
  onClickDestination() {
    this.props.navigation.navigate("searchLocation");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <View>
            <TabBarIcon name="ios-git-network" />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("searchLocation");
            }}
          >
            <View>
              <Text>Starting location: </Text>
              <Text style={{ color: "gray" }}>Tap to pick a location</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <View>
            <TabBarIcon name="ios-git-network" />
          </View>
          <View>
            <Text>Destination: </Text>
            <TouchableOpacity onPress={() => this.onClickDestination()}>
              <Text style={{ color: "gray" }}>
                Tap to pick another location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}>
          <View style={{ flex: 0.5 }}>
            <TabBarIcon name="ios-git-network" />
          </View>
          <View style={{ flex: 4 }}>
            <Text>Start Date</Text>
            <DatePicker
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM"
              minDate="2020-05-01"
              maxDate="2021-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>
          <View style={{ flex: 4 }}>
            <Text>End Date</Text>
            <Text></Text>
          </View>
        </View>

        <View style={styles.line}>
          <View>
            <TabBarIcon name="ios-git-network" />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Members :</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SearchFriend")}
            >
              <Text style={{ color: "gray" }}>
                Choose friends from your connections
              </Text>
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
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  flatList: {
    margin: 20,
    marginTop: 5,
  },
  line: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    margin: 20,
  },
  datePicker: {
    width: 100,
    borderColor: "white",
    borderBottomWidth: 0,
  },
});
