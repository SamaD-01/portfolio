"use client";
import Image from 'next/image';
import React from 'react';
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import cup from "../assets/cup.png";
import finance from "../assets/finance.png";
import download from "../assets/Download Animated 3D Icon.gif";

const About = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/samad-cv.pdf';
        link.download = 'samad-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div id='about' className='max-w-[1200px] mx-auto pt-4'>
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>
      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="md:col-span-5 relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
                <Image 
                    src={pc}
                    alt='pc'
                    className='w-auto h-[130px]'
                />
                <div className="flex flex-col mt-4">
                    <h2 className='text-2xl font-bold text-white/80'>Right Now</h2>
                    <p className='text-lg text-white/70 mt-2'>Im constantly exploring new areas of technology, including AI, blockchain, IOT, MR, and robotics.</p>
                </div>
            </div>
        </div>

        <div className="md:col-span-3 relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>   
            <div className="flex flex-row p-6">
                <Image 
                    src={book}
                    alt='book'
                    className='w-auto h-[130px]'
                />
                <div className="flex flex-col mt-4">
                    <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                    <p className='text-lg text-white/70 mt-2'>I am Actually finishing my last year in web dev licence pro.</p>
                </div>
            </div>
        </div>

        <div className="md:col-span-3 relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
                <Image 
                    src={cup}
                    alt='cup'
                    className='w-auto h-[130px]'
                />
                <div className="flex flex-col mt-4">
                    <h2 className='text-2xl font-bold text-white/80'>Trigger</h2>
                    <p className='text-lg text-white/70 mt-2'>A good cup of coffee/tea</p>
                </div>
            </div>
        </div>

        <div className="md:col-span-5 relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
                <Image 
                    src={finance}
                    alt='finance'
                    className='w-auto h-[130px]'
                />
                <div className="flex flex-col mt-4">
                    <h2 className='text-2xl font-bold text-white/80'>Also</h2>
                    <p className='text-lg text-white/70 mt-2'>Involved in entrepreneurship. Whether its collaborating on a startup or creating designs that inspire, Im dedicated to delivering impactful solutions.</p>
                </div>
            </div>
        </div>
      </div>


      <div className="w-52 mx-auto my-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden cursor-pointer" onClick={handleDownload}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>                
                <div className="text-center p-3 flex justify-center items-center gap-1">
                    <h2 className='text-2xl font-bold text-white/80'>Download my CV</h2>
                    <Image
                        src={download}
                        alt='download'
                        className='w-auto h-[50px]'
                    />
                </div>
        </div>
    </div>
  )
}

export default About
