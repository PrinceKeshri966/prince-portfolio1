import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  useEffect(() => {
    // Fix: Make contact section visible immediately
    const contactElements = document.querySelectorAll('.contact-reveal');
    contactElements.forEach((el) => {
      el.classList.add('active');
      el.classList.remove('opacity-0');
    });
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:pr.prince.3068@gmail.com";
  };

  return (
    <div id="contact" className="py-20 section-container">
      <h2 className="section-title reveal active">Get In Touch</h2>
      
      <div className="glass-card max-w-3xl mx-auto p-8 md:p-10 text-center contact-reveal">
        <p className="text-lg md:text-xl mb-8">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to discuss a project or just say hello!
        </p>
        
        <Button 
          onClick={handleEmailClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-6 bg-primary text-primary-foreground rounded-lg button-effect mb-10"
          size="lg"
        >
          <Mail className="w-5 h-5" />
          <span>Connect with Me</span>
        </Button>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
          <a 
            href="https://github.com/PrinceKeshri966?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-cream-dark transition-colors"
          >
            <Github className="w-8 h-8 mb-3" />
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/princekeshri1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-cream-dark transition-colors"
          >
            <Linkedin className="w-8 h-8 mb-3" />
            <span>LinkedIn</span>
          </a>
          

          
          {/* <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg hover:bg-cream-dark transition-colors"
          >
            <Instagram className="w-8 h-8 mb-3" />
            <span>Instagram</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;