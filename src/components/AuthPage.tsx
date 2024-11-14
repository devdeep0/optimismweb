"use client"
import React, { useState } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from 'react';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}
const GameSelectionUI : React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {

  const [activeButton, setActiveButton] = useState('');

  return (
    <>
      <Header/>
      <div className="flex min-h-screen bg-[#FFF3F3]">
      <div className="w-full max-w-md mx-auto bg-[#FFF3F3] rounded-3xl overflow-hidden">
        <div className="p-4 space-y-6">
          {/* Header */}
         

          {/* Welcome Text */}
          <div className="space-y-1">
            <h1 className="text-[#FF0000] text-2xl font-bold leading-tight">
              Welcome to Super Chain Odyssey telegram bot.
            </h1>
          </div>

          {/* City Illustration */}
          <div className="relative w-full aspect-[2/1] bg-[#FF0000] rounded-xl overflow-hidden">
            <Image
              src="/slide/optimism-cityOP.png"
              alt="Isometric city illustration"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Games Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Games</h2>
            <div className="space-y-3">
              {/* Game Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Image
                    src="/gameimg/crashy.png"
                    alt="Crashy Chase"
                    width={58}
                    height={58}
                    className="rounded-xl"
                  />
                                    <span className="font-medium text-[#FF0000] text-[16px]">Crashy Chase</span>
                </div>
                <button 
                className='bg-[#FF0000] text-white hover:bg-[#FF0000]/90 rounded-full px-8 py-1'
                      onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                      
                      >
                  Play
                </button>
              </div>

              {/* Coming Soon Items */}
              <div className="text-gray-500">More Games Coming Soon!</div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between opacity-40">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="w-16 h-8 bg-gray-200 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GameSelectionUI;





 {/* <div className="flex flex-col items-center justify-center h-full ">
      <div className="p-8 bg-transparent rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">Choose a game to continue:</p>
        <div className="space-y-4">
          <button 
            onClick={() => onGameSelect("unity")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity" ? "Redirecting..." : "Base Game"}
          </button>
          <button 
            onClick={() => onGameSelect("unity2")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity2" ? "Redirecting..." : "Continue to Unity Game 2"}
          </button>
        </div>
      </div>
    </div> */}
