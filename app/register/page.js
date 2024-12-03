import React from 'react'
import Registerform from '../components/auth/Registerform'


function register() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <Registerform/>
      </div>
    </div>
  )
}

export default register