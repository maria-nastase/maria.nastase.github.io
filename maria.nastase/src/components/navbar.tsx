"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row items-center glass-card px-4 mb-4 w-full">
      <div className="w-full sm:w-auto text-center sm:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl whitespace-normal break-words">
          Maria Nastase
        </h1>
      </div>

      <div className="w-full sm:w-auto sm:ml-auto flex justify-center sm:justify-end flex-wrap gap-4 mt-3 sm:mt-0">
    
        <Link href="/" className="page-button">Home</Link>
        <Link href="/about" className="page-button">About</Link>

        {/* Dropdown */}
        <div className="relative flex justify-content page-button">
          <Link href="/projects">Projects</Link>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 focus:outline-none"
          >
            <ChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="dropdown absolute top-full left-0 mt-2 w-30 rounded shadow-lg z-50 overflow-hidden mr-20 glass-card">
              <Link
                href="/projects/automation-mechatronics"
                className="block w-full px-4 py-2 page-button"
                onClick={() => setIsDropdownOpen(false)}
              >
                Automation + Mechatronics
              </Link>
              <Link
                href="/projects/mechanical"
                className="block px-4 py-2 page-button"
                onClick={() => setIsDropdownOpen(false)}
              >
                Mechanical
              </Link>
              <Link
                href="/projects/electrical-hardware"
                className="block px-4 py-2 page-button"
                onClick={() => setIsDropdownOpen(false)}
              >
                Electrical + Hardware
              </Link>
              <Link
                href="/projects/software"
                className="block px-4 py-2 page-button"
                onClick={() => setIsDropdownOpen(false)}
              >
                Software
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
