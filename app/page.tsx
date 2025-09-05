'use client';

import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import FeaturesSection from '@/components/ui/features-section';
import RoadmapSection from '@/components/ui/roadmap-section';
import StatsSection from '@/components/ui/stats-section';
import PartnersSection from '@/components/ui/partners-section';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <RoadmapSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}