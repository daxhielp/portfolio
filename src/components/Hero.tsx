import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';


const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImg}
              alt="Developer Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-gray-700 object-cover object-top"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi! I'm {' '}
              <span className="text-blue-600 dark:text-blue-400">
                Daxhiel Perugorria
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Software Engineer and Code Enthusiast
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2">
                <a href='https://docs.google.com/document/d/15NL-Z0hT5WCBf9XfoNlPBPLkK4J4u9r9FAP9BFD8czs/edit?usp=sharing' target='_blank'>Open Resume</a>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a
                href="https://github.com/daxhielp"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daxhielp/"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;