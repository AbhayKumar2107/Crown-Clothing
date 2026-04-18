import React from 'react'

const BUTTON_TYPES_CLASSES = {
    google: "",
    inverted: "border-2 px-2 py-1 bg-black text-white hover:bg-white hover:text-black transition-all",
    normal:""
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;
