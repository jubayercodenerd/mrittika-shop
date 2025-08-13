import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = ({ stock = 99, quantity, onChange }) => {
    const [inputValue, setInputValue] = useState(String(quantity ?? 1));

    // keep input field in sync if parent quantity changes
    useEffect(() => {
        setInputValue(String(quantity ?? 1));
    }, [quantity]);

    const inc = () => {
        const next = Math.min(stock, (quantity || 1) + 1);
        onChange(next);
        setInputValue(String(next));
    };

    const dec = () => {
        const next = Math.max(1, (quantity || 1) - 1);
        onChange(next);
        setInputValue(String(next));
    };

    const handleInputChange = (e) => {
        const v = e.target.value;
        if (v === "" || /^\d*$/.test(v)) setInputValue(v);
    };

    const handleBlur = () => {
        const num = parseInt(inputValue, 10);
        const safe = isNaN(num) ? 1 : Math.max(1, Math.min(stock, num));
        onChange(safe);
        setInputValue(String(safe));
    };

    return (
        <div className="rounded-md h-12 w-30 grid grid-cols-7 overflow-hidden">
            <button
                onClick={dec}
                disabled={(quantity || 1) <= 1}
                className="bg-[#c7855f] flex justify-center items-center col-span-2 disabled:opacity-50"
            >
                <FaMinus className="text-[#4e132f]" />
            </button>

            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="col-span-3 bg-orange-100 border-none outline-0 text-center text-lg font-medium appearance-none"
            />

            <button
                onClick={inc}
                disabled={(quantity || 1) >= stock}
                className="bg-[#c7855f] flex justify-center items-center col-span-2 disabled:opacity-50"
            >
                <FaPlus className="text-[#4e132f]" />
            </button>
        </div>
    );
};

export default QuantitySelector;
