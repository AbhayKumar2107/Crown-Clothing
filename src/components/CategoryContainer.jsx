import CategoryItem from './CategoryItem';

const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route": "shop/hats"
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route": "shop/jackets"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": "shop/sneakers"
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route": "shop/womens"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route": "shop/mens"
  }
];


const CategoryContainer = () => {
  const hasIncompleteLastRow = categories.length % 3 === 2;

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-6">
      {categories.map((category, index) => (
        <CategoryItem
          category={category}
          key={category.id}
          className={hasIncompleteLastRow && index >= categories.length - 2 ? "xl:col-span-3" : "xl:col-span-2"}
        />
      ))}
    </div>
  )
}

export default CategoryContainer;
