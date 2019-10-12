import axios from "axios";

export const FETCH_RATES = "FETCH_RATES";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_CURRENCY1 = "SET_CURRENCY1";
export const SET_CURRENCY2 = "SET_CURRENCY2";

export const fetchRates = base => {
    return dispatch => {
        console.log("Running fetchRates...");
        dispatch({ type: FETCH_RATES });
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/${base}`)
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SUCCESS, payload: res.data.rates });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_FAILURE, payload: err.response });
            });
    }
}

export const setCurrency1 = currency => ({ type: SET_CURRENCY1, payload: currency });

export const setCurrency2 = currency => ({ type: SET_CURRENCY2, payload: currency });
