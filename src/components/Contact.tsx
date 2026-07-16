import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">{portfolioData.personal.location}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {portfolioData.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition duration-300"
                    title={social.name}
                  >
                    {social.name === 'LinkedIn' && <Linkedin size={20} />}
                    {social.name === 'GitHub' && <Github size={20} />}
                    {social.name === 'Email' && <Mail size={20} />}
                    {(social.name === 'Instagram' || social.name === 'Telegram' || social.name === 'TikTok') && <Send size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
