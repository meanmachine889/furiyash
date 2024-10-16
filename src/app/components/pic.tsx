"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface PicProps {
    content: {
        src: StaticImageData;
        alt: string;
        text: string;
    }[];
}

const Pic = ({ content }: PicProps) => {
    return (
        <>
            {content.map((item, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const ref = useRef(null);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const isInView = useInView(ref, { once: true });

                return (
                    <div
                        className="w-full flex flex-col items-center justify-center"
                        key={index}
                    >
                        <div className="w-full grid grid-cols-12">
                            <div className="md:col-span-1 md:flex hidden items-center border-r justify-center h-full border-gray-700 "></div>

                            <div className="md:col-span-10 col-span-12 flex items-center justify-center py-8 md:py-[5%]">
                                <Image
                                    quality={100}
                                    src={item.src}
                                    alt={item.alt}
                                    width={1000}
                                    height={1000}
                                    ref={ref}
                                    style={{
                                        transform: isInView ? "none" : "translateY(100px)",
                                        opacity: isInView ? 1 : 0,
                                        transition:
                                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                    }}
                                    className="w-[80%] md:w-[70%] lg:w-[80%]"
                                />
                            </div>

                            <div className="md:col-span-1 md:flex hidden border-l items-center justify-center h-full border-gray-700"></div>
                        </div>

                        <div className="w-full grid grid-cols-12">
                            <div className="md:col-span-1 md:flex hidden border-r border-y grids  items-center justify-center h-full border-gray-700"></div>

                            <div className="md:col-span-10 col-span-12 py-4 px-2 md:px-[5%] md:py-[2%] text-center border-y flex items-center justify-center h-full border-gray-700 text-gray-300 text-[3.5vw] md:text-[2vw] lg:text-[1.1vw]">
                                {item.text}
                            </div>

                            <div className="md:col-span-1 md:flex hidden border-l border-y grids  items-center justify-center h-full border-gray-700"></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Pic;
