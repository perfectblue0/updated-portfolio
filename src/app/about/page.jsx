"use client";

import ScrollSvg from "@/components/scrollSvg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Framer Motion",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Atlas",
  "Git",
  "GitHub",
];

export default function AboutPage() {
  const skillsRef = useRef();
  const isSkillView = useInView(skillsRef, { margin: "-100px" });

  const expRef = useRef();
  const isExpView = useInView(expRef, { margin: "-100px" });

  return (
    <>
      {/* text */}
      <div className="flex flex-col p-4 gap-24 sm:p-8 md:p-12 md:gap-32 lg:p-20 lg:gap-49 xl:p-48 xl:gap-64">
        {/* container bio */}
        <div className="flex flex-col justify-center gap-12">
          {/* title bio */}
          <h2 className="text-2xl font-bold">BIOGRAPHY</h2>
          {/* description bio */}
          <p className="text-xl">
            Recent full-stack coding bootcamp graduate with a versatile skill
            set, encompassing adaptive teaching, compliance management, and
            progress assessment. My commitment to detail and adaptability make
            me a valuable asset in dynamic environments, ready to contribute
            effectively to innovative projects.
          </p>
          {/* signature */}
          <div className="self-end mr-5">
            <svg
              width="150"
              height="150"
              viewBox="0 0 253 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 51C48.362 54.9825 50.4565 59.0535 51.4444 62.8889C53.1188 69.3893 54.5025 75.9668 55.7778 82.5556C55.9065 83.2207 57.2772 88.1696 57 89.5556C56.6293 91.4093 55.333 86.1408 54.2222 84.6111C47.6948 75.6225 40.0665 67.3783 32.5556 59.2222C24.9032 50.9126 -8.57659 24.7603 4.38889 10.3889C12.1098 1.83073 27.815 1.39075 38.1111 2.22222C47.9852 3.01962 71.811 5.75487 73.4444 19.8333C75.0668 33.8169 56.8973 50.2559 48.7778 59C43.1959 65.0112 36.3886 71.301 30.1111 76.7778C28.8426 77.8845 24.7165 79.2471 26.2222 80C26.3922 80.085 32.9158 75.6082 33 75.5556C40.8527 70.6476 47.5589 63.4695 55.9444 59.4444C58.1892 58.3669 54.9812 64.9035 60 61C62.896 58.7476 64.2478 62.0018 65.7778 60.7778C68.4994 58.6005 72.8731 62.1586 75 59.5C75.7782 58.5272 77.3829 59.2269 78.3889 58.4444C81.7149 55.8576 83.5517 46.3953 84.5556 42.6667C84.8952 41.4052 85.7456 30.2041 85.2222 35.1111C84.5957 40.9848 84.8476 46.9994 87.5556 52.3333C88.1015 53.4086 89.4347 57.3523 91.2222 56.7778C92.0967 56.4967 96.8981 52.4953 96.9444 52.6111C97.2738 53.4345 96.6064 59.5556 97.2222 59.5556C101.628 59.5556 98.6091 55.6091 102.5 59.5C107.913 64.9125 109.679 46.9552 109.778 45.6667C111.529 22.9066 101.029 41.3948 110.778 43.7778C120.108 46.0586 122.345 38.283 124.778 30.4444C124.831 30.2715 125.968 23.9286 126.556 27.6667C128.37 39.2158 128.281 51.2602 129.222 62.8889C129.909 71.3733 130.72 79.7419 132.222 88.1111C132.577 90.0863 132.08 88.3122 130.778 86.3333C127.445 81.2682 123.833 76.2322 120.222 71.3889C116.087 65.8421 107.97 50.6512 99.3333 50.0556C91.6331 49.5245 84.8691 50.8933 78.1111 54.7778C75.278 56.4062 67.7616 60.1976 74.8889 61C101.495 63.9954 129.102 62 155.833 62C157.99 62 163.555 62.6625 166.111 61.7778C166.801 61.5391 165.02 60.7472 164.333 60.5C160.586 59.1509 156.571 58.5533 152.722 57.5556C144.1 55.3201 154.218 58.1861 158.556 57.7778C160.511 57.5937 163.254 55.4444 164.778 55.4444C165.415 55.4444 166.753 57.7817 168.056 57.9444C170.09 58.1988 171.758 57.6287 173.444 56.5556C174.819 55.6807 175.009 56.9565 176.444 57C177.809 57.0414 179.588 56.3363 180.778 56.4444C182.057 56.5608 183.315 57.9519 185 58C187.057 58.0588 190.397 59.0725 192 58.5C192.444 58.3414 197.556 57.0005 197.556 58C197.556 58.8343 194.842 59.9165 196.889 61C199.451 62.3566 204.111 62.4996 204.889 59C205.148 57.8321 205.295 55.9857 204.556 55C203.27 53.2856 214.879 49.5177 214.944 49.5C225.211 46.728 239.702 42.7898 250.444 44.2222C252.448 44.4893 249.3 48.3377 247.778 49.6667C233.369 62.2444 215.165 69.7778 197.333 76C167.828 86.2955 131.21 89.9511 108.889 114.222C106.825 116.466 101.178 123.256 102.944 127.333C104.573 131.091 117.702 123.829 118.722 123.333C135.692 115.091 151.421 102.62 155.889 83.3889C156.765 79.6198 155.138 74.8619 158 72"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* scroll svg */}
          <ScrollSvg />
        </div>
        {/* container skills */}
        <div ref={skillsRef} className="">
          {/* title skills */}
          <motion.h2
            initial={{ x: "-400px" }}
            animate={isSkillView ? { x: "0" } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold"
          >
            SKILLS
          </motion.h2>
          {/* list skills */}
          <motion.div
            initial={{ x: "-500px" }}
            animate={isSkillView ? { x: 0 } : {}}
            className="flex flex-wrap gap-3 mt-8"
          >
            {skills.map((skill) => (
              <div
                className="mr-2 p-2 rounded-lg text-md cursor-pointer bg-gray-700 text-white hover:bg-white hover:text-black transition ease-out duration-500"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
        {/* scroll svg */}
        <ScrollSvg />
        {/* container experience */}
        <div ref={expRef} className="flex flex-col justify-center pb-48 gap-12">
          {/* title experience */}
          <motion.h2
            initial={{ x: "-400px" }}
            animate={isExpView ? { x: "0" } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold"
          >
            EXPERIENCE
          </motion.h2>
          {/* list experience */}
          <motion.div
            initial={{ x: "-500px" }}
            animate={isExpView ? { x: "0" } : {}}
            className=""
          >
            {/* experience list item */}
            <div className="h-48 flex justify-center">
              {/* left */}
              <div className="w-1/3">
                {/* exp title */}
                <div className="text-sm font-semibold p-3 rounded-b-lg rounded-s-lg bg-white">
                  Berkeley Coding Bootcamp
                </div>
                {/* description experience */}
                <div className="text-xs p-3 italic">
                  Training for full stack web development using the newest front
                  end and back end technologies.
                </div>
                {/* date experience */}
                <div className="text-red-900 text-sm p-3 font-semibold">
                  September 2023
                </div>
              </div>
              {/* center */}
              <div className="flex justify-center w-1/6">
                {/* line */}
                <div className="h-full w-1 bg-black relative rounded">
                  {/* circle line */}
                  <div className="h-5 w-5 rounded-full ring-4 -left-2 ring-indigo-600 bg-white absolute"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>
            {/* experience list item */}
            <div className="h-48 flex justify-center">
              {/* left */}
              <div className="w-1/3"></div>
              {/* center */}
              <div className="flex justify-center w-1/6">
                {/* line */}
                <div className="h-full w-1 bg-black relative rounded">
                  {/* circle line */}
                  <div className="h-5 w-5 rounded-full ring-4 -left-2 ring-indigo-600 bg-white absolute"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3">
                {/* exp title */}
                <div className="text-sm font-semibold p-3 rounded-b-lg rounded-r-lg bg-white">
                  Deployed React.js Portfolio
                </div>
                {/* description experience */}
                <div className="text-xs p-3 italic">
                  Used React.js and vanilla CSS to create a single page
                  application portfolio and deployed on GitHub.
                </div>
                {/* date experience */}
                <div className="text-red-900 text-sm p-3 font-semibold">
                  August 2023
                </div>
              </div>
            </div>
            {/* list item experience */}
            <div className="h-48 flex justify-center">
              {/* left */}
              <div className="w-1/3">
                {/* exp title */}
                <div className="text-sm font-semibold p-3 rounded-b-lg rounded-s-lg bg-white">
                  Created MySQL Employee Tracker
                </div>
                {/* desciption experience */}
                <div className="text-xs p-3 italic">
                  Built a Content Management System(CMS) using Node.js,
                  Inquirer, and MySQL.
                </div>
                {/* date experience */}
                <div className="text-red-900 text-sm p-3 font-semibold">
                  June 2023
                </div>
              </div>
              {/* center */}
              <div className="flex justify-center w-1/6">
                {/* line */}
                <div className="h-full w-1 bg-black relative rounded">
                  {/* circle line */}
                  <div className="h-5 w-5 rounded-full ring-4 -left-2 ring-indigo-600 bg-white absolute"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
