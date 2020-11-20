import { GET_CATEGORIES, GET_CATEGORY, GET_PRODUCT, GET_PRODUCTS_CAT_BY_PRICE, GET_PRODUCTS_CAT_BY_CONDITION, GET_PRODUCTS_BY_CONDITION, GET_PRODUCTS_BY_PRICE, GET_PRODUCTS_NAME } from "./catalog/constants";

const initialState = {
    categories : [],
    products: [],
    product: []
};

const reducer = (state= initialState, action ) => {
    console.log(action);
    switch (action.type) {
        case GET_PRODUCTS_NAME:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_BY_PRICE:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_BY_CONDITION:
            return {
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product:action.payload
            }
        case GET_CATEGORY:
            return {
                ...state,
                products: action.payload,
            }
        case GET_PRODUCTS_CAT_BY_PRICE:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_CAT_BY_CONDITION:
            return {
                ...state,
                products: action.payload
            }
        default: 
            return state
    }
}

export default reducer