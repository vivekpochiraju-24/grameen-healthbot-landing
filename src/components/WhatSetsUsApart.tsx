import React from 'react';
import { Bot, Smartphone, Wifi, Brain, Ambulance } from 'lucide-react';

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: Bot,
      title: "Village-Ready Robot",
      description: "Solar-ready, dust-proof medical kiosk designed for rural environments",
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Multilingual Voice App", 
      description: "Works on smart & keypad phones with voice navigation",
      color: "secondary"
    },
    {
      icon: Wifi,
      title: "Offline-First",
      description: "Works without internet, syncs data when connected",
      color: "accent"
    },
    {
      icon: Brain,
      title: "AI for Rural Diseases",
      description: "Specialized in TB, anemia, malnutrition detection",
      color: "primary"
    },
    {
      icon: Ambulance,
      title: "Emergency Automation",
      description: "Auto alerts to ambulance & Primary Health Center",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary healthcare technology designed specifically for rural communities
          </p>
        </div>

        {/* Pentagon Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-feature text-center group hover:scale-105 transition-all duration-300">
                  <div className={`icon-${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;