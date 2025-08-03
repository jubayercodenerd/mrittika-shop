import React from 'react'
import { FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={"bg-orange-100 justify-self-end w-full grid grid-cols-6 grid-rows-5 xl:grid-rows-1"}>
            <div className={"col-span-6 row-span-2 p-2 md:py-4 space-y-4 md:space-y-2 flex flex-col justify-start items-center border-yello-700 md:col-span-2 border-"}>
                {/*<p className={`${PStyle}`}>Mrittika Shop</p>*/}
                <img src="/public/transparent-logo-main.png" className={"h-16 mt-2"} alt=""/>
                <p className={`${PStyle}`}>Handcrafted with care 🤎</p>
                <div className={"flex items-center space-x-1"}>
                    <FaPhone className={"text-[#4e132f]"}/><p className={`${PStyle}`}>+8801303536359</p>
                </div>
                <div className={"flex items-center space-x-1"}>
                    <FaGlobe className={"text-[#4e132f]"}/><p className={`${PStyle}`}>mrittikashop.com</p>
                </div>
            </div>
            <div className={"col-span-6 row-span-1 p-2 md:py-4 space-y-1.5 md:space-y-2 flex flex-col justify-start items-center md:col-span-2 border-"}    >
                <h1 className={`${HStyle}`}>Information</h1>
                <a href="#" className={`${LinkStyle}`}>About Us</a>
                <a href="#" className={`${LinkStyle}`}>Contact</a>
            </div>
            <div className={"col-span-6 row-span-2 p-2 md:py-4 space-y-1.5 md:space-y-2 flex flex-col justify-start items-center md:col-span-2 border-"}>
                <h1 className={`${HStyle}`}>Categories</h1>
                <p className={`${PStyle}`}>Clay</p>
                <p className={`${PStyle}`}>Bamboo</p>
                <p className={`${PStyle}`}>Wood</p>
                <p className={`${PStyle}`}>Jute</p>
            </div>
        </div>
    )
}

const PStyle = "text-lg font-medium md:text-md "
const HStyle = "text-2xl font-bold md:text-lg xl:text-xl"
const LinkStyle = "text-lg font-medium underline hover:text-blue-500"

export default Footer
