import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Mission */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Grameen HealthBot</h3>
              <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                Healthcare at every doorstep, dignity in every life.
              </p>
              <p className="text-primary-foreground/70 mb-6">
                Revolutionary rural healthcare combining Village Health Robots, AI technology, 
                and accessible IVR systems to transform healthcare delivery in underserved communities.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-secondary hover:bg-secondary-light text-secondary-foreground">
                  <a href="tel:1455" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Dial 1455
                  </a>
                </Button>
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</a></li>
                <li><a href="#technology" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Technology</a></li>
                <li><a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Impact</a></li>
                <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                  <div>
                    <div className="font-medium">Toll-Free</div>
                    <div className="text-primary-foreground/80">1455</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-primary-foreground/80">support@grameenhealthbot.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-primary-foreground/80">Rural Healthcare Innovation Hub<br />New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span className="text-primary-foreground/80">Follow us:</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div className="text-primary-foreground/60">
                © 2024 Grameen HealthBot. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-light py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80 space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Data Protection</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
            </div>
            <div className="text-center">
              <strong>Healthcare at every doorstep, dignity in every life.</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;