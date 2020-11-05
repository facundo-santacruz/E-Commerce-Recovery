import { GET_PRODUCTS_NAME } from './constants';
import axios from 'axios';

export function getProducts(allproducts) {
    return {
        type: GET_PRODUCTS_NAME,
        payload: allproducts
    }
}

export  function getProductsRequest(search) {
    return (dispatch) => {
         axios.get(`http://localhost:3001/api/search?search=${search}`)
        .then(response => { dispatch(getProducts(response.data))})
        .catch(err => {console.log(err)})
    }
}
