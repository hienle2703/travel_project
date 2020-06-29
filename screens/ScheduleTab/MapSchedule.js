import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';

export default class MapSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Image style={styles.map} source={require("../../assets/images/mapSchedule.jpg")}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        height:"100%",
        width:"100%",
       
    }
})
