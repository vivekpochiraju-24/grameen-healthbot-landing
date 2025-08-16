import React from 'react';
import { Phone, Thermometer, Heart, Activity, Baby, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OneNumberAccess = () => {
  const ivrOptions = [
    {
      number: "1",
      icon: Thermometer,
      title: "Fever / Cold",
      description: "Common symptoms and basic care"
    },
    {
      number: "2", 
      icon: Activity,
      title: "Body Pains / Weakness",
      description: "Muscular and general wellness"
    },
    {
      number: "3",
      icon: Heart,
      title: "Heart / Chest Issues",
      description: "Cardiovascular health concerns"
    },
    {
      number: "4",
      icon: Stethoscope,
      title: "Stomach / Gas",
      description: "Digestive health problems"
    },
    {
      number: "5",
      icon: Baby,
      title: "Women & Child Health",
      description: "Maternal and pediatric care"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full text-4xl font-bold mb-4 shadow-lg">
              <Phone />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Dial 1455
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              One number for all your healthcare needs. Works on keypad & smartphones with multilingual voice menus.
            </p>
            <Button asChild className="btn-hero text-2xl py-6 px-12">
              <a href="tel:1455" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call Now: 1455
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/20">
          <h3 className="text-2xl font-bold text-center mb-8">IVR Menu Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ivrOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.number} className="flex items-start space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {option.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{option.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Available in multiple local languages with voice guidance for keypad phones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneNumberAccess;