const linksArray = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
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

const picsArray = [
  {
    project: `First React Portfolio`,
    img: `/vanPort.jpg`,
    altText: `css code`,
    description: `This deployed project was my first application made with React and Vanilla CSS.`,
    website: `https://perfectblue0.github.io/c-20-React-Portfolio/`,
  },
  {
    project: `E-commerce Backend`,
    img: `/ecomImg.jpg`,
    altText: `street sign that says e commerce`,
    description: `This is an undeployed project where I used Sequelize to interact with a MySQL database to build the backend of an e-commerce application.`,
    website: `https://github.com/perfectblue0/c-13-E-commerce-ORM?tab=readme-ov-file`,
  },
  {
    project: `Social Network API`,
    img: `/handsNet.jpg`,
    altText: `hands of different people on a table`,
    description: `I built this API so users could share their thoughts, reactions to friends' thoughts, and create a list of their friends. This project is not deployed and uses Express.js for routing, Day.js to format dates, has a MongoDB database, and Mongoose ODM.`,
    website: `https://github.com/perfectblue0/c-18-NoSQL-Social-Net-API`,
  },
];

export { skills, experiences, linksArray, picsArray };
