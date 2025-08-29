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
import {fetchTopPopularProducts} from "../../Helper/fetchProducts.js";

const HomePage = () => {
    const [popularProducts, setPopularProducts] = useState()
    useEffect(() => {
        const getPopularProducts = async () => {
            try{
                const products = await fetchTopPopularProducts();
                console.log(products);
                setPopularProducts(products);
            }
            catch(error){
                console.log(error)
            }
        }
        getPopularProducts();
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
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                    </ProductGrid>
                </Section>
                <Section Header={"On Sale"} Para={"Find the best discounts"}>
                    <ProductGrid>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} stock={10} basePrice={1350} activePrice={400} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} stock={10} basePrice={5400} activePrice={2000} slug={"23wqdasd"}/>
                    </ProductGrid>
                </Section>
                <Section Header={"Product Category"} Para={"Visit products you are looking for"} className={"w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[35%]"}>
                    <CategoryGrid/>
                </Section>
        </>
    )
}
export default HomePage
