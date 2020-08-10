import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { firebaseApp } from "../../components/FirebaseConfig.js";

export default class takeData_Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View>
        <Text> takeData_Post </Text>
      </View>
    );
  }
}
