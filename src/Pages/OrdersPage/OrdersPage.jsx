import React, {useEffect} from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import Table from "../../components/ui/Table.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";
import {FaXmark} from "react-icons/fa6";

const OrdersPage = () => {
    return (
        <>
                <Section className={"p-3 h-full"}>
                    <H1 className={"self-start"}>Order History...</H1>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord001'} quantity={5} price={1000} totalPrice={5000} status={"Pending"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"super long ass Name for testing purposes"} phone={'01234567890'} orderId={'ord002'} quantity={5} price={1000} totalPrice={5000} status={"Pending"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord003'} quantity={5} price={1000} totalPrice={5000} status={"Processing"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord004'} quantity={5} price={1000} totalPrice={5000} status={"Shipping"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord005'} quantity={5} price={1000} totalPrice={5000} status={"cancelled"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord006'} quantity={5} price={1000} totalPrice={5000} status={"Shipping"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord007'} quantity={5} price={1000} totalPrice={5000} status={"Completed"}/>
                    <Order imageUrl={"/TemporaryProductImages/clayPot1.webp"} productName={"Clay mug terracotta"} phone={'01234567890'} orderId={'ord008'} quantity={5} price={1000} totalPrice={5000} status={"Completed"}/>
                </Section>
        </>
    );
}

const Order = ({imageUrl, productName, phone, orderId, quantity, price, totalPrice, status}) => {
    const getStatusColor = (status)=>{
        switch (status.toLowerCase()){
            case "pending": return "text-orange-300";
            case "processing" : return "text-blue-400";
            case "shipping": return "text-teal-400";
            case "completed": return "text-green-500";
            case "cancelled": return "text-red-500";
            default: return "text-gray-500";
        }
    }
    return(
        <>
            <div className={"h-20 md:h-40 w-full flex justify-start items-center rounded-md shadow-sm p-2 gap-x-2 md:p-3 md:gap-3"}>
                <img src={imageUrl} className={"h-full aspect-square rounded-sm lg:rounded-md"} alt=""/>
                <div className={"w-full  h-full grid grid-cols-10 gap-x-2"}>
                    <div className={"col-span-4 md:col-span-5 h-full flex flex-col justify-center items-start gap-y-.5 md:gap-y-2"}>
                        <P className={"font-semibold text-xs sm:text-sm md:text-md xl:text-xl"}>{productName.length>25 ? productName.slice(0,25) + '...': productName}</P>
                        <P className={"font-medium text-xs sm:text-sm md:text-md xl:text-xl"}>{phone}</P>
                        <P className={"font-medium text-xs sm:text-sm md:text-md xl:text-xl"}>{orderId}</P>
                    </div>
                    <div className={"col-span-3 md:col-span-2 h-full flex flex-col justify-center items-center gap-y-1 "}>
                        <P className={"font-medium text-xs sm:text-sm md:text-md xl:text-xl"}>{quantity} <FaXmark className={"inline-block"}/>{price}৳</P>
                        <P className={"font-medium text-xs sm:text-sm md:text-md xl:text-xl"}>{totalPrice}৳</P>
                    </div>
                    <div className={"col-span-3 h-full flex flex-col justify-center items-center gap-y-1 "}>
                        <p className={`status font-bold text-xs sm:text-sm md:text-lg xl:text-2xl ${getStatusColor(status)}`}>{status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const columns = [
    {key:"id", label:"Id"},
    {key:"name", label:"Product Name"},
    {key:"quantity", label:"QTY"},
    {key:"price", label:"Price"},
    {key:"totalPrice", label:"Total Price"},
    {key:"status", label:"Status"},
]

const testData = [
    {id:"ORD001", name:"Terracotta Vase", quantity:2, price:500, totalPrice:1000, status:"Pending"},
    {id:"ORD002", name:"Handmade Basket", quantity:1, price:300, totalPrice:300, status:"Shipped"},
    {id:"ORD003", name:"Clay Mug", quantity:4, price:150, totalPrice:600, status:"Delivered"},
];
export default OrdersPage
