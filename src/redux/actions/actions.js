import axios from "axios";
import { contextActions } from "../reducers/context";

export const getCategories = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/categories"
    );
    dispatch(contextActions.setCategories({ categories: data.data }));
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/favorite"
    );
    dispatch(contextActions.setFavorites({ favorites: data.data }));
  };
};

export const getCards = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/cards"
    );
    dispatch(contextActions.setCards({ cards: data.data }));
  };
};

export const getSliderData = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/sliderData"
    );
    dispatch(contextActions.setSliderData({ sliderData: data.data }));
  };
};

export const getFooterLink = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/footerLink"
    );
    dispatch(contextActions.setFooterLink({ footerLink: data.data }));
  };
};

export const getCampaings = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/kampanyaWithCode"
    );
    dispatch(contextActions.setCampaings({ campaings: data.data }));
  };
};

export const getNewItem = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/newItem"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setNewItem({ newItem: newdata}));
  };
};

export const getIndirim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/discount"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setIndirim({ indirim:newdata}));
  };
};


export const getSuIcecek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/suicecek"
    );
    const newdata = data.data;
    dispatch(contextActions.setSuIcecek({ suIcecek: newdata }));
  };
};
export const getSuIcecekItem = () => {
  return async (dispatch) => {
    try {
      let data = await axios.get(
        "https://getir-clone-api.onrender.com/api/suicecek"
      );
      
      if (data.data.products && Array.isArray(data.data.products)) {
        const limitedProducts = data.data.products;
        dispatch(contextActions.setSuIcecekItem({ suIcecekItem: limitedProducts }));
      } else {
        console.error("Invalid data structure or products array is missing");
      }
    } catch (error) {
      console.error("Error fetching dondurma item:", error);
    }
  };
};

export const getMeyveSebze = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/meyvesebze"
    );
    const newdata = data.data; 
    dispatch(contextActions.setMeyveSebze({ MeyveSebze: newdata }));
  };
};

export const getFirindan = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/firindan"
    );
    const newdata = data.data; 
    dispatch(contextActions.setFirindan({ firindan: newdata }));
  };
};

export const getTemelGida = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/temelgida"
    );
    const newdata = data.data 
    dispatch(contextActions.setTemelGida({ temelGida: newdata}));
  };
};

export const getAtistirmalik = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/atistirmalik"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setAtistirmalik({ atistirmalik: newdata }));
  };
};

export const getDondurma = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/dondurma"
    );
    
    dispatch(contextActions.setDondurma({ dondurma: data.data }));
    console.log(" newdata",data.data);
  };
};

export const getDondurmaItem = () => {
  return async (dispatch) => {
    try {
      let data = await axios.get(
        "https://getir-clone-api.onrender.com/api/dondurma/1"
      );
      
      if (data.data.products && Array.isArray(data.data.products)) {
        const limitedProducts = data.data.products;
        dispatch(contextActions.setDondurmaItem({ dondurmaItem: limitedProducts }));
      } else {
        console.error("Invalid data structure or products array is missing");
      }
    } catch (error) {
      console.error("Error fetching dondurma item:", error);
    }
  };
};

export const getEvcilHayvan = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evcilHayvan"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setEvcilHayvan({ evcilHayvan: newdata}));
  };
};


export const getTeknoloji = () => {
  return async (dispatch) => {
    try {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/teknoloji"
    );
     if (Array.isArray(data.data)) {
      const newdata = data.data.map((item) => ({
        id: item.id,
        name: item.name,
        productCount:item.productCount,
      }));
    dispatch(contextActions.setTeknoloji({ teknoloji:newdata}));
  }
   else {
      console.error("Invalid data structure or data is not an array");
    }
  } catch (error) {
    console.error("Error fetching dondurma data:", error);
  }
}
};


export const getTeknolojiItem = () => {
  return async (dispatch) => {
    try {
      let data = await axios.get(
        "https://getir-clone-api.onrender.com/api/teknoloji/1"
      );
      
      if (data.data.products && Array.isArray(data.data.products)) {
        const limitedProducts = data.data.products.slice(0, 20);
        dispatch(contextActions.setTeknolojiItem({ teknolojiItem: limitedProducts }));
       console.log("teknn",limitedProducts);
      } else {
        console.error("Invalid data structure or products array is missing");
      }
    } catch (error) {
      console.error("Error fetching dondurma item:", error);
    }
  };
};


export const getYiyecek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/yiyecek"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setYiyecek({ yiyecek: newdata}));
  };
};
export const getBebek = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/bebek"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setBebek({ bebek: newdata }));
  };
};

export const getSutUrunleri = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/suturunleri"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setSutUrunleri({ sutUrunleri: newdata}));
  };
};

export const getCinselSaglik = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/cinselSaglik"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setCinselSaglik({ cinselSaglik: newdata }));
  };
};

export const getFitForm = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/fitform"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setFitForm({ fitForm: newdata }));
  };
};

export const getKisiselBakim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/kisiselbakim"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setKisiselBakim({ kisiselBakim: newdata }));
  };
};
export const getEvBakim = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evbakim"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setEvBakim({ evBakim: newdata }));
  };
};

export const getEvYasam = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/evyasam"
    );
    const newdata = data.data.slice(0, 20); 
    dispatch(contextActions.setEvYasam({ evYasam:newdata }));
  };
};

export const getUrunler = () => {
  return async (dispatch) => {
    let data = await axios.get(
      "https://getir-clone-api.onrender.com/api/urunler"
    );
    const newdata = data.data.slice(0, 50); 
    dispatch(contextActions.setUrunler({ Urunler: newdata }));
  };
};
