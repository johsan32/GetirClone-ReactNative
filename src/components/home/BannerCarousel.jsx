import React, {useState, useRef} from 'react';
import {View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [
    require('../../assets/sliders/1.png'),
    require('../../assets/sliders/2.png'),
    require('../../assets/sliders/3.png'),
    require('../../assets/sliders/4.png'),
    require('../../assets/sliders/5.png'),
    require('../../assets/sliders/6.png'),
    require('../../assets/sliders/7.png'),
    require('../../assets/sliders/8.png'),
    require('../../assets/sliders/9.png'),
  ];

  const carouselRef = useRef(null);
  const goForward = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <Image
          source={item}
          style={{
            width: windowWidth * 0.85,
            height: windowHeight*0.24,
            resizeMode: 'contain',
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      }}>
      <Carousel
        ref={carouselRef}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.65}
        activeSlideAlignment={'center'}
        layoutCardOffset={3}
        inactiveSlideScale={0.5}
        inactiveSlideShift={1}
        slideStyle={{borderRadius: 5}}
        data={banners}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BannerCarousel;
