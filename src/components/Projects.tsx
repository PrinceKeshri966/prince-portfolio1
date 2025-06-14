import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveDemo?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: " LogiTrack: SaaS Customer Onboarding Tracker",
    description:
      "Built LogiTrack, a SaaS customer onboarding tracker that simulates real-world TPM workflows including task management, team coordination, and stakeholder progress reporting.",
    image: "lovable-uploads/logitrack.png",
    githubLink: "https://github.com/PrinceKeshri966/onboard-logi-track",
    liveDemo: "https://onboard-logi-track.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    id: 2,
    title: "MessageHub: Anonymous Feedback Collection Platform",
    description:
      "MessageHub is a platform that allows users to collect anonymous feedback through unique shareable links. With AI-powered suggestions, users can craft better feedback prompts for more meaningful insights.",
    image: "lovable-uploads/Screenshot 2025-03-22 204827.png",
    githubLink: "https://github.com/PrinceKeshri966/MessageHub",
    tags: ["NextJs", "NextAuth", "MongoDB", "ShadCn UI"],
  },
  {
    id: 3,
    title: "Muzer: Collaborative Music Voting Platform",
    description:
      "Muzer lets your friends decide! Add YouTube songs, vote for your favorites, and let the most popular one play first. Simple, fun, and fair!",
    image: "lovable-uploads/Screenshot 2025-03-22 204036.png",
    githubLink: "https://github.com/PrinceKeshri966/Muzer",
    tags: ["NextJs", "NextAuth", "MongoDB", "ShadCn UI"],
  }
];

const Projects = () => {
  useEffect(() => {
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => {
      el.classList.add('active');
      el.classList.remove('opacity-0');
    });
  }, []);

  return (
    <div id="projects" className="py-20 section-container">
      <h2 className="section-title reveal active">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={project.id} 
            className="project-card project-reveal"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-cream-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub <ArrowUpRight className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
