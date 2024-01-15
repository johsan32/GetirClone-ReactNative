import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import CategoryItem from '../CategoryItem';

const CategoriesList = () => {
  const {categories} = useSelector(state => state.context);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.listContainer}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          numColumns={4}
          renderItem={({item}) => (
            <CategoryItem name={item.name} picURL={item.picURL} path={item.path} />
          )}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 25,
  },
});

export default CategoriesList;
