import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl h-[470px] border border-[#4a4a8a] shadow-card w-[320px] sm:w-[350px] md:w-[360px] flex flex-col flex-shrink-0"
      >
        <div className="relative w-full h-[150px] flex-shrink-0 mb-3">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-left rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                title="Live Demo"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <FiExternalLink className="text-white w-1/2 h-1/2" />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                title="Source Code"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[18px] mb-1">{name}</h3>
          <p className="text-secondary text-[13px] flex-grow overflow-y-auto pr-2 mb-2">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 380; // card width + gap
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. Use the navigation arrows to slide across all projects.
        </p>
      </div>

      {/* Slider wrapper with left and right navigation buttons */}
      <div className="relative mt-14 group">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous project"
          className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#4a4a8a] flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            canScrollLeft
              ? "bg-tertiary/90 hover:bg-[#915EFF] text-white cursor-pointer shadow-xl hover:scale-110"
              : "bg-tertiary/30 text-gray-500 cursor-not-allowed opacity-30 pointer-events-none"
          }`}
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next project"
          className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#4a4a8a] flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            canScrollRight
              ? "bg-tertiary/90 hover:bg-[#915EFF] text-white cursor-pointer shadow-xl hover:scale-110"
              : "bg-tertiary/30 text-gray-500 cursor-not-allowed opacity-30 pointer-events-none"
          }`}
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="works-container flex flex-row gap-7 overflow-x-auto scroll-smooth pb-8 pt-4 px-2 sm:px-4 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="project-card flex-shrink-0">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
