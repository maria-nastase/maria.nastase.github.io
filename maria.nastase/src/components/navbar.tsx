"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex relative flex glass-card items-center pl-4 pr-4 mb-4">
      <div className="flex justify-start">{/*<img src="/logo.png" className="logo w-10 h-10 object-cover"/>*/}<h1 className="font-bold !text-3xl">Maria Nastase</h1></div>
      <div className="flex justify-end flex-grow gap-4 mr-8">
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
