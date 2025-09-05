'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mock partner logos data
  const partners = [
    { name: 'ChainLink', logo: 'CL' },
    { name: 'Ethereum', logo: 'ETH' },
    { name: 'Polygon', logo: 'POLY' },
    { name: 'Avalanche', logo: 'AVAX' },
    { name: 'Binance', logo: 'BNB' },
    { name: 'Solana', logo: 'SOL' },
    { name: 'Cosmos', logo: 'ATOM' },
    { name: 'Polkadot', logo: 'DOT' },
    { name: 'Uniswap', logo: 'UNI' },
    { name: 'Aave', logo: 'AAVE' },
    { name: 'Compound', logo: 'COMP' },
    { name: 'Maker', logo: 'MKR' },
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-electric/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ecosystem Partners</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Collaborating with leading protocols and platforms to build the future of DeFi
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="glass rounded-xl p-6 w-full h-20 flex items-center justify-center border border-white/10 group-hover:border-electric/30 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Mock logo using text */}
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground/60 group-hover:text-electric transition-colors duration-300">
                    {partner.logo}
                  </div>
                  <div className="text-xs text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300 mt-1">
                    {partner.name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite scrolling partners marquee */}
        <motion.div
          className="relative overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass rounded-lg px-6 py-3 border border-white/10 hover:border-electric/30 transition-all duration-300"
              >
                <span className="text-foreground/60 hover:text-electric transition-colors duration-300 font-semibold whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Integration stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            {
              title: 'Protocol Integrations',
              value: '50+',
              description: 'Connected DeFi protocols',
              gradient: 'from-electric to-neon',
            },
            {
              title: 'Blockchain Networks',
              value: '12',
              description: 'Supported blockchain ecosystems',
              gradient: 'from-neon to-purple',
            },
            {
              title: 'API Connections',
              value: '100K+',
              description: 'Daily API calls processed',
              gradient: 'from-purple to-electric',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 text-center border border-white/10 hover:border-electric/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-foreground/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="glass-blue px-8 py-4 rounded-xl font-semibold text-electric border border-electric/50 hover:bg-electric/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;