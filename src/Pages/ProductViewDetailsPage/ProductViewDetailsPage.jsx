import React from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";
import Button from "../../components/ui/Button.jsx";

const ProductViewDetailsPage = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar/>
                    <Section>
                        <div className={"w-full flex flex-col gap-y-4 "}>
                            <div className={"w-full grid grid-cols-4 grid-rows-3 gap-1 "}>
                                <div className={"flex flex-col justify-center items-center col-span-1 row-span-3 gap-y-1 "}>
                                    {images.map((image) => (
                                        <img src={image} alt={image} className={"h-full aspect-square"} />
                                    ))}
                                </div>
                                <div className={"flex flex-col justify-center items-center col-span-3 row-span-3 gap-y-1 "}>
                                    <img src={images[0]} alt=""/>
                                </div>
                            </div>
                            <div className={"flex flex-col justify-center items-center "}>
                                <P className={"self-start text-2xl font-bold text-green-700"}>100$</P>
                                <H1 className={"self-start text-xl font-medium"}>Clay mug terracotta</H1>
                            </div>
                            <div className={"flex justify-start items-center"}>
                                <Button variation={"primary"} className={"px-4 py-2 font-bold text-xl"}>Add to Cart</Button>
                            </div>
                            <div className={"flex flex-col justify-center items-center"}>
                                <P>
                                    🌿 Decorative Succulent in Artisan Ceramic Pot
                                    Add a touch of nature and elegance to your space with this beautifully
                                    potted succulent. Nestled in a cylindrical ceramic pot adorned with intricate
                                    zigzag and geometric patterns, this plant brings both texture and tranquility
                                    to any setting. The succulent features fleshy, greenish-purple leaves and delicate
                                    clusters of buds, offering a unique blend of color and form. Perfect for desks,
                                    windowsills, or gift-giving, it’s a low-maintenance companion that radiates calm and style.<br/><br/>
                                    - Pot Material: Glazed ceramic with hand-painted design <br/>
                                    - Plant Type: Succulent with vibrant green-purple foliage<br/>
                                    - Dimensions: Compact and ideal for small spaces<br/>
                                    - Care: Requires minimal watering and bright, indirect light
                                </P>
                            </div>
                        </div>
                    </Section>
                <Footer/>
            </main>
        </>
    )
}

const images = ["/TemporaryProductImages/clayPot1.webp", "/TemporaryProductImages/clayPot2.webp", "/TemporaryProductImages/clayPot2.webp"]
export default ProductViewDetailsPage
