import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const CustomTabBarButton = ({focused}) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 32,
        justifyContent: 'center',
        marginTop: -8,
        alignItems: 'center',
        backgroundColor: '#5C3EBC',
        width: 55,
        height: 55,
        marginBottom:25
      }}>
      <Image
        source={
          !focused
            ? require('../assets/icons/menu_selected.png')
            : require('../assets/icons/menu1.png')
        }
        resizeMode="contain"
        style={{width: 50, height: 50, margin: 10}}
      />
    </TouchableOpacity>
  );
};
export default CustomTabBarButton;
