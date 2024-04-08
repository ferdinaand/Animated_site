"use client";
import { motion } from 'framer-motion';
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image */}
        <div className="h-1/2  lg:h-full lg:w-1/2 relative   ">
          <Image src="/myHero2.png" alt="" fill className=" object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2  lg:h-full lg:w-1/2  flex flex-col gap-10 items-center justify-center  ">
          {/* TITLE */}
          <h1 className=" md:text-6xl text-4xl font-bold text-white">Crafting Digital Experiences, one Dart at a Time.</h1>
          {/* DESC */}
          <p className=" md:text-xl text-white">Welcome to my digital space, where innovations and crativity converge.
            with a keen eye for aesthetics, attention to detail and mastery of code,
            my portfolio showcases a diverse collection of projects
            that reflect my committment to excellence</p>
          {/* BUTTONS */}

          <div className="w-full flex gap-4">
            <button className=" p-4 rounded-lg ring-1 ring-white bg-black hover:text-black  hover:bg-white text-white">View My Work</button>
            <button className=" p-4 rounded-lg ring-1 ring-white text-white">Contact Me</button>

          </div>
        </div>
      </div>
    </motion.div>
  )
    ;
};

export default Homepage;
