import React from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import ProductGrid from "../../components/ui/ProductGrid.jsx";
import ProductCard from "../../components/ui/ProductCard.jsx";
import H1 from "../../components/ui/H1.jsx";
import Section from "../../components/ui/Section.jsx";
import Footer from "../../components/shared/Footer.jsx";
import HeroSwiper from "../../components/ui/HeroSwiper.jsx";
import P from "../../components/ui/P.jsx";
import CategoryGrid from "./CategoryGrid.jsx";

const HomePage = () => {
    return (
        <>
            <main className={"m-h-screen w-full flex flex-col justify-center items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar />
                <Section>
                    <HeroSwiper/>
                </Section>
                <Section Header={"Popular Products"} Para={"Find what others like"}>
                    <ProductGrid>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                    </ProductGrid>
                </Section>

                <Section Header={"Featured Products"} Para={"Find your desired Products"}>
                    <ProductGrid>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                    </ProductGrid>
                </Section>
                <Section Header={"On Sale"} Para={"Find the best discounts"}>
                    <ProductGrid>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/TemporaryProductImages/clayPot2.webp'} message={"Low stock"}/>
                    </ProductGrid>
                </Section>
                <Section Header={"Product Category"} Para={"Visit products you are looking for"} className={"w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[35%]"}>
                    <CategoryGrid/>
                </Section>
                <Footer/>
            </main>
        </>
    )
}
export default HomePage
