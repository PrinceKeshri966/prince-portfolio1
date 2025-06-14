import React from "react";
import { Card } from "./ui/card";

const certificates = [
  {
    name: "Associate Google Cloud Engineer",
    image: "lovable-uploads/google.png",
  },
  {
    name: "Data Analysis in Tableau",
    image: "lovable-uploads/Tableau.png",
  },
  {
    name: "Industry and Internet of Things",
    image: "lovable-uploads/IOT.png",
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="section-container">
      <h2 className="section-title reveal">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <Card key={index} className="glass-card overflow-hidden">
            <div className="aspect-video">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
