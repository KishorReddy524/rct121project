import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
function Routes() {
    return (
      <>
      
        <Switch>
          <Route exact path="/">
            <ProductListing/>
            </Route>
            <Route path='/products/:productsId'>
            <ProductDetails/>
          </Route>
          <Route>
            <h1>404 error</h1>
          </Route>
          
          
          
        </Switch>
       
      </>
    );
  }
  
  export default  Routes ;