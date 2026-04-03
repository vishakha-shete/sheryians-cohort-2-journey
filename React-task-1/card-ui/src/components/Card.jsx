import React from 'react'
import "../App.css"

const Card = ({ data }) => {

    return (
        <div>
            {data.map1((item) => {
                return <div className='card'>
                    <img className='image' src="https://static.vecteezy.com/system/resources/thumbnails/035/657/675/small_2x/ai-generated-endearing-adventures-with-cute-cartoon-animal-babies-photo.jpg" alt="" />
                    <h3>{item.name}</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, doloribus.</p>
                    <button className='button'>follow</button>
                </div>
            })}
        </div>
    )
}

export default Card