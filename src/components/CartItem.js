import React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {minusAmount, plusAmount} from '../redux/actions/cartActions';
const {width, height} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
const CartItem = ({product}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.4,
          borderBottomColor: 'lightgrey',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: height * 0.09,
              width: height * 0.09,
              borderRadius: 8,
              borderWidth: 0.4,
              borderColor: 'lightgray',
            }}
            source={{uri: product?.squareThumbnailURL}}
          />
          <View style={{marginLeft: 8}}>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 13,
                  maxWidth: width * 0.44,
                }}>
                {product?.name}
              </Text>
              <Text
                style={{
                  color: '#848897',
                  fontWeight: '600',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                {product?.shortDescription}
              </Text>
            </View>
            <Text
              style={{
                color: '#5D3EBD',
                fontWeight: 'bold',
                fontSize: 14,
                marginTop: 6,
              }}>
              <Text>{'\u20BA'}</Text>
              {product?.priceText}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width * 0.22,
            height: height * 0.04,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderWidth: 0.5,
            borderColor: 'lightgrey',
            shadowOpacity: 0.4,
            shadowColor: 'gray',
          }}>
          <TouchableOpacity
            onPress={() => dispatch(minusAmount(product))}
            style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#5D3EBD'}}>
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: '#5D3EBD',
              height: height * 0.04,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
              {product?.amount}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(plusAmount(product))}
            style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#5D3EBD'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default CartItem;
