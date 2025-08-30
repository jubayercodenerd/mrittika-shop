import React, {useEffect, useState} from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import ProductGrid from "../../components/ui/ProductGrid.jsx";
import ProductCard from "../../components/ui/ProductCard.jsx";
import H1 from "../../components/ui/H1.jsx";
import Section from "../../components/ui/Section.jsx";
import Footer from "../../components/shared/Footer.jsx";
import HeroSwiper from "../../components/ui/HeroSwiper.jsx";
import P from "../../components/ui/P.jsx";
import CategoryGrid from "./CategoryGrid.jsx";
import {fetchDiscountedProducts, fetchFeaturedProducts, fetchTopPopularProducts} from "../../Helper/fetchProducts.js";

const HomePage = () => {
    const [popularProducts, setPopularProducts] = useState();
    const [featuredProducts, setFeaturedProducts] = useState();
    const [onSaleProducts, setOnSaleProducts] = useState();

    useEffect(() => {
        fetchProducts(setPopularProducts, fetchTopPopularProducts);
        fetchProducts(setFeaturedProducts, fetchFeaturedProducts);
        fetchProducts(setOnSaleProducts, fetchDiscountedProducts);
    }, []);

    return (
        <>
                <Section>
                    <HeroSwiper/>
                </Section>
                <Section Header={"Popular Products"} Para={"Find what others like"}>
                    <ProductGrid>
                        {
                            (popularProducts||[]).map((product) => (
                                <ProductCard imageUrl={product.productImages[0]}
                                             name={product.name}
                                             stock={product.stock}
                                             basePrice={product["base-price"]}
                                             activePrice={product["active-price"]}
                                             slug={product.slug}/>
                            ))
                        }
                    </ProductGrid>
                </Section>

                <Section Header={"Featured Products"} Para={"Find your desired Products"}>
                    <ProductGrid>
                        {
                            (featuredProducts||[]).map((product) => (
                                <ProductCard imageUrl={product.productImages[0]}
                                             name={product.name}
                                             stock={product.stock}
                                             basePrice={product["base-price"]}
                                             activePrice={product["active-price"]}
                                             slug={product.slug}/>
                            ))
                        }
                    </ProductGrid>
                </Section>
                <Section Header={"On Sale"} Para={"Find the best discounts"}>
                    <ProductGrid>
                        {
                            (onSaleProducts||[]).map((product) => (
                                <ProductCard imageUrl={product.productImages[0]}
                                             name={product.name}
                                             stock={product.stock}
                                             basePrice={product["base-price"]}
                                             activePrice={product["active-price"]}
                                             slug={product.slug}/>
                            ))
                        }
                    </ProductGrid>
                </Section>
                <Section Header={"Product Category"} Para={"Visit products you are looking for"} className={"w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[35%]"}>
                    <CategoryGrid/>
                </Section>
        </>
    )
}

const fetchProducts = async (setProducts, fetchProducts) => {
    try{
        const products = await fetchProducts();
        console.log(products);
        setProducts(products);
    }
    catch(error){
        console.log(error)
    }
}

export default HomePage
