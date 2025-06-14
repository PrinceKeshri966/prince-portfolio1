
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactButton = () => {
    scrollToSection('contact');
  };

  const handleCVClick = () => {
    window.open('https://drive.google.com/file/d/1NSEzL7gmLfdnkdxnI18TbHwocm-a4E1o/view?usp=sharing', '_blank');
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'CV', action: handleCVClick },
    { label: 'Contact', id: 'contact' }
  ];
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-white/90 backdrop-blur-sm transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => item.action ? item.action() : scrollToSection(item.id!)}
                  className="text-left px-2 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.action ? item.action() : scrollToSection(item.id!)}
              className="nav-link px-2 py-2 text-[#1A1A0A] hover:text-green-700 text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button 
          onClick={handleContactButton}
          className="rounded-full bg-[#1A1A0A] text-white hover:bg-[#2A2A1A] px-6 py-2 text-sm font-medium hidden md:flex"
        >
          Let's work together
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
