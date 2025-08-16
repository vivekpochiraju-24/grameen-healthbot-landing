import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, User, Menu, X, Bot } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay to allow the page to load before scrolling
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
  }, [location.pathname, navigate]);

  const scrollToSection = (sectionId: string) => {
    if (!sectionId.startsWith('#')) return;
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity group">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/logo.png" 
                alt="Grameen HealthBot" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement?.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v4"/>
                            <path d="M12 18v4"/>
                            <path d="M4.93 4.93L7.76 7.76"/>
                            <path d="M16.24 16.24L19.07 19.07"/>
                            <path d="M2 12h4"/>
                            <path d="M18 12h4"/>
                            <path d="M4.93 19.07L7.76 16.24"/>
                            <path d="M16.24 7.76L19.07 4.93"/>
                          </svg>
                        </div>
                        <div>
                          <span class="text-xl font-bold text-foreground">Grameen HealthBot</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-foreground">Grameen HealthBot</span>
              <p className="text-xs text-muted-foreground">Healthcare for All</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
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
                  onClick={(e) => handleNavClick(e, item.href)}
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