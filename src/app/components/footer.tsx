import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#0f0f0f] px-5 py-8 gap-10 md:gap-[10vw] lg:h-[15vw] h-auto justify-start md:items-end items-start">
      {/* Section 1: Let's Connect */}
      <div className="flex flex-col items-start w-full lg:w-auto gap-9 text-left">
        <p className="font-[family-name:var(--font-clash-semi)] text-gray-300 text-[6vw] md:text-[4vw] lg:text-[3vw]">
          Let&apos;s Connect
        </p>
        <div className="flex flex-col md:flex-row gap-3 font-[family-name:var(--font-geist-mono)] flex-wrap justify-start">
          <p className="flex gap-3 underline underline-offset-2">
            LinkedIn <ArrowUpRight />
          </p>
          <p className="flex gap-3 underline underline-offset-2">
            Instagram <ArrowUpRight />
          </p>
          <p className="flex gap-3 underline underline-offset-2">
            GitHub <ArrowUpRight />
          </p>
          <p className="flex gap-3 underline underline-offset-2">
            Twitter <ArrowUpRight />
          </p>
        </div>
      </div>

      {/* Section 2: Contact */}
      <div className="flex flex-col items-start w-full lg:w-auto gap-5 text-left">
        <p className="font-[family-name:var(--font-geist-mono)] text-gray-300">
          Have a work for me?
        </p>
        <div className="flex flex-wrap gap-3 font-[family-name:var(--font-geist-mono)]">
          <p className="flex gap-3 underline underline-offset-2">
            yashbharadwaj131@gmail.com <ArrowUpRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
