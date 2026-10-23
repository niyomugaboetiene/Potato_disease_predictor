import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import LateBright from "./assets/Late_bright.jpg"
import EaliryBright from "./assets/ealiry.jpeg"
import Healthy from "./assets/healithy.jpg";
import Bg from "./assets/bg.png"
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className="relative w-full min-h-screen bg-slate-100overflow-hidden">
        <div className='w-full mx-auto max-w-7xl mt-12'>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0}}
             viewport={{ once: true,  amount: 0.2 }}
             transition={{ duration: 1, ease: "easeInOut"}}
           >
              <h1 className='text-center font-bold text-slate-800 text-4xl'>How It Works</h1>  
              <p className='text-center mt-3 text-2xl text-slate-800 font-bold'>Simple Steps, Powerful Results</p>
              <p className='text-center mt-3 text-slate-500'>Get your potato leaf and get result in just few clicks</p>

           </motion.div>
            <motion.div 
               className='mt-5 mx-auto max-w-4xl flex justify-between'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.3}}
               transition={{ duration: 2, ease: "easeInOut"}}
            >
                <div >
                    <div className='bg-green-600 rounded-full flex items-center w-25 h-25 px-10 py-10 text-slate-100 ms-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload preview-icon"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>                    </div>
                    <div className='text-slate-800 mt-3'>
                          <h1 className='ms-3 font-bold text-xl'>1. Upload Image</h1>
                          <p className='text-slate-400 mt-3'>Select or drag and drop <br /><span className='ms-11'>a leaf image</span></p>
                     </div>
                     <div className='relative bottom-35 right-0 left-55'>
                        <FiArrowRight className='text-4xl text-slate-400'/>
                     </div>
                </div>
                
                <div >
                    <div className='bg-green-600 rounded-full flex items-center w-25 h-25 px-10 py-10 text-slate-100 ms-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain preview-icon"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4"/><path d="M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294"/><path d="M17.996 5.125a4 4 0 012.526 5.77"/><path d="M18 18a4 4 0 002-7.465"/><path d="M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517"/><path d="M6 18a4 4 0 01-2-7.465"/><path d="M6.004 5.125a4 4 0 00-2.526 5.77"/></svg>                    </div>
                    <div className='text-slate-800 mt-3'>
                          <h1 className='ms-3 font-bold text-xl'>2. AI Analysis</h1>
                          <p className='text-slate-400 mt-3'>Our model processes <br /><span className=''>the image using deep learning</span></p>
                     </div>
                    <div className='relative bottom-35 right-0 left-60'>
                        <FiArrowRight className='text-4xl text-slate-400'/>
                     </div>
                </div>
                
                <div>
                    <div className='bg-green-600 rounded-full flex items-center w-25 h-25 px-10 py-10 text-slate-100 ms-10 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <div className='text-slate-800 mt-3'>
                          <h1 className='ms-3 font-bold text-xl'>3. Get Result</h1>
                          <p className='text-slate-400 mt-3'>See the desease name <br /><span>Confidence score and advice</span></p>
                     </div>
                </div>
            </motion.div>

            <motion.div 
               className='mt-10'
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.3 }}
               transition={{ duration: 2, ease: "easeInOut"}}
               >
                   <h1 className='text-center font-bold text-slate-800 text-4xl'>Supported Diseases</h1>  
                   <p className='text-center mt-3 text-lg font-stretch-105% text-slate-400'>Know What You Are Dealing With</p>
                    <div className='mt-5 mx-auto max-w-7xl flex space-x-6'>
                    <div className='shadow-xl p-3 w-105 h-115'>
                          <div className='w-full h-70'>
                            <img src={EaliryBright} alt="Ealiry Bright Image" className='w-full h-full object-cover rounded-3xl' />
                          </div>
                          <div className='mt-3'>
                            <h1 className='text-slate-800 font-bold text-3xl'>Earily Bright</h1>
                            <h1 className='text-slate-500 text-2xl mt-2'>(Alternaria solani)</h1>
                            <p className='text-slate-500 text-xl mt-2 w-70'>Brown spots with concentric rings on older leaves</p>
                          </div>
                    </div>
                    
                    <div className='shadow-xl p-3 w-105 h-115'>
                          <div className='w-full h-70'>
                            <img src={LateBright} alt="Ealiry Bright Image" className='w-full h-full object-cover rounded-3xl' />
                          </div>
                          <div className='mt-3'>
                            <h1 className='text-slate-800 font-bold text-3xl'>Late Bright</h1>
                            <h1 className='text-slate-500 text-2xl mt-2'>(Phytophthora infestand)</h1>
                            <p className='text-slate-500 text-xl mt-2 w-70'>Large dark lesions often with white mold underneath</p>
                          </div>
                    </div>
                        
                    <div className='shadow-xl p-3 w-105 h-115'>
                          <div className='w-full h-70'>
                            <img src={Healthy} alt="Ealiry Bright Image" className='w-full h-full object-cover rounded-3xl' />
                          </div>
                          <div className='mt-3'>
                            <h1 className='text-slate-800 font-bold text-3xl'>Healthy</h1>
                            <h1 className='text-slate-500 text-2xl mt-2'>(No disease detected)</h1>
                            <p className='text-slate-500 text-xl mt-2 w-70'>Green, fresh leaves, with no viable spots</p>
                          </div>
                    </div>
                    </div>
            </motion.div>
        </div>  
        <div className='mt-12 max-w-400 mx-auto w-full mb-4'>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 2, ease: "easeInOut"}}
          >
               <img src={Bg} alt="Image" />
          </motion.div>
             <div className='absolute bottom-35 left-60'>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeInOut"}}
                 >
                    <h1 className='text-5xl text-white font-bold'>Support Sustainable Farming <br /> With AI Technology</h1>
                    <p className='text-white relative top-10 text-2xl'>TeraScan AI is built to help farmers make better decisions, <br /> reduce crop loss and acheive higher yeilds.</p>
                 </motion.div>
                  <motion.div className='relative top-20'>
                    <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold rounded-xl  py-5 px-12">Start Scanning Now</button>
                  </motion.div>
             </div>
         </div>    
    </div>
  );
}