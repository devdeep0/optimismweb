'use client'

import React, { useState, useEffect } from "react"
import { FaChartSimple } from "react-icons/fa6"
import { Home, Menu } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  const [active, setActive] = useState("home")
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [comingSoonMessage, setComingSoonMessage] = useState("")

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showComingSoon])

  const handleClick = (section: string, message: string) => {
    setActive(section)
    setShowComingSoon(true)
    setComingSoonMessage(message)
  }

  return (
    <>
      {showComingSoon && (
        <motion.div 
          animate={{ y: -20 }} 
          className="absolute bottom-20  left-0 right-0 mx-auto flex items-center justify-center z-20"
        >
          <div className="font-bold text-[15px] bg-black border-2 border-white text-white rounded-[10px] p-2">
            {comingSoonMessage}
          </div>
        </motion.div>
      )}

      <footer className="fixed border-t-2 border-[#FF0420] bottom-0 w-full  bg-white">
        <nav className="container flex h-16 items-center justify-around">
          <FaChartSimple
            className="opacity-100 cursor-pointer w-6 h-6"
            color='#FFA8A8'
            onClick={() => handleClick("chart", "Leaderboard Coming Soon")}
          />
          <Link 
            href="/" 
            className="relative"
            onClick={() => setActive("home")}
          >
            <Home 
              className="w-6 h-6 cursor-pointer"
              color='#FF0420'
            />
            {active === "home" && (
              <div className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-red-500" />
            )}
          </Link>
          <Menu 
            className="w-6 h-6 cursor-pointer"
           color='#FFA8A8'
            onClick={() => handleClick("todo", "Tasks Coming Soon")}
          />
        </nav>
      </footer>
    </>
  )
}