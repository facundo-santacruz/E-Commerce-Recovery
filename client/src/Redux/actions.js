import { GET_PRODUCTS_BY_CONDITION, GET_PRODUCTS_BY_PRICE, GET_PRODUCTS_NAME } from './constants';
import axios from 'axios';

export function getProducts(allproducts) {
    console.log(allproducts);
    return {
        type: GET_PRODUCTS_NAME,
        payload: allproducts
    }
}

//-------------DEVOLUCION AL FRONT PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export  function getProductsRequest(search, number) {
    console.log(search)
    return (dispatch) => {
         axios.get(`http://localhost:3001/api/search?search=${search}&number=${number}`)
        .then(response => {  dispatch(getProducts(response.data)
             )
            })
        .catch(err => {console.log(err)})
    }
}

export function getByPrice(products){
    return {
        type: GET_PRODUCTS_BY_PRICE,
        payload: products
    }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export function getByPriceRequest(search, number, price) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/sortprice?search=${search}&number=${number}&price=${price}`)
        .then(response => { dispatch(getByPrice(response.data))})
        .catch(err => {console.log(err)})
    }
}

export function getByCondition(products){
    return {
        type: GET_PRODUCTS_BY_CONDITION,
        payload: products
    }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export function getByConditionRequest(search, number, condition) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/condition?search=${search}&number=${number}&condition=${condition}`)
        .then(response => { dispatch(getByCondition(response.data))})
        .catch(err => {console.log(err)})
    }
}


