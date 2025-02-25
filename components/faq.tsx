"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I care for my bamboo towels?",
    answer:
      "Wash in cold or warm water with mild detergent. Avoid fabric softeners and bleach. Tumble dry on low or line dry for best results.",
  },
  {
    question: "How long do bamboo towels last?",
    answer:
      "With proper care, our bamboo towels can last for several years while maintaining their softness and absorbency.",
  },
  {
    question: "Are bamboo towels eco-friendly?",
    answer:
      "Yes! Bamboo is a highly sustainable resource that grows quickly without pesticides and uses less water than cotton.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Centered Section Title */}
        <motion.h2
          className="text-5xl font-playfair font-bold text-green-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-xl text-green-800 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 px-4 py-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
