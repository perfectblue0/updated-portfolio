"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, experiences } from "../data/portfolioData";

export default function AboutPage() {
  const skillsRef = useRef();
  const isSkillView = useInView(skillsRef, { margin: "-100px" });

  const expRef = useRef();
  const isExpView = useInView(expRef, { margin: "-100px" });

  return (
    <>
      {/* text */}
      <div className="flex flex-col p-4 gap-24 mt-12 xs:p-7 sm:p-8 md:p-12 md:gap-32 lg:p-20 lg:gap-49 xl:p-48 xl:gap-64">
        {/* container bio */}
        <div className="flex flex-col justify-center gap-12">
          {/* title bio */}
          <h2 className="text-2xl">My Background</h2>
          {/* description bio */}
          <p className="text-lg xs:text-sm">
            Recent full-stack coding bootcamp graduate with a versatile skill
            set, encompassing adaptive teaching, collaboration, and problem
            solving. My commitment to detail and adaptability make me a valuable
            asset in dynamic environments.
          </p>
        </div>
        {/* container skills */}
        <div ref={skillsRef} className="">
          {/* title skills */}
          <motion.h2
            initial={{ x: "-400px" }}
            animate={isSkillView ? { x: "0" } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl"
          >
            Skills
          </motion.h2>
          {/* list skills */}
          <motion.div
            initial={{ x: "-500px" }}
            animate={isSkillView ? { x: 0 } : {}}
            className="flex flex-wrap gap-8 mt-8"
          >
            {skills.map((skill) => (
              <div className="" key={skill}>
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* container experience */}
        <div ref={expRef} className="flex flex-col justify-center pb-48 gap-12">
          {/* title experience */}
          <motion.h2
            initial={{ x: "-400px" }}
            animate={isExpView ? { x: "0" } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl"
          >
            Experience
          </motion.h2>
          {/* list experience */}
          <motion.div
            initial={{ x: "-500px" }}
            animate={isExpView ? { x: "0" } : {}}
            className=""
          >
            {/* experience container */}

            {experiences.map((exp) => (
              <div className="flex flex-row mb-6" key={exp.id}>
                <div className="w-1/3 mr-4">
                  <h3 className="mb-2 text-lg xs:text-base">{exp.event}</h3>
                  <p className="text-sm">{exp.date}</p>
                </div>
                <p className="w-2/3 text-sm">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
