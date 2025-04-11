import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Successfully() {
    return (
        <div className="flex  justify-center py-5 bg-gradient-to-br bg-green-100">
            <div className="bg-white p-4 h-[300px] rounded shadow text-center max-w-md w-full my-3">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Login Successful!</h2>
                <p className="text-gray-600 mb-6">
                    Welcome back! You’ve successfully logged in.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300">
                    <a href="/">Go to Dashboard</a>
                </button>
            </div>
        </div>
    )
}
