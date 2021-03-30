import { GET_PRODUCT, GET_PRODUCTS_NAME, GET_PRODUCTS_BY_CONDITION, GET_REVIEW,  } from './constants';
import axios from 'axios';

//-------------PRIMERA BUSQUEDA DE PRODUCTOS------------------------

export function getProducts(allproducts) {
    return {
        type: GET_PRODUCTS_NAME,
        payload: allproducts
    }
}

export  function getProductsRequest(search, number) {
    return (dispatch) => {
        axios.get(`/api/products/search?search=${search}&number=${number}`)
            .then(response => {  dispatch(getProducts(response.data)) })
            .catch(err => {console.log(err)})
    }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y FILTROS------------------------

export function getByCondition(products){
    return {
        type: GET_PRODUCTS_BY_CONDITION,
        payload: products
    }
}

export function getByConditionRequest(search, number, condition) {
    return (dispatch) => {
        axios.get(`/api/products/condition?search=${search}&number=${number}&${condition}`)
        .then(response => { dispatch(getByCondition(response.data))})
        .catch(err => {console.log(err)})
    }
}

// -----------------ACTIONS PARA BUSCAR INFORMACION DE UN PRODUCTO-----------------------------

export function getProduct(product) {
    return {
        type: GET_PRODUCT,
        payload: product
    }
}
  
export function getProductRequest(id){
    return (dispatch) => {
        axios.get(`/api/products/product?id=${id}`)
            .then(response => {
                dispatch(getProduct(response.data))})
            .catch(err => {console.log(err)})
    }
}

//---------------- RATING PRODUCTO -----------------------------

export function getRating(review){
    return {
        type: GET_REVIEW,
        payload: review
    }
}

export function getRatingProductRequest(id){
    return (dispatch) => {
        axios.get(`/api/products/reviews?id=${id}`)
            .then(res => {dispatch(getRating(res.data))})
            .catch(err => console.log(err))
    }        
}    







