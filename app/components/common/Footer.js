import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DriveFix. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Powered by <span className="font-bold">DriveFix Team</span>.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer