import React from 'react';
import { Server, Brain, Wifi, Shield } from 'lucide-react';

const TechnologyBackbone = () => {
  const techStack = [
    {
      icon: Server,
      title: "Hardware",
      description: "Robust medical devices and Village Health Robots designed for rural environments",
      features: ["Solar-powered operation", "Dust & weather resistant", "Medical-grade sensors"]
    },
    {
      icon: Brain,
      title: "Software", 
      description: "AI-powered diagnostic engine with rural disease specialization",
      features: ["Machine learning algorithms", "Local language support", "Offline capabilities"]
    },
    {
      icon: Wifi,
      title: "Connectivity",
      description: "Multi-channel communication ensuring reliable access",
      features: ["Satellite connectivity", "2G/3G/4G networks", "Offline-first design"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "End-to-end encryption and privacy protection for all health data",
      features: ["HIPAA compliance", "Data encryption", "Consent-based access"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Backbone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on a foundation of robust, scalable, and secure technology designed for rural healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="card-feature text-center group">
                <div className={`icon-${index % 2 === 0 ? 'primary' : 'secondary'} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <p className="text-muted-foreground mb-4">{tech.description}</p>
                <ul className="space-y-2 text-sm">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Visual Connection */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-card px-6 py-3 rounded-full border border-border shadow-lg">
              <span className="text-sm font-medium text-muted-foreground">Seamlessly Connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyBackbone;