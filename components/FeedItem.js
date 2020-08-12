import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  readMore = () => {
    const {
      item: { url },
    } = this.props;
    Linking.openURL(url);
  };
  render() {
    const {
      item: { title, urlToImage, url, author },
    } = this.props;

    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity style={{width:"100%"}} onPress={this.readMore}>
          <LinearGradient
            colors={["#7F7FD5", "#86A8E7", "#91EAE4"]}
            style={styles.lineBlock}
          >
            <Image source={{ uri: urlToImage }} style={styles.image} />

            <View style={styles.card}>
              <Text style={styles.title} numberOfLines={2}>{title}</Text>
              <Image
                style={{ height: 10, width: 50 }}
                source={{
                  uri:
                    "https://pngimage.net/wp-content/uploads/2018/06/rating-png-transparent-8.png",
                }}
              />
              {/* <Text style={styles.txt}> Rating 85/100 </Text> */}
              <View style={{flexDirection:"row",justifyContent:"space-around",width:"50%",alignSelf:"center",top:55,}}>
                <View>
                  <Text style={styles.iconText}>Read</Text>
                  <Text style={{left:7,color:"white"}}>10</Text>
                </View>
                <View>
                  <Text style={styles.iconText}>Like</Text>
                  <Text style={{left:5,color:"white"}}>13</Text>
                </View>
                <View>
                  <Text style={styles.iconText}>Share</Text>
                  <Text style={{left:15,color:"white"}}>2</Text>
                </View>
              </View>
              
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
    width: "90%",
    flexDirection: "column",
  },
  image: {
    borderRadius: 60,
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    width: "64%",
    color: "white",
  },
  btn: {
    backgroundColor: "gray",
    paddingVertical: 15,
    marginTop: 10,
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txtBtn: {
    color: "white",
  },
  btnStyle: {
    paddingVertical: 10,
  },
  txt: {
    color: "gray",
  },
  lineBlock: {
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    height:150,
  },
  iconText:{
    fontWeight:"bold",
    color:"white"
  }
});
