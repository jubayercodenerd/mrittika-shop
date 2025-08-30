import React from 'react'
import Card from "../../components/ui/Card.jsx";

const CategoryGrid = () => {
    return (
        <div className={
            "w-full grid gap-1.5 md:gap-2 xl:gap-3 grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2"
        }>
            {
                categoryImages.map((image, index) => (
                    <Card key={index} className={"col-span-1 rounded-sm"}><img src={image} alt=""/></Card>
                ))
            }
        </div>
    )
}

const categoryImages
    = ["/CategoryGridImages/Bamboo.png",
    "/CategoryGridImages/WoodWork.png",
    "/CategoryGridImages/Fabric.png",
    "/CategoryGridImages/Metal.png",
    "/CategoryGridImages/Recycle.jpg",
    "/CategoryGridImages/Homedecor.jpeg"]
export default CategoryGrid
