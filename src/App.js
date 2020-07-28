import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Search from './screens/Search';
import VedioPlayer from './screens/VedioPlayer';
import Explore from './screens/Explore';
import Subscribe from './screens/Subscribe';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function RootHome() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions';
          }
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveColor: 'gray',
      }}>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="vedioPlayer" component={VedioPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
