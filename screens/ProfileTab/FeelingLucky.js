import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import FeedItem from "../../components/FeedItem";

export default class FeelingLucky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArticles: [],
      page: 1,
    };
  }
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
    const jsonResponse = await response.json();
    this.setState({
      listArticles: listArticles.concat(jsonResponse.articles),
      isLoading: false,
    });
  };
  renderItem = ({ item }) => {
    return <FeedItem item={item} />;
  };
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
      console.log("END");
      this.setState({
        isLoading: false,
      });
      return <Text style={{ fontSize: 200 }}>You have reached the end</Text>;
    }
  };
  onRefresh = async () => {
    const newPage = 1;
    await this.setState({ isLoading: true, listArticles: [], page: newPage });
    await setTimeout(() => {

    }, 1000);
    this.callApi(newPage);

  };
  render() {
    const { isLoading, listArticles } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.emptySpace}></View>
          <ActivityIndicator
            size="large"
            animating={isLoading}
            color="#DB5823"
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={listArticles}
          renderItem={this.renderItem}
          style={styles.flatList}
          onRefresh={this.onRefresh}
          refreshing={false}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.1}
          onRefresh={this.onRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptySpace: {
    flex: 0.5,
  },
  flatList: {
    margin: 20,
    marginTop: 40,
  },
});
