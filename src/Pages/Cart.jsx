import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray)
  return (

    <div>Cart</div>
  )
}

export default Cart