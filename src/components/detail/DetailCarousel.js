import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { MyColor } from '../../theme/colors';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const DetailCarousel = ({ product }) => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image source={{uri: item}} style={{width: 200, height: 200}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </View>
    );
  };


 

  return (
    <View style={{}}>
    <Carousel
      ref={isCarousel}
      data={product?.picURLs}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      onSnapToItem={index => setIndex(index)}
    />
    <Pagination
      dotsLength={product?.picURLs.length}
      activeDotIndex={index}
      carouselRef={isCarousel}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -10,
        backgroundColor:MyColor.getir,
      }}
      tappableDots={true}
      inactiveDotStyle={{
        backgroundColor: 'black',
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  </View>
);
};

export default DetailCarousel;
