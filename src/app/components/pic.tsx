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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {content.map((item, index) => (
        <div
          className="w-full flex flex-col items-center justify-center"
          key={index}
        >
          {/* Image section */}
          <div className="w-full grid grid-cols-12">
            {/* Empty box on the left */}
            <div className="col-span-1 items-center border-r justify-center h-full border-gray-700 flex"></div>

            {/* Image container */}
            <div className="col-span-10 flex items-center justify-center py-8 md:py-[5%]">
              <Image
                quality={100}
                src={item.src}
                alt={item.alt}
                width={900}
                height={900}
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition:
                    "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="w-[80%] md:w-[70%] lg:w-[50%]" // Responsive width for images
              />
            </div>

            {/* Empty box on the right */}
            <div className="col-span-1 border-l items-center justify-center h-full border-gray-700 flex"></div>
          </div>

          {/* Text section */}
          <div className="w-full grid grid-cols-12">
            {/* Empty box on the left */}
            <div className="col-span-1 border-r border-t grids flex items-center justify-center h-full border-gray-700"></div>

            {/* Text container */}
            <div className="col-span-10 px-6 py-4 md:px-[5%] md:py-[2%] text-center border-y flex items-center justify-center h-full border-gray-700 text-gray-300 text-[4vw] md:text-[2vw] lg:text-[1.1vw]">
              {item.text}
            </div>

            {/* Empty box on the right */}
            <div className="col-span-1 border-l border-t grids flex items-center justify-center h-full border-gray-700"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pic;
