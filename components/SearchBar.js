
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class searchBar extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{width:350,backgroundColor:'white'}}
        inputContainerStyle={{backgroundColor:'white'}}
        inputStyle={{backgroundColor:'white'}}
        placeholder={this.props.placeholder}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
  
}