import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-web-swiper";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // let name=  this.route.navigation.getParam("name");
    //console.log(this.props.route.params);
    return (
      <View style={styles.container}>
        {/* <View style={styles.picBox}>
          <Swiper>
            <View style={[styles.slideContainer, styles.slide1]}>
              <Text>Slide 1</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide2]}>
              <Text>Slide 2</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide3]}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View> */}

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
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
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
  picBox: {
    flex: 1,
    backgroundColor:"yellow"
  },
  slideContainer: {
    
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "red",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
});
