import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, FlatList,ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ScheduleItem from '../../components/ScheduleItem';
import { MonoText } from '../../components/StyledText';

export default class ScheduleScreen extends Component{
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


  };
  renderItem = ({ item }) => {
    return <ScheduleItem item={item} />
  };

  renderFooter = () => {
    
    //const { isLoading } = this.state;
    const { page, listArticles,jsonResponse } = this.state;
    const newPage = page + 1;
    //this.callApi(newPage);
    console.log(listArticles.length);
    
    return (
      <ActivityIndicator size="large" animating={true} />

    )
    
  };
  onRefresh = async () => {
    const newPage = 1;
    await this.setState({ isLoading: true, listArticles: [], page: newPage });
    await setTimeout(() => {

    }, 2000);
    this.callApi(newPage);

  };
  render() {
    //console.log('render');
    const { isLoading, listArticles } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating={isLoading} />

        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={listArticles}
          renderItem={this.renderItem}
          style={styles.flatList}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter()}
          onRefresh={this.onRefresh}
          refreshing={false}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    margin: 20,
    marginTop: 5
  }
})
