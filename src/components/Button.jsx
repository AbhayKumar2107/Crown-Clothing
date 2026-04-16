import React from 'react'

const BUTTON_TYPES_CLASSES = {
    google: "",
    inverted: "",
    normal:""
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;
