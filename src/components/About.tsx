import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="/profile.jpg"
              alt="Rizky Cristian"
              className="rounded-lg w-full object-cover h-96 border-2 border-blue-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Profile+Photo'
              }}
            />
          </div>

          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm an Informatics Engineering graduate from Telkom University with a strong passion for software development and web technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in Laravel, PHP, JavaScript, and MySQL, I've developed web applications that solve real-world problems. I'm particularly interested in backend development, database design, and REST API architecture.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and continuously learning new technologies. When I'm not coding, I love sharing knowledge and collaborating with other developers.
            </p>

            <div className="pt-6 flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-gray-400">Tech Stack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
