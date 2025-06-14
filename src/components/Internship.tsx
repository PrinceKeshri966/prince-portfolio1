import React from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";

const Internship = () => {
  return (
    <div id="internship" className="section-container">
      <h2 className="section-title reveal">Internship</h2>

      <div className="glass-card max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="lovable-uploads/Devco.png" // You can replace this with your logo/image
            alt="Devco Services Pvt Ltd."
            className="w-full h-full object-cover"
          />
        </div>

        {/* Internship Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <span>
              Data Engineer Intern @ Devco Services Pvt Ltd.
            </span>
          </h3>
          <ul className="space-y-3 pl-8">
            <li className="list-disc">
              Collaborated with business users to understand reporting needs,
              increasing communication efficiency by 30%.
            </li>
            <li className="list-disc">
              Extracted, transformed, and loaded data into the data warehouse
              using SQL and ETL tools.
            </li>
            <li className="list-disc">
              Developed and distributed reports and dashboards using Tableau
              and Excel.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internship;
