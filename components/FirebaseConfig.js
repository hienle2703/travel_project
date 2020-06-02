import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAayF2xCzeXAKfeLc0HTTf8dwjinID6bhA",
  authDomain: "travelproject-d3049.firebaseapp.com",
  databaseURL: "https://travelproject-d3049.firebaseio.com",
  projectId: "travelproject-d3049",
  storageBucket: "travelproject-d3049.appspot.com",
  messagingSenderId: "731504013806",
  appId: "1:731504013806:web:9ad63824295b89207c9eff",
  measurementId: "G-WBLYT3BTCP",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseAnal = firebase.analytics();
