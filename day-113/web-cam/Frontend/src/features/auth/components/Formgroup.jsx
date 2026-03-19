import React from 'react'

const Formgroup = ({label, type="text", placeholder}) => {
    return (
        <div>
            <div className='form-group'>
                <label htmlFor={label}>{label}</label>
                <input type="text" id='{lable}' name={label}  placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default Formgroup
