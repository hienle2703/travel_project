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
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ScheduleItem from "../../components/ScheduleItem";
import { MonoText } from "../../components/StyledText";
import TabBarIcon from "../../components/TabBarIcon";
import DatePicker from "react-native-datepicker";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

export default class createFeedScreen extends Component {
  constructor(props) {
    super(props);

    //ref('lớp cha').child( 'lớp con')
    this.itemRef = firebaseApp.database();
    this.state = {
      image: "",
    };
  }
  // _pickImage = async () => {
  //   try {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });
  //     if (!result.cancelled) {
  //       this.setState({ image: result.uri });
  //     }

  //     console.log(result);
  //   } catch (E) {
  //     console.log(E);
  //   }
  // };

  render() {
    //let { image } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backBtn}>
            <TouchableOpacity>
              <Ionicons name="ios-arrow-back" size={24} color="#DB5823" />
            </TouchableOpacity>
          </View>
          <View style={styles.addBtn}>
            <TouchableOpacity style={{alignSelf:"flex-end"}}>
              <Text style={{alignSelf:"flex-end", color:"#DB5823"}}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.varBox}>
          <View style={styles.avaContainer}>
            <Image
              style={styles.avata}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh6iD4NmOaeFexRWXdkckExxeLGUbRniiyCwQ6duX3Xw047r_q&usqp=CAU",
              }}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={{ color: "black", left: 10 }}
              multiline={true}
              numberOfLines={4}
              placeholder=" Share your thoughts"
            ></TextInput>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBtn}>
            <Ionicons name="ios-add" size={30} color="#DB5823" />
            <Text style={{ color: "#DB5823" }}>Add your images</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View> */}

        {/* <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: 20,
          }}
        >
          <Button title="Share your journey"></Button>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    //justifyContent: "center",
    //alignItems: "center",
  },
  header: {
    height: 80,
    flexDirection: "row",
    borderWidth:0.2,
    borderBottomColor:"gray"
  },
  inputBox: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,

    width: 250,
    left: -20,
  },
  avaImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 100,
  },
  avaContainer: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  varBox: {
    flexDirection: "row",
    height: 100,
    width: "85%",
    alignSelf: "flex-start",
    marginTop:30,
  },
  avata: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignSelf: "center",
  },
  uploadContainer: {
    top: 30,
    height: 100,
    width: "85%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    height: 100,
    width: "100%",
    //borderWidth: 0.5,
    // borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  backBtn: {
    alignItems: "flex-start",
    top: 40,
    left: 20,
  },
  addBtn: {
    left: 290,
    top: 40,
  },
});
