import React, {useState} from 'react'
import SearchBar from "../ui/SearchBar.jsx";
import Button from "../ui/Button.jsx";
import {FaBoxes, FaFirstOrder, FaGlobe, FaHome, FaSearch, FaShoppingCart, FaTruck} from "react-icons/fa";

const Navbar = () => {
    const [isMobileSearchBarOpen, setIsMobileSearchBarOpen] = useState(false)
    const toggleMobileSearchBar = () => {
        setIsMobileSearchBarOpen(!isMobileSearchBarOpen)
    }
    const handleSearchOnclick = () => {
        toggleMobileSearchBar();
    }

    return (<>
        <div className="space py-3 flex items-center justify-center px-6 h-15 xl:h-20 mb-15 max-md:mb-3 bg-[#2b2b2b] w-full sticky top-0 z-20 max-md:shadow-gray-400 max-md:shadow-sm">
            <div className="gap-2 h-full w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] flex items-center justify-between {/*border border-red-500*/}">
                <div className="h-full flex items-center ">
                    <img
                        src="/transparent-logo-secondary.png"
                        alt="Logo"
                        className="h-full object-contain"
                    />
                </div>
                <SearchBar placeHolder="Search for products..." outerDivClassName={`w-60 xl:w-130 lg:w-100 max-lg:hidden`}/>
                <div  className="h-full w-auto flex items-center justify-between {/*border border-red-500*/} ">
                    <ul className={"h-full flex justify-center items-center flex-nowrap gap-5 text-orange-100"}>
                        <li className={"flex items-center justify-center max-lg:hidden"}>
                            <Button variation={"ghost"} className={"p-2 gap-1 text-orange-100 border-1 border-transparent "}><FaHome/><p> Home</p></Button>
                        </li>
                        <li className={"flex items-center justify-center max-lg:hidden"}>
                            <Button variation={"ghost"} className={"p-2 gap-1 text-orange-100 border-1 border-transparent "}><FaBoxes/><p>Products</p></Button>
                        </li>
                        <li className={"flex items-center justify-center "}>
                            <Button variation={"ghost"} className={"p-2 gap-1 text-orange-100 border-1 border-transparent"}><FaTruck/><p className={"max-lg:hidden"}>Orders</p></Button>
                        </li>
                        <li className={"flex items-center justify-center "}>
                            <Button variation={"ghost"} className={"p-2 gap-1 text-orange-100 border-1 border-transparent"}><FaShoppingCart/><p className={"max-lg:hidden"}>Cart</p></Button>
                        </li>
                        <li className={"flex items-center justify-center "}>
                            <Button variation={"ghost"} className={"p-2 gap-1 text-orange-100 border-1 border-transparent"}><FaGlobe/><p className={"max-lg:hidden"}>Login</p></Button>
                        </li>
                    </ul>
                </div>
                <Button onClick={handleSearchOnclick} variation={"secondary"} className={"h-full aspect-square text-lg p-2 rounded-sm md:hidden"}><FaSearch color={"#4e132f"}/></Button>
                <div className={"h-full aspect-square rounded-full {/*border border-red-500*/}"}>
                    <img src="/clayPot2.webp" className={"h-full aspect-square rounded-full bg-cover border-2"} alt=""/>
                </div>
            </div>

            <div className="w-full absolute top-full h-12 flex justify-center items-center bg-orange-100 shadow-gray-400 shadow-sm max-md:hidden">
                <ul className={"w-[95%] lg:w-[85%] xl:w-[80%] flex justify-center gap-10 items-center font-medium"}>
                    <li>Bamboo Crafts</li>
                    <li>WoodWork</li>
                    <li>Fabric & Jute</li>
                    <li>Metal Crafts</li>
                    <li>Recycled Art</li>
                    <li>Home Decor</li>
                </ul>
            </div>
        </div>
            <div className={`fixed inset-0 w-full flex justify-center items-start px-10 py-15 backdrop-blur-2xl z-50 ${isMobileSearchBarOpen ? "": "hidden"}`}>
                <SearchBar onClick={handleSearchOnclick} placeHolder="search for products" outerDivClassName={`bg-[] h-12 w-full ml-auto mr-auto`}/>
            </div>
        </>
    )
}

export default Navbar
