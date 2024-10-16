import landing1 from "../../public/images/mhashlanding.png";
import mf1 from "../../public/images/mf1.svg";
import mf2 from "../../public/images/mf2.svg";
import mf3 from "../../public/images/mf3.svg";
import mf42 from "../../public/images/mf42.svg";
import mf5 from "../../public/images/mf5.svg";
import mf6 from "../../public/images/mf6.svg";
import mf7 from "../../public/images/mf7.svg";
import mf8 from "../../public/images/mf8.svg";
import cf1 from "../../public/images/cf1.svg";
import cf2 from "../../public/images/cf2.svg";
import cf3 from "../../public/images/cf3.svg";
import lf1 from "../../public/images/lf1.svg";
import lf2 from "../../public/images/lf2.svg";
import lf3 from "../../public/images/lf3.svg";
import lf4 from "../../public/images/lf4.svg";
import lf5 from "../../public/images/lf5.svg";
import vf1 from "../../public/images/vf1.svg";
import vf2 from "../../public/images/vf2.svg";
import vf3 from "../../public/images/vf3.svg";
import vf4 from "../../public/images/vf4.svg";
import of1 from "../../public/images/of1.svg";
import of2 from "../../public/images/of2.svg";
import of3 from "../../public/images/of3.svg";
import of4 from "../../public/images/of4.svg";
import clarityImage from "../../public/images/Component2.png";
import connectImage from "../../public/images/connectlanding.png";
import leetImage from "../../public/images/leetlanding.png";
import vibezImage from "../../public/images/vibezlanding.png";
import Project from "@/app/components/projects/Project";

interface PageProps {
    params: {
        pid: string;
    };
}


const projectContent = [
    {
        name: "M#",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Production",
        duration: "2 months",
        date: "Jul-Oct 2024",
        link: "https://hackathon.manipal.edu/",
        content: [
            {
                src: landing1,
                alt: "m#",
                text: "A platform for our college hackathon.",
            },
        ],
        content2: [
            {src: mf1, alt: "m# feature 1", text: "Designing an efficient system for managing all registered teams through a streamlined table interface for easy administration and updates."},
            {
                src: mf2,
                alt: "m# feature 2",
                text: "Implementing a feature to send emails to team members while providing detailed views of each member for enhanced team communication."
            },
            {src: mf3, alt: "m# feature 3", text: "Developing a user management system with a clean, user-friendly table for editing and maintaining user profiles."},
            {src: mf42, alt: "m# feature 4", text: "Creating a statistics page to analyze platform data and present it in engaging, easy-to-read graphs and visual insights."},
            {src: mf5, alt: "m# feature 5", text: "Building a submission management table for reviewing, approving, or rejecting submissions in an organized and efficient manner."},
            {src: mf6, alt: "m# feature 6", text: "Developing a judge portal for scoring teams based on rounds and subcategories."},
            {src: mf7, alt: "m# feature 7", text: "Implementing a ticket management system with a table to track, respond to, and update the status of tickets seamlessly."},
            {src: mf8, alt: "m# feature 8", text: "Mapping problem statements to specific judges so they only receive and evaluate submissions related to their assigned problem, streamlining the judging process."}
        ]
    },
    {
        name: "Clarity",
        tech: "NextJs / Gemini / SQL / Pinecone",
        type: "Personal",
        duration: "1 month",
        date: "Jun 2024",
        link: "https://clarity-beige.vercel.app/",
        content: [
            {
                src: clarityImage,
                alt: "Clarity",
                text: "Upload your pdfs and chat with them",
            },
        ],
        content2: [
            {src: cf1, alt: "m# feature 3", text: "OTP based authentication."},
            {src: cf2, alt: "m# feature 4", text: "User dashboard with all the uploaded files and associated chats."},
            {src: cf3, alt: "m# feature 5", text: "Ask any question to the uploaded pdf."},
        ]
    },
    {
        name: "ConnectZ",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Personal",
        duration: "2 months",
        date: "May 2024",
        link: "https://connect-z.vercel.app/",
        content: [
            {
                src: connectImage,
                alt: "connectz",
                text: "A real-time chatting platform.",
            },
        ],
        content2: [
            {src: of1, alt: "m# feature 1", text: "User dashboard with all recent chats."},
            {src: of2, alt: "m# feature 2", text: "Realtime chatting implemented using pusher."},
            {src: of3, alt: "m# feature 3", text: "Accept or reject friend requests."},
            {src: of4, alt: "m# feature 4", text: "Send friend requests using email ids of users."},
        ]
    },
    {
        name: "LeetCoach",
        tech: "NextJs / Gemini / Docker / SQL",
        type: "Personal",
        duration: "2 weeks",
        date: "Sept 2024",
        link: "https://github.com/meanmachine889/LeetCoach",
        content: [
            {
                src: leetImage, // imported image
                alt: "leetcoach",
                text: "An AI integrated coding platform.",
            },
        ],
        content2: [
            {src: lf1, alt: "m# feature 1", text: "User Dashboard"},
            {src: lf2, alt: "m# feature 2", text: "Docker for code execution"},
            {src: lf3, alt: "m# feature 3", text: "Personalized code analysis"},
            {src: lf4, alt: "m# feature 4", text: "Personalized hints according to code written"},
            {src: lf5, alt: "m# feature 5", text: "Easily accessible solutions"}
        ]
    },
    {
        name: "VibeZ",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Personal",
        duration: "2 weeks",
        date: "Apr 2024",
        link: "https://github.com/meanmachine889/VibeZ",
        content: [
            {
                src: vibezImage, // imported image
                alt: "vibez",
                text: "Event Management Platform",
            },
        ],
        content2: [
            {src: vf1, alt: "m# feature 1", text: "Filter events and purchase tickets accordingly."},
            {src: vf2, alt: "m# feature 2", text: "A portal for organisers to list their event."},
            {src: vf3, alt: "m# feature 3", text: "Organising history for organisers"},
            {src: vf4, alt: "m# feature 4", text: "Purchase history for users"},
        ]
    }
];

export default function page({params}: PageProps) {
    return (
        <div>
            <Project data={projectContent[parseInt(params.pid) - 1]}/>
        </div>
    )
}
