import React from 'react'
import "./Card.css"

const card = ({ data }) => {
    return (
        <div className='card1'>
            {data.map((item) => {
                return  <div className='card'>
                    <img className='image' src={item.URL} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.about}</p>
                </div>
            })}
        </div>
    )
}

export default card