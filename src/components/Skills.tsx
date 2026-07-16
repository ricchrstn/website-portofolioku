import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-blue-400 font-bold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Languages</h3>
            {portfolioData.skills.languages.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Frameworks</h3>
            {portfolioData.skills.frameworks.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          {/* Database */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Database</h3>
            {portfolioData.skills.database.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
