"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Section() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src="/images/image3-philosophy.png" fill alt="Abstract geometric pattern" style={{ objectFit: "cover" }} />
      </motion.div>
      <motion.h3
        variants={itemVariants}
        className="absolute top-12 right-6 text-black uppercase z-10 text-sm md:text-base lg:text-lg"
      >
        Our Philosophy
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="absolute bottom-12 right-6 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10"
      >
        We believe true wealth is built, not traded. Our philosophy centers on disciplined capital deployment, deep operational partnership, and unwavering commitment to long term value creation. We seek opportunities where our decade of experience scaling ventures can accelerate growth, mitigate risk, and transform promising ideas into category defining businesses. Every investment is a partnership, every partnership, a commitment to building generational impact.
      </motion.p>
    </motion.div>
  )
}
