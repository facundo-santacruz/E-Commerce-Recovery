import { GET_PRODUCTS_NAME } from "./constants";

const initialState = {
    products: []
};

const reducer = (state= initialState, action ) => {
    console.log(action);
    switch (action.type) {
        case GET_PRODUCTS_NAME:
            return {
                ...state,
                products: action.payload
            }
        default: 
            return state
    }
}

export default reducer