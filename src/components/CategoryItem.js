import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import { Routes } from '../utils/Routes';
import { MyColor } from '../theme/colors';

const CategoryItem = ({name, picURL,path}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.PRODUCT, {category:name, path:path})}
      style={styles.container}>
      <Image
        style={{
          width: windowWidth * 0.17,
          height: windowWidth * 0.17,
          borderRadius: 10,
        }}
        source={{uri: picURL}}
      />
      <Text style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container:{
    width: windowWidth * 0.25,
    height: windowWidth * 0.24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text:{
    fontSize: 12, 
    color:MyColor.text, 
    fontWeight: '500'
  }

});
export default CategoryItem;
