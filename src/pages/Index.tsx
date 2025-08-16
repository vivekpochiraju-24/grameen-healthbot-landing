import React, { useState } from 'react';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={isLoggedIn}
        onLogin={openLoginModal}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={handleLogin}
      />

      {isLoggedIn ? (
        <Dashboard user={currentUser} />
      ) : (
        <>
          <div id="home">
            <Hero />
          </div>
          <WhatSetsUsApart />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <OneNumberAccess />
          <div id="impact">
            <Impact />
          </div>
          <div id="technology">
            <TechnologyBackbone />
          </div>
          <Roadmap />
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;