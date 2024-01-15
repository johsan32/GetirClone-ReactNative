import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {MyColor} from '../../theme/colors';
import {windowWidth} from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/Feather';
const GiftsScreen = () => {
  const state = useSelector(state => state.context);
  const gifts = state.campaings;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 10,
        }}>
        <View
          style={{
            backgroundColor: MyColor.visible,
            borderRadius: 15,
            width: windowWidth * 0.45,
            borderRadius: 8,
          }}>
          <Text
            style={{
              paddingVertical: 8,
              color: MyColor.background,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Kampanyalar
          </Text>
        </View>
        <View style={{width: windowWidth * 0.45, borderRadius: 8}}>
          <Text
            style={{
              paddingVertical: 8,
              color: MyColor.text,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Duyurular
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Icon name="plus" size={22} color={MyColor.background} />
        </View>

        <TextInput
          value=""
          style={styles.input}
          placeholder="Kampanya Kodu Ekle"
          placeholderTextColor={MyColor.background}
        />
      </View>
      <ScrollView style={{flex: 1, backgroundColor: MyColor.screen}}>
        <FlatList
          data={gifts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{width: windowWidth, marginBottom: 15}}>
              <View>
                <Image
                  source={{uri: item?.data.picURL}}
                  style={{
                    width: windowWidth * 0.9,
                    height: 150,
                    borderRadius: 10,
                    marginHorizontal: windowWidth * 0.05,
                  }}
                />
                <Text style={styles.textImg}>
                  {item?.data.promoContentSectionTitle}
                </Text>
              </View>
              <Text style={styles.textTitle}>{item?.data.title}</Text>
              <Text style={styles.text}>{item?.data.description}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default GiftsScreen;

const styles = StyleSheet.create({
  textTitle: {
    width: windowWidth * 0.9,
    marginHorizontal: windowWidth * 0.05,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  text: {width: windowWidth * 0.9, marginHorizontal: windowWidth * 0.05},
  textImg: {
    position: 'absolute',
    bottom: 2,
    right: 25,
    fontSize: 12,
    backgroundColor: MyColor.light,
    color: MyColor.white,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    borderWidth: 1,
    borderColor: MyColor.text,
    borderRadius: 7,
    padding: 3,
  },
});
