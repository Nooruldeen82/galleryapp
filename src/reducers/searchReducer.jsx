import {
  SEARCH_PICTURE,
  FETCH_PICTURES,
  LOADING
} from "../actions/actionTypes";

const initialState = {
  text: "",
  pictures: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PICTURE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_PICTURES:
      return {
        ...state,
        pictures: action.payload,
        loading: false
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
