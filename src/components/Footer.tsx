
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-display">Thank you for visiting!</p>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Prince Keshri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
