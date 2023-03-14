import React from 'react'
import  "./cart.css"
const Cart = (props) => {
  const items = props.items
  console.log(items);
  return (
    <div className='cart'>
        {
          items.map(item=>
              <div className='colum select_course courses'>
                <h5>{item["course-name"]}</h5>
                <p>{item["mentor-name"]}</p>
                <i class="fa-solid fa-check"></i>
              </div>               
          )
        }
    </div>
  )
}

export default Cart