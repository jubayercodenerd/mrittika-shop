import React, {useState} from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";
import Button from "../../components/ui/Button.jsx";

const ProductPage = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar/>
                    <Section>
                        <ProductDetails images={images} categoryTags={categoryTags} price={120} productName={"Terracotta clay plant pot"}/>
                    </Section>
                <Footer/>
            </main>
        </>
    )
}

const ProductDetails = ({images, categoryTags, price, productName}) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    return (
        <>
            <div className={"w-full flex flex-col gap-4 md:flex-row md:gap-x-10"}>
                <div className={"w-full grid grid-cols-4 grid-rows-3 gap-1 md:max-w-100"}>
                    <div className={"flex flex-col justify-center items-center col-span-1 row-span-3 gap-y-1 "}>
                        {images.map((image, index) => (
                            <img src={image} alt={image} className={`h-full aspect-square transition-all duration-100 ease-in ${currentImage === index && "grayscale-25 opacity-50"}`} onClick={() => setCurrentImage(index)} />
                        ))}
                    </div>
                    <div className={"flex flex-col justify-center items-center col-span-3 row-span-3 gap-y-1 "}>
                        <img src={images[currentImage]} alt=""/>
                    </div>
                </div>
                <div className={"flex flex-col justify-end items-start gap-y-1"}>
                    <div className={"flex justify-start items-center flex-wrap mb-auto gap-1"}>
                        {categoryTags.map((categoryTag) => (
                            <Button variation={"ghost"} className={"h-6 lg:h-8 lg:px-3 lg:py-1.5 px-2 py-1 text-sm lg:text-md font-medium border-1 border-gray-800 rounded-full"}>{categoryTag}</Button>
                        ))}
                    </div>
                    <H1 className={"self-start text-2xl font-bold text-green-700 lg:text-4xl"}>{price}$</H1>
                    <H1 className={"self-start text-xl font-medium mb-3"}>{productName}</H1>
                    <Button variation={"primary"} className={"px-4 py-2 font-bold text-xl self-start lg:text-2xl "}>Add to Cart</Button>
                </div>
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
        </>
    )
}

const images = ["/TemporaryProductImages/clayPot1.webp", "/TemporaryProductImages/clayPot2.webp", "/TemporaryProductImages/clayPot3.webp"]
const categoryTags = ["Terracotta", "Home Decor", "Recycled Art"]
export default ProductPage
