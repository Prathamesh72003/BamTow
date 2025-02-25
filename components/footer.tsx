"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-green-800 pt-40 pb-16 relative text-white">
      <div className="absolute top-0 left-0 right-0 h-32 bg-white rounded-b-[50%]" />
      <div className="container px-6 relative">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Stay Connected</h2>
          <p className="text-green-100 mb-6">
            Subscribe to our newsletter for updates and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-800"
            />
            <Button className="bg-white text-green-800 hover:bg-green-50">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Responsive Grid for Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-green-100 text-sm text-center md:text-left">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Download App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-green-100">123 Barn Street, Countryside, USA</p>
            <p className="text-green-100">Email: support@bamtow.com</p>
            <p className="text-green-100">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-600 mt-10 pt-6 text-center text-green-100 text-sm">
          © {new Date().getFullYear()} BamTow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
