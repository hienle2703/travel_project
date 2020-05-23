import React, { Component } from "react";
import {
  View,
  AppRegistry,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import TabBarIcon from "../../components/TabBarIcon";

AppRegistry.registerComponent("myproject", () => SwiperComponent);

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  render() {
    // let name=  this.route.navigation.getParam("name");
    //console.log(this.props.route.params);
    return (
      <ScrollView contentContainerStyle ={styles.scrollView}>
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
              <Text style={styles.txtCard}>User Name</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View>
            <View style={styles.card}>
              <Text style={styles.txtCard}>Password</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View>
            <View style={styles.card}>
              <Text style={styles.txtCard}>Email</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View>
            <View style={styles.card}>
              <Text style={styles.txtCard}>Phone</Text>
              <TextInput style={styles.inputBox}></TextInput>
            </View>
            <View style={styles.card}>
              <TouchableOpacity style={styles.btnBox}>
                <Text style={styles.btnSubmit}>Join Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollView:{
    flex:1
  },
  container: {
    flex:1,
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
  backBtn: {
  },
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
  wrapper: {
  },
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
    marginTop:-50
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
