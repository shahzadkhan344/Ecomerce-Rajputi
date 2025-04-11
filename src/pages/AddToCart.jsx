import React, { useState } from 'react';

export default function AddToCart() {
    const [open, setOpen] = useState(1);
    const deceres = () => {
        if (open > 1) {
            setOpen(open - 1)
        }
    }
    return (
        <div className="max-w-md mx-auto border rounded my-4 shadow border-gray-200 p-6 space-y-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Add to Cart</h2>

            <div className="flex items-center gap-4">
                <img
                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_132585de-8520-4f32-af23-f429173380c6_350x.jpg?v=1730701447"
                    alt="Product"
                    className="w-20 h-24 object-cover rounded"
                />
                <div>
                    <p className="text-gray-700 font-medium">Jaipuri Bandhani Saree</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                    <p className="text-sm font-bold text-red-600">Rs. 1,649.00</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <p className="text-sm text-gray-600">Quantity:</p>
                <div className="flex border rounded-md overflow-hidden">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={deceres}>-</button>
                    <span className="px-4 py-1 border-x">{open}</span>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={() => setOpen(open + 1)}>+</button>
                </div>
            </div>

            <div className="flex gap-3">
                <button className="w-full cursor-pointer px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Buy Now
                </button>
                <button className="w-full cursor-pointer px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    <a href="/">Continue</a>
                </button>
            </div>
        </div>
    );
}
