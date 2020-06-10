import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import FriendMainScreen from "./screens/ContactTab/FriendMainScreen";

function isLoadingComplete() {
  const { isLoadingComplete } = useCachedResources();
}

const Stack  = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
      return (
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
              <Stack.Screen name="FriendMainScreen" options={{ headerShown: false }} component={FriendMainScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <Text>App.js</Text> */}
        </View>
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
