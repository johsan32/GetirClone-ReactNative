import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from './ProductItem';

const ProductContainer = ({select, productData}) => {
  const state = useSelector(state => state.context);
  const selectState = state?.dondurma;

  //console.log('select', select);
  //console.log('route', selectState);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {productData[1]?.products?.slice(1, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
        {productData[0]?.products?.slice(4, 5).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      {productData.map(item => (
        <View>
          <Text style={{color: 'gray', fontWeight: 'bold', padding: 14}}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              flexWrap: 'wrap',
              width: '100%',
              backgroundColor: 'white',
              paddingVertical: 10,
            }}>
            {item.products.map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
