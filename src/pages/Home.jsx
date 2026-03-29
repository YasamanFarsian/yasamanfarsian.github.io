import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  PencilRuler
} from "lucide-react";
import { useState } from "react";
import cvPdf from "@/assets/files/cv_pdf/YasamanFarsian-CV.pdf";
import profileImg from "@/assets/profile/profile.jpg";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import Skills from "./Skills";


const Home = () => {
  const [copied, setCopied] = useState(false);
  const whatsappNumber = "+4796715675";


  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Explore scalable web applications built with React, TypeScript, and modern frontend technologies.",
      link:'/projects'
    },
    {
      icon: <PencilRuler className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "View user-centered designs and interactive prototypes created in Figma for real-world applications.",
      link:'/portfolios'
    },

  ];

  return (
    <div className="min-h-screen mt-5 pt-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[0.7fr_1.2fr] gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-md max-w-lg">
            <img
              src={profileImg}
              alt="Yasaman Farsian"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className='mt-6 pt-7'>
          <motion.h1
            className="text-2xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yasaman Farsian
          </motion.h1>

          <motion.h3
            className="text-l sm:text-xl md:text-md font-semibold mb-4 sm:mb-6 relative tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Front-End Developer / UI-UX Engineer
          </motion.h3>

          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-justify">
              Frontend Engineer with 6+ years of experience specializing in real-time, data-intensive web applications using React and TypeScript. Over the last 4 years, I have built cloud-based platforms for offshore drilling operations, developing high-performance dashboards that visualize complex data and support critical decision-making. I combine strong frontend engineering with UI/UX design, creating intuitive, scalable interfaces from Figma to production. Experienced in performance optimization, testing, CI/CD, and collaborating in Agile, cross-functional teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <div>
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 py-3 text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/YasamanFarsian/yasamanfarsian.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group w-12"
                aria-label="Visit GitHubIcon profile"
              >
                <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[50px]">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/yasaman-farsian-548b93167/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group w-12"
                aria-label="Visit LinkedIn profile"
              >
                <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[50px]">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto" />
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group w-12"
                aria-label="Contact via WhatsApp"
              >
                <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[50px]">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto" />
                </div>
              </a>
            </div>
          </div>

        </ScrollAnimation>
      </div>


      <div className="text-center relative z-10 max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Portfolio
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-16">
              {achievements.map((achievement) => (
                <a href={achievement.link}>

                <div className="bg-white/5 p-6 py-6 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center min-h-40">

                  {/* Icon */}
                  <div className="text-white mb-4 flex justify-center">
                    {achievement.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400">
                    {achievement.description}
                  </p>

                </div>
                </a>

              ))}
            </div>
          </div>
        </ScrollAnimation>


        <ScrollAnimation>
          <Skills />
        </ScrollAnimation>

      </div>

    </div>
  );
};

export default Home;
