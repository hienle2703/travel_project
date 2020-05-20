import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default class FeedItem extends Component {
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
    const { item: { title, urlToImage, url } } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: urlToImage }} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.title}> {title} </Text>
          <Image style={{height:10,width:50}} source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/rating-png-transparent-8.png'}}/>
          <Text style={styles.txt}> Rating 85/100 </Text>
          <View style={styles.btnStyle}>
            <TouchableOpacity style={styles.btn} onPress={this.readMore}>
              <Text style={styles.txtBtn}>Read More</Text>
            </TouchableOpacity>
          </View>

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
    width: "90%",
    flexDirection:"column"

  },
  image: {
    borderRadius: 20,
    width: 130,
    height: 150

  },
  title: {
    width: "65%",
  },
  btn: {
    backgroundColor: "gray",
    paddingVertical: 15,
    marginTop: 10,
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  txtBtn: {
    color: 'white'
  },
  btnStyle: {
    paddingVertical:10,
    
  },
  txt:{
    color:"gray"
  }
})