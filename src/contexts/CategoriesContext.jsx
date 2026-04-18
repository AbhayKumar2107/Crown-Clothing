import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase";
// import { SHOP_DATA } from "../shopData.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";


// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children})=>{

    const [ categoriesMap, setCategoriesMap ] = useState({}); 
    const value = {categoriesMap};

    useEffect(()=>{
        const getCategoriesMap = async()=>{
          const categoryMap = await getCategoriesAndDocument();
          setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]); 
    
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
