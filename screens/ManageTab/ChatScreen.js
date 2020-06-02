// import React from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import firebase from 'firebase'

// export default class ChatScreen extends React.Component {
//   state = {
//     messages: [],
//   }

// // componentDidMount = async ()=>{

// //   var firebaseConfig = {  
// //     apiKey : "AIzaSyB009iWkRvdP3usW57-i3grE4HR5-A_MRI" ,  
// //     authDomain : "travelproject-7b3b7.firebaseapp.com" ,  
// //     databaseURL : "https://travelproject-7b3b7.firebaseio.com ",
// //     projectId : "travelproject-7b3b7" ,   
// //     storageBucket : "travelproject-7b3b7.appspot.com" , 
// //     messagingSenderId : "345577234340" ,   
// //     appId : "1: 345577234340: web: 08ad591353af100670ab31" 
// //     };
// //   firebase.initializeApp(firebaseConfig); 

// //   const snapshot  = await firebase
// //     .database()
// //     .ref('/messages/')
// //     .once('value');
// //   this.setState({
// //     messages :snapshot.val()
// //     });
// // };

//   onSend(messages = []) {
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }))
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={messages => this.onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     )
//   }
// }
// ChatScreen.navigationOptions = {
//  title : 'AAA'

// };
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default  class ChatScreen extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}