import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {Routes} from '../../utils/Routes';
import { useDispatch } from "react-redux";
//import { contextActions } from '../../redux/store/context';

import { addToBasket } from '../../redux/actions/cartActions';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
 // console.log('proitem', item);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.PRODUCTDETAIL, {product: item})}
      style={{
        width: windowWidth * 0.285,
        marginTop: 12,
        height: windowHeight * 0.25,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 12,
        //backgroundColor:'red',
        marginBottom: 10,
      }}>
      <Image
        style={{
          width: windowWidth * 0.285,
          height: windowWidth * 0.285,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: 'gray',
        }}
        source={{
          uri: item?.squareThumbnailURL,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text
          style={{
            textDecorationLine: 'line-through',
            color: '#747990',
            fontWeight: 'bold',
            fontSize: 10,
          }}>
          {/* <Text>{'\u20BA'}</Text> */}
          {item?.struckPriceText}
        </Text>

        <Text
          style={{
            color: '#5D3EBD',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: 4,
          }}>
          {item.priceText}
        </Text>
      </View>
      <Text style={{fontWeight: '600', fontSize: 13, marginTop: 4}}>
        {item.name}
      </Text>
      <Text
        style={{
          color: '#747990',
          fontSize: 12,
          marginTop: 4,
          fontWeight: '600',
        }}>
        {item.miktar}
      </Text>

      <TouchableOpacity
        onPress={() => dispatch(addToBasket(item))}
        style={{
          position: 'absolute',
          borderWidth: 0.3,
          right: -10,
          top: -10,
          borderRadius: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          borderColor: 'lightgrey',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
        }}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
