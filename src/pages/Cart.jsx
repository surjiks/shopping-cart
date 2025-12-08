import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log(cart);
  
  return (
    <div>
      {cart.map((item,key)=>(
        <>
        <p>{item.name}</p>
        <p>{item.qty}</p></>
      ))}
    </div>
  )
}

export default Cart