"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-16 relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-playfair text-3xl font-bold text-black">BamTow</h1>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-green-800 text-green-800 hover:bg-green-50"
          >
            Shop Now
          </Button>
          <Button className="bg-green-800 text-white hover:bg-green-900">
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-700 hover:text-green-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
            >
              About Us
            </Link>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-green-800 text-green-800 hover:bg-green-50"
            >
              Shop Now
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-green-800 text-white hover:bg-green-900"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
