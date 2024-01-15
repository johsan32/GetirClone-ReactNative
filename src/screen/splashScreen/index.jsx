import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {MyColor} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../utils/Routes';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={MyColor.background} />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.HOME)}
        style={{flex: 1}}>
        <Text> Açılış ekranı burayı düzenleyebilirsiniz...</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;
