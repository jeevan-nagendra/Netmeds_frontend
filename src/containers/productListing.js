import React,{useEffect} from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';
import ProductComponent from './productComponent';
import {fetchProducts} from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/redux/actions/ProductActions.js'
import { useDispatch } from 'react-redux';
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/containers/productComponent.css'



const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(products);
    useEffect(() => {
           dispatch(fetchProducts());
    },[]);
    console.log("products",products);
  return (
        
      <ProductComponent/>

  
  );
};

export default ProductListing;
