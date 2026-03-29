
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
  Calendar,
  
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import codeAlphaPdf from "@/assets/files/experience_pdf/codeAlpha.pdf";
import bharatInternPdf from "@/assets/files/experience_pdf/bharatIntern.pdf";
import codeClausePdf from "@/assets/files/experience_pdf/codeClause.pdf";

const experiences = [
  {
    title: "Frontend Developer & UI/UX Engineer",
    company: "Sekal AS",
    location: "Stavanger, Norway",
    period: "07.2022-Present",
    portfolioUrl: codeAlphaPdf,
    technologies: [
      "React.js",
      "TypeScript",
      "Python",
      "REST APIs",
      "Jest",
      "Playwright",
      "CI/CD",
      "Agile",
      "Figma"
    ],
    description: [
      "Developed scalable React + TypeScript applications for real-time, data-intensive offshore systems.",
      "Built high-performance UI components for complex, real-time data visualization.",
      "Developed a high-performance Python dashboard to visualize KPIs and operational statistics, aggregating processed data from several oil and gas rigs into a single unified interface.",
      "Implemented automated testing using Jest and Playwright to improve reliability and maintainability.",
      "Integrated REST APIs to enable seamless, real-time user experiences.",
      "Collaborated cross-functionally in Agile teams to deliver production-ready features.",
      "Contributed to CI/CD pipelines and the evolution of scalable frontend architecture.",
      "Designed intuitive, responsive interfaces in Figma with a strong focus on user experience."
    ],
  },
  {
    title: "Frontend Developer & UI/UX Engineer",
    company: "IT ASIA",
    location: "Tehran, Iran ",
    period: "11.2017-07.2021",
    portfolioUrl: bharatInternPdf,
    technologies: [
      "JavaScript",
      "Angular",
      "PHP",
      "Laravel",
      "HTML",
      "CSS",
      "WordPress",
      "Adobe XD",
      "Git"
    ],
    description: [
      "Developed responsive web applications and e-commerce platforms using JavaScript, Angular, HTML, and CSS, with a strong focus on performance, user experience, and SEO.",
      "Translated modern UI/UX designs from Adobe XD into responsive, cross-device user interfaces.",
      "Collaborated with backend developers to integrate PHP/Laravel APIs and support database operations using SQL.",
      "Maintained and customized WordPress websites while managing version control with Git."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Manzoomeh Negaran",
    location: "Tehran, Iran",
    period: "08.2015 - 11.2017",
    portfolioUrl: codeClausePdf,
    technologies: [
      "jQuery",
      "HTML",
      "CSS",
      "SQL",
      "Basis Core",
      "SEO"
    ],
    description: [
      "Designed and delivered 15+ high-quality websites, improving usability and overall performance.",
      "Built responsive, pixel-perfect user interfaces from Photoshop designs using HTML and CSS.",
      "Developed custom web solutions using the Basis Core Platform to meet specific business requirements.",
      "Created database-driven web pages and worked with SQL-based systems.",
      "Wrote clean, reusable, and standards-compliant frontend code."
    ]
  },

];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr]">
                <div className="p-6 sm:p-8">

                   <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{exp.period}</span>
              </div>
                  <div className="flex items-center gap-3  sm:mb-1">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1 text-gray-300 mb-2 sm:mb2 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((item, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 text-sm  text-gray-300 bg-[#4b587c] rounded-lg w-fit"
                      >
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  <div className="relative h-full flex border-t border-white/10 py-3">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 text-orange-200 rounded-xl flex items-center gap-2 "
                      whileHover={{ y: -5 }}
                    >
                      View Portfolio
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
           
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
