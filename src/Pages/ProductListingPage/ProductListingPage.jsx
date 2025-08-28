import Navbar from "../../components/shared/Navbar.jsx";
import Section from "../../components/ui/Section.jsx";
import H1 from "../../components/ui/H1.jsx";
import ProductCard from "../../components/ui/ProductCard.jsx";
import ProductGrid from "../../components/ui/ProductGrid.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Button from "../../components/ui/Button.jsx";
import {FaArrowUpAZ} from "react-icons/fa6";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";

const ProductListingPage = () => {

    return (
        <>
                <Section>
                    <div className={"w-full flex items-center justify-between flex-wrap space-x-4 gap-y-2"}>
                        <H1 className={"text-xl self-start"}>All Products...</H1>
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
                        { <ProductCardsForTest/> }
                    </ProductGrid>
                </Section>
        </>
    )
}

const ProductCardsForTest = () =>{
    return(
        <>
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
        </>
    )
}
export default ProductListingPage
