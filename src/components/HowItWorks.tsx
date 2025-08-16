import React from 'react';
import { UserCheck, Bot, Cloud, UserCheck2, Pill, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Villager Visits Robot",
      description: "Community member approaches the Village Health Robot",
      color: "primary"
    },
    {
      icon: Bot,
      title: "Vitals Checked",
      description: "Robot conducts health screening and vital measurements",
      color: "secondary"
    },
    {
      icon: Cloud,
      title: "AI Cloud Analysis",
      description: "Data processed by AI for diagnosis and recommendations",
      color: "accent"
    },
    {
      icon: UserCheck2,
      title: "Remote Doctor",
      description: "Healthcare professional reviews and provides consultation",
      color: "primary"
    },
    {
      icon: Pill,
      title: "Prescription Given",
      description: "Treatment plan and medication prescribed instantly",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless 5-step process bringing healthcare to your doorstep
          </p>
        </div>

        <div className="relative">
          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`icon-${step.color} flex-shrink-0`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 mt-16 w-0.5 h-8 bg-border"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop: Horizontal flow */}
          <div className="hidden md:flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <div className="text-center max-w-xs">
                    <div className={`icon-${step.color} mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                      <Icon />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex items-center">
                      <ArrowRight className="h-8 w-8 text-primary mx-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;