import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { useParams } from "react-router-dom";
import {selectedProduct,removeSelectedProduct,} from "../Redux/actions/productsActions";



function ProductDetails({id,author, categories, summary}) {
  const { productid } = useParams();
  console.log(productid);
  let product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      fetch('api/posts')
            .then(res=>res.json())
            .then(json=>dispatch(selectedProduct(json.posts)));
    }
  
  
   

    fetchDetail();
  }, []);


  
  return (
    <>
<p>{summary}</p>

    
    
    
    
    </>
    
  )
}

export default ProductDetails
