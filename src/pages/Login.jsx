import React, { useState } from 'react';
import Container from '../components/Container';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded shadow p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder=""
                                className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="flex items-center gap-1 border border-gray-300 rounded px-1">
                                <input
                                    type={open == true ? "text" : "password"}
                                    className="w-full px-4 py-2  rounded outline-none"
                                />
                                <span className='cursor-pointer' onClick={() => setOpen(!open)}>{open == true ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            <a href="/successfully">Log In</a>
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600 ">
                        Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </Container>
    );
}
