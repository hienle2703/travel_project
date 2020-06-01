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
import DetailFeed from "../screens/FeedTab/DetailFeed";

import SignUp from "../screens/ProfileTab/SignUp";
import SignIn from "../screens/ProfileTab/SignIn";

import ProfileScreen from "../screens/ProfileTab/ProfileScreen";

import ScheduleScreen from "../screens/ScheduleTab/ScheduleScreen";

import ManageScreen from "../screens/ManageTab/ManageScreen";

import NotiScreen from "../screens/NotiTab/NotiScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Feed";

import { createStackNavigator } from "@react-navigation/stack";
import ScheduleDetail from "../screens/ScheduleTab/ScheduleDetail";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SignUp" title="Đăng ký" component={SignUp} />
      <Stack.Screen name="SignIn" title="Đăng nhập" component={SignIn} />
    </Stack.Navigator>
  );
}
function ScheduleStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="ScheduleDetail" title="Chi tiết lịch trình" component={ScheduleDetail} />
      {/* <Stack.Screen name="SignIn" title="Đăng nhập" component={SignIn} /> */}
    </Stack.Navigator>
  );
}
function FeedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen
        name="DetailFeed"
        title="Trang chi tiết"
        component={DetailFeed}
      />
    </Stack.Navigator>
  );
}
export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({});

  return (
    <BottomTab.Navigator
      style={styles.bottomBtn}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          title: "Feed",

          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Schedule"
        component={ScheduleStack}
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
          tabBarIcon: ({ focused, color ,size }) => (
            <TabBarIcon
              focused={focused}
              name="md-notifications"
            />
          ),
          tabBarOptions: {
            activeTintColor: '#DB5823',
           inactiveTintColor: 'gray',
          },
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

const styles = StyleSheet.create({
  bottomBtn: {
    flexDirection: "column",
    color: "red",
    backgroundColor: "red",
  },
});
