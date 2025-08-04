import React, {useState} from 'react'
import SearchBar from "../ui/SearchBar.jsx";
import Button from "../ui/Button.jsx";
import {FaSearch} from "react-icons/fa";

const Navbar = () => {
    const [isMobileSearchBarOpen, setIsMobileSearchBarOpen] = useState(false)
    const toggleMobileSearchBar = () => {
        setIsMobileSearchBarOpen(!isMobileSearchBarOpen)
    }
    const handleSearchOnclick = () => {
        toggleMobileSearchBar();
    }

    return (
        <div className="space py-3 space-x-5 xl:space-x-30 flex items-center justify-center px-6 h-15 xl:h-20 mb-15 bg-[#2b2b2b] w-full sticky top-0 z-20 max-md:shadow-gray-400 max-md:shadow-sm">
            <div className="h-full flex items-center">
                <img
                    src="/transparent-logo-secondary.png"
                    alt="Logo"
                    className="h-full object-contain"
                />
            </div>
            <SearchBar placeHolder="Search for products..." outerDivClassName={`w-60 xl:w-130 lg:w-100 max-md:hidden`} />
            <Button onClick={handleSearchOnclick} variation={"secondary"} className={"h-full aspect-square text-lg p-2 rounded-sm md:hidden"}><FaSearch color={"#4e132f"}/></Button>
            <div className={`fixed inset-0 w-full flex justify-center items-start px-10 py-15 backdrop-blur-2xl ${isMobileSearchBarOpen ? "": "hidden"}`}>
                <SearchBar onClick={handleSearchOnclick} placeHolder="search for products" outerDivClassName={`bg-[] h-12 w-full ml-auto mr-auto`}/>
            </div>
            <div className="w-full absolute top-full h-12 bg-orange-100 shadow-gray-400 shadow-sm max-md:hidden"></div>
        </div>
    )
}

export default Navbar
