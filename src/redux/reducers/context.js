import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categoryGetir:[],
  categories: [],
  favorites: [],
  basket: [],
  cards: [],
  sliderData: [],
  campaings: [],
  footerLink: [],
  newItem: [],
  indirim: [],
  suIcecek: [],
  suIcecekItem:[],
  firindan: [],
  MeyveSebze: [],
  temelGida: [],
  atistirmalik: [],
  dondurma: [],
  dondurmaItem:[],
  yiyecek: [],
  sutUrunleri: [],
  fitForm: [],
  kisiselBakim: [],
  evBakim: [],
  evYasam: [],
  teknoloji: [],
  teknolojiItem:[],
  evcilHayvan: [],
  bebek: [],
  cinselSaglik: [],
  giyim:[],
  Urunler: [],
  isLoading: false,
  message: "",
};
const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload.favorites;
    },
    setUrunler: (state, action) => {
      state.Urunler = action.payload.Urunler;
    },
    setCards: (state, action) => {
      state.cards = action.payload.cards;
    },
    setSliderData: (state, action) => {
      state.sliderData = action.payload.sliderData;
    },
    setFooterLink: (state, action) => {
      state.footerLink = action.payload.footerLink;
    },
    setCampaings: (state, action) => {
      state.campaings = action.payload.campaings;
    },
    setNewItem: (state, action) => {
      state.newItem = action.payload.newItem;
    },
    setIndirim: (state, action) => {
      state.indirim = action.payload.indirim;
    },
    setSuIcecek: (state, action) => {
      state.suIcecek = action.payload.suIcecek;
    },
    setSuIcecekItem: (state, action) => {
      state.suIcecekItem = action.payload.suIcecekItem;
    },
    setMeyveSebze: (state, action) => {
      state.MeyveSebze = action.payload.MeyveSebze;
    },
    setFirindan: (state, action) => {
      state.firindan = action.payload.firindan;
    },
    setTemelGida: (state, action) => {
      state.temelGida = action.payload.temelGida;
    },
    setAtistirmalik: (state, action) => {
      state.atistirmalik = action.payload.atistirmalik;
    },
    setDondurma: (state, action) => {
      state.dondurma = action.payload.dondurma;
    },
    setDondurmaItem: (state, action) => {
      state.dondurmaItem = action.payload.dondurmaItem;
    },
    setYiyecek: (state, action) => {
      state.yiyecek = action.payload.yiyecek;
    },
    setSutUrunleri: (state, action) => {
      state.sutUrunleri = action.payload.sutUrunleri;
    },
    setFitForm: (state, action) => {
      state.fitForm = action.payload.fitForm;
    },
    setKisiselBakim: (state, action) => {
      state.kisiselBakim = action.payload.kisiselBakim;
    },
    setEvBakim: (state, action) => {
      state.evBakim = action.payload.evBakim;
    },
    setEvYasam: (state, action) => {
      state.evYasam = action.payload.evYasam;
    },
    setTeknoloji: (state, action) => {
      state.teknoloji = action.payload.teknoloji;
    },
    setTeknolojiItem: (state, action) => {
      state.teknolojiItem = action.payload.teknolojiItem;
    },
    setEvcilHayvan: (state, action) => {
      state.evcilHayvan = action.payload.evcilHayvan;
    },
    setBebek: (state, action) => {
      state.bebek = action.payload.bebek;
    },
    setCinselSaglik: (state, action) => {
      state.cinselSaglik = action.payload.cinselSaglik;
    },
    setBasket: (state, action) => {
      state.basket = action.payload.id;
    },
  },
});


export const contextReducer = contextSlice.reducer;
export const contextActions = contextSlice.actions;
