import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      icon={
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: experience.company_name === 'Bin Tech' ? '0%' : '15%'
        }}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{
              width: experience.company_name === 'Bin Tech' ? '85%' : '100%',
              height: experience.company_name === 'Bin Tech' ? '85%' : '100%',
              objectFit: 'contain',
              borderRadius: experience.company_name === 'Doutya Technologies' ? '50%' : 'none'
            }}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => {
          // Highlight key metrics, technologies, and achievements
          const highlightedPoint = point.replace(
            /(\b(?:Farm Store|Little Lads|3D website|inmin\.info|Xortlist|Axara|React|Three\.js|React Three Fiber|Next\.js|TypeScript|MongoDB|Python|React Native|Shopify|20 days|48 hours|70 orders in 11 minutes|3 production apps|14 days)\b)/g,
            '<strong class="text-white font-semibold">$1</strong>'
          );

          return (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
              dangerouslySetInnerHTML={{ __html: highlightedPoint }}
            />
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
