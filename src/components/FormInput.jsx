import React from 'react'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className=''>
            {label && (<label className='' >{label}</label>)}
            <input className='' {...otherProps} />
        </div>
    )
}

export default FormInput;
