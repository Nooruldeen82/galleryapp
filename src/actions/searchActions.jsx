import { SEARCH_PICTURE, FETCH_PICTURES, LOADING } from "./actionTypes";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchPicture = text => dispatch => {
  dispatch({
    type: SEARCH_PICTURE,
    payload: text
  });
};

export const fetchPictures = text => dispatch => {
  axios
    .get(`https://pixabay.com/api/?key=${APIKey}&q=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_PICTURES,
        payload: response.data.hits
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
