import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "Manipal Hackathon",
    stack: "NextJs, AWS",
    description: [
      "Developed a website for a major hackathon event.",
      "Hosted over 500+ teams for the competition.",
      "Focused on performance and scalability.",
      "Supported over 1500+ users during the event.",
    ],
    website: "https://manipalhackathon.com",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1728065439/Screenshot_2024-10-04_234021_xsejzq.png",
  },
  {
    name: "MTTN",
    stack: "Next.js, AWS",
    description: [
      "Official website for Manipal The Talk Network, the largest student body in Manipal.",
      "Showcases news, articles, events, and student activities across the university.",
      "Robust infrastructure to handle high traffic during major events.",
      "Responsive design ensuring accessibility on all devices.",
    ],
    website: "https://mttn.in",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1727901760/Screenshot_2024-10-03_021148_dtewdw.png",
  },
  {
    name: "Clarity",
    stack: "Next.js, Prisma, Kinde, NeonDB, Gemini, React-pdf, SQL",
    description: [
      "Upload PDFs and chat with them effortlessly.",
      "Full PDF functionalities: Fullscreen, Zoom, Page Navigation.",
      "Store and manage chats and PDF files securely for each user.",
      "Simple login with OTP authentication sent by Kinde.",
    ],
    website: "https://clarity.com",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1728065608/Screenshot_2024-07-06_180616_qe2ya4.png",
  },
  {
    name: "LeetCoach",
    stack: "NextJs, Docker, NeonDB, Prisma, SQL",
    description: [
      "Built a coding platform like LeetCode.",
      "Users can sign in and solve coding problems.",
      "Implemented session management and problem tracking.",
    ],
    website: "https://leetcoach.com",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1728065840/Screenshot_2024-10-04_234704_rv5nma.png",
  },
  {
    name: "Connect Z",
    stack: "Next.js, Tailwind CSS, Pusher, Google Auth",
    description: [
      "Real-time chat platform with friend requests and messaging.",
      "Send and receive friend requests instantly.",
      "Real-time notifications for friend requests and messages.",
      "Secure login and signup using Google Auth.",
    ],
    website: "https://connectz.com",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1727901142/Screenshot_2024-10-03_020145_ze03pb.png",
  },
  {
    name: "VibeZ",
    stack: "ReactJs, Nodejs, Express, SQL",
    description: [
      "Developed a platform for drone services.",
      "Integrated real-time tracking of drones.",
      "Optimized for fast deployment and scalability.",
    ],
    website: "https://dronaid.com",
    imageUrl:
      "https://res.cloudinary.com/dlofupmx3/image/upload/v1728065628/Screenshot_2024-07-15_161145_hhuwi9.png",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <div className="w-[100%] px-[3%] py-5 flex items-center justify-end border-gray-500">
        <h1 className="font-[family-name:var(--font-clash-semi)] text-gray-300 text-[5vw] ">
          Projects
        </h1>
      </div>
      <div className="w-[100%] flex font-[family-name:var(--font-geist-mono)] flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-between h-[15rem] items-center border-2 transition-all border-gray-500 w-[100%]"
          >
            {/* Left box for image */}
            <div className="w-[33%] border-r-2 border-gray-500 h-[100%] flex items-center justify-center">
              <Image
                src={project.imageUrl}
                alt={`${project.name} image`}
                width={400}
                height={400}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            {/* Right box for project details */}
            <div className="w-[65%] py-5 flex flex-col justify-between h-[100%] px-5">
              <div className="flex flex-col">
                <p className="text-gray-300 text-[2vw] font-[family-name:var(--font-archivo)] md:text-[2.5vw]">
                  {project.name}
                </p>
                <p className="text-gray-400 text-[1.3vw] md:text-[1.4vw]">
                  {project.stack}
                </p>
              </div>
              <div className="flex w-[100%] gap-7 items-center justify-start">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 text-[1.4vw] md:text-[1.2vw] hover:text-gray-100 mt-3"
                >
                  View <ArrowUpRight className="ml-2" />
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 text-[1.4vw] md:text-[1.2vw] hover:text-gray-100 mt-3"
                >
                  Visit Website <ArrowUpRight className="ml-2" />
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 text-[1.4vw] md:text-[1.2vw] hover:text-gray-100 mt-3"
                >
                  Visit Github <ArrowUpRight className="ml-2" />
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
