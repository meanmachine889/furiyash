import React from "react";

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postgres",
      "Prisma",
      "JWT",
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: ["Linux", "Ubuntu", "AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "Jira"],
  },
  {
    category: "Cyber Security",
    technologies: ["Steganography", "Encryption & Decryption"],
  },
  {
    category: "Languages",
    technologies: [
      "C++",
      "Java",
      "Python",
      "C",
      "JavaScript",
      "TypeScript"
    ],
  },
  {
    category: "Others",
    technologies: [
      "SEO",
      "REST APIs",
      "AI Integration",
      "Agile Methodology",
      "GraphQL",
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center border-y-2 border-gray-500 justify-center w-[100%] mt-10">
      <div className="w-[95%] flex items-center justify-end py-5">
        <h1 className="font-[family-name:var(--font-clash-semi)] text-gray-300 text-[8vw] md:text-[5vw] lg:text-[4vw] ">
          Skills
        </h1>
      </div>
      <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex border-gray-500 border-[1px] min-h-[15rem] items-start justify-start p-4 flex-col transition-all hover:shadow-lg"
          >
            <div className="w-[100%] flex-col font-[family-name:var(--font-archivo)] mb-[3rem] border-b-[1px] h-[9rem] justify-between border-gray-800 flex items-start pb-2">
              <h2 className="bg-gray-300 p-3 text-xl text-black rounded-full h-7 w-7 flex items-center justify-center">
                {index + 1}
              </h2>
              <h2 className="text-gray-300 text-[5vw] md:text-[2.5vw] lg:text-[2vw] mb-2">
                {skill.category}
              </h2>
            </div>
            <div className="text-gray-400 pt-3 font-[family-name:var(--font-geist-mono)] flex flex-wrap text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
              <p>
                {skill.technologies.map((tech, i) => (
                  <span key={i}>
                    {tech}
                    {i !== skill.technologies.length - 1 && <span>, </span>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
