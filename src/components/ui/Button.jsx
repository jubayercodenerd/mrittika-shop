import React from 'react'

const Button = ({children, variation, height, width, fontSize='auto', className, onClick}) => {

    const variants = {
        primary: 'bg-[#c7855f] text-white hover:bg-[#e9b388] ',
        secondary: 'bg-orange-100 text-white hover:bg-[#5e233f]',
        accent: 'bg-[#4e132f] text-orange-100 hover:bg-[#5e233f]',
        positive: 'bg-[#22c55e] text-white hover:bg-green-600',
        negative: 'bg-[#ef4444] text-white  hover:bg-red-600',
        ghost: 'bg-transparent hover:bg-transparent active:border-1 active:border-gray-400',
    }
    return (
        <button onClick={onClick}
            style={{
            height:height,
            width:width,
            fontSize:fontSize,
        }} className={`${variants[variation]} rounded-md transition-colors duration-200 ease-in-out flex items-center justify-center ${className} cursor-pointer`}>
            {children}
        </button>
    )
}
export default Button
