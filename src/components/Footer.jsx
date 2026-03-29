import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Phone , MapIcon} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Portfolios', path: '/portfolios' },
    { name: 'Certificates', path: '/certificates' },
  ]

  const column1 = pageLinks.slice(0, 3)
  const column2 = pageLinks.slice(3, 6)
  const column3 = pageLinks.slice(6, 9)

  return (
    <footer className="relative mt-24 bg-black/50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
              <span className="text-xl font-bold text-white">Yasaman Farsian</span>
            </Link>
            <p className="text-sm text-gray-400">
              Frontend Developer based in Stavanger, Norway.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:yfarsiansani@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Email Yasaman Farsian"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  yfarsiansani@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+4796715675"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Call Yasaman Farsian"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +4796715675
                </a>
              </li>
              <li>
                <a
                  href="tel:+4796715675"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Call Yasaman Farsian"
                >
                  <MapIcon className="w-4 h-4" aria-hidden="true" />
                 Stavanger, Norway
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <div>
                {column1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column3.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

  
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/YasamanFarsian/yasamanfarsian.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/yasaman-farsian-548b93167/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:yfarsiansani@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center w-full">
              © {currentYear} Yasaman Farsian. All rights reserved.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
