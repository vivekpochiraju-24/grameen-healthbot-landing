import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, User, Menu, X, Bot } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  currentUser?: {
    name: string;
    avatar?: string;
  };
}

const Header = ({ isLoggedIn, onLogin, onLogout, currentUser }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="icon-primary">
              <Bot />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Grameen HealthBot</h1>
              <p className="text-xs text-muted-foreground">Healthcare for All</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Auth & Emergency */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <a href="tel:1455" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Emergency: 1455
              </a>
            </Button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{currentUser?.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button size="sm" onClick={onLogin} className="btn-hero">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="tel:1455" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Emergency: 1455
                </a>
              </Button>

              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{currentUser?.name}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={onLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <Button size="sm" onClick={onLogin} className="btn-hero w-full">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;