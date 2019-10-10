const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            console.log(`No reducer case for ${action.type}. Running default: return state ${state}`);
            return state;
    }
}

export default reducer;