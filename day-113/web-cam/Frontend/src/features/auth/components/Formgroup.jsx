import React from 'react'

const Formgroup = ({ label, type = "text", placeholder, value, onChange }) => {
    return (
        <div>
            <div className='form-group'>
                <label htmlFor={label}>{label}</label>
                <input
                    value={value}
                    onChange={onChange}
                    type="text" id='{lable}' name={label} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Formgroup
