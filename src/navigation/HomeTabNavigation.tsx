import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InsightsScreen from '../screens/Home/Insights';
import AccountScreen from '../screens/Home/Account';
import HomeScreen from '../screens/Home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
// newspaper-o
// user-circle-o
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Insights'
        component={InsightsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='newspaper-o' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name='user-circle-o' color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
