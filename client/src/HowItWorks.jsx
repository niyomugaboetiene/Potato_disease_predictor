import React from 'react';
import { FaLock, FaFile, FaFolder, FaKey } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="relative w-full min-h-screen bg-slate-100overflow-hidden">
        <div className='w-full mx-auto max-w-7xl mt-12'>
            <h1 className='text-center font-bold text-slate-800 text-4xl'>How It Works</h1>  
            <p className='text-center mt-3 text-2xl text-slate-800 font-bold'>Simple Steps, Powerful Results</p>
            <p className='text-center mt-3 text-slate-500'>Get your potato leaf and get result in just few clicks</p>

            <div className='mt-5 mx-auto max-w-4xl flex justify-between'>
                <div>
                    <div className='bg-green-600 rounded-full text-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge preview-icon"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                    </div>
                    <div className='text-blue-500 mt-3'>
                          <h1>Boost your yeild</h1>
                          <p>Keep your crops healthy</p>
                     </div>
                </div>
                
                <div>
                    <div className='bg-green-600 rounded-full text-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge preview-icon"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                    </div>
                    <div className='text-blue-500 mt-3'>
                          <h1>Boost your yeild</h1>
                          <p>Keep your crops healthy</p>
                     </div>
                </div>
                
                <div>
                    <div className='bg-green-600 rounded-full text-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge preview-icon"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                    </div>
                    <div className='text-blue-500 mt-3'>
                          <h1>Boost your yeild</h1>
                          <p>Keep your crops healthy</p>
                     </div>
                </div>
            </div>
        </div>      
    </div>
  );
}