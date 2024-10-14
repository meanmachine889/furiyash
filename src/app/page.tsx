"use client";
import Hero2 from "./components/hero2";
import Nav from "./components/nav";
import {useState} from "react";
// import landing1 from "../app/public/images/mhashlanding.png";
// import clarityImage from "../app/public/images/Component2.png";
// import connectImage from "../app/public/images/connectlanding.png";
// import leetImage from "../app/public/images/leetlanding.png";
// import vibezImage from "../app/public/images/vibezlanding.png";
import Experience from "@/app/components/experience";
import Projectsgrid from "@/app/components/projectsgrid";
import Navhehe from "@/app/components/navhehe";
import Skills from "@/app/components/skills";
import {Contact} from "@/app/components/contact"


// const projectContent = [
//     {
//         name: "M#",
//         tech: "NextJs / NodeJs / Express / AWS",
//         type: "Production",
//         duration: "2 months",
//         date: "Jul-Oct 2024",
//         content: [
//             {
//                 src: landing1, // imported image
//                 alt: "Clarity",
//                 text: "A platform for our college hackathon.",
//             },
//         ]
//     },
//     {
//         name: "Clarity",
//         tech: "NextJs / Gemini / SQL / Pinecone",
//         type: "Personal",
//         duration: "1 month",
//         date: "Jun 2024",
//         content: [
//             {
//                 src: clarityImage, // imported image
//                 alt: "Clarity",
//                 text: "Upload your pdfs and chat with them",
//             },
//         ]
//     },
//     {
//         name: "ConnectZ",
//         tech: "NextJs / NodeJs / Express / AWS",
//         type: "Personal",
//         duration: "2 months",
//         date: "May 2024",
//         content: [
//             {
//                 src: connectImage, // imported image
//                 alt: "connectz",
//                 text: "A real-time chatting platform.",
//             },
//         ]
//     },
//     {
//         name: "LeetCoach",
//         tech: "NextJs / Gemini / Docker / SQL",
//         type: "Personal",
//         duration: "2 weeks",
//         date: "Sept 2024",
//         content: [
//             {
//                 src: leetImage, // imported image
//                 alt: "leetcoach",
//                 text: "An AI integrated coding platform.",
//             },
//         ]
//     },
//     {
//         name: "VibeZ",
//         tech: "NextJs / NodeJs / Express / AWS",
//         type: "Personal",
//         duration: "2 weeks",
//         date: "Apr 2024",
//         content: [
//             {
//                 src: vibezImage, // imported image
//                 alt: "vibez",
//                 text: "Event Management Platform",
//             },
//         ]
//     }
// ];



export default function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1); // Default selected option is 1

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-screen flex flex-col justify-start items-center">
            <Nav toggleSidebar={toggleSidebar}/>
            <Hero2/>
            <Navhehe setSelectedIndex={setSelectedOption} selectedIndex={selectedOption} />
            {selectedOption === 1 ? <Projectsgrid/> : selectedOption === 2 ? <Skills /> : selectedOption === 3 ? <Experience /> : <></>}
            <Contact />
        </div>
    );
}
