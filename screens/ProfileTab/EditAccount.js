import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
// import RNFetchBlob from "react-native-fetch-blob";
import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";

// const storage = firebaseApp.storage();
// const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;

// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;

// const uploadImage = (uri, mine = "img/jpg") => {
//   return new Promise((resolve, reject) => {
//     const uploadUri = Platform.OS === "ios" ? uri.replate("file://", "") : uri;
//     const sessionId = new Data().getTime();
//     let uploadBlob = null;
//     const imageRef = storage.ref("images").child(`${sessionId}.jpg`);

//     fs.readFile(uploadUri, "base64")
//       .then((data) => {
//         return Blob.build(data, { type: `${mine}; BASE64` });
//       })
//       .then((blob) => {
//         uploadBlob = Blob;
//         return imageRef.put(blob, { contentType: mine });
//       })
//       .then(() => {
//         uploadBlob.close();
//         return imageRef.getDownloadURL();
//       })
//       .then((url) => {
//         resolve(url);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

export default class EditAccount extends Component {
  constructor(props) {
    super(props);

    //ref('lớp cha').child( 'lớp con')
    this.itemRef = firebaseApp.database();
    this.state = {
      image: "",
      name: "",
      email: "",
      phone: "",
      ava: null,
      user: "",
      flexin: false,
    };
  }
  componentDidMount = async () => {
    this.itemRef1 = await firebaseApp.auth().currentUser;
    //await console.log(this.itemRef1);
    const userGet = await this.itemRef1;
    let user = userGet;
    //console.log(user.uid, "user.uid nè nha")
    //console.log(this.itemRef1);
    const itemRef = await firebaseApp.database().ref("user").child(user.uid);

    //console.log(itemRef, "itemRef nè");
    const snapshot = await itemRef.child("name").once("value");
    const snapshot1 = await itemRef.child("email").once("value");
    const snapshot2 = await itemRef.child("phone").once("value");
    const snapshot3 = await itemRef.child("ava").once("value");
    let name = snapshot.val();
    let email = snapshot1.val();
    let phone = snapshot2.val();
    let ava = snapshot3.val();

    await this.setState({ name, email, phone, ava, user });
  };
  //nếu dùng push thì nó sẽ sinh thêm id bên ngoài
  //set là nó làm lại cái class
  //update là để update =))
  setDB() {
    const { user } = this.state;
    this.itemRef
      .ref("user")
      .child(user.uid)

      .update({
        email: this.state.email,
        name: this.state.name,
        //password: "123456789",
        phone: this.state.phone,
      })
      .then(() => {
        Alert.alert("Success");
        this.props.navigation.replace("ProfileScreen");
      });
  }
  // selectPicture = async () => {
  //   this.setState({ image: "" });
  //   await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //   });
  //    this.setState({ image: uri });
  //   // uploadImage(uri)
  //   //   .then((url) => this.setState({ image: url }))
  //   //   .catch(console.log(error));

  // };

  selectPicture = async () => {
    this.setState({ ava: "" });
    const { user } = this.state;
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("Success");
          this.setState({ ava: result.uri });
          this.itemRef.ref("user/" + user.uid).update({
            ava: result.uri,
          });
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  takePicture = async () => {
    this.setState({ ava: "" });
    const { user } = this.state;
    await Permissions.askAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    if (!result.cancelled) {
      this.uploadImage(result.uri)
        .then(() => {
          Alert.alert("Success");
          this.setState({ ava: result.uri });
          this.itemRef.ref("user").child(user.uid).update({
            ava: result.uri,
          });
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const sessionId = new Date().getTime();

    var ref = firebase.storage().ref("images").child(`${sessionId}.jpg`);
    return ref.put(blob);
  };

  render() {
    //const [image, setImage] = useState(null);
    //uri:"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
    const { image } = this.state;
    return (
      <View style={styles.container}>
        {(() => {
          switch (this.state.flexin) {
            case false:
              setTimeout(
                function () {
                  this.setState({ flexin: "true" });
                }.bind(this),
                1000
              );
              return (
                <View style={{justifyContent:"center",alignItems:'center',top:300,}}>
                  <ActivityIndicator size="large" color="#DB5823" />
                </View>
              );

            default:
              return (
                <View style={styles.container}>
                  <View style={styles.header}>
                    {/* <Image style={styles.bgImage} source={{uri: 'https://placeimg.com/140/140/any',}}/> */}
                  </View>
                  <View style={styles.avataArea}>
                    <View style={styles.avataEdit}>
                      {(() => {
                        switch (this.state.ava) {
                          case null:
                            //console.log(this.state.ava, "Ava coi có chưa nè")
                            return (
                              <Image
                                style={styles.avata}
                                source={{
                                  uri:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh6iD4NmOaeFexRWXdkckExxeLGUbRniiyCwQ6duX3Xw047r_q&usqp=CAU",
                                }}
                              />
                            );

                          case "":
                            return <ActivityIndicator />;

                          default:
                            console.log(
                              this.state.ava,
                              "Địa chỉ hình ảnh nè nha"
                            );
                            return (
                              <Image
                                style={styles.avata}
                                source={{ uri: this.state.ava }}
                              />
                            );
                        }
                      })()}
                    </View>
                  </View>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    {/* {(() => {
            switch (this.state.image) {
              case null:
                return null;

              case "":
                return <ActivityIndicator />;

              default:
                return (
                  
                );
            }
          }) ()
          } */}
                    <TouchableOpacity onPress={this.selectPicture}>
                      <Text style={{ color: "gray" }}>Change your avatar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture}>
                      <Text style={{ color: "gray" }}>Take a picture</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.infArea}>
                    <View style={styles.card}>
                      <Text style={styles.txtCard}>User Name</Text>
                      <TextInput
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                        style={styles.inputBox}
                      ></TextInput>
                    </View>
                    <View style={styles.card}>
                      <Text style={styles.txtCard}>Email</Text>
                      <TextInput
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.inputBox}
                      ></TextInput>
                    </View>
                    <View style={styles.card}>
                      <Text style={styles.txtCard}>Phone</Text>
                      <TextInput
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}
                        style={styles.inputBox}
                      ></TextInput>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity
                        style={styles.btnBox}
                        onPress={() => {
                          this.setDB();
                        }}
                      >
                        <Text style={styles.btnSubmit}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
          }
        })()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    flex: 0.1,
  },
  avataArea: {
    flex: 0.3,
    backgroundColor: "#fafafa",
  },
  infArea: {
    flex: 0.7,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  avata: {
    height: 130,
    width: 130,
    borderRadius: 100,
    alignSelf: "center",
  },
  avataEdit: {
    height: 130,
    width: 130,
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    bottom: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  bgImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    resizeMode: "stretch",
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
    fontWeight: "bold"
  },
});
