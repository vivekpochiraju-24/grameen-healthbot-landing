import React from 'react';
import { MapPin, Clock, HeartHandshake, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Impact = () => {
  const beforeItems = [
    { icon: MapPin, text: "Long travel to healthcare", color: "destructive" },
    { icon: Clock, text: "Late diagnosis", color: "destructive" },
    { icon: HeartHandshake, text: "High mortality rates", color: "destructive" }
  ];

  const afterItems = [
    { icon: TrendingUp, text: "Instant care access", color: "primary" },
    { icon: CheckCircle, text: "Early detection", color: "primary" },
    { icon: Users, text: "Healthy families", color: "primary" }
  ];

  const stats = [
    { value: "60%", label: "Less Travel Required", icon: MapPin },
    { value: "40%", label: "Earlier Maternal Risk Detection", icon: HeartHandshake },
    { value: "1:500", label: "Doctor to Villager Ratio Improvement", icon: Users }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Rural Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the dramatic improvement in healthcare accessibility and outcomes
          </p>
        </div>

        {/* Before vs After */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Before */}
          <div className="card-impact">
            <h3 className="text-2xl font-bold text-center mb-8 text-destructive">Before</h3>
            <div className="space-y-6">
              {beforeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <Icon className="h-8 w-8 text-destructive" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* After */}
          <div className="card-impact">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">After</h3>
            <div className="space-y-6">
              {afterItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/20">
          <h3 className="text-2xl font-bold text-center mb-8">Measurable Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="icon-primary mx-auto mb-4">
                    <Icon />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;