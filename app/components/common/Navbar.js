"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-primary-background text-white h-20 flex items-center justify-between px-32">
      <Link href='/'><div><h1 className="text-6xl text-primary-color font-semibold">DriveFix</h1></div></Link>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-primary-color px-4 py-2 rounded-sm"
        >
          Login
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-40">
            <Link href="./login" className="block px-4 py-2 hover:bg-gray-100 text-sm">
              Login
            </Link>
            <Link href="./register" className="block px-4 py-2 hover:bg-gray-100 text-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
