import React, { useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/Routes';
import HomeScreen from '../screen/Home';
import ProductScreen from '../screen/ProductScreen';
import {MyColor} from '../theme/colors';
import DetailScreen from '../screen/Detail';
import HeaderRight from './HeaderRight';
import {Text, TouchableOpacity} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import BasketScreen from '../screen/BasketScreen';
import { useDispatch } from "react-redux";
import { clearBasket } from '../redux/actions/cartActions';
import SplashScreen from '../screen/splashScreen';
const Stack = createNativeStackNavigator();

const tabHiddenRoutes = [Routes.PRODUCTDETAIL, Routes.BASKET, Routes.SPLASH];

function MyStack({navigation, route}) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log('Kapat ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      console.log('Aç ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'true'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: MyColor.background,
      }}>
      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.CATDETAIL}
        component={DetailScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: MyColor.light},
          headerRight: () => <HeaderRight />,
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Ürün
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name={Routes.BASKET}
        component={BasketScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
              <Ionicons
                style={{marginLeft: 4}}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity 
            onPress={() => dispatch(clearBasket())} 
            style={{}}>
              <Ionicons
                style={{marginRight: 8}}
                name="trash"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={Routes.SPLASH} component={SplashScreen} 
      options={{statusBarColor:MyColor.background}}
      
      />
      <Stack.Screen
        name={Routes.PRODUCT}
        component={ProductScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: MyColor.light},
          headerRight: () => <HeaderRight />,
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name={Routes.PRODUCTDETAIL}
        component={DetailScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: MyColor.light},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 0}}>
              <Ionicons
                style={{marginLeft: 0}}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <Foundation
                style={{marginRight: 8}}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function StackNavigation({navigation, route}) {
  return <MyStack navigation={navigation} route={route} />;
}

export default StackNavigation;
