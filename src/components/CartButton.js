import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { windowHeight } from '../utils/Dimensions';
import { useDispatch } from "react-redux";
import { addToBasket } from '../redux/actions/cartActions';
import {useNavigation} from '@react-navigation/native';

function CartButton({product}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress =()=>{
    dispatch(addToBasket(product));
    navigation.goBack()
  }

  return (
    <TouchableOpacity
      // onPress={() => props.addItemToCart(props.product)}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: windowHeight * 0.1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
      onPress={handlePress}
        style={{
          backgroundColor: '#5D39C1',
          flexDirection: 'row',
          alignItems: 'center',
          height: windowHeight * 0.06,
          justifyContent: 'center',
          width: '88%',
          marginHorizontal: '6%',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default CartButton;
