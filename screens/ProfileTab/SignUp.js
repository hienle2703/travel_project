import React, { Component } from "react";
import {
  View,
  AppRegistry,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import TabBarIcon from "../../components/TabBarIcon";
import { firebaseApp } from "../../components/FirebaseConfig.js";

AppRegistry.registerComponent("myproject", () => SwiperComponent);

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.itemRef = firebaseApp.database();
    this.state = {
      email: "",
      password: "",
      name: "",
      apiKey: "",
      countAcc: null,
      addAcc: null,
    };
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  componentDidMount = async () => {
    const Count = await firebaseApp.database().ref("user").once("value");
    //Alert.alert("Count: " + snapshot.numChildren());
    // this.setState({countAcc: this.snapshot.numChildren() })
    // console.log(countAcc, "COUNTACC NÈ NHA")
    let countAcc = Count.numChildren();
    this.setState({ countAcc });

    let addAcc = countAcc + 1;
    this.setState({ addAcc });
    console.log(addAcc, "TĂNG ACC NÈ");
  };

  dangKy = async () => {
    try {
      const a = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);

        //Lấy biến split để gán cho email của tài khoản vừa tạo
        const split = a.user.email
        console.log("Lấy biến split", split)
        //Cắt chuỗi để lấy cụm trước @
        const splitted   = await split.substring(0, split.lastIndexOf("@"));
        console.log("Lấy name sau khi cắt split", splitted)
      
      this.itemRef.ref("user/" + splitted).set({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      });
      Alert.alert(
        "",
        "Successfully Registered: " + this.state.email,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>{ this.props.navigation.navigate("SignIn"), console.log("Tạo tài khoản thành công")}
          },
        ],
        { cancelable: false }
      );
      this.setState({
        email: "",
        name: "",
        password: "",
      });
    } catch (error) {
      // Handle Errors here.
      Alert.alert(
        "",
        "Register Account Failed. " + error.message,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log(error.message) },
        ],
        { cancelable: false }
      );
    }
    // const a = await firebaseApp.auth().createUserWithEmailAndPassword("ongnoimay@gmail.com","123456")
    // console.log(a)
    // firebaseApp
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(function (response) {
    //     console.log(response.uid);

    //     this.itemRef.ref("user/" + response.uid).set({
    //       email: this.state.email,
    //       name: this.state.name,
    //       password: this.state.password,
    //     });
    //     Alert.alert(
    //       "",
    //       "Successfully Registered: " + this.state.email,
    //       [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancel Pressed"),
    //           style: "cancel",
    //         },
    //         {
    //           text: "OK",
    //           onPress: () => this.props.navigation.navigate("SignIn"),
    //         },
    //       ],
    //       { cancelable: false }
    //     );
    //     this.setState({
    //       email: "",
    //       name: "",
    //       password: "",
    //     });
    //   })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     Alert.alert(
    //       "",
    //       "Register Account Failed. " + error.message,
    //       [
    //         {
    //           text: "Cancel",
    //           onPress: () => console.log("Cancel Pressed"),
    //           style: "cancel",
    //         },
    //         { text: "OK", onPress: () => console.log(error.message) },
    //       ],
    //       { cancelable: false }
    //     );
    //   });
  };
  render() {
    // let name=  this.route.navigation.getParam("name");
    //console.log(this.props.route.params);
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "#DB5823", alignItems: "flex-start" }}
                name="ios-arrow-back"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.swiper}>
            <Swiper
              activeDotColor={"white"}
              autoplay={"true"}
              style={styles.wrapper}
              showsButtons={false}
            >
              <View style={styles.slide1}>
                <Image
                  style={styles.image}
                  source={require("../../assets/images/signup1.jpg")}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  style={styles.image}
                  source={require("../../assets/images/signup2.jpg")}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  style={styles.image}
                  source={require("../../assets/images/signup3.jpg")}
                />
              </View>
            </Swiper>
          </View>

          <View style={styles.inputCard}>
            <View style={styles.card}>
              <Text style={styles.txtCard}>Email</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>
            <View style={styles.card}>
              <Text style={styles.txtCard}>User Name</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </View>
            <View style={styles.card}>
              <Text style={styles.txtCard}>Password</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
              ></TextInput>
            </View>
            {/* <View style={styles.card}>
              <Text style={styles.txtCard}>Email</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View> */}
            {/* <View style={styles.card}>
              <Text style={styles.txtCard}>Phone</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View> */}
            <View style={styles.card}>
              <TouchableOpacity style={styles.btnBox}>
                <Text
                  style={styles.btnSubmit}
                  onPress={() => {
                    this.dangKy();
                  }}
                >
                  Join Now!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: -360,
  },
  backBtn: {},
  card: {
    marginTop: 15,
    paddingHorizontal: 2,
    width: "85%",
  },
  txtCard: {
    fontSize: 15,
    fontWeight: "bold",
  },
  inputBox: {
    marginTop: 3,
    backgroundColor: "#DDDDDD",
    height: 40,
    borderRadius: 10,
    color: "#999999",
  },
  btnBox: {
    marginTop: 10,
    backgroundColor: "#DB5823",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  swiper: {
    flex: 0.45,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginTop: -50,
  },
  image: {
    borderRadius: 20,
    height: "90%",
    width: "90%",
  },
  inputCard: {
    flex: 0.55,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});
