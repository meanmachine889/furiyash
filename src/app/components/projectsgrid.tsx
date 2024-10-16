import Image, {StaticImageData} from "next/image";
import mhash from "../public/images/mhash2.png";
import clarity from "../public/images/clarity2.png";
import vibez from "../public/images/vibez2.png";
import leet from "../public/images/leet2.png";
import mttn from "../public/images/mttn2.png";
import conn from "../public/images/conn2.png";
import {ArrowUpRight} from "lucide-react";
import {useRef} from "react";
import {useInView} from "framer-motion";
import Link from "next/link";

function ProjectsGrid() {
    const images = [
        {src: mhash, title: "Manipal Hackathon", category: "Production", bgColor: "bg-blue-900", href: "/project/1"},
        {src: clarity, title: "Clarity", category: "Personal", bgColor: "bg-[#e68313]", href: "/project/2"},
        {src: conn, title: "ConnectZ", category: "Personal", bgColor: "bg-indigo-600", href: "/project/3"},
        {src: leet, title: "LeetCoach", category: "Personal", bgColor: "bg-gray-700", href: "/project/4"},
        {src: mttn, title: "MTTN", category: "Production", bgColor: "bg-[#1b1b1b]", href: "https://www.manipalthetalk.org/"},
        {src: vibez, title: "VibeZ", category: "Personal", bgColor: "bg-pink-400", href: "/project/5"},

    ];

    return (
        <div
            className="w-full font-[family-name:var(--font-geist-mono)] min-h-fit border-y grids border-gray-700 flex items-center justify-center">
            <div
                className="w-[90%] min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-x border-gray-700">
                {images.map((image, index) => (
                    <ProjectCard
                        key={index}
                        src={image.src}
                        title={image.title}
                        category={image.category}
                        bgColor={image.bgColor}
                        href={image.href} // Pass href prop here
                    />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({src, title, category, bgColor, href}: {
    src: StaticImageData,
    title: string,
    category: string,
    bgColor?: string,
    href: string, // Add href prop here
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div
            className={`border-r lg:border-r border-b border-gray-700 ${bgColor} md:h-[20rem] h-[25rem] min-h-fit lg:h-[30rem] flex flex-col items-end justify-end relative overflow-clip group`}
        >
            <div
                className="h-[80%] pt-3 group-hover:pt-2 group-hover:pl-2 transition-all pl-5 w-full flex items-end justify-end">
                <Image
                    ref={ref}
                    src={src}
                    alt={title}
                    width={700}
                    height={700}
                    className="shadow-xl group-hover:scale-[1.05] transition-transform duration-300"
                    style={{
                        transform: isInView ? "none" : "translateY(10px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                    }}
                />

                <div
                    className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div
                className="bg-black py-3 border-t border-gray-700 w-full h-[20%] flex justify-between items-center transition-all lg:group-hover:px-10 md:group-hover:px-6 group-hover:px-8  md:px-5 px-7 lg:px-9 lg:py-5">
                <div className="flex flex-col gap-3 items-start">
                    <p>{title}</p>
                    <p className="text-gray-500">{category}</p>
                </div>
                <Link href={href}>
                    <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-all group-hover:rotate-45"/>
                </Link>
            </div>
        </div>
    );
}

export default ProjectsGrid;
