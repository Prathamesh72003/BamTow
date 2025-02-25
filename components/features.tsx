"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "100% Natural Bamboo Fiber",
  "Ultra-Soft & Absorbent",
  "Eco-Friendly & Sustainable",
  "Antibacterial Properties",
]

export default function Features() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [300, 600], [200, 0])
  const opacity = useTransform(scrollY, [300, 600], [0, 1])

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-5xl font-playfair font-bold text-green-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Buy <span className="text-green-600">BamTow?</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <p className="text-lg text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://i.ibb.co/S4Pb5tzV/towelsplate-removebg-preview.png"
              alt="Bamboo towel features"
              width={600}
              height={400}
              className="shadow-none bg-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

