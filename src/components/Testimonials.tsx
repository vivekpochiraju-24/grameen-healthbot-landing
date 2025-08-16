import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Meera Devi",
      role: "Village Resident",
      location: "Bhojpur, Bihar", 
      quote: "पहले बीमार होने पर शहर जाना पड़ता था। अब गांव में ही डॉक्टर मिल जाता है। बहुत अच्छा है।",
      translation: "Earlier we had to go to the city when sick. Now we get a doctor in the village itself. It's very good.",
      avatar: "👩‍🌾",
      rating: 5
    },
    {
      name: "Raman Singh",
      role: "ASHA Health Worker",
      location: "Dungarpur, Rajasthan",
      quote: "This robot helps me serve more families. The AI diagnosis is very accurate and saves time.",
      avatar: "👨‍⚕️", 
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      role: "Remote Consultant",
      location: "AIIMS, New Delhi",
      quote: "I can now reach rural patients instantly. The quality of vitals data from the robot is excellent for remote consultation.",
      avatar: "👩‍⚕️",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices from the Field
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from villagers, health workers, and doctors using our system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-feature relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="h-5 w-5" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-foreground font-medium mb-2 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {testimonial.translation && (
                  <p className="text-sm text-muted-foreground italic">
                    {testimonial.translation}
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;