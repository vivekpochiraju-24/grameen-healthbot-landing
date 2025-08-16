import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Play, Bot, Smartphone, Cloud, Users } from 'lucide-react';
import heroImage from '@/assets/hero-village-robot.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 px-4 py-16 pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Healthcare at every{' '}
                <span className="text-primary">doorstep</span>,{' '}
                <span className="text-secondary">dignity</span> in every life.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Robot-assisted rural care + AI + IVR (1455) in local languages.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <a href="tel:1455" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Dial 1455
                </a>
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                <Play className="h-5 w-5 mr-2" />
                Watch How It Works
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="icon-primary">
                  <Bot />
                </div>
                <span className="text-sm font-medium text-center">Village Robot</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="icon-secondary">
                  <Smartphone />
                </div>
                <span className="text-sm font-medium text-center">Mobile App</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="icon-accent">
                  <Cloud />
                </div>
                <span className="text-sm font-medium text-center">AI Cloud</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-card/50 border border-border/30">
                <div className="icon-primary">
                  <Users />
                </div>
                <span className="text-sm font-medium text-center">Community Care</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Village Health Robot helping rural community members access healthcare"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg bounce-in">
              📞 Call 1455
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-lg bounce-in" style={{animationDelay: '0.2s'}}>
              🤖 AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;