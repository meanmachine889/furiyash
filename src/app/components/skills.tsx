import React, { useRef } from "react";
import { useInView } from "framer-motion";

const skills = [
    {
        category: "Frontend Development",
        technologies: ["React.js", "Next.js", "Tailwind"],
    },
    {
        category: "Backend Development",
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Postgres",
            "Prisma",
            "JWT",
        ],
    },
    {
        category: "DevOps & Tools",
        technologies: ["Linux", "Ubuntu", "AWS", "Docker", "CI/CD", "Jira"],
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
            "TypeScript",
        ],
    },
    {
        category: "Others",
        technologies: ["SEO", "REST APIs", "AI Integration"],
    },
];

const Skills = () => {
    const createRefInView = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isInView = useInView(ref, { once: true });
        return { ref, isInView };
    };

    return (
        <div className="flex flex-col items-center grids border-gray-500 justify-center w-[100%]">
            <div className="w-[90%] bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => {
                    const headingRef = createRefInView();
                    const categoryRef = createRefInView();
                    const techRef = createRefInView();

                    return (
                        <div
                            key={index}
                            className="flex border-gray-700 border min-h-[15rem] items-start justify-between p-4 flex-col transition-all hover:shadow-lg"
                        >
                            <div className="w-[100%] flex-col font-[family-name:var(--font-archivo)] mb-[3rem] border-b-[1px] h-[9rem] justify-between border-gray-800 flex items-start pb-2">
                                <h2
                                    ref={headingRef.ref}
                                    className="bg-gray-300 p-3 text-xl text-black rounded-full h-7 w-7 flex items-center justify-center"

                                >
                                    {index + 1}
                                </h2>
                                <h2
                                    ref={categoryRef.ref}
                                    className="text-gray-300 text-[5vw] md:text-[2.5vw] lg:text-[2vw] mb-2"
                                    style={{
                                        transform: categoryRef.isInView ? "none" : "translateY(5px)",
                                        opacity: categoryRef.isInView ? 1 : 0,
                                        transition:
                                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                    }}
                                >
                                    {skill.category}
                                </h2>
                            </div>
                            <div className="text-gray-400 pt-3 font-[family-name:var(--font-geist-mono)] flex flex-wrap text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
                                <p
                                    ref={techRef.ref}
                                    style={{
                                        transform: techRef.isInView ? "none" : "translateY(5px)",
                                        opacity: techRef.isInView ? 1 : 0,
                                        transition:
                                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                    }}
                                >
                                    {skill.technologies.map((tech, i) => (
                                        <span key={i}>
                      {tech}
                                            {i !== skill.technologies.length - 1 && <span>, </span>}
                    </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
