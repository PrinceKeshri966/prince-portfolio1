import React from "react";
import { Trophy, Star, ArrowUpRight } from "lucide-react";

const Achievements = () => {
  return (
    <div id="achievements" className="section-container">
      <h2 className="section-title reveal">
        Competitive Programming and Hackathons
      </h2>

      <div className="space-y-8">
        {/* LeetCode Section */}
        <div className="glass-card max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="lovable-uploads/LEETCODE.jpg"
              alt="LeetCode Achievements"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
              <a
                href="https://leetcode.com/u/tanu_goel56/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors flex items-center gap-1"
              >
                LeetCode
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </h3>
            <ul className="space-y-3 pl-8">
              <li className="list-disc">Solved 200+ problems</li>
            </ul>
          </div>
        </div>

        {/* HackerRank Section */}
        <div className="glass-card max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg order-1 md:order-2">
            <img
              src="lovable-uploads/HACKERRANK.jpg"
              alt="HackerRank Achievements"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
              <a
                href="https://www.hackerrank.com/profile/tanu26goel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors flex items-center gap-1"
              >
                HackerRank
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </h3>
            <ul className="space-y-3 pl-8">
              <li className="list-disc flex items-center gap-2">
                4 star in Problem Solving
              </li>
              <li className="list-disc flex items-center gap-2">
                1 star in SQL
              </li>
              <li className="list-disc flex items-center gap-2">
                <span>4 star in Python</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-600" />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="glass-card max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="lovable-uploads/xomax.png"
              alt="Hackathon Achievements"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
              Hackathons
            </h3>
            <ul className="space-y-3 pl-8">
              <li className="list-disc">
                Ranked among top 20 participants out of 200+ participants in a
                design web apps using Python hackathon by Zomax
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
