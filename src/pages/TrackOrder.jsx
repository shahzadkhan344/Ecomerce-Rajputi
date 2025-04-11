import React from 'react'
import Container from '../components/Container'

export default function TrackOrder() {
  return (
    <Container>
      <>
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="p-6 bg-white rounded-md shadow w-full max-w-md border-gray-200 border">
            <div className="flex gap-4 mb-4 items-center">
              <label className="flex items-center space-x-2">
                <input type="radio" name="searchBy" defaultChecked />
                <span className="text-sm font-medium">Order ID/No</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="searchBy" />
                <span className="text-sm font-medium">Tracking ID/AWB</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter Your Order ID/No"
              className="w-full outline-none border-gray-200 px-4 py-2 border rounded-md"
            />
            <button className="mt-4 w-full cursor-pointer bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
              Track Your Order
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Check current status of your shipment.
            </p>
          </div>
        </div>
      </>
    </Container>
  )
}
