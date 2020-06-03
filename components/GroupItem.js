import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
export default class GroupItem extends Component {
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
      item: { title, urlToImage, url },
    } = this.props;
    
    return (
      <TouchableOpacity onPress={()=> this.props.onClickDetail}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.title}> {title} </Text>
            <Image
              style={{ height: 10, width: 50 }}
              source={{
                uri:
                  "https://pngimage.net/wp-content/uploads/2018/06/rating-png-transparent-8.png",
              }}
            />
            <View style={styles.date}>
              <Text style={styles.dateTxt}>Số hành trình đã đi: </Text>
            </View>
            <Text style={styles.dateTxt}>Địa điểm bắt đầu sắp tới: </Text>
            {/* <View style={styles.btnStyle}>
            <TouchableOpacity style={styles.btn} onPress={this.readMore}>
              <Text style={styles.txtBtn}>Read More</Text>
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -10,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
    width: "95%",
    flexDirection: "column",
    backgroundColor: "white",
  },
  image: {
    borderRadius: 20,
    width: 130,
    height: 150,
  },
  title: {
    width: "100%",
    color: "gray",
  },
  btn: {
    backgroundColor: "orange",
    paddingVertical: 15,
    marginTop: 10,
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    alignItems: "flex-end",
  },
  txtBtn: {
    color: "white",
  },
  btnStyle: {
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  txt: {
    color: "white",
  },
  date: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  dateTxt: {
    color: "white",
    flex: 1,
  },
});
