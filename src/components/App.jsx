import React from 'react';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';
import ProductListing from '../container/ProductListing';
import ProductDetails from '../container/ProductDetails';

function App() {
 
  return (
  <>
   
<Header/>
      
   <Routes>
    <Route path="/" element={<ProductListing/>} />
    <Route path="/product/:productid" element={<ProductDetails/>} />

    </Routes>

    {/* <ShowcaseArea/> */}

  </>
  );
}

export default App;
