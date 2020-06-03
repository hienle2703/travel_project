import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ChatScreen from "./ChatScreen";

export default class ManageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressButton(screen) {
    this.props.navigation.navigate(screen);
    this.props.navigation.setOptions({});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.areaView}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => alert(" Chua lam nghen")}
              >
                <View style={styles.iconEdit}>
                  <MaterialIcons name="person-add" size={35} color="black" />
                </View>
                <Text style={styles.txt}>Add Member</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>

              {/* ---------------
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, FlatList,ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GroupItem from '../../components/GroupItem';
import { MonoText } from '../../components/StyledText';

export default class ManageScreen extends Component{
  state = {
    isLoading: true,
    listArticles: [],
    totalResults: 0,
    page: 1,
    isLoadMore: false,
  };

  componentDidMount = async () => {
    const { page } = this.state;
    this.setState({
      isLoading: true,
    });
    this.callApi(page);

  };
  callApi = async (page) => {

    const { listArticles } = this.state;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${page}`
    );
    //await setTimeout(() => { }, 2000);
    const jsonResponse = await response.json();
    this.setState({
      page: page,
      isLoading: false,
      listArticles: listArticles.concat(jsonResponse.articles),
      totalResult: jsonResponse.totalResults,

    });
  }
  onEndReached = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${newPage}`
    );
    const jsonResponse = await response.json();
    const { isLoading } = this.state;
    const { page, listArticles } = this.state;
    const newPage = page + 1;
    this.callApi(newPage);
    //console.log(listArticles.length);
    // console.log(jsonResponse.totalResults);
    if (listArticles.length == jsonResponse.totalResults) {
      console.log('END');
      this.setState({
        isLoading: false
      });
      return (
        <Text style={{fontSize:200}}>You have reached the end</Text>

      )

    }
 ----------LBranch */}

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton("MemberListScreen")}
              >
                <View style={styles.iconEdit}>
                  <Ionicons name="ios-people" size={35} color="black" />
                </View>
                <Text style={styles.txt}>MemberList </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.areaView1}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton("ChoiceTravelScreen")}
              >
                <View style={styles.iconEdit}>
                  <AntDesign name="find" size={35} color="black" />
                </View>
                <Text style={styles.txt}>Travel Information</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onPressButton(ChatScreen)}
              >
                <View style={styles.iconEdit}>
                  <MaterialIcons name="chat" size={35} color="black" />
                </View>
                <Text style={styles.txt}>MessageGroup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
    // 
    //   };
    //   renderItem = ({ item }) => {
    //     return <GroupItem item={item} />
    //   };

    //   renderFooter = () => {

    //     //const { isLoading } = this.state;
    //     const { page, listArticles,jsonResponse } = this.state;
    //     const newPage = page + 1;
    //     //this.callApi(newPage);
    //     console.log(listArticles.length);

    //     return (
    //       <ActivityIndicator size="large" animating={true} />

    //     )

    //   };
    //   onRefresh = async () => {
    //     const newPage = 1;
    //     await this.setState({ isLoading: true, listArticles: [], page: newPage });
    //     await setTimeout(() => {

    //     }, 2000);
    //     this.callApi(newPage);

    //   };
    //   render() {
    //     //console.log('render');
    //     const { isLoading, listArticles } = this.state;
    //     if (isLoading) {
    //       return (
    //         <View style={styles.container}>
    //           <ActivityIndicator size="large" animating={isLoading} />

    //         </View>
    //       );
    //     }
    //     return (
    //       <View style={styles.container}>
    //         <FlatList
    //           data={listArticles}
    //           renderItem={this.renderItem}
    //           style={styles.flatList}
    //           onEndReached={this.onEndReached}
    //           onEndReachedThreshold={0.1}
    //           ListFooterComponent={this.renderFooter()}
    //           onRefresh={this.onRefresh}
    //           refreshing={false}
    //         />
    //       </View>

    //     )
    // ----------LBranch
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    backgroundColor: "white",
    flex: 0.2,
  },
  content: {
    flex: 0.8,
  },
  areaView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  areaView1: {
    flexDirection: "row",

    marginTop: 10,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#68a0cf",
    color: "white",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",

    width: 150,
    height: 150,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txt: {
    color: "white",
  },
  btnContainer: {
    flexDirection: "row",
  },
  iconEdit: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
