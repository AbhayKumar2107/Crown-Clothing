import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category, className = "" }) => {

    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <div onClick={onNavigateHandler}
         className={`group relative flex h-56 cursor-pointer items-center justify-center overflow-hidden rounded-[1.75rem] border border-stone-200/80 shadow-[0_18px_50px_rgba(120,113,108,0.14)] transition duration-300 sm:h-64 md:h-72 sm:rounded-4xl dark:border-stone-800 ${className}`}>

            {/* Background Image */}
            <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Category Body */}
            <div className="absolute rounded-2xl border border-white/70 bg-white/80 px-5 py-4 text-center shadow-lg backdrop-blur transition group-hover:bg-white sm:px-7 sm:py-5 dark:border-white/10 dark:bg-slate-900/80 dark:group-hover:bg-slate-900">
                <h2 className="mx-1.5 text-xl font-bold tracking-wide text-stone-800 sm:text-[22px] dark:text-stone-100">
                    {title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-stone-500 sm:text-sm sm:tracking-[0.25em] dark:text-stone-400">
                    Shop Now
                </p>
            </div>

        </div>
    )
}

export default CategoryItem;
