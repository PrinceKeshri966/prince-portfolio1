
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MovingBanner from '@/components/MovingBanner';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Internship from '@/components/Internship';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Star, Sparkles, Briefcase, Code, Award, Trophy } from 'lucide-react';

const Index = () => {
  // Add a background texture image to public folder when the component mounts
  useEffect(() => {
    const bgTexture = new Image();
    bgTexture.src = 'data:image/png;base64,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';
    
    // Create a link element to add the font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Save texture to public folder
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = bgTexture.src;
    link.as = 'image';
    document.head.appendChild(link);
    
    // Create and append image to public folder
    const img = document.createElement('img');
    img.src = bgTexture.src;
    img.style.display = 'none';
    document.body.appendChild(img);
    
    // Add texture to body
    document.body.style.backgroundImage = `url(${bgTexture.src})`;
    
    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(link);
      document.body.removeChild(img);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      
      <MovingBanner 
        text="Think • Create • Solve • Design •" 
        icon={<Star className="w-5 h-5" />} 
      />
      
      <About />
      
      <MovingBanner 
        text="Skills • Expertise • Technologies •" 
        icon={<Code className="w-5 h-5" />} 
        className="my-20"
      />
      
      <Skills />
      
      <MovingBanner 
        text="Certifications • Learning •" 
        icon={<Award className="w-5 h-5" />} 
        className="my-20"
      />

      <Internship />
      <MovingBanner 
        text="Internships • Experience •" 
        icon={<Briefcase className="w-5 h-5" />} 
        className="my-20"
      />
      <Certifications />
      
      <MovingBanner 
        text="Achievements • Milestones •" 
        icon={<Trophy className="w-5 h-5" />} 
        className="my-20"
      />
      
      <Achievements />
      
      <MovingBanner 
        text="Projects • Portfolio •" 
        icon={<Briefcase className="w-5 h-5" />} 
        className="my-20"
      />
      
      <Projects />
      
      <MovingBanner 
        text="Connect • Collaborate • Contact • Reach Out •" 
        icon={<Sparkles className="w-5 h-5" />} 
        className="my-20"
      />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
