import React from 'react';

const CategoryItem = ({ category }) => {

    const { imageUrl, title } = category;

    return (
        <div className="min-w-[30%] h-60 flex-[1_1_auto] flex items-center justify-center border border-black mx-[7.5px] mb-3.75 overflow-hidden relative cursor-pointer group first:mr-[7.5px] last:ml-[7.5px]">

            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center transition-transform duration-6000 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Category Body */}
            <div className="h-22.5 px-6.25 flex flex-col items-center justify-center border border-black bg-white opacity-70 absolute group-hover:opacity-90">
                <h2 className="font-bold mx-1.5 text-[22px] text-[#4a4a4a]">
                    {title}
                </h2>
                <p className="font-light text-[16px]">
                    Shop Now
                </p>
            </div>

        </div>
    )
}

export default CategoryItem;
