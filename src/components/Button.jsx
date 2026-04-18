const BUTTON_TYPES_CLASSES = {
    google: "border border-blue-700 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400",
    inverted: "bg-stone-950 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-300",
    normal: "bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500"
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 ${BUTTON_TYPES_CLASSES[buttonType] || BUTTON_TYPES_CLASSES.normal}`} {...otherProps}>{children}</button>
    )
}

export default Button;
