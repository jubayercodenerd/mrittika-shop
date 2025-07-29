import React from 'react'
import Button from './button.jsx'
import Card from './Card.jsx'
import reactLogo from '../../assets/react.svg'

const ProductCard = ({imageUrl,message, onClick}) => {
    const handleButtonClick = (e) => {
        e.stopPropagation();
        alert("add to card clicked");
    }

    return (
        <Card className={"w-50 space-y-1.5 p-2"} onClick={onClick}>
            <div className={"w-full aspect-square rounded-md overflow-hidden flex items-center justify-center relative"}>
                <img src={imageUrl} alt="" className={" aspect-square bg-cover"}/>
                {message && cardMessage(message)}
            </div>
            <div>
                <p className={"text-[1.1rem] font-medium"}>Clay mug</p>
            </div>
            <div>
                <p className={"font-bold text-[#22a875] text-2xl"}>$110</p>
            </div>
            <Button onClick={handleButtonClick} variation={"primary"} height={"40px"} fontSize={"18px"} color={"primary"} className={"w-full font-medium"}>
                Add to Cart
            </Button>
        </Card>
    )
}

const cardMessage = (message) => {
    return (
        <div className={"w-full h-6 bg-red-500 absolute -rotate-45 -right-15 bottom-7 flex justify-center items-center text-white text-sm font-bold"}>{message}</div>
    )

}
export default ProductCard
