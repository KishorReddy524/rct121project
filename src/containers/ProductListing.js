import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from "../redux/actions/productActions"
import ProductComponent from './ProductComponent';
const ProductListing=()=> {
  const products =useSelector((state)=> state);
  const dispatch =useDispatch();

  const fetchProducts= async ()=>{
    const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush").catch((err)=>{
      console.log("Err",err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(()=>{
fetchProducts();
  },[])
  console.log("Products:",products);
  return (
    <div className='ui grid margin'>
    <ProductComponent/>
        </div>
  )
}

export default ProductListing