import {ADD_BASKET_LIST, CLEAR_BASKET_LIST, MINUS_AMOUNT, PLUS_AMOUNT, REMOVE_BASKET_LIST} from '../types/types';


export const addToBasket = (item) => {
    return {
      type: ADD_BASKET_LIST,
      payload: item,
    };
  };
  export const minusAmount = (item) => {
    return {
      type: MINUS_AMOUNT,
      payload: item,
    };
  };
  export const plusAmount = (item) => {
    return {
      type: PLUS_AMOUNT,
      payload: item
    };
  };
  
  export const removeFromBasket = (itemId) => {
    return {
      type: REMOVE_BASKET_LIST,
      payload: itemId,
    };
  };
  
  export const clearBasket = () => {
    return {
      type: CLEAR_BASKET_LIST,
    };
    
  };

