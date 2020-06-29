import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image , Button} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

export default class ChoiceTravelScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // let name=  this.route.navigation.getParam("name");
    //console.log(this.props.route.params);
    return (
      <View style={styles.container}>
        <Image style={styles.map} source={require('../../assets/images/mapFriend.jpg')}/>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  header:{
    height:100,
    backgroundColor:"yellow"
  },
  travelStart:{
      flex:0.5,
      
  },
  travelDone:{
      flex:0.5,
     
  },
  textCity:{
    fontSize:20,
    fontWeight: "200"
  },
  textDate:{
      fontSize: 15,
      fontWeight: "100"
  },
  textTilte:{
      fontSize: 20,
      fontWeight:"bold",
      marginLeft:20,
      height: 40,
      marginTop: 7

  },

  bntInf:{
      alignItems: "center",
      backgroundColor: 'white',
      padding: 10,
      shadowColor: 'gray',
      shadowOpacity: 0.07,
      height:60,
      flexDirection: "row",
      marginTop:2
      
  },
  textInf:{
      justifyContent: 'center',
      flex:1
  },
  titleArea:{
    shadowColor: 'gray',
    shadowOpacity: 0.1,
  },
  map:{
    height:"100%",
    width:"100%"
  }
});
