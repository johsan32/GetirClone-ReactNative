import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../../components/CartItem';
import ProductItem from '../../components/product/ProductItem';
import {windowHeight} from '../../utils/Dimensions';

const BasketScreen = () => {
  const state = useSelector(state => state.context);
  const prdouctAdvice = state?.MeyveSebze[0]?.products;
  const basket = useSelector(state => state.carts.listBasket);
  const totalPrc = useSelector(state => state.carts.totalPrice);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        {basket.length > 0 && (
          <FlatList
            style={{
              backgroundColor: '#F5F5F5',
              maxHeight: windowHeight * 0.5,
            }}
            data={basket}
            renderItem={({item}) => <CartItem product={item} />}
          />
        )}
        <Text style={{padding: 15, fontWeight: 'bold', color: '#5D3EBD'}}>
          Önerilen Ürünler
        </Text>

        <FlatList
          data={prdouctAdvice?.slice(0, 2)}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal
          renderItem={({item}) => <ProductItem index={item.id} item={item} />}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: height * 0.12,
          paddingHorizontal: '4%',
          width: '100%',
          backgroundColor: '#f8f8f8',
          position: 'absolute',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: '#5D3EBD',
            height: height * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            height: height * 0.06,
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <Text
            style={{
              color: '#5D3EBD',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            <Text>{'\u20BA'}</Text>
            {totalPrc?.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketScreen;
