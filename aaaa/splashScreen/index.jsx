// SplashScreen.js
import React from 'react';
import {ScrollView, SafeAreaView, View, Text} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import HomeHeader from '../../components/home/HomeHeader';
import SplashCarousel from '../../components/splash/SplashCarousel';
import {useSelector} from 'react-redux'
import splash from '../../redux/store/splash';
const SplashScreen = () => {
const data= splash
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={{height: windowHeight, backgroundColor: '#f5f5f5'}}>
        <View style={{backgroundColor: '#f5f5f5'}}></View>
        <HomeHeader />

        <View style={{flexDirection: 'row'}}>
          <SplashCarousel  data={data} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
