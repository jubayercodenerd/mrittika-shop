import React from 'react'
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import {Outlet} from "react-router-dom";

const CommonLayout = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar />
                    <Outlet/>
                <Footer />
            </main>
        </>
    )
}
export default CommonLayout
