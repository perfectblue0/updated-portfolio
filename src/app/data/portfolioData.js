const linksArray = [
  { url: "/", title: "Home" },
  { url: "/about/", title: "About" },
  { url: "/projects/", title: "Projects" },
  { url: "/contact/", title: "Contact" },
];

const skills = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Framer Motion",
  "React.js",
  "JavaScript XML(JSX)",
  "Next.js",
  "Node.js",
  "DOMPurify",
  "APIs",
  "MySQL",
  "Sequelize",
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
    id: 87,
    img: `/portfolio_website.png`,
    project: `Next.js React Portfolio`,
    role: `Sole author`,
    description: `This is my latest portfolio, this application, that has a completed back-end. Users can view my work and send me an email as well. Check out the link to view the repo.`,
    tech: `React, Next.js, Tailwind CSS, Framer-motion, EmailJs, DOMPurify, JavaScript XML(JSX)`,
    functionality: `https://avidwebdev.com/`,
    repo: `https://github.com/perfectblue0/updated-portfolio`,
  },
  {
    id: 88,
    img: `/first_react_website.png`,
    project: `First React Portfolio`,
    role: `Sole author`,
    description: `This deployed project was my second portfolio application with multiple images and hover effects. Explore the deployed application below.`,
    tech: `React, JavaScript XML(JSX), CSS3`,
    functionality: `https://perfectblue0.github.io/c-20-React-Portfolio/`,
    repo: `https://github.com/perfectblue0/c-20-React-Portfolio`,
  },
  {
    id: 89,
    img: `/e_commerce_back_end.png`,
    project: `Object Relational Mapping(ORM) E-Commerce Back-end `,
    role: `Back-end`,
    description: `This is an undeployed project where I used Sequelize to interact with a MySQL database to build the backend of an e-commerce application. Check out the link for the code, instructions, and a video that demonstrates the application's functionality.`,
    tech: `JavaScript, Node.js, Nodemon, dotenv, MySQL, Sequelize, Insomnia to test`,
    functionality: `https://drive.google.com/file/d/1-4bDZS_Mn9vMhDMPVB7--ldy7Xi3xPcf/view`,
    repo: `https://github.com/perfectblue0/c-13-E-commerce-ORM`,
  },
  {
    id: 90,
    img: `/social_network_api.png`,
    project: `Social Network API`,
    role: `Sole author`,
    description: `I built this API so users could share their thoughts, reactions to friends' thoughts, and create a list of their friends. This project is not deployed and uses Express.js for routing, Day.js to format dates, has a MongoDB database, and Mongoose ODM. Check out the link for the code, instructions, and a video that demonstrates the application's functionality.`,
    tech: `MongoDB, Mongoose, Express.js, Day.js, Insomnia to test`,
    functionality: `https://drive.google.com/file/d/1LQ_HFEfqbhRCdsVYuqtnSu57jtupzZbY/view`,
    repo: `https://github.com/perfectblue0/c-18-NoSQL-Social-Net-API`,
  },
  {
    id: 91,
    img: `/timed_quiz.png`,
    project: `Timed Quiz for Mexican State Capitals`,
    role: `Sole author`,
    description: `A timed quiz on Mexican State Capitals that uses JavaScript to: subtract time from the clock if users select the incorrect option, adds points when users select the correct option, and provides the option to save a user's final score when the game ends or delete the score history.`,
    tech: `JavaScript, CSS3, HTML5, localStorage`,
    functionality: `https://perfectblue0.github.io/challenge-4-timed-quiz-w-localStorage/`,
    repo: `https://github.com/perfectblue0/challenge-4-timed-quiz-w-localStorage`,
  },
];

export { skills, experiences, linksArray, projectsArray };
