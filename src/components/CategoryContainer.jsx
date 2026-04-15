import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryContainer = ({categories}) => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default CategoryContainer;
