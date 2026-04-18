import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
    return (
        <section className="space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl dark:text-stone-100">
                    <Link className="transition hover:text-amber-700 dark:hover:text-amber-400" to={title}>{title.toUpperCase()}</Link>
                </h2>
                <Link className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 transition hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100" to={title}>
                    View all 
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </section>
    )
}

export default CategoryPreview;
