import React, { useState } from 'react'
import Cart from '../Cart-course/Cart'
import Course from '../Course/Course'
import "./container.css"
const Container = () => {
    const [cart , setCart]= useState([]);
  return (
    <div className='component_container'>
        <Cart items={cart}></Cart>
        <Course item={cart} setItem={setCart} ></Course>
    </div>
  )
}

export default Container