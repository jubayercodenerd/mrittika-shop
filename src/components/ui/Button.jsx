import React from 'react'

const Button = ({children, variation, height, width, fontSize='auto', className, onClick}) => {

    const variants = {
        primary: 'bg-[#c7855f] text-white hover:bg-[#e9b388] ',
        secondary: 'bg-[#e9b388] text-white hover:bg-[#c7855f]',
        positive: 'bg-[#22c55e] text-white hover:bg-green-600',
        negative: 'bg-[#ef4444] text-white hover:bg-red-600',
    }
    return (
        <button onClick={onClick}
            style={{
            height:height,
            width:width,
            fontSize:fontSize,
        }} className={`${variants[variation]} rounded-md transition-colors duration-200 ease-in-out flex items-center justify-center ${className}`}>
            {children}
        </button>
    )
}
export default Button
