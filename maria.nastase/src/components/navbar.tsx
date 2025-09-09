"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="p-4 text-white flex gap-4 relative justify-content justify-end mr-5 mt-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 focus:outline-none"
        >
          Projects ▼
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-30 rounded shadow-lg z-50 overflow-hidden">
            <Link
              href="/projects/automation-mechatronics"
              className="block w-full px-4 py-2 bg-white text-black hover:bg-gray-600"
              onClick={() => setIsDropdownOpen(false)}
            >
              Automation + Mechatronics
            </Link>
            <Link
              href="/projects/mechanical"
              className="block px-4 py-2 bg-white text-black hover:bg-gray-600"
              onClick={() => setIsDropdownOpen(false)}
            >
              Mechanical
            </Link>
            <Link
              href="/projects/electrical-hardware"
              className="block px-4 py-2 bg-white text-black hover:bg-gray-600"
              onClick={() => setIsDropdownOpen(false)}
            >
              Electrical + Hardware
            </Link>
            <Link
              href="/projects/software"
              className="block px-4 py-2 bg-white text-black hover:bg-gray-600"
              onClick={() => setIsDropdownOpen(false)}
            >
              Software
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
