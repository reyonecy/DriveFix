import React from 'react'

function Features() {
  return (
    <div className='px-20 my-14'>
        <div><h1 className='text-center text-4xl font-bold mb-4'>Features</h1></div>
        <div><p className='px-20 text-center font-semibold text-gray-600 text-xl'>DriveFix makes vehicle repairs simple, convenient, and reliable. Here’s what it offers:</p></div>
        <div className='mt-8 pl-32'>
        <ul className="list-disc text-xl marker:text-orange-500 pl-5 space-y-2">
        <li className="text-gray-700">
          <span className="font-semibold">Door-to-Door Service:</span> We handle vehicle pickup and drop-off for ultimate convenience.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Trusted Workshops:</span> Only verified professionals ensure top-quality repairs.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Real-Time Updates:</span> Stay informed with live repair progress tracking.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Transparent Pricing:</span> Clear, upfront costs with secure online payments.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Comprehensive Services:</span> From diagnostics to tire changes, we’ve got you covered.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Easy Booking:</span> Schedule repairs quickly through our seamless platform.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Expert Care:</span> Skilled mechanics provide reliable and efficient service.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Secure Payments:</span> Pay safely via Khalti and other trusted gateways.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">24/7 Support:</span> Our team is always ready to assist with any queries.
        </li>
      </ul>

            
        </div>
    </div>
  )
}

export default Features