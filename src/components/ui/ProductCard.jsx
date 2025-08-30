import React, {useEffect} from 'react'
import Button from './button.jsx'
import Card from './Card.jsx'
import {FaCartShopping} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const ProductCard = ({imageUrl,name, stock, slug, basePrice, activePrice}) => {
    const handleButtonClick = (e) => {
        e.stopPropagation();
        alert("add to card clicked");
    }
    useEffect(() => {
        console.log(stock);
        console.log(imageUrl);
    })
    const navigate = useNavigate();

    return (
        <Card className={"w-full space-y-1.5 p-2 rounded-xs"} onClick={() => navigate(`/product/${slug}`)}>
            <div className={"w-full aspect-square overflow-hidden flex items-center justify-center relative rounded-xs"}>
                <img src={imageUrl} alt="" className={"aspect-square bg-cover"}/>
                {
                    stock <= 0 && cardMessage("Out of stock")
                }
                {
                    stock <= 5 && cardMessage("Low stock")
                }
                {
                    stock > 5 && activePrice / basePrice <= 1 && cardMessage(`${Math.floor((1 - activePrice / basePrice) * 100)}% off`)
                }
            </div>
            <div>
                <p className={"text-sm font-medium"}>{name?.length >=40 ? name.slice(0,40) + "...": name}</p>
            </div>
            <div className={"gap-3 flex"}>
                {
                    price(basePrice, activePrice)
                }
            </div>
            <Button onClick={handleButtonClick} variation={"primary"} height={"40px"} fontSize={"18px"} color={"primary"} className={"w-full font-medium gap-x-2 rounded-xs"}>
                <FaCartShopping/> Add to Cart
            </Button>
        </Card>
    )
}

const cardMessage = (message) => {
    return (
        <div className={"w-full h-6 bg-red-500 absolute bottom-0 flex justify-center items-center " +
            "text-white text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold"}>
            {message}
        </div>
    )
}

const price = (basePrice, activePrice) => {
    return (
        basePrice <= activePrice ? <p className={"font-bold text-[#22a875] text-2xl"}>৳{activePrice}</p>
            : <><p className={"font-bold text-red-400 line-through text-xl"}>{basePrice}</p><p className={"font-bold text-[#22a875] text-2xl"}>৳{activePrice}</p></>
    )
}
export default ProductCard
