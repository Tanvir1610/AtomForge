'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: DollarSign,
      title: 'Total Value Locked',
      value: 2400000000,
      suffix: '+',
      prefix: '$',
      format: 'currency',
      gradient: 'from-neon to-electric',
    },
    {
      icon: Users,
      title: 'Active Users',
      value: 150000,
      suffix: '+',
      prefix: '',
      format: 'number',
      gradient: 'from-electric to-purple',
    },
    {
      icon: TrendingUp,
      title: 'Average APY',
      value: 15.4,
      suffix: '%',
      prefix: '',
      format: 'decimal',
      gradient: 'from-purple to-neon',
    },
    {
      icon: Globe,
      title: 'Countries Supported',
      value: 120,
      suffix: '+',
      prefix: '',
      format: 'number',
      gradient: 'from-neon to-purple',
    },
  ];

  const AnimatedNumber = ({ value, format, isVisible }: { value: number, format: string, isVisible: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = stepValue * currentStep;
        
        if (currentStep >= steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(newValue);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value, isVisible]);

    const formatNumber = (num: number) => {
      if (format === 'currency') {
        if (num >= 1000000000) {
          return `${(num / 1000000000).toFixed(1)}B`;
        } else if (num >= 1000000) {
          return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
          return `${(num / 1000).toFixed(1)}K`;
        }
        return num.toLocaleString();
      } else if (format === 'decimal') {
        return num.toFixed(1);
      } else {
        if (num >= 1000000) {
          return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
          return `${(num / 1000).toFixed(0)}K`;
        }
        return Math.floor(num).toLocaleString();
      }
    };

    return <span>{formatNumber(displayValue)}</span>;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon/3 rounded-full blur-3xl" />
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
            <span className="text-gradient">Protocol Statistics</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Real-time metrics showcasing our platform's growth and adoption
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-8 text-center border border-white/10 group-hover:border-electric/30 transition-all duration-500 relative overflow-hidden">
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${stat.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-darkBlue" />
                </motion.div>

                {/* Value */}
                <motion.div
                  className={`text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.prefix}
                  <AnimatedNumber 
                    value={stat.value} 
                    format={stat.format}
                    isVisible={isInView}
                  />
                  {stat.suffix}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground/80 group-hover:text-white transition-colors duration-300">
                  {stat.title}
                </h3>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          className="mt-20 glass rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Transactions', value: '2.1M+' },
              { label: 'Protocols', value: '45+' },
              { label: 'Security Score', value: '99.9%' },
              { label: 'Uptime', value: '99.99%' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl md:text-2xl font-bold text-electric mb-2">
                  {metric.value}
                </h4>
                <p className="text-foreground/60 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;