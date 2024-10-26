'use client'

import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TechIcon = ({ Icon }) => (
  <div className="p-4 flex items-center justify-center">
    <Icon size={40} />
  </div>
);

const IconList = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  IoLogoJavascript,
  FaNodeJs,
  TbBrandNextjs,
  FaPython,
  FaJava,
  DiDotnet,
  SiXaml,
  SiCsharp
];

export default function Proficiency() {
  return (
    <div className="w-full pb-10 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-scroll text-white mt-20">
        {/* First set of icons */}
        <div className="flex shrink-0">
          {IconList.map((Icon, index) => (
            <TechIcon key={`first-${index}`} Icon={Icon} />
          ))}
        </div>
        
        {/* Second set of icons (for seamless loop) */}
        <div className="flex shrink-0">
          {IconList.map((Icon, index) => (
            <TechIcon key={`second-${index}`} Icon={Icon} />
          ))}
        </div>
        
        {/* Third set of icons (for extra smoothness) */}
        <div className="flex shrink-0">
          {IconList.map((Icon, index) => (
            <TechIcon key={`third-${index}`} Icon={Icon} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${IconList.length * 72}px); /* Adjust based on icon width + padding */
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        /* Optional: Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}