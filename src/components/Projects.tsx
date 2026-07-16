import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x300?text=Project+Screenshot'
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400 text-sm font-semibold">{project.type}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                </div>

                <p className="text-gray-400">{project.description}</p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2 text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
