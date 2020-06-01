import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import TabBarIcon from './TabBarIcon';
import { Ionicons,Entypo  } from '@expo/vector-icons';
export default class LocationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  readMore = () => {
    const { item: { url } } = this.props;
    Linking.openURL(url);
  };
  render() {
    const { item: { title, urlToImage, url, distance } } = this.props;

    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Entypo name="location-pin" size={24} color="orange" />

          <Text style={styles.title}> {title} </Text>
          <Text style={styles.distanceTxt}> 100 km </Text>
        </View>


      </View>
    );
  }

}
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -10,
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%'
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
    width: "95%",
    flexDirection:"row",
    backgroundColor:"white",
    borderBottomColor:"gray",
    borderBottomWidth:1
  },
  image: {
    borderRadius: 20,
    width: 130,
    height: 150

  },
  title: {
    width: "80%",
    color: "black"
  },
  btn: {
    backgroundColor: "gray",
    paddingVertical: 15,
    marginTop: 10,
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    alignItems:'flex-end'
  },
  txtBtn: {
    color: 'white'
  },
  btnStyle: {
    paddingVertical:10,
    alignItems:"flex-end"
  },
  txt:{
    color:"black"
  },
  date:{
    flex:1,
    flexDirection:'row',
    alignItems:"flex-start"
  },
  distanceTxt:{
    color:"gray",

    alignContent:'flex-end'
  }

})