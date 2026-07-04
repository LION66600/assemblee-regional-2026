import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuthStore} from '@store/useAuthStore';

import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';
import AssemblyDetailScreen from '@screens/AssemblyDetailScreen';
import CalendarScreen from '@screens/CalendarScreen';
import ProfileScreen from '@screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{title: 'Assemblées'}}
      />
      <Stack.Screen
        name="AssemblyDetail"
        component={AssemblyDetailScreen}
        options={{title: 'Détails'}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: 'Accueil',
          tabBarLabel: 'Accueil',
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendrier',
          tabBarLabel: 'Calendrier',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const {isAuthenticated} = useAuthStore();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
