"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";

const projects = [
  {
    title: "Trvlr",
    desc: " Trvlr project It's a website that organizes travel and sells travel products. The website will showcase services, include a booking system for travels, and have an e-commerce component for the store.",
    devstack: "Laravel REST API, MySQL, React",
    link: "#",
    git: "#",
    src: project1
  },{
    title: "Chatty",
    desc: "Chatty is a real-time chat application built with MERN Stack zustand JWT DaisyUI that allows users to chat with each other.",
    devstack: "MongoDB, Express, React, Node.js, Socket.io",
    link: "#",
    git: "#",
    src: project2
  },{
    title: "GlotSpot",
    desc: "GlotSpot is an AI-powered language learning app designed to help users master new languages through engaging, personalized, and interactive experiences.",
    devstack: "ReactJS, Firebase, MistralAI, TailwindCSS",
    link: "#",
    git: "#",
    src: project3
  },
];

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381A5F] py-18 ' id='portfolio'>
      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold pt-10'>Selected <span className='text-orange-400'>Projects</span></h1>
      <div className="px-6 max-w-[1200px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl'>{project.title}</h2>
              <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
              <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className='mr-6'>Link</a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className='h-[350px] w-[500px] object-cover border rounded border-gray-700'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
