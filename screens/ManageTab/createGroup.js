import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, FlatList,ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ScheduleItem from '../../components/ScheduleItem';
import { MonoText } from '../../components/StyledText';
import TabBarIcon from '../../components/TabBarIcon';
import DatePicker from 'react-native-datepicker';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
export default class createGroupScreen extends Component{
    state = {
        image: null,
      };

    _pickImage = async () => {
        try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }

        console.log(result);
        } catch (E) {
        console.log(E);
        }
    };

  render() {
    let { image } = this.state;
    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <Entypo name="edit" size={24} color="black" />
                <View>
                    <Text>Tên nhóm</Text>
                    <TextInput></TextInput>
                </View>
            </View>
            <View style={styles.line}>
                <MaterialIcons name="group" size={24} color="black" />
                <View>
                    <Text>Số người</Text>
                    <TouchableOpacity><Text>Nhấn để thêm người</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}>
                <Feather name="map" size={24} color="black" />
                <View>
                    <Text>Lịch trình</Text>
                    <TouchableOpacity><Text>Nhấn để thêm người</Text></TouchableOpacity>
                </View>
            </View>
            <View styles={{flex:5}}></View>
            <View style={styles.line}>
                <View>
                    <TouchableOpacity>Tạo nhóm</TouchableOpacity>
                </View>
            </View>
        </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    margin: 20,
    marginTop: 5
  },
  line:{
    flex:1,
    flexDirection:'row',
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    margin:20
  }
})
