import React from 'react';
import {View, Text} from 'react-native';

const DetailBox = ({product}) => {
  return (
    <View
      style={{width: '100%', alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text
          style={{
            textDecorationLine: 'line-through',
            color: '#747990',
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          {product?.struckPriceText}
        </Text>
        <Text
          style={{
            color: '#5D3EBD',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 12,
          }}>
          {product?.priceText}
        </Text>
      </View>
      <Text style={{fontWeight: '700', fontSize: 16, marginTop: 12}}>
        {product?.shortName}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontWeight: '600',
          marginTop: 8,
          paddingBottom: 18,
        }}>
        {product?.shortDescription}
      </Text>
    </View>
  );
};

export default DetailBox;
