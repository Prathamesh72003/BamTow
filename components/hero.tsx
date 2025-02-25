"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co/hvtbWZs/image.png"
          alt="Barn Background"
          fill
          priority
        className="object-cover"
          sizes="100vw"
          quality={100} 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center h-screen text-center pt-16">
        <div className="mt-[-10vh]">
          {" "}
          <motion.h1
            className="text-xl md:text-5xl font-playfair font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Softest Bamboo Towel You'll Ever Own
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-3xl font-playfair mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            100% made from barn
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

