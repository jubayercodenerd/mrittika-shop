import React from 'react'

const H1 = ({children, className, color}) => {
    return (
        <h1 style={{ color: color}}
            className={`text-2xl lg:text-3xl font-bold ${className}`}>
            {children}
        </h1>
    )
}
export default H1
