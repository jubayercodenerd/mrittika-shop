import Navbar from "../../components/shared/Navbar.jsx";
import Section from "../../components/ui/Section.jsx";
import H1 from "../../components/ui/H1.jsx";
import ProductCard from "../../components/ui/ProductCard.jsx";
import ProductGrid from "../../components/ui/ProductGrid.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Button from "../../components/ui/Button.jsx";
import {FaArrowUpAZ} from "react-icons/fa6";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchAllProducts, fetchProductsByCategory, searchProducts} from "../../Helper/fetchProducts.js";

const ProductListingPage = () => {

    const { category, "search-term": searchTerm } = useParams();
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts(searchTerm, category, location, setProducts).then(r => console.log(r));
    }, [location.pathname, category, searchTerm, location]);

    return (
        <>
                <Section className={"mb-auto"}>
                    <div className={"w-full flex justify-start items-center gap-x-2"}>
                        {/*{categories.map((category) => (*/}
                        {/*    <Button variation={"ghost"} className={"h-6 lg:h-8 lg:px-3 lg:py-1.5 px-2 py-1 text-sm lg:text-md font-medium border-1 border-gray-800 rounded-full"}>{category.name}</Button>*/}
                        {/*))}*/}
                    </div>
                    <div className={"w-full flex items-center justify-between flex-wrap space-x-4 gap-y-2"}>
                        <H1 className={"text-xl self-start"}>
                            {
                                location.pathname ==="/products" && "All Products" ||
                                location.pathname.startsWith("/products/search") && `Search Results for "${searchTerm}"` ||
                                location.pathname.startsWith("/products/category") && `Products in ${categoryStringifier(category)}`
                            }</H1>
                        <div className={"flex justify-center items-center gap-x-2 "}>
                            {/*<Button variation={"card"} className={"h-8 w-35 sm:h-9 sm:w-40 md:h-10 md-w-45 lg:h-11 lg:w-50 text-xl font-medium"}>0$ - 1290$</Button>
                            <Button variation={"card"} className={"h-8 w-35 sm:h-9 sm:w-30 md:h-10 md-w-35 lg:h-11 lg:w-40 text-xl font-medium gap-x-2"}>Price <FaArrowUp/></Button>*/}
                            <Button variation={"card"} className={"h-10 w-35 sm:h-11 sm:w-35 md:h-12 md-w-40 lg:h-12 lg:w-45 text-md md:text-lg lg:text-xl font-medium px-4"}>
                                <select className={"w-full h-full border-none focus:outline-none cursor-pointer"}>
                                    <option value="default">Default</option>
                                    <option value="priceAsc">Price Asc.</option>
                                    <option value="priceDesc" >Price Desc.</option>
                                    <option value="nameAsc" >Name Asc.</option>
                                    <option value="nameDesc" >Name Desc.</option>
                                </select>
                            </Button>

                        </div>
                    </div>
                    <ProductGrid>
                        { products.map((product) => (
                            <ProductCard
                            imageUrl={product.productImages[0]}
                             name={product.name}
                             stock={product.stock}
                             basePrice={product["base-price"]}
                             activePrice={product["active-price"]}
                             slug={product.slug}/>
                        )) }
                    </ProductGrid>
                </Section>
        </>
    )
}

async function loadProducts(searchTerm, category, location, setProducts) {
    if (location.pathname.startsWith("/products/search")) {
        // ✅ Search page
        const res = await searchProducts(searchTerm);
        setProducts(res);

    } else if (location.pathname.startsWith("/products/category")) {
        // ✅ Category page
        const res = await fetchProductsByCategory(category);
        setProducts(res);

    } else if (location.pathname === "/products") {
        // ✅ All products page
        const res = await fetchAllProducts();
        setProducts(res);
    }
}

const categoryStringifier = (category) => {
    return category
        .split("-") // split by hyphen
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
        .join(" "); // join back with spaces
}
const categories = [
    {
        slug: "terracotta",
        name: "Terracotta"
    },
    {
        slug: "bamboo-crafts",
        name: "Bamboo Crafts"
    },
    {
        slug: "woodwork",
        name: "WoodWork"
    },
    {
        slug: "fabric-and-jute",
        name: "Fabric & Jute"
    },
    {
        slug: "metal-crafts",
        name: "Metal Crafts"
    },
    {
        slug: "recycled-art",
        name: "Recycled Art"
    },
    {
        slug: "home-decor",
        name: "Home Decor"
    },
    ]
export default ProductListingPage
