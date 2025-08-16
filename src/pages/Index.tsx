import React from 'react';
import Hero from '@/components/Hero';
import WhatSetsUsApart from '@/components/WhatSetsUsApart';
import HowItWorks from '@/components/HowItWorks';
import OneNumberAccess from '@/components/OneNumberAccess';
import Impact from '@/components/Impact';
import TechnologyBackbone from '@/components/TechnologyBackbone';
import Roadmap from '@/components/Roadmap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatSetsUsApart />
      <HowItWorks />
      <OneNumberAccess />
      <Impact />
      <TechnologyBackbone />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;