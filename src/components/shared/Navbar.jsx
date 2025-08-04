import React from 'react'
import SearchBar from "../ui/SearchBar.jsx";

const Navbar = () => {
    return (
        <div className="space py-3 space-x-5 xl:space-x-30 flex items-center justify-center px-6 h-20 mb-15 bg-[#2b2b2b] w-full sticky top-0 z-20">
            <div className="h-full flex items-center">
                <img
                    src="/transparent-logo-secondary.png"
                    alt="Logo"
                    className="h-full object-contain"
                />
            </div>
            <SearchBar placeHolder="Search for products..." outerDivClassName={"w-100 xl:w-130"}/>
            <div className="w-full absolute top-full h-12 bg-orange-100 shadow-gray-400 shadow-sm"></div>
        </div>
    )
}

export default Navbar
