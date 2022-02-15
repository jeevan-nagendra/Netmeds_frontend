import axios from "axios";
import { ActionTypes } from "./constants/reducers/action-types"


export const fetchProducts  = () => async (dispatch) => {
    const response = await axios.get("http://localhost:8080/products");
    dispatch({type :ActionTypes.FETCH_PRODUCTS,payload:response.data});
}

export const fetchProduct  = (id) => async (dispatch) => {
 const response = await axios.get(`http://localhost:8080/products/${id}`);
    dispatch({type :ActionTypes.SELECTED_PRODUCT,payload:response.data});
}


export const setProducts = (products) => {
    return {
        type :ActionTypes.SET_PRODUCTS,
        payload:products,
        }
}

export const selectedProduct = (products) => {
    return {
        type :ActionTypes.SELECTED_PRODUCT,
        payload:products,
        }
}
export const removeSelectedProduct = (products) => {
    return {
        type :ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:products,
        }
}