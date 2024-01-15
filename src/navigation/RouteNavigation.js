import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import {MyColor} from '../theme/colors';
import StackNavigation from './StackNavigation';
import Search from '../screen/Search';
import UserScreen from '../screen/User';
import GiftsScreen from '../screen/Gifts';
import {Image, TouchableOpacity, View} from 'react-native';
import SplashScreen from '../screen/splashScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        headerBackgroundContainerStyle: {backgroundColor: MyColor.primary},
        headerShadowVisible: true,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#959595',
        tabBarStyle: {
          height: 50,
        },
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home_selected.png')
                  : require('../assets/icons/home.png')
              }
              style={{width: 32, height: 32}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/search_selected.png')
                  : require('../assets/icons/search.png')
              }
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.SPLASH}
        component={SplashScreen}
        options={{
          tabBarLabel: 'Splash',
          tabBarShowLabel: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              style={{
                backgroundColor: MyColor.background,
                marginBottom: 30,
                borderWidth: 2,
                borderColor: MyColor.white,
                paddingVertical: 12,
                paddingHorizontal: 15,
                borderRadius: 100,
              }}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/menu_selected.png')
                    : require('../assets/icons/menu1.png')
                }
                style={{width: 30, height: 35, borderRadius: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.USER}
        component={UserScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
         headerTitleStyle: {color: MyColor.background},
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/profile_selected.png')
                  : require('../assets/icons/profile.png')
              }
              style={{width: 32, height: 32}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.GIFTS}
        component={GiftsScreen}
        options={{
          tabBarLabel: 'Gift',
          headerBackground: MyColor.background,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/gift_selected.png')
                  : require('../assets/icons/gift.png')
              }
              style={{width: 32, height: 32}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
