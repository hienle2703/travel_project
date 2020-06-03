import React, { Component } from 'react';
import { View, Text , StyleSheet , Image, TouchableOpacity, TextInput} from 'react-native';
export default class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.bgImage} source={{uri: 'https://placeimg.com/140/140/any',}}/>
          </View>
          <View style={styles.avataArea}>
                  <View style={styles.avataEdit}>
                  <Image style={styles.avata} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
                  </View>
           </View>
          <View style={styles.infArea}>
                <View style={styles.card}>
                    <Text style={styles.txtCard}>User Name</Text>
                <TextInput style={styles.inputBox}></TextInput>
                </View>
                <View style={styles.card}>
                    <Text style={styles.txtCard}>Email</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>
                <View style={styles.card}>
                    <Text style={styles.txtCard}>Phone</Text>
                    <TextInput style={styles.inputBox}></TextInput>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.btnBox}>
                        <Text style={styles.btnSubmit}>Lưu</Text>
                    </TouchableOpacity>
                </View>          
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fafafa",
    },
    header:{
        flex:0.3,

    },
    avataArea:{
        flex: 0.1,      
        backgroundColor: "#fafafa",  
    },
    infArea:{
        flex:0.3,
        backgroundColor: "#fafafa",  
        alignItems: "center"
    },
    avata: {
        height:100,
        width:100, 
        borderRadius: 50 ,
        alignSelf: "center"
      },
    avataEdit:{
        height:102,
        width:102, 
        backgroundColor: 'white',
        borderRadius: 51 ,
        position: 'absolute', 
        bottom:12, 
        justifyContent: "center",
        alignSelf: "center"
    },
    bgImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        resizeMode: 'stretch',
      },
      
      card: {
        marginTop: 15,
        paddingHorizontal: 2,
        width: "85%",
      },
      txtCard: {
        fontSize: 15,
        fontWeight: "bold",
      },
      inputBox: {
        marginTop: 3,
        backgroundColor: "#DDDDDD",
        height: 40,
        borderRadius: 10,
        color: "#999999",
      },
      btnBox: {
        marginTop: 20,
        backgroundColor: "#DB5823",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      btnSubmit: {
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
      }
  });
  
