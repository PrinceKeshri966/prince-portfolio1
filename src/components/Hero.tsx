
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const elements = titleRef.current.querySelectorAll('.stagger');
      elements.forEach((el, i) => {
        const element = el as HTMLElement;
        element.style.animationDelay = `${i * 0.1}s`;
        element.classList.add('animate-fade-in');
      });
    }
  }, []);

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <div ref={titleRef} className="max-w-5xl mx-auto text-center">
        <h1 className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-x-4 text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-8">
          <span className="opacity-0 stagger">My</span>
          <span className="opacity-0 stagger">name</span>
          <span className="opacity-0 stagger">is</span>
          <span className="opacity-0 stagger">Prince</span>
          <span className="opacity-0 stagger">Keshri</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl opacity-0 stagger max-w-3xl mx-auto mb-12">
          I build products and solve problems.
        </p>
        <div className="flex justify-center gap-4 opacity-0 stagger">
          <span className="text-xs md:text-sm uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-full">Full Stack developer</span>
          <span className="text-xs md:text-sm uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-full">Developer</span>
          <span className="text-xs md:text-sm uppercase tracking-wider px-2 py-1 border border-primary/20 rounded-full">Problem Solver</span>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
          className="animate-float p-2 rounded-full"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path 
              d="M7 13L12 18L17 13M7 6L12 11L17 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
