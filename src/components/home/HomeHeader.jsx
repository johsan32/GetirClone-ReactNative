import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowHeight} from '../../utils/Dimensions';
import {MyColor} from '../../theme/colors';

function HomeHeader() {
  return (
    <View testID="header-main" style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />
        <View style={styles.headerOneView}>
          <Text testID="place-text" style={{fontWeight: '600', fontSize: 16}}>
            Ev
          </Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 14.5,
              color: '#6E7480',
              marginLeft: 6,
              marginRight: 3,
            }}>
            Yer bilgisi giriniz...
          </Text>
          <View style={{marginLeft: 90}}>
            <Entypo name="chevron-down" size={22} color="#5D3EBD" />
          </View>
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text
          style={{
            fontSize: 13,
            color: '#5D3EBD',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          TVS
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#5D3EBD',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          20-30
          <Text
            style={{
              fontSize: 16,
              color: '#5D3EBD',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {' '}
            dk
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerMain: {
    height: windowHeight * 0.064,
    flexDirection: 'row',
    backgroundColor: MyColor.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerOne: {
    height: windowHeight * 0.064,
    width: '74%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    height: 30,
    width: 30,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 2,
    height: windowHeight * 0.035,
  },
  headerTwo: {
    width: '25%',
    height: windowHeight * 0.065,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
export default HomeHeader;
