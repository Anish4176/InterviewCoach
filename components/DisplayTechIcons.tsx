import { cn } from "@/lib/utils";
import { getTechLogos } from "@/utils";
import Image from "next/image";
import React from "react";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const iconData = await getTechLogos(techStack);
  return (
    <div className="">
      <div className="flex">
        {iconData.slice(0,3).map(({ tech, url },index) => (
          <div className={cn("relative group bg-gray-800 rounded-full p-2 ",index>=1 &&"-ml-2")} key={tech}>
            <span className="tech-tooltip">{tech}</span>
            <Image
              key={url}
              src={url}
              alt="image"
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTechIcons;
