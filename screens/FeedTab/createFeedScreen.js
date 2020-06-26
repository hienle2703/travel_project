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
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

export default class createFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      image: "",
      ava: null,
      description:null,
      imgHeroPost: null,
      scheduleNode: null,
      curTime: null,
    };
  }
  selectPicture = async () => {
    const { user } = this.state;
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("Success");
          this.setState({ imgHeroPost: result.uri });
      
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const sessionId = new Date().getTime();

    var ref = firebase.storage().ref("images").child(`${sessionId}.jpg`);
    return ref.put(blob);
  };
  onClickUpload = async () =>{
    //this.state.description
    //this.state.imgHeroPost
    //this.state.scheduleNode
    let date = new Date();
    let n = date.getDate();
    let h = date.getMinutes();
    let g = date.getSeconds();
    let s = n + h * n + g;
    let name = "";
    let node = "";
    let scheduleName = this.props.route.params?.scheduleName;
    let scheduleNode = this.props.route.params?.scheduleNode;
    //this.setState({scheduleNode,scheduleName})
    if (scheduleName !== null) {
      name  = scheduleName;
    }
    if (scheduleNode !== null) {
      node  = scheduleNode;
    }
    console.log(node,"node Nè")
    const postCall = firebaseApp.database().ref("post").child("post_"+this.state.user+"_"+s)
    await postCall.set({
      author: this.state.user,
      description: this.state.description,
      imgHero: this.state.imgHeroPost,
      scheduleNode: node,
      title: name,
    })
    const userCall = firebaseApp.database().ref("user").child(this.state.user).child("post").child("post_"+this.state.user+"_"+s)
    await userCall.set({
      name: "post_"+this.state.user+"_"+s
    })
    Alert.alert(
      "Post created",
      "Thank you for sharing",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.replace("FeedScreen"),
        },
      ],
      { cancelable: false }
    );
  }
  componentDidMount = async () => {
    const userCall = await firebaseApp.auth().currentUser
    const split = userCall.email;
    const splitted = await split.substring(0, split.lastIndexOf("@"));
    const itemRef = await firebaseApp.database().ref("user").child(splitted);
    const snapshot3 = await itemRef.child("ava").once("value");
    let ava = snapshot3.val();
    await this.setState({ava, user: splitted });
  };
  render() {
    let name = "";
    let scheduleName = this.props.route.params?.scheduleName;
    if (scheduleName !== null) {
      name = scheduleName;
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={24} color="#DB5823" />
            </TouchableOpacity>
          </View>
          <View style={styles.addBtn}>
            <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={()=> this.onClickUpload()}>
              <Text
                style={{
                  alignSelf: "flex-end",
                  color: "#DB5823",
                  fontSize: 18,
                }}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.varBox}>
          <View style={styles.avaContainer}>
            <Image
              style={styles.avata}
              source={{
                uri: this.state.ava,
              }}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={{ color: "black", left: 10 }}
              multiline={true}
              numberOfLines={4}
              placeholder=" Share your thoughts"
              onChangeText={(description) => this.setState({ description })}
            ></TextInput>
          </View>
        </View>
        <View style={styles.line}>
            {/* <Feather name="map" size={24} color="black" /> */}
            <View>
              <Text>Pick a schedule that you completed</Text>
              <TouchableOpacity
                style={styles.inputForm}
                onPress={() => this.props.navigation.navigate("PickScheduleDone")}
              >
                <Text style={{ color: "white", left: 10, top: 5 }}>
                  Open schedule list
                </Text>
              </TouchableOpacity>
              <View style={styles.friendPickContainer}>
            <Text style={styles.friendPickText}>{name}</Text>
              </View>
            </View>
          </View>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBtn} onPress={this.selectPicture}>
            <Ionicons name="ios-add" size={30} color="#DB5823" />
            <Text style={{ color: "#DB5823" }}>Add your images</Text>
          </TouchableOpacity>
        </View>
        {/* imgHeroPost */}
        <View style={styles.imgPicked}>
              <Image style={{height:200,width:350,alignSelf:"center",borderRadius:20,}} source={{uri: this.state.imgHeroPost}} />
        </View>

     
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
    height: 120,
    flexDirection: "row",
    borderWidth: 0.2,
    borderBottomColor: "gray",
  },
  inputBox: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,

    width: "80%",
    left: -10,
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
    marginTop: 30,
    left:10,
   
  },
  avata: {
    height: 60,
    width: 60,
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
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    alignItems: "flex-start",
    top: 60,
    left: 30,
  },
  addBtn: {
    left: 330,
    top: 60,
  },
  line: {
    width: "80%",
    marginTop: 40,
    alignSelf:"center"
  },
  inputForm: {
    backgroundColor: "#C9C9C9",
    width: "100%",
    height: 30,
    borderRadius: 10,
    marginTop: 5,
    color: "white",
  },
  friendPickContainer: {
    //height: 30,
    marginBottom: 10,
  },
  friendPickText: {
    marginLeft: 10,
    top: 5,
    color: "#DB5823",
  },
  imgPicked:{
    marginTop:70,
    height:200,
  }
});
