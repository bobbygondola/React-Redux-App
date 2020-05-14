//actions

import axios from "axios";

export const FETCH_COIN_START = "FETCH_COIN_START";
export const FETCH_COIN_SUCCESS = "FETCH_COIN_SUCCESS";
export const FETCH_COIN_FAILURE = "FETCH_COIN_FAILURE";

export const fetchCoins = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COIN_START });
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log("this is from the axios..res.data", res.data[0]);
        dispatch({ type: FETCH_COIN_SUCCESS, payload: res.data})
      });
  };
};
