import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text>Lịch trình</Text>
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
