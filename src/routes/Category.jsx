import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../contexts/CategoriesContext';
import ProductCard from '../components/ProductCard';

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className="space-y-5 sm:space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/70 px-4 py-6 shadow-[0_18px_50px_rgba(120,113,108,0.12)] backdrop-blur sm:rounded-4xl sm:px-6 sm:py-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_18px_50px_rgba(2,6,23,0.35)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">Category</p>
                <h1 className="mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl dark:text-stone-100">{category.toUpperCase()}</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
                {products && products.map((product)=> <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default Category;
