import { FETCH_RATES, FETCH_SUCCESS, FETCH_FAILURE, SET_CURRENCY1, SET_CURRENCY2 } from "../actions";

const initialState = {
    currency1: {
        symbol: "USD",
        rate: 1
    },
    currency2: {
        symbol: "",
        rate: 1
    },
    rates: {},
    isFetching: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RATES:
            console.log(`Running ${FETCH_RATES}...`);
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SUCCESS:
            console.log(`Running ${FETCH_SUCCESS}...`);
            return {
                ...state,
                isFetching: false,
                error: "",
                rates: action.payload
            };
        case FETCH_FAILURE:
            console.log(`Running ${FETCH_FAILURE}...`);
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case SET_CURRENCY1:
            console.log(`Running ${SET_CURRENCY1}...`);
            return {
                ...state,
                currency1: {
                    symbol: action.payload.symbol,
                    rates: action.payload.rate
                }
            };
        case SET_CURRENCY2:
            console.log(`Running ${SET_CURRENCY2}...`);
            return {
                ...state,
                currency2: {
                    symbol: action.payload.symbol,
                    rate: action.payload.rate
                }
            };

        default:
            console.log(`No reducer case for ${action.type}. Running default: return state ${state}`);
            return state;
    }
}

export default reducer;