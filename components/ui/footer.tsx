'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Twitter, Github, Linkedin, Disc as Discord, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    protocol: [
      { name: 'How it Works', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Tokenomics', href: '#' },
      { name: 'Governance', href: '#' },
    ],
    developers: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'SDKs', href: '#' },
      { name: 'GitHub', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Discord, href: '#', name: 'Discord' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-darkBlue to-deepPurple border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-gradient-electric rounded-xl flex items-center justify-center glow">
                  <Zap className="w-6 h-6 text-darkBlue" />
                </div>
                <span className="text-2xl font-bold text-gradient">AtomForge</span>
              </motion.div>

              <motion.p
                className="text-foreground/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Building the future of decentralized finance with cutting-edge technology, 
                unparalleled security, and community-driven innovation.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center text-foreground/60">
                  <MapPin className="w-5 h-5 mr-3 text-electric" />
                  <span>San Francisco, CA & Remote</span>
                </div>
                <div className="flex items-center text-foreground/60">
                  <Mail className="w-5 h-5 mr-3 text-electric" />
                  <span>hello@atomforge.finance</span>
                </div>
              </motion.div>
            </div>

            {/* Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold mb-4 capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <motion.a
                            href={link.href}
                            className="text-foreground/60 hover:text-electric transition-colors duration-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.name}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            className="mt-16 p-8 glass rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-foreground/70">
                  Get the latest updates, announcements, and insights delivered to your inbox.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-electric focus:outline-none transition-colors duration-300 text-white placeholder:text-foreground/50"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-electric rounded-lg font-semibold text-darkBlue hover:shadow-lg transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      'Subscribed!'
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-foreground/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 AtomForge. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground/60 hover:text-electric transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-foreground/60 hover:text-electric hover:border-electric/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export default Footer