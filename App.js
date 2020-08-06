import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import FriendMainScreen from "./screens/ContactTab/FriendMainScreen";
import FriendAll from "./screens/ContactTab/FriendAll";
import PostAll from "./screens/PostTab/PostAll";
import FriendProfile from "./screens/ProfileTab/FriendProfile";


import {Provider} from "react-redux";
import Store from "./redux/Store";

function isLoadingComplete() {
  const { isLoadingComplete } = useCachedResources();
}

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}

          <NavigationContainer
            style={styles.bottomBtn}
            linking={LinkingConfiguration}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Root"
                options={{ headerShown: false }}
                component={BottomTabNavigator}
              />
              <Stack.Screen
                name="FriendMainScreen"
                options={{ headerShown: false }}
                component={FriendMainScreen}
              />
              <Stack.Screen
                name="FriendAll"
                options={{ headerShown: false }}
                component={FriendAll}
              />

              <Stack.Screen
                name="PostAll"
                options={{ headerShown: false }}
                component={PostAll}
              />

              <Stack.Screen
                name="FriendProfile"
                options={{ headerShown: false }}
                component={FriendProfile}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <Text>App.js</Text> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomBtn: {},
});
