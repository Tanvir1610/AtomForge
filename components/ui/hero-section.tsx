'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingIcons = [
    { icon: Sparkles, delay: 0, x: '10%', y: '20%' },
    { icon: Zap, delay: 1, x: '85%', y: '15%' },
    { icon: Shield, delay: 2, x: '15%', y: '80%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-darkBlue via-deepPurple to-darkBlue" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Mouse follow gradient */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            pointerEvents: 'none',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-electric/30"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-electric/30 mb-8">
            <Sparkles className="w-4 h-4 text-electric mr-2" />
            <span className="text-sm text-electric">Next-Gen DeFi Protocol</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">Revolutionizing</span>
          <br />
          <span className="text-white">Decentralized Finance</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the future of DeFi with our cutting-edge protocol that combines 
          <span className="text-neon"> lightning-fast </span>
          transactions with 
          <span className="text-electric"> unparalleled security</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-electric rounded-xl font-semibold text-darkBlue overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Launch App
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 glass-blue rounded-xl font-semibold text-electric border border-electric/50 hover:bg-electric/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '$2.4B+', label: 'Total Value Locked' },
            { value: '150K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.2, type: 'spring' }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-electric rounded-full mt-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;