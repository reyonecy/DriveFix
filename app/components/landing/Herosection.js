import React from 'react'
import Image from 'next/image'
function Herosection() {
  return (
    <div className='flex justify-between px-32 my-16 items-center'>
        <div>
        <h1 className='text-3xl font-bold text-gray-600'>Hassle-Free Vehicle Repairs<br></br> From Pickup to Drop-off
        <br/><span className='text-xl font-extralight ml-60 text-primary-color'>~ DriveFix</span></h1>
        </div>
        <div>
            <Image className='rounded-lg' width={600} height={600} alt='landing Photo' src="/cover.jpg"></Image>
        </div>
    </div>
  )
}

export default Herosection