import React from 'react'

const Card = ({children, className, onClick}) => {
    return (
        <div onClick={onClick} className={`inline-block p-1.5 shadow-md bg-white rounded-xl ${className}`}>
            {children}
        </div>
    )
}
export default Card
