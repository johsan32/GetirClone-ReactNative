import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../utils/Routes';
import {windowWidth} from '../utils/Dimensions';
import {useSelector} from 'react-redux';

const HeaderRight = () => {
  const navigation = useNavigation();
  const basket = useSelector(state => state.carts.listBasket);
  const totalPrc = useSelector(state => state.carts.totalPrice);


  if (basket.length > 0 )
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.BASKET)}
        style={{
          width: windowWidth * 0.22,
          height: 33,
          backgroundColor: 'white',
          borderRadius: 9,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 23, height: 23, marginLeft: 2}}
          source={require('../assets/images/cart.png')}
        />
        <View style={{width: 5, height: 30, backgroundColor: 'white'}} />
        <View
          style={{
            flex: 1,
            backgroundColor: '#F3EFFE',
            height: 30,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#5D3EBD',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            <Text>{'\u20BA'}</Text>
            {totalPrc?.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    );
};

export default HeaderRight;

const styles = StyleSheet.create({});
