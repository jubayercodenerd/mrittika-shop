import React from 'react'
import H1 from "./H1.jsx";
import P from "./P.jsx";

const Section = ({children, Header, Para, className}) => {
    return (
        <div className={`gap-y-2 md:gap-y-3 lg:gap-y-4 flex flex-col justify-center items-center w-[95%] md:w-[90%] lg:w-[80%] xl:w-[60%] ${className}`}>
            { Header && ( <H1 color={"#2b2b2b"} className={"self-center"}>{Header}</H1>) }
            { Para && (<P> {Para} </P>) }
            { children }
        </div>
    )
}
export default Section
