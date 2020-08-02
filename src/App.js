import 'react-native-gesture-handler';
import React ,{useEffect}from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Search from './screens/Search';
import VideoPlayer from './screens/VideoPlayer';
import Explore from './screens/Explore';
import Subscribe from './screens/Subscribe';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const customDarkTheme = {
  ...DarkTheme,
  color: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const store = createStore(reducer);

function RootHome() {
  const { color } = useTheme();
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
        activeTintColor: color.tabIcon,
        inactiveColor: 'gray',
      }}>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
}

export function Navigation() {
  let currentTheme = useSelector((state) => {
    return state.theme;
  });
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={currentTheme ? customDefaultTheme : customDarkTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// eslint-disable-next-line react/display-name
// eslint-disable-next-line no-undef
export default App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

