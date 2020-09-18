import React from 'react'
import './Product.css'

function Product () {
  return (
    <div className='product'>
      <div className="product__info">
        <p>The lean startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>30.00</strong>
        </p>
        <div className='product__rating'>
          <span role="img" aria-label="glowing_star">🌟</span>
          <span role="img" aria-label="glowing_star">🌟</span>
          <span role="img" aria-label="glowing_star">🌟</span>   
        </div>
      </div>

      <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg' alt='' />
      <button>Add to Basket</button>         
    </div>
  )
}

export default Product
