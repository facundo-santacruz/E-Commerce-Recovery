import { GET_CAT_FILTERS,  GET_PRODUCTS_CAT_BY_PRICE,GET_PRODUCTS_CAT_BY_CONDITION } from './constants';
import axios from 'axios';


// export function getCateg(categorias) {
//     return {
//       type: GET_CATEGORIES,
//       payload: categorias
//     }
//   }
//   export function getCategories() {
//     return (dispatch) => {
//       axios.get('http://localhost:3001/categories')
//         .then(response => { dispatch(getCateg(response.data)) })
//         .catch(err => { console.log(err) })
//     }
//   }

  //-----------------PARA TRAER PRODUCTOS DE UNA CATEGORIA----------------------
  export function getCategoryFilter(category) {
    return {
      type: GET_CAT_FILTERS,
      payload: category
    }
  }
  export function getCategoryFilterRequest(filter, id, number) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/api/filter?${filter}=${id}&&number=${number}`)
        .then(response => { dispatch(getCategory(response.data)) })
        .catch(err => { console.log(err) })
    }
}
//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

  export function getByCatPrice(products){
    return {
        type: GET_PRODUCTS_CAT_BY_PRICE,
        payload: products
    }
}


export function getByCatPriceRequest(id, number, price) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/sortpricecat?id=${id}&number=${number}&price=${price}`)
        .then(response => { dispatch(getByCatPrice(response.data))})
        .catch(err => {console.log(err)})
    }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export function getByCatCondition(products){
    return {
        type: GET_PRODUCTS_CAT_BY_CONDITION,
        payload: products
    }
}


export function getByCatConditionRequest(id, number, condition) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/conditioncat?id=${id}&number=${number}&condition=${condition}`)
        .then(response => { dispatch(getByCatCondition(response.data))})
        .catch(err => {console.log(err)})
    }
}
