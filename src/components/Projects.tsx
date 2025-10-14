import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, X } from 'lucide-react';

import kwiiImg from '../../assets/kwii.jpg';

type Project = {
  id: number;
  title: string;
  description: string;
  extendedDescription?: string;
  images: string[];
  technologies: string[];
  features?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  date: string;
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Kwii',
      description:
        'A fully interpreted programming language built in java. Similar to python and javascript, Kwii is easy!',
      extendedDescription:
        'Kwii is an interpreted language with first-class functions and a REPL for experimentation. The interpreter implements an AST to parse and evaluate syntax. The language supports variables, control flow, functions, and simple classes.',
      images: [kwiiImg],
      technologies: [
        'Java',
        'Abstract Syntax Trees',
        'Programming Language Design'
      ],
      features: ['REPL', 'AST generator', 'Simple OOP'],
      githubUrl: 'https://github.com/daxhielp/kwii-main',
      liveUrl: null,
      date: '2025'
    },
    {
      id: 2,
      title: 'FlappyBot',
      description:
        'An AI agent trained with NeuroEvolution of Augmenting Topolgies (NEAT) to play a version of the flappy bird game.',
      extendedDescription:
        'FlappyBot uses NEAT to evolve neural networks that control the bird. Training experiments, fitness plots, and checkpointed genomes are available in the repository. The project includes visualization tools to inspect agent behavior during evaluation.',
      images: ['https://live.staticflickr.com/65535/49203125457_a0184cae7a_o.png'],
      technologies: ['Python', 'Neural Networks', 'Reinforcement Learning'],
      features: ['NEAT', 'Fitness logging', 'Evaluation visualizer'],
      githubUrl: null,
      liveUrl: null,
      date: '2025'
    }
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in software development.
            Each project reflects my commitment to quality, innovation, and user experience.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {/* This button was empty and has been removed for cleanup. */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal / Expanded View */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)} // This allows closing by clicking the overlay
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-transform duration-300 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hidden sm:inline-flex"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="grid sm:grid-cols-2">
                <div className="space-y-4">
                  {/* main image */}
                  <div className="h-52 sm:h-full rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* thumbnails if present */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 mt-2">
                      {selectedProject.images.map((src: string, i: number) => (
                        <img key={i} src={src} alt={`${selectedProject.title}-${i}`} className="w-20 h-12 object-cover rounded" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="md:p-6 p-5 flex flex-col">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                    </div>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {selectedProject.extendedDescription || selectedProject.description}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.features && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights</h4>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                          {selectedProject.features.map((f: string, i: number) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 flex gap-3">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} /> View Code
                        </a>
                      )}

                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="md:mt-auto md:pt-6 flex justify-end text-sm text-gray-500 dark:text-gray-400 items-center gap-2">
                    <Calendar size={14} />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/daxhielp?tab=repositories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;