import React from 'react'

const ProductGrid = ({children, className}) => {
    return (
        <div className={"w-[95%] md:w-[90%] lg:w-[90%] xl:w-[80%] gap-3 md:gap-5 xl:gap-8 grid " +
            "grid-cols-[repeat(auto-fit,minmax(140px,1fr))] " +
            "sm:grid-cols-[repeat(auto-fit,minmax(160px,.8fr))] " +
            "md:grid-cols-[repeat(auto-fit,minmax(180px,.8fr))] " +
            "lg:grid-cols-[repeat(auto-fit,minmax(200px,.4fr))] " +
            "xl:grid-cols-[repeat(auto-fit,minmax(220px,.4fr))] " +
            "2xl:grid-cols-[repeat(auto-fit,minmax(240px,.2fr))] " + `${className}`}>
            {children}
        </div>
    )
}
export default ProductGrid
