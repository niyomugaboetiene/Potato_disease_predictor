import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from "./assets/image.png"
import { FaFire, FaLock, FaLink, FaDesktop } from "react-icons/fa";
import logo from "./assets/logo.jpeg"

export default function Header() {
  const [ActiveLink, setActiveLink] = useState("/");

  return (
    <div className="relative w-full min-h-screen bg-[#08080e] overflow-hidden">

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
                    <Link
                          className="text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer"
                          onClick={() => setActiveLink("/")}
                    >
                        Home
                    </Link>
                    <Link 
                        className="text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                        Scanner
                    </Link>
                    <Link 
                        className="text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                        Diseases
                    </Link>
                    <Link 
                        className="text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                        About
                    </Link>
                </nav>
            </div>
            <div>
              <button className="bg-green-400 hover:bg-green-500 text-black font-bold rounded-lg  py-3 px-6">
                  Get Started
             </button>
            </div>
        </div>
      </div>
    </div>
  );
}