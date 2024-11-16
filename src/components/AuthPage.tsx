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
      <div className="flex min-h-screen bg-black">
      <div className="w-full max-w-md mx-auto bg-black text-white rounded-3xl flex flex-col gap-4 overflow-hidden">
        <div className="p-1 pt-7 ">
         
            <h2 className="text-xl text-center text-white text-[28px] font-bold font-zk">Games</h2>
         
        </div>
        <div className='flex   justify-center'>
        <div className='bg-white w-[316px] flex items-center justify-center rounded-[20px] h-[316px]'>
          <Image
          className='p-1 rounded-[20px]'
          src='/gameimg/crashy.png'
          alt=''
          width={316}
          height={316}
          />
        </div>
        </div>
        <div className='w-full flex items-center justify-center'>
        <button onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                       className='bg-[#FF0420] mt-2 w-[305px] text-center font-zk text-[30px] flex items-center justify-center font-bold rounded-[10px] text-white'>PLAY</button>
        </div>
        <div className='w-full flex items-center justify-center mt-3'>
        <div className='w-[312px] '>
          <h1 className='font-bold font-zk text-[20px] text-[#FF0420]'>Crashy Chase</h1>
          <div className='font-medium text-[12px] font-zk'>About : In this thrilling 3D game, players control a car speeding through a plain landscape, pursued by relentless enemy vehicles. The challenge intensifies as players must skillfully dodge oncoming cars, swerve around trees, and stay alert for sudden bombs dropped from the sky.</div>
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
