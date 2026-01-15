import React from 'react'
import Upper from './upper.jsx'
import Lower from './lower.jsx'

const card = (props) => {
    console.log(props.cardData);

    return (
        <div className='card'>
            <Upper cardData={props.cardData} />
            <Lower cardData={props.cardData}/>

        </div>
    )
}

export default card
