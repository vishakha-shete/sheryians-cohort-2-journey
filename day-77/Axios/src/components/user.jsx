import React from 'react'

const user = (props) => {
  const clr1 = Math.floor(Math.random()*256)
  const clr2 = Math.floor(Math.random()*256)
  const clr3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='user-card'>
      <h4>{props.elem.name}</h4>
      <p>{props.elem.website}</p>

    </div>
  )
}

export default user
