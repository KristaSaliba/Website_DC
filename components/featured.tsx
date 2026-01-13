"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

export default function Featured() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0"
    >
      <motion.div
        variants={imageVariants}
        className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/images/image2-pillars.png" alt="Professional team collaboration" width={600} height={800} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1"
      >
        <h3 className="uppercase mb-4">Our Investment Pillars</h3>
        <p className="text-2xl lg:text-4xl mb-8">Venture Capital, Venture Building, and Private Equity—form the foundation of our partnership model, enabling us to invest in potential, build from the ground up, and scale with conviction.</p>
        <Link href="/how-we-operate">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit"
          >
            View Our Strategy
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
