"use client"

import Image from "next/image"
import Header from "./header"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Hero() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="relative h-full">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src="/images/image1-docklands.png" fill alt="Professional business background" style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex items-center justify-start z-10"
        >
          <div className="text-left text-white max-w-3xl px-6">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Building Legacy Through Strategic Investment
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base leading-relaxed"
            >
              A family office at the intersection of venture capital, venture building, and private equity. We don't just invest, we partner deeply with exceptional founders and visionary teams to build enduring companies that transcend market cycles. Our approach combines patient capital with hands on operational expertise, creating lasting value through strategic partnerships and purposeful growth.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
