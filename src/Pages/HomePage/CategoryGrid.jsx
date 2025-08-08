import React from 'react'
import Card from "../../components/ui/Card.jsx";

const CategoryGrid = () => {
    return (
        <div className={
            "w-full grid gap-1.5 md:gap-2 xl:gap-3 grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2"
        }>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/Bamboo.png" alt=""/></Card>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/WoodWork.png" alt=""/></Card>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/Fabric.png" alt=""/></Card>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/Metal.png" alt=""/></Card>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/Recycle.jpg" alt=""/></Card>
            <Card className={"col-span-1"}><img src="/CategoryGridImages/Homedecor.jpeg" alt=""/></Card>
        </div>
    )
}
export default CategoryGrid
