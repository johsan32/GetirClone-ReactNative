import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {MyColor} from '../../theme/colors';
import CategoryFiltering from '../../components/product/CategoryFiltering';
import ProductSubCategory from '../../components/product/ProductSubCategory';


export default function ProductScreen({route}) {
  const [selectCategory, setSelectCategory] = useState(route.params);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      style={{height: '100%', backgroundColor: MyColor.screen}}>
      <CategoryFiltering category={selectCategory.category} />
      <ProductSubCategory subCategory={selectCategory.path} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
