import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately activate all elements to ensure visibility
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      el.classList.add("active");
      el.classList.remove("opacity-0");
    });
  }, []);

  return (
    <div id="about" className="py-20 section-container" ref={sectionRef}>
      <h2 className="section-title reveal active">About Me</h2>

      <div className="glass-card max-w-5xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div
          className="reveal active overflow-hidden rounded-lg"
          data-delay="1"
        >
          <img
            src="lovable-uploads\456-removebg-preview.png"
            alt="Prince Keshri"
            className="w-96 h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="section-subtitle reveal active" data-delay="2">
            Hello
          </h3>
          <p
            className="text-lg leading-relaxed mb-6 reveal active"
            data-delay="3"
          >
            I'm Prince Keshri, a B.Tech Computer Science student at Lovely
            Professional University, specializing in Full-Stack Development. I
            focus on building scalable applications and have a solid foundation
            in both front-end and back-end development. I am committed to
            continuously improving my skills in emerging technologies.
          </p>
          {/* <p className="text-lg leading-relaxed reveal active" data-delay="3">
            With expertise in both design and development, I bridge the gap between aesthetics and functionality, creating products that are not only beautiful but also intuitive and user-friendly.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
