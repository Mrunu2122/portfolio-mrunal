import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-32 flex flex-col items-center transition-transform hover:scale-110" 
            key={technology.name}
          >
            <div className="w-20 h-20">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white text-sm mt-2 text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
