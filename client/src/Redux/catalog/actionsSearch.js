import { GET_PRODUCT, GET_PRODUCTS_NAME, GET_PRODUCTS_BY_CONDITION, GET_PRODUCTS_BY_PRICE, GET_REVIEW,  } from './constants';
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
         axios.get(`/api/products/search?search=${search}&number=${number}`)
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
        axios.get(`/api/products/sort_price?search=${search}&number=${number}&price=${price}`)
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
    console.log(id)
    return (dispatch) => {
        axios.get(`/api/products/product?id=${id}`)
            .then(response => {
                dispatch(getProduct(response.data))})
            .catch(err => {console.log(err)})
    }
}


//--- RATING PRODUCTO ------
export function getRating(review){
    console.log(review)
    return {
        type: GET_REVIEW,
        payload: review
    }
}


export function getRatingProductRequest(id){
    console.log(id)
    return (dispatch) => {
        axios.get(`/api/products/reviews?id=${id}`)
            .then(res => {dispatch(getRating(res.data))})
            .catch(err => console.log(err))
    }        
}    







