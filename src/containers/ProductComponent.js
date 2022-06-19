import React from 'react'
import "./cont.css"
import { useSelector } from 'react-redux';
const ProductComponent=()=> {
  const products =useSelector((state)=> state.allProducts.products);

  const renderList =products.map((products)=>{
    const {id,name,image_link,price,category}= products;
    return( <div className='products ' key={id}> 
    <div className='ui link cards'>
      <div className='card'>
        <div className='image'>
          <img  src={image_link} alt={name}/>
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='meta price'>${price}</div>
          <div className='meta'>{category}</div>
          <div><button>Add to Cart</button></div>
        </div>
      </div>
    </div>
    </div>);
  })
   return (
  <>{renderList}</>
  )
}

export default ProductComponent