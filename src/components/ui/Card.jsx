import React from 'react'

const Card = ({children, className, onClick}) => {
    return (
        <div onClick={onClick} className={`inline-block content-center p-1.5 shadow-md cursor-pointer bg-white ${className}`}>
            {children}
        </div>
    )
}
export default Card
