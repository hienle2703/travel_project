import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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

import ChoiceTravelScreen from "../screens/ManageTab/ChoiceTravelScreen";

import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesome } from "@expo/vector-icons";
import ChatScreen from "../screens/ManageTab/ChatScreen";
import MemberListScreen from "../screens/ManageTab/MemberListScreen";
import Account from "../screens/ProfileTab/Account";
import EditAccount from "../screens/ProfileTab/EditAccount";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Feed";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
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
      <Stack.Screen
        name="ScheduleDetail"
        title="Chi tiết lịch trình"
        component={ScheduleDetail}
      />
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
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: " Trang cá nhân",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRightContainerStyle: { marginRight: 20 },
          headerLeft: (props) => (
            <Ionicons
              name="md-arrow-round-back"
              size={35}
              color="green"
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          title: " Thông tin cá nhân",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRightContainerStyle: { marginRight: 20 },
          headerLeft: (props) => (
            <Ionicons
              name="md-arrow-round-back"
              size={35}
              color="green"
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ManageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Manage" component={ManageScreen} />
      <Stack.Screen
        name="ChoiceTravelScreen"
        component={ChoiceTravelScreen}
        options={{
          title: " Quản lí lịch trình",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRightContainerStyle: { marginRight: 20 },
          headerLeft: (props) => (
            <Ionicons
              name="md-arrow-round-back"
              size={35}
              color="green"
              {...props}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("Không tìm thấy !")}>
              <FontAwesome name="search" size={25} color="green" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: " Trò chuyện",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRightContainerStyle: { marginRight: 20 },
          headerLeft: (props) => (
            <Ionicons
              name="md-arrow-round-back"
              size={35}
              color="green"
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MemberListScreen"
        component={MemberListScreen}
        options={{
          title: "Thành Viên",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeftContainerStyle: { marginLeft: 20 },
          headerRightContainerStyle: { marginRight: 20 },
          headerLeft: (props) => (
            <Ionicons
              name="md-arrow-round-back"
              size={35}
              color="green"
              {...props}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("Không tìm thấy !")}>
              <FontAwesome name="plus" size={25} color="green" />
            </TouchableOpacity>
          ),
        }}
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
        component={ManageStack}
        options={{
          title: "Group Management",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-git-network" />
          ),
        }}
      />
      <BottomTab.Screen
        name="NotiScreen"
        component={NotiScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} name="md-notifications" />
          ),
          tabBarOptions: {
            activeTintColor: "#DB5823",
            inactiveTintColor: "gray",
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
  txtTitle: {
    fontWeight: "bold",
  },
});
