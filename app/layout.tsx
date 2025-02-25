import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "BamTow - Natural Bamboo Towels",
  description: "Experience the luxury of 100% natural bamboo towels",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}

