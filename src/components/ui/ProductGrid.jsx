import React from 'react'

const ProductGrid = ({children, className}) => {
    return (
        <div className={"w-full gap-1.5 md:gap-2 xl:gap-3 grid " +
            "grid-cols-[repeat(auto-fill,minmax(140px,1fr))] " +
            "sm:grid-cols-[repeat(auto-fill,minmax(145px,.8fr))] " +
            "md:grid-cols-[repeat(auto-fill,minmax(150px,.8fr))] " +
            "lg:grid-cols-[repeat(auto-fill,minmax(155px,.4fr))] " +
            "xl:grid-cols-[repeat(auto-fill,minmax(160px,.4fr))] " +
            "2xl:grid-cols-[repeat(auto-fill,minmax(165px,.2fr))] " + `${className}`}>
            {children}
        </div>
    )
}
export default ProductGrid
