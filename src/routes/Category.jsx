import React, { useContext, useEffect, useState } from 'react'
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
        <div>
            <h1>{category.toUpperCase()}</h1>
            {products && products.map((product)=> <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default Category;
