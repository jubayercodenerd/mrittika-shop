import React from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";

const ProductViewDetailsPage = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar/>
                    <Section>

                    </Section>
                <Footer/>
            </main>
        </>
    )
}
export default ProductViewDetailsPage
