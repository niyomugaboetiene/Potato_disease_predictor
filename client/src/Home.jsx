import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiFastForward, FiUpload} from "react-icons/fi"
import logo from "./assets/logo.jpeg"
import SideImage from "./assets/sample-background-image.jpg";

export default function Header() {
  const [ActiveLink, setActiveLink] = useState("/");

  return (
    <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">

      <div className="bg-[#0B1F2A] relative z-10 w-full p-3">
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
                          onClick={() => setActiveLink("/")}
                          className={
                            `text-white text-lg pb-1
                             border-b-2 hover:text-emerald-400
                              transition-colors cursor-pointer 
                              ${ActiveLink === "/" ? "border-emerald-400 text-emerald-400" : "border-transparent text-white"}`}
                    >
                        Home
                    </Link>
                   <Link
                          onClick={() => setActiveLink("/scanner")}
                          className={
                            `text-white text-lg pb-1
                             border-b-2 hover:text-emerald-400
                              transition-colors cursor-pointer 
                              ${ActiveLink === "/scanner" ? "border-emerald-400 text-emerald-400" : "border-transparent text-white"}`}
                    >
                        Scanner
                    </Link>
                    
                    <Link
                          onClick={() => setActiveLink("/diesease")}
                          className={
                            `text-white text-lg pb-1
                             border-b-2 hover:text-emerald-400
                              transition-colors cursor-pointer 
                              ${ActiveLink === "/diesease" ? "border-emerald-400 text-emerald-400" : "border-transparent text-white"}`}
                    >
                        Diseases
                    </Link>
                    
                    <Link
                          onClick={() => setActiveLink("/about")}
                          className={
                            `text-white text-lg pb-1
                             border-b-2 hover:text-emerald-400
                              transition-colors cursor-pointer 
                              ${ActiveLink === "/about" ? "border-emerald-400 text-emerald-400" : "border-transparent text-white"}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
            <div>
              <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold rounded-lg  py-3 px-6">
                  Get Started
             </button>
            </div>
        </div>
      </div>

        <div className="flex justify-between mx-auto max-w-7xl w-full">
        <div className="mt-20 ms-10 w-1/2 shrink-0">
          <div className="bg-emerald-200 backdrop-blur-md px-4 py-1 w-fit rounded-full ms-5">
            <p className="text-emerald-700 font-bold text-center">
              AI POWERED AGRICULTURE
            </p>
          </div>

          <div className="ms-5 mt-4">
            <h1 className="text-white font-bold text-7xl">
              Healthy Potatoes
              <span className="text-emerald-400">
                <br /> for a Brighter <br /> Tomorrow
              </span>
            </h1>

            <p className="text-white font-light mt-10 text-xl max-w-xl">
              TeraScan AI helps you detect potato diseases using advanced AI.
              Upload a leaf image and get instant results, so you can protect
              your crops and increase your harvest.
            </p>
            <div className='mt-12 flex space-x-4'>
              <button className='text-lg text-white font-bold py-3 px-6 bg-emerald-400 rounded-lg hover:bg-emerald-500 transition-colors inline-flex'><FiUpload className='me-3 mt-1'/>Open Potato leaf</button>
              <button className='text-white font-bold py-3 px-6 bg-[#0B1F2A] border-2 border-slate-800 text-lg rounded-lg transition-colors'>Learn More</button>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <img
            src={SideImage}
            alt="Potato plant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className='bg-[#0B1F2A] p-5 max-w-7xl mx-auto px-8'>
        <div>
          <div className='flex '>
            <div className='bg-emerald-600 rounded-full p-3 py-6 px-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-white font-bold' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge preview-icon"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <div className='text-slate-100'>
                 <h1>Fast and Accurate</h1>
                 <p>Detect disease in second</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}