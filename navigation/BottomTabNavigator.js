import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import SearchBar from "../components/SearchBar";

import FeedScreen from "../screens/FeedTab/FeedScreen";

import SignUp from "../screens/ProfileTab/SignUp";

import ProfileScreen from "../screens/ProfileTab/ProfileScreen";

import ScheduleScreen from "../screens/ScheduleTab/ScheduleScreen";
import createScheduleScreen from "../screens/ScheduleTab/createScheduleScreen"
import searchLocationScreen from "../screens/ScheduleTab/searchLocationScreen"
import searchFriendScreen from '../screens/ScheduleTab/searchFriendScreen'
import ManageScreen from "../screens/ManageTab/ManageScreen";

import NotiScreen from "../screens/NotiTab/NotiScreen";
import { Ionicons } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Feed";

import { createStackNavigator } from "@react-navigation/stack";
import createFeedScreen from "../screens/FeedTab/createFeedScreen";
import createGroupScreen from "../screens/ManageTab/createGroup";


const FeedStack = createStackNavigator();
function feedStack({navigation}){
  return(
    <FeedStack.Navigator screenOptions={{ headerShown: true }} initialRouteName ="Feed">
    <FeedStack.Screen
        name="Feed"
        title="Feed"
        component={FeedScreen}
        options={{

          headerRight: () => (
            <TouchableOpacity
            onPress={()=>navigation.navigate('createFeed')}>
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <FeedStack.Screen
        name="createFeed"
        title="Creating Your new Feed"
        component={createFeedScreen}
        options={{

          headerRight: () => (
            <TouchableOpacity
            onPress={()=>navigation.navigate('Feed')}>
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}/>
      </FeedStack.Navigator>
  );
  
}
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

const ScheStack = createStackNavigator();

function ScheduleStack({navigation}) {
  return (
    <ScheStack.Navigator screenOptions={{ headerShown: true ,headerTitleAlign:'center',}} initialRouteName="Schedule">

      <ScheStack.Screen
        name="Schedule" 
        title="Lịch trình"
        component={ScheduleScreen} 
        options={{

        headerRight: () => (
          <TouchableOpacity
            onPress={()=>{navigation.navigate('createSchedule')}}
          >
            <Text>+</Text>
          </TouchableOpacity>
        ),
      }}
      />
      <ScheStack.Screen
        name="createSchedule"
        title="Tạo lịch trình mới"
        component={createScheduleScreen}
        options={{

          headerRight: () => (
            <TouchableOpacity
            onPress={()=>navigation.navigate('Schedule')}>
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScheStack.Screen
        name="searchLocation"
        title="ABC"
        component={searchLocationScreen}
        options={{
          headerLeft:props => <Ionicons name="ios-arrow-back" size={24} color="orange" onPress={()=>navigation.navigate('createSchedule')}/>,
          headerTitle:props => <SearchBar placeholder='Type here to search location'/>,
          headerRight: () => (
            <TouchableOpacity
              onPress={()=>{navigation.navigate('createSchedule')}}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScheStack.Screen
        name="SearchFriend"
        title="ABC"
        component={searchFriendScreen}
        options={{
          headerLeft:props => <Ionicons name="ios-arrow-back" size={24} color="orange" onPress={()=>navigation.navigate('createSchedule')}/>,
          headerTitle:props => <SearchBar placeholder='Find friend...'/>,
          headerRight: () => (
            <TouchableOpacity
              onPress={()=>{navigation.navigate('createSchedule')}}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        }}
        />
    </ScheStack.Navigator>
  );
}

const GrStack = createStackNavigator();
function GroupStack({navigation}){
  return (
    <GrStack.Navigator screenOptions={{ headerShown: true ,headerTitleAlign:'center',}} initialRouteName="ManageGroup">

      <GrStack.Screen
        name="ManageGroup" 
        title="Your Group"
        component={ManageScreen} 
        options={{

        headerRight: () => (
          <TouchableOpacity
            onPress={()=>{navigation.navigate('createGroup')}}
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
  )
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
        component={feedStack}
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
        component={GroupStack}
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
