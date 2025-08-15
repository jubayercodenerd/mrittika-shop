import React, {useState} from 'react'
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import P from "../../components/ui/P.jsx";
import Button from "../../components/ui/Button.jsx";

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: 'Ahmed Jubayer',
        email: 'amd.jubayer.cse@gmail.com',
        phone: '+88012345678',
        address: 'Khilkhet, Dhaka',
        imageUrl: '/TemporaryProductImages/clayPot1.webp'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        console.log("Updated profile:", profile);
        // Send to backend here
    };

    return (
        <main className="min-h-screen w-full flex flex-col justify-between items-center gap-y-5 md:gap-y-7 lg:gap-y-10">
            <Navbar />
            <Section className="px-5">
                <ProfileInfo
                    {...profile}
                    handleChange={handleChange}
                    handleUpdate={handleUpdate}
                />
            </Section>
            <Footer />
        </main>
    );
};

const ProfileInfo = ({ imageUrl, name, email, phone, address, handleChange, handleUpdate }) => {
    return (
        <>
            <img src={imageUrl} className="h-40 aspect-square rounded-full" alt="Profile" />
            {[
                { label: "Name", value: name, name: "name" },
                { label: "E-mail", value: email, name: "email" },
                { label: "Phone", value: phone, name: "phone" },
                { label: "Address", value: address, name: "address" }
            ].map(({ label, value, name }) => (
                <div key={name} className="w-full h-15 flex flex-col items-start justify-center">
                    <P>{label}</P>
                    <div className="w-full h-full bg-orange-100">
                        <input
                            type="text"
                            name={name}
                            value={value}
                            onChange={handleChange}
                            className="w-full h-full px-3 focus:outline-none"
                        />
                    </div>
                </div>
            ))}
            <Button
                onClick={handleUpdate}
                variation="primary"
                className="w-full rounded-none mt-2 py-2 px-4 text-xl font-medium"
            >
                Update
            </Button>
        </>
    );
};
export default ProfilePage