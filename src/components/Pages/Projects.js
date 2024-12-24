import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from 'canvas-confetti';
import { useSpring, animated } from '@react-spring/web';

export const Projects = () => {
  const triggerExplosion = (projectId) => {
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FFD700', '#FF6B6B', '#4CAF50', '#64B5F6']
    });
  };

  const projects = [
    {
      id: 1,
      title: "Online Hotel Management System",
      description: "Developed an e-commerce platform using Java, Spring MVC, and Hibernate, improving booking efficiency by 25%.",
      tech: ["Java", "Spring MVC", "Hibernate", "MySQL"],
      type: "Full Stack",
      github: "https://github.com/Likith0023/hotel-management",
    },
    {
      id: 2,
      title: "Text Utilities Website",
      description: "Created a web app that converts text formats using ReactJS and JavaScript.",
      tech: ["ReactJS", "JavaScript", "CSS3"],
      type: "Frontend",
      demo: "https://keen-choux-c6ad14.netlify.app",
      github: "https://github.com/Likith0023/text-utilities",
    },
    {
      id: 3,
      title: "News App",
      description: "Built a news aggregator application using ReactJS and Node.js that filters daily news by category.",
      tech: ["ReactJS", "Node.js", "API Integration"],
      type: "Full Stack",
      demo: "https://splendid-brigadeiros-2ad631.netlify.app",
      github: "https://github.com/Likith0023/news-app",
    },
    {
      id: 4,
      title: "Card Price Filter with Range Slider",
      description: "Developed a card-based website where users can filter cards based on price using a range slider.",
      tech: ["JavaScript", "HTML", "CSS"],
      type: "Frontend",
      demo: "https://incredible-fairy-fabfb8.netlify.app",
      github: "https://github.com/Likith0023/price-filter",
    },
  ];

  // Floating animation for cards
  const floatingAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 2000 },
  });

  // Add GitHub profile section at the top
  const GithubProfileSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <motion.a
        href="https://github.com/Likith0023"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl gap-3"
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#2EA043', '#3FB950', '#7EE787']
          });
        }}
      >
        <motion.span 
          className="text-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          💫
        </motion.span>
        <span className="font-bold">Check out my GitHub Profile</span>
        <span className="text-xl">👨‍💻</span>
      </motion.a>
    </motion.div>
  );

  return (
    <div className="py-12 px-4 dark:bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Title Section */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute inset-0 bg-primary-500 filter blur-lg opacity-20"></span>
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            🎉 Click project links for a fun surprise! 🎈
          </motion.p>
        </div>

        {/* GitHub Profile Section */}
        <GithubProfileSection />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <AnimatePresence key={project.id}>
              <animated.div style={floatingAnimation}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all p-6"
                >
                  {/* Project Details */}
                  <div className="relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Project Links */}
                    <div className="flex gap-4 mb-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-all transform hover:scale-105"
                          onClick={() => triggerExplosion(project.id)}
                        >
                          <span className="mr-2">🚀</span> 
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all transform hover:scale-105"
                          onClick={() => triggerExplosion(project.id)}
                        >
                          <span className="mr-2">💻</span> GitHub
                        </a>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </animated.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Party Button */}
        <motion.div
          className="fixed bottom-6 right-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={() => {
              confetti({
                particleCount: 300,
                spread: 360,
                origin: { y: 0.8 }
              });
            }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            title="Click for more confetti!"
          >
            🎉
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
