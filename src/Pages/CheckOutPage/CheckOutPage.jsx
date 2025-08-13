import React, { useEffect, useState } from 'react';
import Navbar from "../../components/shared/Navbar.jsx";
import Section from "../../components/ui/Section.jsx";
import Footer from "../../components/shared/Footer.jsx";
import H1 from "../../components/ui/H1.jsx";

const CheckOutPage = () => {
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        // Get the cart from localStorage
        let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

        // If cart is empty, populate with sample items for testing
        if (savedCart.length === 0) {
            savedCart = [
                {
                    id: 1,
                    isSelected: true,
                    imageUrl: "/TemporaryProductImages/clayPot1.webp",
                    name: "Clay Pot",
                    quantity: 2,
                    price: 1000
                },
                {
                    id: 2,
                    isSelected: true,
                    imageUrl: "/TemporaryProductImages/clayPot2.webp",
                    name: "Terracotta Vase",
                    quantity: 1,
                    price: 1500
                },
                {
                    id: 3,
                    isSelected: false,
                    imageUrl: "/TemporaryProductImages/clayPot3.webp",
                    name: "Bamboo Basket",
                    quantity: 3,
                    price: 500
                }
            ];
            localStorage.setItem("cart", JSON.stringify(savedCart));
        }

        // Filter only selected items
        const onlyChecked = savedCart.filter(item => item.isSelected);
        setCheckedItems(onlyChecked);
    }, []);

    return (
        <main className="min-h-screen w-full flex flex-col justify-start items-center gap-y-5">
            <Navbar />
            <Section>
                <H1 className="text-xl font-bold mb-4 self-start">Checkout...</H1>
                {checkedItems.length > 0 ? (
                    <div className="space-y-3 w-full">
                        {checkedItems.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-2"
                            >
                                <div className="flex items-center gap-x-3">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold">
                                    ৳{(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                        <div className="text-right font-bold text-lg mt-4">
                            Total: ৳
                            {checkedItems
                                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                .toFixed(2)}
                        </div>
                    </div>
                ) : (
                    <p>No items selected for checkout.</p>
                )}
            </Section>
            <Section>

            </Section>
            <Footer />
        </main>
    );
};

export default CheckOutPage;
