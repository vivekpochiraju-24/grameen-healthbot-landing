import React from 'react';
import { Users, Bus, Building, Map } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      icon: Users,
      title: "Pilot",
      subtitle: "Village Communities",
      description: "Initial deployment in select rural villages for testing and refinement",
      timeline: "Phase 1",
      status: "active"
    },
    {
      icon: Bus,
      title: "District",
      subtitle: "Regional Expansion", 
      description: "Scale across multiple districts based on pilot learnings",
      timeline: "Phase 2",
      status: "upcoming"
    },
    {
      icon: Building,
      title: "State",
      subtitle: "Government Integration",
      description: "Partnership with state health departments for wider deployment",
      timeline: "Phase 3", 
      status: "planned"
    },
    {
      icon: Map,
      title: "Nation",
      subtitle: "Pan-India Coverage",
      description: "Complete nationwide healthcare accessibility transformation",
      timeline: "Phase 4",
      status: "vision"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Systematic expansion from villages to nationwide healthcare transformation
          </p>
        </div>

        <div className="relative">
          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              <div className="space-y-12">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const statusColors = {
                    active: 'bg-primary text-primary-foreground',
                    upcoming: 'bg-secondary text-secondary-foreground', 
                    planned: 'bg-accent text-accent-foreground',
                    vision: 'bg-muted text-muted-foreground'
                  };
                  
                  return (
                    <div key={index} className="relative flex items-start space-x-6">
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${statusColors[phase.status]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="card-feature flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-primary">{phase.timeline}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{phase.subtitle}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-4 gap-8">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const statusColors = {
                    active: 'bg-primary text-primary-foreground shadow-primary/30',
                    upcoming: 'bg-secondary text-secondary-foreground shadow-secondary/30', 
                    planned: 'bg-accent text-accent-foreground shadow-accent/30',
                    vision: 'bg-muted text-muted-foreground shadow-muted/30'
                  };
                  
                  return (
                    <div key={index} className="text-center">
                      <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg ${statusColors[phase.status]}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="card-feature">
                        <div className="mb-2">
                          <span className="text-sm font-medium text-primary">{phase.timeline}</span>
                          <div className="text-sm text-muted-foreground">{phase.subtitle}</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;