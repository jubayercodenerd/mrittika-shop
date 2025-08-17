import React from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import Table from "../../components/ui/Table.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";

const OrdersPage = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar/>
                <Section className={"rounded-md shadow-md p-3 h-full"}>
                    <H1 className={"self-start"}>Order History...</H1>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                </Section>
                <Footer/>
            </main>
        </>
    );
}

const Order = () => {
    return(
        <>
            <div className={"h-20 w-full flex justify-start items-center  rounded-md shadow-sm p-2 gap-x-2"}>
                <img src="/TemporaryProductImages/clayPot1.webp" className={"h-full aspect-square rounded-sm"} alt=""/>
                <div className={"w-full  h-full grid grid-cols-9 gap-x-2"}>
                    <div className={"col-span-4 h-full flex flex-col justify-center items-start gap-y-.5"}>
                        <P className={"font-medium text-sm"}>Product Name</P>
                    </div>
                    <div className={"col-span-3 h-full flex flex-col justify-center items-start gap-y-1"}>
                        <P className={"font-medium text-sm"}>2 x 3400</P>
                        <P className={"font-medium text-sm"}>3800</P>
                    </div>
                    <div className={"col-span-2 h-full flex flex-col justify-center items-center gap-y-1"}>
                        <p className={"font-bold text-green-600"}>Status</p>
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
