import React from 'react';
import { Globe, Smartphone, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js',
      color: 'bg-blue-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Flutter, Progressive Web Apps',
      color: 'bg-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Git & Github, Mentoring',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm an aspiring software engineer with a passion for building innovative applications.
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                I began my journey in software development in high school, where I discovered my love for coding. 
                Since then, I've honed my skills in various programming languages and frameworks, ranging from a simple text-based game to a fully fledged interpreted language.
              </p>
              <p className="leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies. When I'm not coding, you can find me 
                learning the latest technologies or 
                exploring new frameworks.
              </p>
              <p className="leading-relaxed">
                My goal is to create applications that bring not only deliver results but also bring people together.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${skill.color} p-3 rounded-lg w-fit mb-4 text-white`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;