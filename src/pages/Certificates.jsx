import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import typescriptPdf from "@/assets/files/certificates_pdf/TypeScript.pdf";
import awsEcsPdf from "@/assets/files/certificates_pdf/aws_ecs.pdf";
import cloudComputingPdf from "@/assets/files/certificates_pdf/cloudComputingPdf.pdf";
import costManagementPdf from "@/assets/files/certificates_pdf/costManagementPdf.pdf";
import copilotPdf from "@/assets/files/certificates_pdf/copilotPdf.pdf";
import CorearchitecturalPdf from "@/assets/files/certificates_pdf/CorearchitecturalPdf.pdf";


const certificates = [
  {
    title: "MCTS: Sql server ,Database Development ( Design and Implementation)",
    issuer: "Sematec",
    date: "September 2017",
    link: typescriptPdf,
    description:
      "Demonstrated expertise in database design, development, and implementation using Microsoft SQL Server.",
    skills: [
      "SQL",
      "database",
      "design",
      "stored procedures",
      "query optimization",
    ],

  },
  {
    title: "ReactJs",
    issuer: "Sematec",
    date: "March 2026",
    link: awsEcsPdf,
    description:
      "In-depth course covering modern React, including hooks, state management, component architecture, and real-world application development.",
    skills: ["React", "Hooks", "Redux", "React Router", "Next.js"]
  },
 

];

const badges = [
  {
    title: "Cloud computing",
    issuer: "Microsoft",
    date: "14th October 2025",
    link: cloudComputingPdf,
    description: 'Introduction to cloud computing, cloud concepts, deployment models, and understanding shared responsibility in the cloud.'
  },
  {
    title: "Cost management in Azure",
    issuer: "Microsoft",
    date: "24th October 2025",
    link: costManagementPdf,
    description: 'Describe microsoft Cost Management tool, cost optimization options, including Reservations, savings plans, and spot pricing.'
  },
  {
    title: "Microsoft Copilot",
    issuer: "Microsoft",
    date: "6th November 2025",
    link: copilotPdf,
    description: 'Critically assess the main functions and benefits of Copilot at enhancing productivity and creativity.'
  },
  {
    title: "Core architectural components of Azure",
    issuer: "Microsoft",
    date: "13th November 2025",
    link: CorearchitecturalPdf,
    description: 'Describe Azure regions, region pairs, datacenters and hierarchy of resource groups, subscriptions, and management groups.'
  },
 

];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 "
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2 mb-6 mt-3">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>




       <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-8 mt-14"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Badges</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {badges.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
               
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 "
                >
                  View Badge
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
