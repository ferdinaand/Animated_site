"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioPage = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({ container: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <motion.div lassName='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className=' h-{600vh}' ref={ref}>PortfolioPage</div>
    </motion.div>
  );
}

export default PortfolioPage