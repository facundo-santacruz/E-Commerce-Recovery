import { GET_CATEGORIES, GET_CATEGORY, GET_PRODUCTS_CAT_BY_CONDITION } from './constants';


export function getCateg(categorias) {
  return {
    type: GET_CATEGORIES,
    payload: categorias
  }
}

export function getCategories() {
  return (dispatch) => {
    axios.get('/api/category/categories')
      .then(response => { dispatch(getCateg(response.data)) })
      .catch(err => { console.log(err) })
  }
}

//-----------------PARA TRAER PRODUCTOS DE UNA CATEGORIA----------------------

export function getCategory(category) {
  return {
    type: GET_CATEGORY,
    payload: category
  }
}

export function getCategoryRequest(id, number) {
  return (dispatch) => {
    axios.get(`/api/category/category?id=${id}&number=${number}`)
      .then(response => { dispatch(getCategory(response.data)) })
      .catch(err => { console.log(err) })
  }
}

//-------------LLAMADA DESDE ACTIONS PARA BUSCAR POR LIMITE Y PRECIO ASC/DESC------------------------

export function getByCatCondition(products){
    return {
        type: GET_PRODUCTS_CAT_BY_CONDITION,
        payload: products
    }
}


export function getByCatConditionRequest( number, condition) {
  return (dispatch) => {
        axios.get(`/api/category/condition_cat?number=${number}&${condition}`)
        .then(response => { dispatch(getByCatCondition(response.data))})
        .catch(err => {console.log(err)})
    }
}