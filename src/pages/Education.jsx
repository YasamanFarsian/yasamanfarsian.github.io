import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import bTechPdf from '@/assets/files/education_pdf/B Tech.pdf'

const Education = () => {
  const educationData = [
    {
      university: 'University of Stavanger (UIS), Stavanger, Norway',
      duration: '8-2021 - Paused',
      degree: 'Master of Science, Computer Science, M.Sc.',
      resultUrl: bTechPdf,
      description:
        'paused to pursue professional career ',
    },
    {
      university: 'Azad University Tehran South (IAU), Iran',
      duration: '09.2017 - 09-2020',
      degree: 'Master of Science, Information Technology, M.Sc.',
      grade: 'Graduated with honors, GPA 4.0 out of 5',
      resultUrl: bTechPdf,

    },
    {
      university: 'Azad University of Karaj (KIAU), Iran',
      duration: '09.2011 - 09-2014',
      degree: 'Bachelor of Science, Software Engineering, B.Sc.',
      grade: 'Graduated with honors, GPA 4.0 out of 5',
      resultUrl: bTechPdf,

    },
  ]

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.university}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
            >
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[1fr]">


                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text- font-semibold">{edu.university}</span>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Award className="w-4 h-4" />
                      <span>{edu.grade}</span>
                    </div>
                  )}


                  {edu.description && (
                    <div className="flex items-start gap-2 text-gray-300 mb-6">
                      <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p className="text-sm leading-7">{edu.description}</p>
                    </div>
                  )}

                  {edu.grade && (
                    <motion.a
                      href={edu.resultUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-5 gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      View Result
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Education
