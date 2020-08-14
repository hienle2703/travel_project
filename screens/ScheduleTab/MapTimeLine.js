import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import TabBarIcon from "../../components/TabBarIcon";

const markers = [
  {
    latlng: {
      latitude: 11.925778,
      longitude: 108.445275,
    },
    title: "Coffee Shop of March",
    description: "#1 location.",
  },
  {
    latlng: {
      latitude: 11.943486,
      longitude: 108.437202,
    },
    title: "Da Lat Night Market",
    description: "#4 location.",
  },
];
export default class MapTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: markers,
      region: {
        latitude: 11.943486,
        longitude: 108.437202,
        latitudeDelta: 0.05,
        longitudeDelta: 0.03,
      },
      data: null,
    };
  }
  // onRegionChange(region) {
  //   this.setState({ region });
  // }
  onClickBtn() {
    this.props.navigation.goBack();
  }
  UNSAFE_componentWillMount = () => {
    const data = this.props.route.params.data;
    console.log(data)
    this.setState({ data });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          //onRegionChange={this.onRegionChange}
        >
          {this.state.data.map((item) => (
            <Marker
              coordinate={item.latlng}
              title={item.title}
              description={item.description}
              pinColor="#DB5823"
            >
              <View style={styles.markerContainer}>
                <Image
                  style={styles.markerStyle}
                  source={{
                    uri:
                      "https://icons-for-free.com/iconfiles/png/512/google+map+map+pin+pointer+icon-1320184070259452120.png",
                  }}
                />
                <Text style={styles.markerFont}>{item.title}</Text>
                {/* <Text style={styles.markerFont}>{item.description}</Text> */}
              </View>
            </Marker>
          ))}
        </MapView>
        <View style={styles.header}>
          <View styles={styles.backBtn}>
            <TouchableOpacity
              style={{
                left: 30,
                top: 12,
                flexDirection: "row",
                position: "absolute",
                zIndex: 100,
              }}
              onPress={() => this.onClickBtn()}
            >
              <TabBarIcon
                style={{ color: "black", alignItems: "flex-start" }}
                name="ios-arrow-back"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  left: 10,
                }}
              >
                Back
              </Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  markerStyle: {
    width: 35,
    height: 35,
    alignSelf: "center",
  },
  markerFont: {
    color: "#DB5823",
    fontWeight: "bold",
    alignSelf: "center",
  },
  markerContainer: {},
  header: {
    top: 50,
    flexDirection: "row",
    position: "absolute",
    left: 1,
  },
});
