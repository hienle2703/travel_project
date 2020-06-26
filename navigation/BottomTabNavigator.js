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
import SearchBar from "../components/SearchBar";

import FeedScreen from "../screens/FeedTab/FeedScreen";
import DetailFeed from "../screens/FeedTab/DetailFeed";

import SignUp from "../screens/ProfileTab/SignUp";
import SignIn from "../screens/ProfileTab/SignIn";

import ProfileScreen from "../screens/ProfileTab/ProfileScreen";

import ScheduleScreen from "../screens/ScheduleTab/ScheduleScreen";
import createScheduleScreen from "../screens/ScheduleTab/createScheduleScreen";
import searchLocationScreen from "../screens/ScheduleTab/searchLocationScreen";
import searchFriendScreen from "../screens/ScheduleTab/searchFriendScreen";
import ManageScreen from "../screens/ManageTab/ManageScreen";
import DetailGroup from "../screens/ManageTab/DetailGroup";
import NotiScreen from "../screens/NotiTab/NotiScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Feed";

import { createStackNavigator } from "@react-navigation/stack";
import ScheduleDetail from "../screens/ScheduleTab/ScheduleDetail";

import ChoiceTravelScreen from "../screens/ManageTab/ChoiceTravelScreen";
import PickScheduleDone from "../screens/FeedTab/PickScheduleDone"
import { FontAwesome } from "@expo/vector-icons";
import ChatScreen from "../screens/ManageTab/ChatScreen";
import MemberListScreen from "../screens/ManageTab/MemberListScreen";
import Account from "../screens/ProfileTab/Account";
import EditAccount from "../screens/ProfileTab/EditAccount";

import createFeedScreen from "../screens/FeedTab/createFeedScreen";
import createGroup from "../screens/ManageTab/createGroup";
import AddMember from "../screens/ManageTab/AddMember";
import ManageSchedule from "../screens/ManageTab/ManageSchedule";

import FriendMainScreen from "../screens/ContactTab/FriendMainScreen";
import FirstRoute from "../screens/ScheduleTab/FirstRoute";

import PickFriend from "../screens/ManageTab/PickFriend";
import PickSchedule from "../screens/ManageTab/PickSchedule"
import searchDestinationScreen from "../screens/ScheduleTab/searchDestinationScreen"

const Stack = createStackNavigator();

function FriendStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FriendMainScreen" component={FriendMainScreen} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName={ProfileScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SignUp" title="Đăng ký" component={SignUp} />
      <Stack.Screen
        name="SignIn"
        title="Đăng nhập"
        tabBarOptions={{ keyboardHidesTabBar: true }}
        component={SignIn}
      />
      <Stack.Screen name="Account" title="Tài khoản" component={Account} />
      <Stack.Screen name="ManageStack" component={ManageStack}/>
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
function ScheduleStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen
        name="createScheduleScreen"
        title="Tạo lịch trình mới"
        component={createScheduleScreen}
        // options={{
        //   headerRight: () => (
        //     <TouchableOpacity onPress={() => navigation.navigate("Schedule")}>
        //       <Text>Add</Text>
        //     </TouchableOpacity>
        //   ),
        //}}
      />
      <Stack.Screen name="FirstRoute" title="Lịch trình 1" component={FirstRoute}/>
      <Stack.Screen
        name="ScheduleDetail"
        title="Chi tiết lịch trình"
        component={ScheduleDetail}
      />
      {/* <Stack.Screen name="SignIn" title="Đăng nhập" component={SignIn} /> */}

      <Stack.Screen
        name="createSchedule"
        title="Tạo lịch trình mới"
        component={createScheduleScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Schedule")}>
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="searchDestinationScreen" title="Chọn điểm đến" component={searchDestinationScreen}/>
      <Stack.Screen
        name="searchLocationScreen"
        title="ABC"
        component={searchLocationScreen}
        options={{
          headerLeft: (props) => (
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="orange"
              onPress={() => navigation.navigate("createSchedule")}
            />
          ),
          headerTitle: (props) => (
            <SearchBar placeholder="Type here to search location" />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("createSchedule");
              }}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SearchFriend"
        title="ABC"
        component={searchFriendScreen}
        options={{
          headerLeft: (props) => (
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="orange"
              onPress={() => navigation.navigate("createSchedule")}
            />
          ),
          headerTitle: (props) => <SearchBar placeholder="Find friend..." />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("createSchedule");
              }}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        }}
      />
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
      <Stack.Screen
        name="createFeedScreen"
        title="Creating Your new Feed"
        component={createFeedScreen}
        // options={{
        //   headerRight: () => (
        //     <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
        //       <Text>Add</Text>
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      <Stack.Screen name="PickScheduleDone" component={PickScheduleDone} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="ScheduleStack" component={ScheduleStack} />
      
    </Stack.Navigator>
  );
}
function ManageStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManageScreen" component={ManageScreen} />
      <Stack.Screen name="DetailGroup" component={DetailGroup} />
      <Stack.Screen name="PickFriend" component={PickFriend} />
      <Stack.Screen name="PickSchedule" component={PickSchedule} />
      <Stack.Screen
        name="createGroup"
        component={createGroup}
      />
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
      <Stack.Screen name="ManageSchedule" component={ManageSchedule} />
      <Stack.Screen name="AddMember" component={AddMember} />
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

const ScheStack = createStackNavigator();

const GrStack = createStackNavigator();
function GroupStack({ navigation }) {
  return (
    <GrStack.Navigator
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
      initialRouteName="ManageGroup"
    >
      <GrStack.Screen
        name="ManageGroup"
        title="Your Group"
        component={ManageScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("createGroup");
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <GrStack.Screen
        name="createGroup"
        title="Creating a new Group"
        component={createGroupScreen}
      />
    </GrStack.Navigator>
  );
}
export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({});

  return (
    <BottomTab.Navigator
      style={styles.bottomBtn}
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused, activeTintColor }) =>
            focused ? (
              <TabBarIcon
                focused={focused}
                style={{ color: "tomato" }}
                name="ios-home"
              />
            ) : (
              <TabBarIcon
                focused={focused}
                style={{ color: "gray" }}
                name="ios-home"
              />
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
        tabBarOptions={{ keyboardHidesTabBar: true }}
        options={{
          keyboardHidesTabBar: true,
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
