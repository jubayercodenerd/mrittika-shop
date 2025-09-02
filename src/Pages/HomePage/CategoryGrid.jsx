import React from 'react'
import Card from "../../components/ui/Card.jsx";
import {useNavigate} from "react-router-dom";

const CategoryGrid = () => {
    const navigate = useNavigate();
    return (
        <div className={
            "w-full grid gap-1.5 md:gap-2 xl:gap-3 grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2"
        }>
            {
                categories.map((category, index) => (
                    <Card key={index} onClick={() => navigate(`/products/category/${category.slug}`)} className={"col-span-1 rounded-sm"}><img src={category.image} alt=""/></Card>
                ))
            }
        </div>
    )
}

const categories = [
    {
        slug: "terracotta",
        image: "/CategoryGridImages/Terracotta.png"
    },
    {
        slug: "woodwork",
        image: "/CategoryGridImages/WoodWork.png"
    },
    {
        slug: "fabric-and-jute",
        image: "/CategoryGridImages/Fabric.png"
    },
    {
        slug: "metal-crafts",
        image: "/CategoryGridImages/Metal.png"
    },
    {
        slug: "recycled-art",
        image: "/CategoryGridImages/Recycle.jpg"
    },
    {
        slug: "home-decor",
        image: "/CategoryGridImages/Homedecor.jpeg"
    }
];

export default CategoryGrid
