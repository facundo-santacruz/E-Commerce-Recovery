import { GET_SELLER } from './constants';
import axios from 'axios';

export const getSeller = (vendedor)  =>  {
    return {
        type: GET_SELLER,
        payload: vendedor
    }
}

export const getSellerRequest = (id) =>{
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/products/seller?id=${id}`)
            .then(response => {dispatch(getSeller(response.data))})
            .catch(err => { console.log(err) })
        }
}