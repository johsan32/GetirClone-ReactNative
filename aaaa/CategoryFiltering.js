import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {windowHeight} from '../utils/Dimensions';
import categoriesGetir from '../assets/images/categoriesGetir';
import {useSelector} from 'react-redux';


const CategoryBox = ({active, item}) => {
  // console.log('The title is ', active);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 9,
        },
        item == active && {
          borderBottomColor: '#FFD00C',
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>
        {item}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({category}) => {
  const [categories, setCategories] = useState(categoriesGetir);
  const state = useSelector(state => state);
  const suIcecek = state.context.suIcecek;
  console.log("su", suIcecek);
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: '#7849F7',
        height: windowHeight * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>

      <FlatList 
      data={suIcecek}
      style={{backgroundColor:"red"}}
      keyExtractor={item=>item.id}
      renderItem={({item})=> 
        <View>
          <Text>{item.name}</Text>
        </View>}



      />

      {categories.map(item => (
        <CategoryBox item={item.name} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({});
