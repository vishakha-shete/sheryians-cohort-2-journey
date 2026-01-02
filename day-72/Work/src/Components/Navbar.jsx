import React from 'react'

const Navbar = (props) => {
    return (
        <div style={{backgroundColor:props.color}} className=' mb-1 items-center justify-between flex text-2xl px-8 py-3'>
            {props.title}

            <div className='flex gap-10'>
                {props.links.map(function (elem,idx) {
                    return <h4 key={idx}>{elem}</h4>

                })}
            </div>
        </div>

    )
}

export default Navbar
