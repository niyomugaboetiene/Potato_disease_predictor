import React from 'react';
import { Link } from 'react-router-dom';
import Image from "./assets/image.png"
import { FaFire, FaLock, FaLink, FaDesktop } from "react-icons/fa";
import logo from "./assets/logo.jpeg"

export default function Header() {
  return (
    <div className="relative w-full min-h-screen bg-[#08080e] overflow-hidden">
      
   {/* effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto px-8">
        
                <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-11 h-11 shrink-0 rounded-xl overflow-hidden
                                bg-slate-800 border border-emerald-500/30
                                shadow-lg shadow-emerald-500/10
                                transition-all duration-300
                                group-hover:border-emerald-400/70
                                group-hover:shadow-emerald-500/20">

                    <img
                    src={logo}
                    alt="TeraScan AI Logo"
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight
                                leading-none text-white">
                    TERA<span className="text-emerald-400">SCAN</span>
                    <span className="text-slate-300 ml-1.5">AI</span>
                    </h1>

                    <p className="text-[9px] sm:text-[10px] font-medium
                                uppercase tracking-[0.18em] text-emerald-300/80 mt-1.5">
                    Scan Smart. Grow Healthy.
                    </p>
                </div>
                </div>
            <div>
                <nav className="space-x-6 me-12 mt-2 flex items-center">
                    <Link className="font-bold text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer">About Us</Link>
                    <Link className="font-bold text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer">Solution</Link>
                    <Link className="font-bold text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer">Product</Link>
                    <button className="bg-gradient-to-r from-emerald-600 to-pink-600 text-white font-bold py-2 px-8 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300">
                        Login
                    </button>
                </nav>
            </div>
        </div>
      </div>
    </div>
  );
}