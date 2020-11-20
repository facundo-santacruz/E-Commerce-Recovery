import { GET_CAT_FILTERS,  GET_PRODUCTS_FILTERS_BY_PRICE,GET_PRODUCTS_FILTERS_BY_CONDITION } from './constants';
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
  export function getCategoryFilterRequest(search, number, categoria, value) {
    return (dispatch) => {
      axios.get(`http://localhost:3001/api/filter?search=${search}&categoria=${categoria}&value=${value}&number=${number}`)
        .then(response => { dispatch(getCategoryFilter(response.data)) })
        .catch(err => { console.log(err) })
    }
}
//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

  export function getByCatFilterPrice(products){
    return {
        type: GET_PRODUCTS_FILTERS_BY_PRICE,
        payload: products
    }
}


export function getByCatFilterPriceRequest(id, number, price) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/sortpricefilter?id=${id}&number=${number}&price=${price}`)
        .then(response => { dispatch(getByCatFilterPrice(response.data))})
        .catch(err => {console.log(err)})
    }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export function getByCatFilterCondition(products){
    return {
        type: GET_PRODUCTS_FILTERS_BY_CONDITION,
        payload: products
    }
}


export function getByCatFilterConditionRequest(id, number, condition) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/conditioncatfilter?id=${id}&number=${number}&condition=${condition}`)
        .then(response => { dispatch(getByCatFilterCondition(response.data))})
        .catch(err => {console.log(err)})
    }
}
