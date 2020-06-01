import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, FlatList,ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ScheduleItem from '../../components/ScheduleItem';
import { MonoText } from '../../components/StyledText';
import TabBarIcon from '../../components/TabBarIcon';
import DatePicker from 'react-native-datepicker';

export default class createFeedScreen extends Component{
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
            <View styles={{flex:2}}>
                <View styles={{flexDirection:'row',}}>
                    <TabBarIcon name="ios-git-network" />
                    <Text>User Name</Text>
                </View>
                <View style={{...styles.line,flex:1}}>
                    <TextInput placeholder="share your thoughts">
                        
                    </TextInput>
                </View>
            </View>
            <View style={styles.line}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image from camera roll" onPress={this._pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
            <View style={{...styles.line,flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Share your journey">
                </Button>
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
    flexDirection:'row',
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    margin:20
  }
})
