import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import HomeScreen from '../Pages/HomeScreen';
import CalendarScreen from '../Pages/CalendarScreen';
import LibraryScreen from '../Pages/LibraryScreen';
import MyPageScreen from '../Pages/MyPageScreen';

const BottonTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#00000',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HOME',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            title: 'CALENDAR',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            title: 'LIBRARY',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="dumbbell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My_Page"
          component={MyPageScreen}
          options={{
            title: 'MY PAGE',
            tabBarIcon: ({color, size}) => (
              <Octicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottonTabNavigation;
