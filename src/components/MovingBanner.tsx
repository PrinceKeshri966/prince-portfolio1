
import React from 'react';
import { cn } from '@/lib/utils';

interface MovingBannerProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const MovingBanner: React.FC<MovingBannerProps> = ({ 
  text, 
  icon, 
  className 
}) => {
  const content = (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="banner-item flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          <span className="text-lg md:text-xl font-display">{text}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className={cn("moving-banner", className)}>
      <div className="moving-banner-content animate-[marquee_60s_linear_infinite]">
        {content}
      </div>
      <div className="moving-banner-content animate-[marquee_60s_linear_infinite] hidden md:flex" aria-hidden="true">
        {content}
      </div>
      
      <style>
        {`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .moving-banner {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
        }
        .moving-banner-content {
          display: flex;
          align-items: center;
        }
        .banner-item {
          padding-left: 2rem;
          padding-right: 2rem;
          display: inline-flex;
          align-items: center;
        }
        `}
      </style>
    </div>
  );
};

export default MovingBanner;
