import React from 'react'
import Container from '../components/Container'
import { FaStar } from 'react-icons/fa'

export default function Reviews() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-2">All Customer Reviews</h2>
        <p className="text-center text-gray-600 mb-6">
          Join our happy customers and share your thoughts! Read real stories and see why TechBro24 is trusted by so many.
        </p>
 
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-6 pb-8">
          
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start text-green-600 mb-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-lg font-medium">4.83 out of 5</p>
            <p className="text-gray-500">Based on 5684 reviews</p>
          </div>
 
          <div className="w-full md:w-2/3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-teal-500 w-[85%] rounded"></div>
              </div>
              <span className="text-sm text-gray-600">4862</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-teal-500 w-[13%] rounded"></div>
              </div>
              <span className="text-sm text-gray-600">735</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /></div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-teal-500 w-[2%] rounded"></div>
              </div>
              <span className="text-sm text-gray-600">67</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><FaStar /><FaStar /></div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-teal-500 w-[1%] rounded"></div>
              </div>
              <span className="text-sm text-gray-600">8</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><FaStar /></div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-teal-500 w-[1%] rounded"></div>
              </div>
              <span className="text-sm text-gray-600">12</span>
            </div>
          </div>
 
          <button className="px-6 py-2 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 transition">
            Write a Store Review
          </button>
        </div> 
 
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <img src="https://judgeme.imgix.net/kcpc-bandhani/1743512275__17435122920884900078926332130212__original.jpg?auto=format&w=160" alt="badge" className="h-16" />
          <img src="https://judgeme.imgix.net/kcpc-bandhani/1743512275__17435122920884900078926332130212__original.jpg?auto=format&w=160" alt="badge" className="h-16" />
          <img src="https://judgeme.imgix.net/kcpc-bandhani/1743512275__17435122920884900078926332130212__original.jpg?auto=format&w=160" alt="badge" className="h-16" />
          <img src="https://judgeme.imgix.net/kcpc-bandhani/1743512275__17435122920884900078926332130212__original.jpg?auto=format&w=160" alt="badge" className="h-16" />
        </div>
      </div>
    </Container>
  )
}
