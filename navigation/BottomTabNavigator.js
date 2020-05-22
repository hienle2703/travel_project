import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TabBarIcon from "../components/TabBarIcon";

import FeedScreen from "../screens/FeedTab/FeedScreen";

import SignUp from "../screens/ProfileTab/SignUp";

import ProfileScreen from "../screens/ProfileTab/ProfileScreen";

import ScheduleScreen from "../screens/ScheduleTab/ScheduleScreen";

import ManageScreen from "../screens/ManageTab/ManageScreen";

import NotiScreen from "../screens/NotiTab/NotiScreen";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Feed";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="SignUp"
        title="Đăng ký"
        component={SignUp}
      />
      
    </Stack.Navigator>
  );
}
export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    //headerTitle: getHeaderTitle(route),
  });

  return (
    <BottomTab.Navigator
      style={styles.bottomBtn}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: "Feed",

          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: "Schedule",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-pie" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          title: "Group Management",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-git-network" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Noti"
        component={NotiScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-notifications" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-person" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName =
//     route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case "Feed":
//       return "Your Feed";
//     case "Schedule":
//       return "Schedule";
//     case "Manage":
//       return "Group Managemnet";
//     case "Noti":
//       return "Your Notification";
//     case "Profile":
//       return "Your Profile";
//     case "SignUp":
//       return "Đăng ký";
//   }
// }
const styles = StyleSheet.create({
  bottomBtn: {
    flexDirection: "column",
    color: "red",
    backgroundColor: "red",
  },
});
