import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Work Experience</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-gray-400 text-lg mt-1">{exp.company}</p>
                </div>
                <Briefcase className="text-blue-400" size={28} />
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-300 mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
