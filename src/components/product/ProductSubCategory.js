import React, {useState} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {useSelector} from 'react-redux';
import ProductContainer from './ProductContainer';


const TypeBox = ({active, item, setCat}) => {
  //console.log('The title is ', active, item);
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
        
        },
        item == active
          ? {backgroundColor: '#5C3EBC'}
          : {borderColor: '#F0EFF7', borderWidth: 1},
      ]}>
      <Text
        style={[
          {fontSize: 12, color: '#7849F7', fontWeight: '600'},
          item == active && {color: 'white'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const ProductSubCategory = ({subCategory}) => {
  const state = useSelector(state => state.context);
  const selectState = state?.[subCategory];
  const [selectSubCategory, setSelectSubCategory] = useState(
    selectState[0]?.name,
  );
 // console.log('subCategory state', selectState);
// console.log('subCategory', selectSubCategory);
  return (
    <View>
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: height * 0.072,
          flexDirection: 'row',
          paddingVertical: height * 0.014,
          paddingHorizontal: 12,
         
        }}
         stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}>
        <FlatList
          data={selectState}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TypeBox
              setCat={setSelectSubCategory}
              item={item.name}
              active={selectSubCategory}
            />
          )}
        />
      </ScrollView>
      <ProductContainer productData ={selectState}  select={selectSubCategory}/>
    </View>
  );
};

export default ProductSubCategory;

const styles = StyleSheet.create({});
