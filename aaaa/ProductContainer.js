import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import productsGetir from '../assets/images/productsGetir';
import ProductItem from './ProductItem';

const ProductContainer = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{color: 'gray', fontWeight: 'bold', padding: 14}}>
        Çubuk
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
        {productsGetir.slice(2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
