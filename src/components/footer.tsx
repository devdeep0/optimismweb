"use client";
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import { BarChart3, Home, Menu } from 'lucide-react'
import Link from "next/link";
import { motion } from "framer-motion"
import { div } from "framer-motion/client";
function Footer() {
  const [Active, setActive] = useState("home");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonMessage, setComingSoonMessage] = useState("");
  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 3000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [showComingSoon]);

  return (
    <>
      {showComingSoon && (
  <motion.div 
    animate={{ y: -20 }} 
    className="absolute bottom-20 left-0 right-0 mx-auto flex items-center justify-center z-20"
  >
    <div className="font-bold text-[15px] bg-black border-2 border-white text-white rounded-[10px] p-2">
      {comingSoonMessage}
    </div>
  </motion.div>
)}

      <footer className="bg-[#FF0000] text-white rounded-full p-4 backdrop-blur-sm h-20 max-w-[calc(100vw-2rem)] mb-4 fixed bottom-0 left-4 right-4 ">
        <div className="h-full w-full flex gap-10 items-center justify-center">
          <div>
            {/* Update onClick to show the "Coming Soon" text */}
            <FaChartSimple
              className="opacity-100"
              color="#FFA8A8"
              size={30}
              onClick={() => {
                setShowComingSoon(true);
                setComingSoonMessage("Leaderboard Coming Soon");
                setActive("chart");
              }}
            />
          </div>
          <Home size={30} color='white'/>
          <Menu className="opacity-100" size={30} color="#FFA8A8"
           onClick={() => {
            setShowComingSoon(true);
            setComingSoonMessage("Tasks Coming Soon");
            setActive("todo");
          }} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
