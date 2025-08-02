import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const QuantitySelector = () => {
    const [count, setCount] = useState(1);
    const [inputValue, setInputValue] = useState('1');
    const maxCount = 99;

    const handleIncrement = () => {
        setCount((prev) => {
            const newCount = Math.min(maxCount, prev + 1);
            setInputValue(String(newCount));
            return newCount;
        });
    };

    const handleDecrement = () => {
        setCount((prev) => {
            const newCount = Math.max(1, prev - 1);
            setInputValue(String(newCount));
            return newCount;
        });
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        // Allow empty input temporarily
        if (value === '' || /^\d*$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleBlur = () => {
        // If input is empty on blur, reset to 1
        const num = parseInt(inputValue, 10);
        if (isNaN(num)) {
            setCount(1);
            setInputValue('1');
        } else {
            const safe = Math.max(1, Math.min(maxCount, num));
            setCount(safe);
            setInputValue(String(safe));
        }
    };

    return (
        <div className="rounded-md h-12 w-30 grid grid-cols-7 overflow-hidden">
            <button
                onClick={handleDecrement}
                disabled={count <= 1}
                className="bg-[#c7855f] flex justify-center items-center col-span-2 cursor-pointer disabled:opacity-50"
            >
                <FaMinus className="text-[#4e132f]" />
            </button>
            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="col-span-3 bg-orange-100 border-none outline-0 text-center text-lg font-medium appearance-none"
                value={inputValue}
            />
            <button
                onClick={handleIncrement}
                disabled={count >= maxCount}
                className="bg-[#c7855f] flex justify-center items-center col-span-2 cursor-pointer disabled:opacity-50"
            >
                <FaPlus className="text-[#4e132f]" />
            </button>
        </div>
    );
};

export default QuantitySelector;
