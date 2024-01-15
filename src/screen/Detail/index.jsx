import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {MyColor} from '../../theme/colors';
import CartButton from '../../components/CartButton';
import Loading from '../../components/Loading';
import DetailProperty from '../../components/detail/DetailProperty';
import DetailBox from '../../components/detail/DetailBox';
import DetailCarousel from '../../components/detail/DetailCarousel';

const DetailScreen = ({route}) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(route.params.product);
  }, []);
  if (!product) {
    return <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: '100%', backgroundColor: MyColor.white}}>
        <DetailCarousel product={product} />
        <DetailBox product={product} />
        <DetailProperty />
      </ScrollView>
      <CartButton product={product} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
