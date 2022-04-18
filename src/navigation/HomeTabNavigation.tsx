import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InsightsScreen from '../screens/Home/Insights';
import AccountScreen from '../screens/Home/Account';
import HomeScreen from '../screens/Home/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Insights' component={InsightsScreen} />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
