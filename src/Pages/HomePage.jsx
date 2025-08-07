import React from 'react'
import Navbar from "../components/shared/Navbar.jsx";
import ProductGrid from "../components/ui/ProductGrid.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";
import H1 from "../components/ui/H1.jsx";
import Section from "../components/ui/Section.jsx";
import Footer from "../components/shared/Footer.jsx";
import HeroSwiper from "../components/ui/HeroSwiper.jsx";

const HomePage = () => {
    return (
        <>
            <main className={"m-h-screen w-full flex flex-col justify-center items-center gap-y-4 md:gap-y-6 lg:gap-y-8"}>
                <Navbar />
                <Section>
                    <HeroSwiper/>
                </Section>
                <Section>
                    <H1 color={"#2b2b2b"} className={"self-center"}>
                        Popular Products
                    </H1>
                    <ProductGrid>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                    </ProductGrid>
                </Section>

                <Section>
                    <H1 color={"#2b2b2b"} className={"self-center"}>
                        All Products
                    </H1>
                    <ProductGrid>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot1.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot3.webp'} message={"Low stock"}/>
                        <ProductCard imageUrl={'/clayPot2.webp'} message={"Low stock"}/>
                    </ProductGrid>
                </Section>
                <Footer/>
            </main>
        </>
    )
}
export default HomePage
