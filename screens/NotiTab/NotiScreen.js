import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, FlatList,List,ListItem, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';



const data = [
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "A React component for displaying different types of images",
    timeline: "1 giờ trước",
  },
  
]

export default function NotiScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Notification</Text>
      </View>
      <View style={styles.notiArea}>
        
        <Image style={{height:200, width:200,marginTop:-60}} source={require("../../assets/images/noti.png")}/>
        <Text>You don't have any notification yet</Text>
        {/* <ScrollView style={styles.srollInf} >
          {data.map((item, index)=>{
            return (
              <View  key={index}>
                <TouchableOpacity style={styles.bntInf}>
                  <View style={styles.txtNoti}>
                    <View style={styles.avataArea}> 
                       <Image style={styles.avata} source={{uri:item.title }}/>
                    </View>
                    <View>
                      <Text style={styles.contentArea}> {item.content} </Text>
                      <Text style={styles.txtTimeline}> {item.timeline}</Text>
                    </View>
                    <View>
                      <Entypo style={styles.editArea} name="dots-three-horizontal" size={24} color="black" />
                    </View>
                  </View>
                 
                </TouchableOpacity>
              </View>
            )
          })}          
        </ScrollView> */}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: "center"
  },
  avata: {
    height:50,
    width:50, 
    borderRadius: 25 ,   
  },
  avataArea:{
    height:60,
    width:70,
    justifyContent: "center",
    marginLeft:10
  },
  contentArea:{
    width:250,

  },
  editArea:{
    width:40,
    
    
  },
  header:{
    flex:0.2,
    justifyContent: "center",
    backgroundColor: '#fafafa',
  },
  textTitle:{
    fontSize: 18,
    fontWeight:"bold",
    alignSelf: "center"
  },
  txtNoti:{
    flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-around"
  },
  notiArea:{
    flex:0.7,
    justifyContent: 'center',
    alignItems:"center"
  },
  bntInf:{
    backgroundColor: 'white',
    shadowOffset:{    height: 5,  },
    shadowColor: 'gray',
    shadowOpacity: 0.07,
    height:60
   
    
  },
  txtTimeline:{
    fontSize:12,
    fontWeight:"200"
  },
  
});
