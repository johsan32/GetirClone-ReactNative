import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {windowHeight} from '../../utils/Dimensions';
import {useSelector} from 'react-redux';

const CategoryBox = ({active, item}) => {
 console.log('The title is ', active, item);
  return (
    <TouchableOpacity

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
    </TouchableOpacity>
  );
};

const CategoryFiltering = ({category}) => {
  const {categoryGetir} = useSelector(state => state.context);

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
        data={categoryGetir}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CategoryBox item={item?.name} active={category} />
        )}
      />
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({});
