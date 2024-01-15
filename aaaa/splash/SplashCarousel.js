// SplashCarousel.js
import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SvgUri} from 'react-native-svg';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {MyColor} from '../../theme/colors';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const SplashCarousel = ({data}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({item}) => {
    return (
      <View style={{width: windowWidth, height:windowHeight*0.3}}>
        <View
          style={{
            height:windowHeight*0.2,
            alignItems: 'center',
            backgroundColor: MyColor.background,
            borderBottomRightRadius:350,
            borderBottomEndRadius:350,
          }}>
          <View style={{ height: windowHeight * 0.3}}>
            <View style={{width:windowWidth, height: 30, marginTop:10,}}>
              <Image
                source={item.img}
                style={{width: 75, height: 35, resizeMode: 'contain',}}
                
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 70,
                right:20,
                backgroundColor:MyColor.light,
              }}>
              <SvgUri width="100" height="100" uri={item?.imgURL} />
            </View>

            <Text
              style={{
                marginVertical: 10,
                fontSize: 15,
                maxWidth:"80%",
                textAlign:"right",
                fontWeight: "500",
                position: 'absolute',
                bottom: 10,
                right:15,
              }}>
              {item.describe}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginVertical: 5}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={12}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default SplashCarousel;
