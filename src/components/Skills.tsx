
import React, { useEffect } from 'react';
import { Code, Globe, Server, Database, Monitor, Workflow, BarChart2, RefreshCcw, Layout, Repeat, Settings, ClipboardList, List, BookOpen, GitBranch, Send, BarChart, PieChart, AreaChart } from 'lucide-react';
// import { BarChart } from 'recharts/types/chart/BarChart';
// import { BarChart } from 'recharts/types/chart/BarChart';
// import { PieChart } from 'recharts/types/chart/PieChart';
// import { AreaChart } from 'recharts/types/chart/AreaChart';

type Skill = {
  name: string;
  level?: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const Skills = () => {
  useEffect(() => {
    const skillElements = document.querySelectorAll('.skill-section');
    skillElements.forEach((el) => {
      el.classList.add('active');
      el.classList.remove('opacity-0');
    });
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { 
          name: "C++", 
          icon: <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M17.8 8.2L12 2.4 6.2 8.2C5.4 9 5 10 5 11.1V18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6.9c0-1.1-.4-2.1-1.2-2.9z"/>
              <path d="M15 15h-3v3h-1v-3H8v-1h3v-3h1v3h3z"/>
            </svg>
          </div>
        },
        { 
          name: "C", 
          icon: <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M12 2a8 8 0 0 0-8 8v4a8 8 0 0 0 16 0v-4a8 8 0 0 0-8-8Z"/>
              <path d="M12 10v4"/>
            </svg>
          </div>
        },
        { 
          name: "Java", 
          icon: <div className="bg-red-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
              <path d="M12 2v8"/>
              <path d="M8 4h8"/>
              <path d="M18 14c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
              <path d="M12 18v4"/>
            </svg>
          </div>
        },
        { 
          name: "Javascript", 
          icon: <div className="bg-yellow-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
              <path d="M8 16h.01"/>
              <path d="M16 16h.01"/>
              <path d="M12 20h.01"/>
              <path d="M4 13h.01"/>
              <path d="M20 13h.01"/>
              <path d="M12 7h.01"/>
            </svg>
          </div>
        }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { 
          name: "HTML5", 
          level: "Intermediate",
          icon: <div className="bg-orange-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
              <path d="M13 4h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/>
              <path d="M8 10h8"/>
              <path d="M8 14h4"/>
            </svg>
          </div>
        },
        { 
          name: "CSS3", 
          level: "Intermediate",
          icon: <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M4 2l1.444 16L12 20l6.556-2L20 2H4z"/>
              <path d="M16 5H8l.642 7L12 13l3.358-1L16 5z"/>
            </svg>
          </div>
        },
        { 
          name: "Next.js", 
          level: "Intermediate",
          icon: <div className="bg-gray-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M12 2L2 19h20L12 2z"/>
              <path d="M2 19l10-10"/>
              <path d="M12 9l10 10"/>
            </svg>
          </div>
        }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { 
          name: "Node.js", 
          level: "Advanced",
          icon: <div className="bg-green-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <path d="M12 22v-5"/>
              <path d="M9 7V2"/>
              <path d="M15 7V2"/>
              <path d="M5 17l-3-3 3-3"/>
              <path d="M19 17l3-3-3-3"/>
              <path d="M12 17a5 5 0 0 0 5-5c0-1.67-1-3-3-5s-2-3-2-5a5 5 0 0 0-5 5c0 2 1 3 3 5s2 3 2 5Z"/>
            </svg>
          </div>
        },
        { 
          name: "Express.js", 
          level: "Intermediate",
          icon: <div className="bg-gray-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
            </svg>
          </div>
        }
      ]
    },
    {
  title: "Data Analytics",
  icon: <BarChart className="w-6 h-6" />,
  skills: [
    {
      name: "Excel",
      level: "Intermediate",
      icon: <div className="bg-yellow-100 p-2 rounded-full">
        <BarChart2 className="text-yellow-600" />
      </div>
    },
    {
      name: "Tableau",
      level: "Intermediate",
      icon: <div className="bg-purple-100 p-2 rounded-full">
        <PieChart className="text-purple-600" />
      </div>
    },
    {
      name: "Power BI",
      level: "Intermediate",
      icon: <div className="bg-orange-100 p-2 rounded-full">
        <AreaChart className="text-orange-600" />
      </div>
    }
  ]
},
{
  title: "Project Methodologies",
  icon: <Workflow className="w-6 h-6" />,
  skills: [
    {
      name: "Agile",
      level: "Experienced",
      icon: <div className="bg-green-100 p-2 rounded-full">
        <RefreshCcw className="text-green-600" />
      </div>
    },
    {
      name: "Scrum",
      level: "Experienced",
      icon: <div className="bg-blue-100 p-2 rounded-full">
        <Layout className="text-blue-600" />
      </div>
    },
    {
      name: "SDLC",
      level: "Experienced",
      icon: <div className="bg-gray-100 p-2 rounded-full">
        <Repeat className="text-gray-600" />
      </div>
    }
  ]
},
{
  title: "Project Agile Tools",
  icon: <Settings className="w-6 h-6" />,
  skills: [
    {
      name: "Jira",
      level: "Proficient",
      icon: <div className="bg-indigo-100 p-2 rounded-full">
        <ClipboardList className="text-indigo-600" />
      </div>
    },
    {
      name: "Trello",
      level: "Proficient",
      icon: <div className="bg-sky-100 p-2 rounded-full">
        <List className="text-sky-600" />
      </div>
    },
    {
      name: "Confluence",
      level: "Proficient",
      icon: <div className="bg-blue-100 p-2 rounded-full">
        <BookOpen className="text-blue-600" />
      </div>
    },
    {
      name: "Git",
      level: "Proficient",
      icon: <div className="bg-gray-200 p-2 rounded-full">
        <GitBranch className="text-black" />
      </div>
    },
    {
      name: "Postman",
      level: "Proficient",
      icon: <div className="bg-orange-100 p-2 rounded-full">
        <Send className="text-orange-600" />
      </div>
    }
  ]
}
,
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { 
          name: "MySQL", 
          level: "Intermediate",
          icon: <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M12 2v20"/>
              <path d="M5 10H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"/>
              <path d="M19 10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/>
              <path d="M5 10a7 7 0 0 1 14 0"/>
              <path d="M5 14a7 7 0 0 0 14 0"/>
            </svg>
          </div> 
        },
        { 
          name: "MongoDB", 
          level: "Intermediate",
          icon: <div className="bg-green-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M12 2v20"/>
              <path d="M6 4h12"/>
              <path d="M6 8h12"/>
              <path d="M6 12h12"/>
              <path d="M6 16h8"/>
            </svg>
          </div>
        }
      ]
    }
  ];

  return (
    <div id="skills" className="py-20 section-container">
      <h2 className="section-title reveal active">Skills</h2>
      
      <div className="glass-card max-w-5xl mx-auto p-6 md:p-10 skill-section">
        <div className="grid grid-cols-1 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal active w-full" data-delay={index + 1}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-cream-dark">
                <div className="p-2 bg-cream-dark rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center p-4 bg-white/50 rounded-lg border border-cream-dark shadow-sm hover:shadow-md transition-all"
                  >
                    {skill.icon}
                    <span className="font-medium mt-3">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs mt-1 px-2 py-1 bg-cream-dark rounded-full">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
