import project1 from "@/assets/projects_img/DT-Dashboard.png";
import project2 from "@/assets/projects_img/Drillability.png";
import project3 from "@/assets/projects_img/autonomous.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Drilling Automation Dashboard-Cloud Platforms",
    description:
      "A real-time drilling monitoring and optimization platform and digital twin–based advisory system for drilling.",
    image: project1,
    prototype: "",
    tags: [
      "React.js",
      "TypeScript",
      "Python",
      "REST APIs",
      "Jest",
      "Playwright",
      "CI/CD",
      "Agile",
      "Figma",
    ],
  },
  {
    title: "Drillability widget",
    description:
      "A modern Book Management System built with the MERN stack (React 19 & Tailwind 4.0). Features secure JWT authentication, protected routes, and full CRUD functionality.",
    image: project2,
    prototype: "",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Tailwind",
      "JWT",
      "Bcrypt",
      "REST API",
    ],
  },
  {
    title: "Autonomous Drilling",
    description:
      "Bash-based network scanning tool that provides live host discovery, port scanning, traceroute, and ping tests, featuring visually appealing ASCII banners and 80+ star at GitHub",
    image: project3,
    prototype: "",
    tags: ["Linux", "Bash", "Networking", "Monitoring", "NMAP", "Scripting"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 mt-5 px-4 max-w-6xl mx-auto pb-5">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">Projects</h2>
      </ScrollAnimation>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-2 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.prototype}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Prototype</span>
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
