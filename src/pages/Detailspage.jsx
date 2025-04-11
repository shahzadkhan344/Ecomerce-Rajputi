import React from 'react';
import { FaStar } from 'react-icons/fa';
import Container from '../components/Container';

export default function Detailspage() {
    return (
        <>
            <Container>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                TechBro24 Special Pure Georgette Jaipuri Tie Dye Zari Weaving Saree
                            </h1>
                            <p className="text-sm text-gray-600">SKU: 1577SWH</p>
                            <div className="flex items-center gap-1 text-red-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="text-sm text-gray-700 ml-2">44 reviews</span>
                            </div>
                            <p className="line-through text-gray-400">Rs. 2,504.00</p>
                            <p className="text-2xl font-bold text-red-600">Rs. 1,649.00</p>

                            <div className="flex gap-2">
                                <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">

                                    <a href="/addtocart">Add to Cart</a>       </button>
                                <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                                    Buy It Now
                                </button>
                            </div>

                            <div className="flex gap-2 overflow-x-auto pt-4">
                                <img
                                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_132585de-8520-4f32-af23-f429173380c6_350x.jpg?v=1730701447"
                                    alt="Thumbnail 1"
                                    className="w-20 h-28 object-cover rounded cursor-pointer"
                                />
                                <img
                                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_e186729f-eef8-4891-af7d-6053d0de3c39_350x.jpg?v=1730701447"
                                    alt="Thumbnail 2"
                                    className="w-20 h-28 object-cover rounded cursor-pointer"
                                />
                                <img
                                    src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_e186729f-eef8-4891-af7d-6053d0de3c39_350x.jpg?v=1730701447"
                                    alt="Thumbnail 3"
                                    className="w-20 h-28 object-cover rounded cursor-pointer"
                                />
                            </div>

                            <div className="pt-6 space-y-2 text-sm text-gray-700">
                                <p>
                                    This exclusive saree is crafted with pure Georgette fabric and traditional Bandhani tie-dye technique, showcasing the timeless charm of Rajasthani craftsmanship.
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Pure Georgette Fabric</li>
                                    <li>Zari Weaving Border</li>
                                    <li>Length: 5.5 meters</li>
                                    <li>Blouse Piece: Included</li>
                                </ul>
                                <p>Delivery in 5–7 working days. Free shipping on prepaid orders.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img
                                src="https://onlinebandhej.com/cdn/shop/files/rn-image_picker_lib_temp_132585de-8520-4f32-af23-f429173380c6_350x.jpg?v=1730701447"
                                alt="Main"
                                className="w-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
