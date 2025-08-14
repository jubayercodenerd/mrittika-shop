import React, { useEffect, useState } from 'react';
import Navbar from "../../components/shared/Navbar.jsx";
import Section from "../../components/ui/Section.jsx";
import Footer from "../../components/shared/Footer.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";
import Button from "../../components/ui/Button.jsx";

const CheckOutPage = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
        trxId: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

        if (savedCart.length === 0) {
            savedCart = [
                { id: 1, isSelected: true, imageUrl: "/TemporaryProductImages/clayPot1.webp", name: "Clay Pot", quantity: 2, price: 1000 },
                { id: 2, isSelected: true, imageUrl: "/TemporaryProductImages/clayPot2.webp", name: "Terracotta Vase", quantity: 1, price: 1500 },
                { id: 3, isSelected: false, imageUrl: "/TemporaryProductImages/clayPot3.webp", name: "Bamboo Basket", quantity: 3, price: 500 }
            ];
            localStorage.setItem("cart", JSON.stringify(savedCart));
        }

        const onlyChecked = savedCart.filter(item => item.isSelected);
        setCheckedItems(onlyChecked);
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.phone.trim()) tempErrors.phone = "Phone is required.";
        if (!formData.address.trim()) tempErrors.address = "Address is required.";
        if (!formData.paymentMethod) tempErrors.paymentMethod = "Please select a payment method.";
        if (formData.paymentMethod === "bkash" && !formData.trxId.trim()) {
            tempErrors.trxId = "Bkash Transaction ID is required.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            alert("Order placed successfully!");
        }
    };

    return (
        <main className="min-h-screen w-full flex flex-col justify-start items-center gap-y-5">
            <Navbar />
            <Section className={"rounded-md shadow-md p-3"}>
                <H1 className="text-xl font-bold mb-4 self-start">Checkout...</H1>
                {checkedItems.length > 0 ? (
                    <div className="space-y-3 w-full">
                        {checkedItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div className="flex items-center gap-x-3">
                                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-medium">৳{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="text-right font-medium text-lg mt-4">
                            Total: ৳{checkedItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                        </div>
                    </div>
                ) : (
                    <p>No items selected for checkout.</p>
                )}
            </Section>

            <Section className={"rounded-md shadow-md p-3"}>
                <form onSubmit={handleSubmit} className="h-full w-full flex-col justify-center items-center gap-y-3 space-y-3">
                    <div className="w-full flex justify-between items-center gap-x-3">
                        <P>Name</P>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full  h-10 border border-gray-300 rounded px-2 focus:outline-none"
                            type="text"
                            placeholder="Enter Full Name..."
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <div className="w-full flex justify-between items-center gap-x-3">
                        <P>Phone</P>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none"
                            type="tel"
                            placeholder="Enter Phone..."
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <div className="w-full flex justify-between items-center gap-x-3">
                        <P>Address</P>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none"
                            type="text"
                            placeholder="Enter Address..."
                        />
                    </div>
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

                    <div className="w-full flex justify-start items-center gap-x-3">
                        <P>Payment Method</P>
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className=" h-10 border border-gray-300 rounded px-2 focus:outline-none"
                        >
                            <option value="">Select Payment Method</option>
                            <option value="bkash">Bkash</option>
                            <option value="cod">Cash on Delivery</option>
                        </select>
                    </div>
                    {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}

                    {formData.paymentMethod === "bkash" && (
                        <div className="w-full flex justify-between items-center gap-x-3">
                            <P>Trx ID</P>
                            <input
                                name="trxId"
                                value={formData.trxId}
                                onChange={handleChange}
                                className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none"
                                type="text"
                                placeholder="Enter Bkash Transaction ID..."
                            />
                        </div>
                    )}
                    {errors.trxId && <p className="text-red-500 text-sm">{errors.trxId}</p>}

                    <Button
                        variation={"primary"}
                        type="submit"
                        className="ml-auto px-4 py-2 text-lg font-medium rounded-md"
                    >
                        Place Order
                    </Button>
                </form>
            </Section>
            <Footer />
        </main>
    );
};

export default CheckOutPage;
