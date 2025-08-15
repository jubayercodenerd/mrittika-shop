import React from 'react'

const P = ({children, className}) => {
    return (
        <p className={`text-md lg:text-lg font font-normal ${className}`}>
            {children}
        </p>
    )
}
export default P
