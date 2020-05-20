import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, FlatList,List,ListItem, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function NotiScreen() {
  return (
    <View style={styles.container}>
      <Text>Thông báo</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems:"center"
  },
  
});