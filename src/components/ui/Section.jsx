import React from 'react'

const Section = ({children, className}) => {
    return (
        <div className={`gap-y-3 md:gap-4 lg:gap-6 flex flex-col justify-center items-center w-[95%] md:w-[90%] lg:w-[90%] xl:w-[80%] ${className}`}>
            {children}
        </div>
    )
}
export default Section
