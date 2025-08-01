import React from 'react'
import { FaPhone, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={"bg-[#F1F5C7] justify-self-end  w-full h-60 grid grid-cols-6 grid-rows-2 md:h-35 md:grid-cols-4 xl:grid-rows-1"}>
            <div className={"col-span-3 p-2 space-y-1 flex flex-col justify-start items-start border-yello-700 md:col-span-1 border-"}>
                <p className={`${PStyle}`}>Mrittika Shop</p>
                <p className={`${PStyle}`}>Handcrafted with care 🤎</p>
                <div className={"flex items-center space-x-1"}>
                    <FaPhone className={"text-[#4e132f]"}/><p className={`${PStyle}`}>+8801303536359</p>
                </div>
                <div className={"flex items-center space-x-1"}>
                    <FaGlobe className={"text-[#4e132f]"}/><p className={`${PStyle}`}>mrittikashop.com</p>
                </div>
            </div>
            <div className={"col-span-3 p-2 space-y-.5 flex flex-col justify-start items-start md:col-span-1 border-"}>
                <h1 className={`${HStyle}`}>Information</h1>
                <p className={`${PStyle}`}>Clay</p>
                <p className={`${PStyle}`}>Bamboo</p>
                <p className={`${PStyle}`}>Wood</p>
                <p className={`${PStyle}`}>Jute</p>
            </div>
            <div className={"col-span-3 p-2 space-y-.5 flex flex-col justify-start items-start md:col-span-1 border-"}    >
                <h1 className={`${HStyle}`}>Information</h1>
                <a href="#" className={`${LinkStyle}`}>About Us</a>
                <a href="#" className={`${LinkStyle}`}>Contact</a>
            </div>
            <div className={"col-span-3 p-2 space-y-.5 flex flex-col justify-start items-start md:col-span-1 border-"}>
                <h1 className={`${HStyle}`}>Information</h1>
                <a href="#" className={`${LinkStyle}`}>About Us</a>
                <a href="#" className={`${LinkStyle}`}>Contact</a>
            </div>
        </div>
    )
}

const PStyle = "text-sm font-medium"
const HStyle = "text-md font-medium"
const LinkStyle = "text-sm font-medium underline hover:text-blue-500"

export default Footer
