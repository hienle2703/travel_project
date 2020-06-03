import React, { Component } from 'react';
import { View, Text , StyleSheet , Image, TouchableOpacity, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onClickBtn() {
    this.props.navigation.navigate("EditAccount");
    this.props.navigation.setOptions({
        
    })  
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.bgImage} source={{uri: 'https://placeimg.com/140/140/any',}}/>
          </View>
          <View style={styles.avataArea}>
                  <View style={styles.avataEdit}>
                  <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
                  </View>
           </View>
           <View style={styles.infArea}>
                <View style={styles.titleInf}> 
                    <Text style={styles.textName}>Nguyễn Minh Quân</Text>
                </View>

                <View style ={styles.infEdit }>
                    
                    <View style={styles.txtInf}>
                        <Ionicons name="ios-mail" size={20} color="black" />
                        <Text style={styles.txt}>Email: nam@gmail.com</Text>
                    </View>
                   
                    <View  style={styles.txtInf}>
                        <Feather name="phone" size={20} color="black" />
                        <Text  style={styles.txt}>So DT : 0962610454 </Text>
                       
                    </View>
                    
                </View>
                <View style={styles.bntEdit}>
                    <TouchableOpacity
                            style={styles.btn}
                            onPress={() =>this.onClickBtn()}
                        >
                            <Text style={styles.txtEdit}>Chỉnh sửa thông tin</Text>
                            <View><FontAwesome name="pencil" size={15} color="blue" /></View>
                            
                    </TouchableOpacity>
                </View>
               
          </View>
          <View style={styles.feedArea}>
              <View style={styles.feedEdit} >
                  <Text style={styles.txtBold}> 1000</Text>
                  <Text style={styles.txt}>Lịch Trình </Text>
              </View>
              <View style={styles.feedEdit}>
                  <Text style={styles.txtBold}>69</Text>
                  <Text style={styles.txt} >Bài viết</Text>
              </View>
              <View style={styles.feedEdit}>
                  <Text style={styles.txtBold}>4/5</Text>
                  <Text style={styles.txt} >Đánh giá</Text>
              </View>
          </View>
          <View style={styles.footter}>
              <ScrollView style={styles.imgArea} >
<Text></Text>
              </ScrollView>
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
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    tinyLogo: {
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
    feedArea:{
        flex:0.4,
        flexDirection: "row",
        justifyContent: "space-around",

        
        
    },   
    btn: {
        backgroundColor:'#68a0cf',
        justifyContent: "center",
        alignItems: "center",        
        borderRadius: 5,
        width:370,
        height:30,
        flexDirection: "row",
        marginTop:10,
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        elevation: 1,
      },
    textName:{
         fontSize:30,
         fontWeight:"bold",
         
      },
    txtEdit:{
        fontSize: 20,
        fontWeight:"400",
        marginLeft:10,
        marginRight:10,
        color: 'blue'
    },
    txtInf:{
        flexDirection: "row",
       
    },
    infEdit:{
        alignSelf: "flex-start",
        marginTop:10,   
        marginLeft:10     
    },
    txt:{
        fontSize: 20,
        fontWeight:"300",
        marginLeft:10,
        marginRight:10,
    },
    txtBold:{
        fontSize: 20,
        fontWeight:"bold",
        marginLeft:10,
        marginRight:10,
    },
    feedEdit:{
      marginTop: 10
    },
    bgImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        resizeMode: 'stretch',
      },
      imgArea:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
      }
  });
  
