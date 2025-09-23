import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/daxhielp',
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/daxhielp/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:daxperugorria@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Daxhiel Perugorria
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Software Engineer with a passion for building innovative solutions, providing exceptional user experiences, and connecting people through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`text-gray-400 ${link.color} transition-colors p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.google.com/document/d/14z4d4w9BMfGHr-LIFkIsVIKHOJvHFJ2_l6TCpYb2rwE/edit?usp=drive_link"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  download
                  aria-label="Download Resume"
                >
                  Resume
                  <ExternalLink size={14} />
                </a>
              </li>
              
              <li>
                <a
                  href="https://github.com/daxhielp/portfolio/"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Made by  Daxhiel Perugorria Ruciel</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            This portfolio is built with React, TypeScript, Tailwind CSS, and Node.js. 
            Deployed with modern CI/CD practices.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;