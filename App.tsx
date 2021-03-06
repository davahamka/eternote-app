import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import LoginScreen from './src/screens/Auth/Login';
import InformationScreen from './src/screens/Auth/Information';
import theme from './src/lib/theme';
import RegisterScreen from './src/screens/Auth/Register';
import HomeTabNavigation from './src/navigation/HomeTabNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import DetailArticleScreen from './src/screens/Home/DetailArticle';
import DetailEventScreen from './src/screens/Home/DetailEvent';
import BadgeScreen from './src/screens/Home/Badge';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Information'
              component={InformationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='HomeTab'
              component={HomeTabNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Badge'
              component={BadgeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='DetailArticle'
              component={DetailArticleScreen}
              options={({ route }) => ({ title: (route.params as any).title })}
            />
            <Stack.Screen
              name='DetailEvent'
              component={DetailEventScreen}
              options={({ route }) => ({ title: (route.params as any).title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
