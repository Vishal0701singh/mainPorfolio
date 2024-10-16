import project1Img from "../assets/worldAtlas.png";
import project2Img from "../assets/Pokemons.png";
import project3Img from "../assets/banking.png";
import project4Img from "../assets/diceGame.png";
import project5Img from "../assets/salesprediction.png";
import project6Img from "../assets/irrigation.jpg";

export const projects = [
  {
    id: 1,
    title: "worldAtlas",
    date: "September 2024",
    description: "The worldAtls Website, built with HTML, CSS, React.js,  and the API, offers users a dynamic platform to explore all countries and their details with daily/monthly updates. It features search functionality by name, filter functionality by region, and ascending and descending order by their names, provides detailed views  all in a responsive and visually appealing interface.",
    image: project1Img,
    tags: ["HTML", "CSS", "JavaScript", "React Js", "API"],
    github: "https://github.com/Vishal0701singh/worldAtlas",
    webapp: "https://worldatlasbyvishal.netlify.app/",
  },
  {
    id: 2,
    title: "Pokemon cards",
    date: "August 2024",
    description: "The Pokemon cards Website, created with HTML, CSS, React.js and API. It features search functionality by name of cards. The user can search the cards using their name and search function fire with very first letter. The interface is responsive, intuitive, and visually appealing, ensuring smooth user interactions and efficient Pokemon cards.",
    image: project2Img,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Js",
      "API",
    ],
    github: "https://github.com/Vishal0701singh/pokemon",
    webapp: "https://vishal0701singh.github.io/pokemon/",
  },
  {
    id: 3,
    title: "Simple banking system",
    date: "September 2023",
    description: "The Simple banking System is a web application using HTML, CSS and vanilla JavaScript. It allows to login with their userName and password. Features include user authentication, user can transfer the money form one user to another user, we can sort the transactions and a user-friendly interface.",
    image: project3Img,
    tags: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",

    ],
    github: "https://github.com/Vishal0701singh/bankingwebsite",
    webapp: "https://vishal0701singh.github.io/bankingwebsite/",
  },
  {
    id: 4,
    title: "Dice Game",
    date: "July 2023",
    description: "The Dice game, crafted with HTML, CSS, and Vanilla JavaScript. In this game there are two user one is active user and the other is inActive, active user can roll dice untill one is not come or hold the score, if one come all the current score will become zero. It features a user-friendly interface.",
    image: project4Img,
    tags: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
    ],
    github: "https://github.com/Vishal0701singh/pigGame",
    webapp: "https://vishal0701singh.github.io/pigGame/",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    date: "October 2024",
    description: "The Sales Prediction System aims to using machine learning algorithms implemented in Python. By analyzing historical sales data, the system will be capable of predicting future sales, helping businesses make data-driven decisions. The machine learning models used will identify patterns and correlations in the data to provide accurate forecasts.",
    image: project5Img,
    tags: [
      "Python",
      "Pandas",
      "Numpy",
      "tkinter",
      "xgboost ",
    ],
    github: "#",
    webapp: "#",
  },
  {
    id: 6,
    title: "Smart Irrigation System",
    date: "March 2024",
    description: "The Smart Irrigation System uses sensors, actuators, bread board, Node MCU ESp8266 and controllers. Developed a simple prototype of Smart Irrigation System, in which we can take eyes on the temperature of the field.Implemented soil moisture sensor through which we can sense the moisture level of the field and through PIR MotionSensor we can also know about the interaction of the animals.",
    image: project6Img,
    tags: [
      "Node MCU",
      "IOT",
      "Sensor",
      "controllers",
    ],
    github: "#",
    webapp: "#",
  },
];
