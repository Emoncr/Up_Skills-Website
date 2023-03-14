import React, { useState } from 'react'
import "./course.css"
import fakeData from "../../MOCK_DATA.json"


const Course = (props) => {
  const [data, setData] = useState(fakeData)

  return (
    <div >
      <div className='heading'>
        <h2>"Unlock Your Potential: Grab Mastery Course"</h2>
      </div>
      <div className='course d-flex justify-content-center container-xxl'>
            <div className='row'>        
              {
                data.map(d=>
                  <div className="colum courses">
                    <h3>{d['course-name']}</h3>
                    <p> <strong> Mentor_Name: {d['mentor-name']}</strong></p>
                    <p><strong>Price: ${d.price}</strong></p>
                    <button onClick={()=>props.setItem([...props.item,d])}  className='btn btn-success'>Enroll Now<i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                )
              }
            </div>
        
      </div>
    </div>
  )
}

export default Course   