const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='space-y-2'>
            {label && (<label className='block text-sm font-semibold text-stone-700 dark:text-stone-200' >{label}</label>)}
            <input className='w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900 focus:ring-2 focus:ring-stone-200 dark:border-stone-700 dark:bg-slate-950 dark:text-stone-100 dark:focus:border-stone-100 dark:focus:ring-slate-800' {...otherProps} />
        </div>
    )
}

export default FormInput;
