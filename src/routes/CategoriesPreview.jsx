import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import CategoryPreview from "../components/CategoryPreview";


const CategoriesPreview = () => {
   const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="space-y-10">
    {Object.keys(categoriesMap).map((title)=>{
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products} />
    })}
    </div>
  )
}

export default CategoriesPreview;
