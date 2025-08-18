import React from 'react'

const P = ({children, className}) => {
    return (
        <p className={`text-md lg:text-lg text-[#2b2b2b] ${className} `}>
            {children}
        </p>
    )
}
export default P
