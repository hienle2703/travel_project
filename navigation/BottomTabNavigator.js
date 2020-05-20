import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ManageScreen from '../screens/ManageScreen';
import NotiScreen from '../screens/NotiScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Feed';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (

<BottomTab.Navigator  style={styles.bottomBtn} initialRouteName={INITIAL_ROUTE_NAME}>
      
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        
        options={{
          title: 'Feed',

          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: 'Schedule',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-pie" />,
        }}
      />
      <BottomTab.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          title: 'Group Management',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-git-network" />,
        }}
      />
      <BottomTab.Screen
        name="Noti"
        component={NotiScreen}
        options={{
          title: 'Notification',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-notifications" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>

    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Feed':
      return 'Your Feed';
    case 'Schedule':
      return 'Schedule';
    case 'Manage':
      return 'Group Managemnet';
      case 'Noti':
      return 'Your Notification';
      case 'Profile':
      return 'Your Profile';
  }
}
const styles = StyleSheet.create({
  bottomBtn: {
    flexDirection: "column",
    color: "red",
    backgroundColor:"red"
  }
})
