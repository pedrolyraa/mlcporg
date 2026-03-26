import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none z-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#050505]">
      {/* 
        Gradientes radiais suaves animados. 
        Otimizado: Blur e mix-blend reduzidos no mobile para melhorar framerate e bateria.
      */}
      <motion.div
        animate={{
          x: ['-5%', '15%', '-5%'],
          y: ['-5%', '10%', '-5%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-[#C62828] rounded-full blur-3xl md:blur-[180px] opacity-20 md:mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-15%', '10%'],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-[#A71D1D] rounded-full blur-3xl md:blur-[160px] opacity-[0.15] md:mix-blend-screen"
      />

      <motion.div
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['15%', '-10%', '15%'],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[20%] left-[30%] w-[60%] h-[60%] bg-[#8E0000] rounded-full blur-3xl md:blur-[150px] opacity-[0.18] md:mix-blend-screen"
      />

      {/* Ruído sutil orgânico (grain) otimizado */}
      <div 
        className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default React.memo(AnimatedBackground);
