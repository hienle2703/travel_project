import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image , Button} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
const data =[
  {
    startCity : " HCM",
    endCity: " DL",
    timeGo : "18/03/2020-20/03/2020"
  },
  {
    startCity : " HCM",
    endCity: " DL",
    timeGo : "18/03/2020-20/04/2020"
  },
  {
    startCity : " HCM",
    endCity: " DL",
    timeGo : "18/03/2020-20/05/2020"
  },
  {
    startCity : " HCM",
    endCity: " DL",
    timeGo : "18/03/2020-20/06/2020"
  },

]
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
          <View style={styles.header}>
          </View>

          <View style={styles.travelStart}>
            <View style={styles.titleArea} > 
                  <Text style={styles.textTilte}>Lịch trình chưa đi</Text>
            </View>
              <ScrollView >
                {data.map((item , index)=> { 
                  return(
                    <TouchableOpacity style={styles.bntInf}>
                  <MaterialCommunityIcons name="earth" size={24} color="green" />
                  <View style={styles.textInf}>
                  <Text style={styles.textCity}> {item.startCity}: {item.endCity}</Text>
                  <Text style={styles.textDate}> {item.timeGo}</Text>
                    </View>
                  <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
                  )
                })}
                                             
              </ScrollView>
          </View> 

          
          <View style={styles.travelDone}>
            <View style={styles.titleArea}> 
                 <Text  style={styles.textTilte}>Lịch trình đã đi</Text>
            </View>
            <ScrollView >
            {data.map((item , index)=> { 
                  return(
                    <TouchableOpacity style={styles.bntInf}>
                  <MaterialCommunityIcons name="earth" size={24} color="green" />
                  <View style={styles.textInf}>
                  <Text style={styles.textCity}> {item.startCity}: {item.endCity}</Text>
                  <Text style={styles.textDate}> {item.timeGo}</Text>
                    </View>
                  <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
                  )
                })}
                     
            </ScrollView>
          </View>
      
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  header:{
    
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
  }
});
