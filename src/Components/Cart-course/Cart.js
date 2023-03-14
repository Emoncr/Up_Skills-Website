import React from 'react'
import  "./cart.css"
const Cart = (props) => {
  const items = props.items

  // reduce callback function take 4 value (accomulator,currentValue,currentIndex,source array)
  const total = items.reduce((acc, currentItem)=>{
    const price = currentItem.price
    return acc + price
  },0)

  return (
    <div>
        <div className='cart'>
            {
              items.map(item=>
                  <div className='colum select_course courses'>
                    <h5>{item["course-name"]}</h5>
                    <p>{item["mentor-name"]}</p>
                    <p>price: ${item.price}</p>
                    <i class="fa-solid fa-check"></i>
                  </div>               
              )
            }
        </div>
        <div>
          <h5>Total Course: {items.length}</h5>
          <h4>Total Price: ${total}</h4>
        </div>
    </div>
  )
}

export default Cart