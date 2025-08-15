import React from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import P from "../../components/ui/P.jsx";

const ProfilePage = () => {
    return (
        <>
            <main className={"min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10"}>
                <Navbar />
                <Section>
                    <img src="/TemporaryProductImages/clayPot2.webp" className={"h-40 aspect-square"} alt=""/>
                    <div className={"w-full h-15 flex flex-col items-start justify-center border border-black"}>
                        <P>Name</P>
                        <div className={"w-full h-full border border-black"}><input type="text" className={"w-full h-full focus:outline-none"}/></div>
                    </div>
                    <div className={"w-full h-15 flex flex-col items-start justify-center border border-black"}>
                        <P>E-mail</P>
                        <div className={"w-full h-full border border-black"}><input type="text" className={"w-full h-full focus:outline-none"}/></div>
                    </div>
                    <div className={"w-full h-15 flex flex-col items-start justify-center border border-black"}>
                        <P>Phone</P>
                        <div className={"w-full h-full border border-black"}><input type="text" className={"w-full h-full focus:outline-none"}/></div>
                    </div>
                    <div className={"w-full h-15 flex flex-col items-start justify-center border border-black"}>
                        <P>Address</P>
                        <div className={"w-full h-full border border-black"}><input type="text" className={"w-full h-full focus:outline-none"}/></div>
                    </div>
                </Section>
                <Footer />
            </main>
        </>
    )
}
export default ProfilePage