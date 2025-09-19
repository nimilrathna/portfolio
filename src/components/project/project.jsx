import ProjectCard from "./ProjectCard";
import StockPro from "../../assets/stock-pro.png";
import MealPlanner from "../../assets/meal-planner.png";
import EasyInventory from "../../assets/easy-inventory.png";
import FirstGrip from "../../assets/first-grip.png";
export default function Projects() {
  const myProjects = [
    {
      key: 1,
      title: "StockPro, AI Powered",
      description:
        "MarketPulse is a real-time stock dashboard and prediction app that helps investors track market movements, analyze trends, and make informed decisions with live prices and AI-driven insights.",
      techStack: [ "Spring Boot", "Java", "WebSocket","React JS", "TypeScript", "Redis"],
      image: StockPro,
      link: "#",
    },
    {
      key: 2,
      title: "Meal Scheduler with AI",
      description:
        "This app is your personal kitchen assistant, designed to simplify meal planning and save you time. It helps you organize your weekly meals, discover new recipes, and create smart shopping lists, all in one place.",
      techStack: ["React", "TailwindCSS", "Spring Boot", "MongoDB"],
      image: MealPlanner,
      link: "https://github.com/yourusername/meal-scheduler",
    },
    
    {
      key: 3,
      title: "Easy Inventory",
      description:
        "Easy Inventory is a simple, yet powerful app designed for small businesses to effortlessly manage their stock and streamline the ordering process.",
      techStack: ["Android Studio", "Java", "SQLite"],
      image: EasyInventory,
      link: "#",
    },
    {
      key: 4,
      title: "First Grip - Learn Phonetics ",
      description:
        "First Grip App is a fun and interactive phonetics app designed to help kids take their first steps in reading. It uses engaging games, colorful characters, and playful activities to teach foundational sounds and letter recognition",
      techStack: ["Android Studio", "Java", "SQLite"],
      image: FirstGrip,
      link: "#",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {myProjects.map((project, index) => (
        <ProjectCard project = {project} />
      ))}
    </div>
  );
}
