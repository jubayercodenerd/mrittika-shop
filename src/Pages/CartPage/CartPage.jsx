import React, { useEffect, useState } from 'react';
import Navbar from "../../components/shared/Navbar.jsx";
import Footer from "../../components/shared/Footer.jsx";
import Section from "../../components/ui/Section.jsx";
import H1 from "../../components/ui/H1.jsx";
import P from "../../components/ui/P.jsx";
import QuantitySelector from "../../components/ui/QuantitySelector.jsx";
import Button from "../../components/ui/Button.jsx";
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCart(JSON.parse(stored));
        } else {
            // example default data
            const initialCart = [
                {
                    id: 1,
                    isSelected: true,
                    imageUrl: "/TemporaryProductImages/clayPot1.webp",
                    name: "Clay Pot",
                    quantity: 1,
                    price: 1000
                },
                {
                    id: 2,
                    isSelected: true,
                    imageUrl: "/TemporaryProductImages/clayPot1.webp",
                    name: "Clay Pot",
                    quantity: 1,
                    price: 1000
                },
                {
                    id: 3,
                    isSelected: true,
                    imageUrl: "/TemporaryProductImages/clayPot1.webp",
                    name: "Clay Pot",
                    quantity: 1,
                    price: 1000
                }
            ];
            setCart(initialCart);
        }
    }, []);

    // Sync cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Update quantity
    const updateQuantity = (id, newQty) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: newQty }
                    : item
            )
        );
    };

    // Toggle selection
    const toggleSelect = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, isSelected: !item.isSelected }
                    : item
            )
        );
    };

    // Delete item
    const removeItem = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    // Calculate total (only selected items)
    const totalCartPrice = cart
        .filter(item => item.isSelected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main className="min-h-screen w-full flex flex-col justify-start items-center gap-y-5">
            <Navbar />
            <Section className="p-6 rounded-md shadow-md">
                <H1 className="self-start font-medium">Shopping Cart...</H1>

                <div className="w-full flex flex-col justify-center items-center">
                    {cart.map(item => (
                        <CartProduct
                            key={item.id}
                            {...item}
                            onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                            onToggleSelect={() => toggleSelect(item.id)}
                            onDelete={() => removeItem(item.id)}
                        />
                    ))}

                    <div className="h-20 w-full flex justify-end items-center border-t border-gray-300 p-2">
                        <P>Total Price: {totalCartPrice}৳</P>
                    </div>
                </div>

                <div className="w-full flex justify-end items-center gap-x-3">
                    <Button variation="primary" className="p-4 font-medium text-xl gap-x-2">
                        Continue Shopping <FaShoppingBag />
                    </Button>
                    <Button variation="primary" className="p-4 font-medium text-xl gap-x-2">
                        Check Out <FaArrowRight />
                    </Button>
                </div>
            </Section>
            <Footer />
        </main>
    );
};

const CartProduct = ({ id, imageUrl, name, price, quantity, isSelected, onQuantityChange, onToggleSelect, onDelete }) => {
    const total = price * quantity;

    return (
        <div className="h-20 w-full flex justify-around items-center border-b border-gray-300 p-2">
            <input
                type="checkbox"
                checked={isSelected}
                onChange={onToggleSelect}
                className="h-5 aspect-square"
            />
            <img className="h-full aspect-square rounded-sm" src={imageUrl} alt="" />
            <P>{name}</P>
            <div className="h-full flex items-center gap-x-2">
                <P>QTY</P>
                <QuantitySelector
                    stock={99}
                    quantity={quantity}
                    onChange={onQuantityChange}
                />
            </div>
            <div className="h-full flex items-center gap-x-2">
                <P>{quantity} × {price}৳ = {total}৳</P>
            </div>
            <button
                onClick={onDelete}
                className="flex justify-center items-center h-[60%] aspect-square rounded-full hover:opacity-50"
            >
                <FaTrashCan />
            </button>
        </div>
    );
};

export default CartPage;
