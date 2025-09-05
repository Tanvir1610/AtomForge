'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  TrendingUp, 
  Users,
  Coins,
  BarChart3 
} from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Advanced cryptographic protocols protect your assets with bank-level security standards.',
      gradient: 'from-electric to-neon',
      delay: 0.1,
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute transactions in milliseconds with our optimized blockchain infrastructure.',
      gradient: 'from-neon to-purple',
      delay: 0.2,
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Borderless finance accessible 24/7 from anywhere in the world.',
      gradient: 'from-purple to-electric',
      delay: 0.3,
    },
    {
      icon: Lock,
      title: 'Non-Custodial',
      description: 'You maintain complete control of your private keys and digital assets.',
      gradient: 'from-electric to-purple',
      delay: 0.4,
    },
    {
      icon: TrendingUp,
      title: 'High Yield',
      description: 'Maximize returns with our optimized liquidity mining and staking protocols.',
      gradient: 'from-neon to-electric',
      delay: 0.5,
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Decentralized governance puts the power in the hands of token holders.',
      gradient: 'from-purple to-neon',
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">Cutting-Edge Features</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the next generation of DeFi with features designed for the modern investor
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-2xl p-8 h-full border border-white/10 hover:border-electric/30 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-darkBlue" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-electric transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional stats section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: Coins, value: '500+', label: 'Supported Tokens' },
            { icon: BarChart3, value: '15%', label: 'Average APY' },
            { icon: Users, value: '50K+', label: 'Community Members' },
            { icon: Shield, value: '99.99%', label: 'Security Score' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl p-6 border border-white/10">
                <stat.icon className="w-8 h-8 text-electric mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;