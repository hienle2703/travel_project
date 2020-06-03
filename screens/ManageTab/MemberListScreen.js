import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, FlatList,List,ListItem, Platform, StyleSheet, Text, TouchableOpacity, View, Button , TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 

const data = [
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Long Trần"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Lý Long"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn Long"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Long Lê"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn A"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn B"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn C"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn D"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn E"
  },
  {
    title: 'https://placeimg.com/140/140/any',
    content: "Nguyễn F"
  },
]

export default function MemberListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>                
        <TouchableOpacity onPress={()=>alert("Không tìm thấy !")}><FontAwesome style={{marginLeft:8}}  name="search" size={36}  color="gray"  /></TouchableOpacity>
        <TextInput style={styles.inputBox}></TextInput>
      </View>
        <ScrollView  style={styles.memberArea}>
          {data.map((item, index)=>{
            return (
              <View  key={index}>
                <TouchableOpacity style={styles.bntInf}>
                  <View style={styles.txtNoti}>
                    <View style={styles.avataArea}> 
                       <Image style={styles.avata} source={{uri:item.title }}/>
                    </View>
                    <View>
                      <Text style={styles.contentArea}>  {item.content} </Text>
                    </View>
                    <View>
                      <Entypo style={styles.editArea} name="dots-three-horizontal" size={24} color="black" />
                    </View>
                  </View>               
                </TouchableOpacity>
              </View>
            )
          })}          
        </ScrollView>
     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  header:{
    
    flexDirection:"row",
    height:50,
    
  },

  notiInf:{
  flexDirection:'row',
  justifyContent: "center",
  marginTop: 5  
  },
  inputBox: {
    marginTop: 3,
    backgroundColor: "#DDDDDD",
    height: 40,
    borderRadius: 10,
    color: "#999999",
  },
  memberArea:{
    flex: 0.8,
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

  bntInf:{
    backgroundColor: 'white',
    shadowOffset:{    height: 5,  },
    shadowColor: 'gray',
    shadowOpacity: 0.07,
    height:60
  },
  
});
