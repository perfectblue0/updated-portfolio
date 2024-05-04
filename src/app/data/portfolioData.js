const linksArray = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

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
  "Insomnia",
  "Atlas",
  "Git",
  "GitHub",
];

const experiences = [
  {
    id: 33,
    event: "UC Berkeley Coding Bootcamp",
    date: "September 2023",
    description:
      "Training for full stack web development using the newest front end and back end technologies.",
  },
  {
    id: 34,
    event: "Deployed React.js Portfolio",
    date: "August 2023",
    description:
      "Used React.js and vanilla CSS to create a single page application portfolio and deployed on GitHub.",
  },
  {
    id: 35,
    event: "Created MySQL Employee Tracker",
    date: "June 2023",
    description:
      "Built a Content Management System(CMS) using Node.js, Inquirer, and MySQL.",
  },
  {
    id: 36,
    event: "Deployed my first Portfolio",
    date: "March 2023",
    description:
      "Using HTML and vanilla CSS, I deployed my very first responsive portfolio.",
  },
];

const projectsArray = [
  {
    id: 88,
    project: `First React Portfolio`,
    description: `This deployed project was my second portfolio application with multiple images and hover effects.`,
    tech: `React, CSS`,
    website: `https://perfectblue0.github.io/c-20-React-Portfolio/`,
  },
  {
    id: 89,
    project: `E-commerce Backend`,
    description: `This is an undeployed project where I used Sequelize to interact with a MySQL database to build the backend of an e-commerce application.`,
    tech: `MySQL, Sequelize, Inquirer`,
    website: `https://github.com/perfectblue0/c-13-E-commerce-ORM?tab=readme-ov-file`,
  },
  {
    id: 90,
    project: `Social Network API`,
    description: `I built this API so users could share their thoughts, reactions to friends' thoughts, and create a list of their friends. This project is not deployed and uses Express.js for routing, Day.js to format dates, has a MongoDB database, and Mongoose ODM.`,
    tech: `MongoDB, Mongoose, Express.js, Day.js, Insomnia to test`,
    website: `https://github.com/perfectblue0/c-18-NoSQL-Social-Net-API`,
  },
];

export { skills, experiences, linksArray, projectsArray };
