'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Circle, Rocket, Target, Zap, Globe } from 'lucide-react';

const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation & Launch',
      description: 'Core protocol development, security audits, and mainnet launch with basic features.',
      status: 'completed',
      icon: CheckCircle,
      features: ['Smart Contract Deployment', 'Security Audit', 'Basic Staking', 'Community Building'],
    },
    {
      quarter: 'Q2 2024',
      title: 'DeFi Integration',
      description: 'Advanced DeFi features including yield farming, liquidity mining, and governance.',
      status: 'completed',
      icon: CheckCircle,
      features: ['Yield Farming', 'Governance Token', 'DEX Integration', 'Mobile App Beta'],
    },
    {
      quarter: 'Q3 2024',
      title: 'Scale & Optimize',
      description: 'Performance optimizations, cross-chain bridges, and institutional features.',
      status: 'current',
      icon: Rocket,
      features: ['Cross-chain Bridges', 'Institution Support', 'Advanced Analytics', 'API Launch'],
    },
    {
      quarter: 'Q4 2024',
      title: 'Global Expansion',
      description: 'Multi-chain support, advanced trading features, and global partnerships.',
      status: 'upcoming',
      icon: Target,
      features: ['Multi-chain Support', 'Advanced Trading', 'Global Partnerships', 'Compliance'],
    },
    {
      quarter: 'Q1 2025',
      title: 'Innovation Layer',
      description: 'AI-powered features, automated strategies, and next-gen DeFi innovations.',
      status: 'upcoming',
      icon: Zap,
      features: ['AI Integration', 'Auto Strategies', 'DeFi 3.0 Features', 'Enterprise Solutions'],
    },
    {
      quarter: 'Q2 2025',
      title: 'Ecosystem Maturity',
      description: 'Complete ecosystem with advanced features and global accessibility.',
      status: 'upcoming',
      icon: Globe,
      features: ['Global Launch', 'Advanced Features', 'Ecosystem Partners', 'Full Decentralization'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-neon border-neon bg-neon/10';
      case 'current':
        return 'text-electric border-electric bg-electric/10 pulse-glow';
      default:
        return 'text-foreground/50 border-foreground/30 bg-foreground/5';
    }
  };

  const getConnectorColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-neon';
      case 'current':
        return 'bg-electric';
      default:
        return 'bg-foreground/30';
    }
  };

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-electric/30 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-electric/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Development Roadmap</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our journey towards building the most advanced DeFi ecosystem
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon via-electric to-foreground/30 rounded-full" />

            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-electric/30 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <item.icon className={`w-6 h-6 mr-3 ${getStatusColor(item.status).split(' ')[0]}`} />
                      <span className="text-sm font-semibold text-electric">{item.quarter}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-foreground/70 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-foreground/60">
                          <div className="w-1.5 h-1.5 bg-electric rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${getStatusColor(item.status)}`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              <div className="flex flex-col items-center mr-4">
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 ${getStatusColor(item.status)}`}
                  whileHover={{ scale: 1.2 }}
                />
                {index < roadmapItems.length - 1 && (
                  <div className={`w-0.5 h-20 ${getConnectorColor(item.status)} mt-2`} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  className="glass rounded-xl p-6 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    <item.icon className={`w-5 h-5 mr-2 ${getStatusColor(item.status).split(' ')[0]}`} />
                    <span className="text-sm font-semibold text-electric">{item.quarter}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3">{item.description}</p>
                  <div className="space-y-1">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-foreground/60">
                        <div className="w-1 h-1 bg-electric rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;