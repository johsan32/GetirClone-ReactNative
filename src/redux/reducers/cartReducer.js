
import {
  ADD_BASKET_LIST,
  CLEAR_BASKET_LIST,
  MINUS_AMOUNT,
  PLUS_AMOUNT,
  REMOVE_BASKET_LIST,
} from '../types/types';

const initialState = {
  listBasket: [],
  totalPrice: '',
  listWatching: [],
  isLoading: true,
};

const calculateTotalPrice = listBasket => {
    return listBasket.reduce((total, item) => total + item.price * item.amount, 0);
  };
  


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET_LIST:
      const itemIndex = state.listBasket.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        const updatedListBasket = state.listBasket.map((item, index) =>
          index === itemIndex
            ? {...item, amount: item.amount + 1}
            : item,
        );

        return {
          ...state,
          listBasket: updatedListBasket,
          totalPrice: calculateTotalPrice(updatedListBasket),
        };
      } else {
        return {
          ...state,
          listBasket: [...state.listBasket, {...action.payload, amount: 1}],
          totalPrice: calculateTotalPrice([...state.listBasket, { ...action.payload, amount: 1 }]),
        };
      }
    case PLUS_AMOUNT:
      const plusIndex = state.listBasket.findIndex(
        item => item.id === action.payload.id,
      );

      if (plusIndex !== -1) {
        const updatedListBasket = state.listBasket.map((item, index) =>
          index === plusIndex ? {...item, amount: item.amount + 1} : item,
        );
        return {
          ...state,
          listBasket: updatedListBasket,
          totalPrice: calculateTotalPrice(updatedListBasket),
        };
      }
      return state;

    case MINUS_AMOUNT:
      const minusIndex = state.listBasket.findIndex(
        item => item.id === action.payload.id,
      );

      if (minusIndex !== -1) {
        const updatedList = state.listBasket.map((item, index) => {
          if (index === minusIndex && item.amount >= 1) {
            return {...item, amount: item.amount - 1};
          } else {
            return item;
          }
        });

        return {
          ...state,
          listBasket: updatedList.filter(item => item.amount > 0),
          totalPrice: calculateTotalPrice(updatedList),
        };
      }

      return state;

    case REMOVE_BASKET_LIST:
      return {
        ...state,
        listBasket: state.listBasket.filter(
          item => item.id !== action.payload.id,
        ),
      };

    case CLEAR_BASKET_LIST:
      return {
        ...state,
        listBasket: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};
export default cartReducer;