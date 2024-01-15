import React, {useEffect} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {windowHeight} from '../../utils/Dimensions';
import BannerCarousel from '../../components/home/BannerCarousel';
import HomeHeader from '../../components/home/HomeHeader';
import CategoriesList from '../../components/home/CategoriesList';
import {useDispatch} from 'react-redux';
import {
  getCards,
  getCategories,
  getFavorites,
  getSliderData,
  getFooterLink,
  getCampaings,
  getNewItem,
  getIndirim,
  getSuIcecek,
  getMeyveSebze,
  getFirindan,
  getTemelGida,
  getAtistirmalik,
  getDondurma,
  getYiyecek,
  getSutUrunleri,
  getFitForm,
  getKisiselBakim,
  getEvBakim,
  getEvYasam,
  getTeknoloji,
  getEvcilHayvan,
  getBebek,
  getCinselSaglik,
  //getUrunler,
  getDondurmaItem,
  getTeknolojiItem,
} from '../../redux/actions/actions';
import {MyColor} from '../../theme/colors';

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUrunler());
    dispatch(getCinselSaglik());
    dispatch(getBebek());
    dispatch(getEvcilHayvan());
    dispatch(getTeknoloji());
    dispatch(getTeknolojiItem());
    dispatch(getEvYasam());
    dispatch(getEvBakim());
    dispatch(getKisiselBakim());
    dispatch(getFitForm());
    dispatch(getSutUrunleri());
    dispatch(getDondurma());
    dispatch(getDondurmaItem());
    dispatch(getYiyecek());
    dispatch(getAtistirmalik());
    dispatch(getTemelGida());
    dispatch(getFirindan());
    dispatch(getMeyveSebze());
    dispatch(getSuIcecek());
    dispatch(getIndirim());
    dispatch(getNewItem());
    dispatch(getCampaings());
    dispatch(getFooterLink());
    dispatch(getSliderData());
    dispatch(getCards());
    dispatch(getCategories());
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <SafeAreaView style={{}}>
      <View
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={{height: windowHeight, backgroundColor: '#f5f5f5'}}>
        <View style={{backgroundColor: '#f5f5f5'}}>
          <HomeHeader />
        </View>
        <ScrollView
          style={{backgroundColor: 'white', flex: 1}}
          stickyHeaderIndices={[0]}>
          <BannerCarousel />
          <View
            style={{
              zIndex: 50,
              backgroundColor: MyColor.white,
              marginBottom: 70,
            }}>
            <CategoriesList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
