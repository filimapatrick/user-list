import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from '../Redux/actions/productsActions';
// import  Pagination  from '../components/Pagination';

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();




  useEffect(() => {
    const fetchProducts = async () => {
      fetch('api/posts')
            .then(res=>res.json())
            .then(json=>dispatch(setProducts(json.posts)));
    }
  
  
    console.log("Products :", products);

    fetchProducts();
  }, []);



 



  return (
    <>
      <ProductComponent/>
  
    </>
  )
}

export default ProductListing