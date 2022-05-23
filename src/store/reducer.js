import * as actions from './actionTypes';

const initialState = {
  questions: [],
  questionLoading: false,
  productsFetching: false,
  products: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_STATE:
      return initialState
      

    case actions.FETCH_PRODUCTS:
      return {
        ...state,
        productsFetching: true
      };

    case actions.RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFetching: false
      };

    case actions.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
  

    default:
      return state;
  }
}