import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="text-red-500" size={20} fill="currentColor" />
            <span className="text-gray-400">by Rizky Cristian S</span>
          </div>

          <p className="text-gray-500 text-sm mb-4">
            © {currentYear} Rizky Cristian S. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs">
            Built with React • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
