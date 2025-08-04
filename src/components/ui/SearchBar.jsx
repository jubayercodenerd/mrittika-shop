import React from 'react'
import Button from "./Button.jsx"
import { FaSearch } from "react-icons/fa"

const SearchBar = ({ placeHolder, inputClassName, outerDivClassName, onClick}) => {
    return (
        <div className={`flex h-10 rounded-md border- border-[#4e132f] overflow-hidden ${outerDivClassName}`} >
            <input
                type="text"
                placeholder={placeHolder}
                className={`h-full w-full px-3 text-md font-medium text-[#4e132f] bg-orange-100 outline-none ${inputClassName}`}
            />
            <button onClick={onClick} className="flex justify-center items-center h-full bg-orange-100 aspect-square border-l-2 border-[#4e132f] text-white">
                <FaSearch color={"#4e132f"}/>
            </button>
        </div>
    )
}

export default SearchBar
