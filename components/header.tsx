"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.img
            src="/logo-fancy.svg"
            alt="Darius Cubed Logo"
            className="h-24 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <nav className="flex gap-8">
          {["Home", "About", "Team", "Portfolio", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
