import React from 'react'

const Washroom = (props) => {
  const color = props.user=='Male'?'blue':'violet';
  return (
    <div style={{background:color}} className='Wash'> {props.user} Washroom
    </div>
  )
}

export default Washroom
