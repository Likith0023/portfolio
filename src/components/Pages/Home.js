import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImg from "../../main.jpg";
import confetti from 'canvas-confetti';

export const Home = () => {
  const skills = [
    { icon: "💻", title: "Frontend", description: "ReactJS, HTML5, CSS3, JavaScript" },
    { icon: "⚡", title: "Backend", description: "Java, Spring MVC, Node.js" },
    { icon: "🛢️", title: "Database", description: "MySQL, MongoDB" },
    { icon: "🔧", title: "Tools", description: "Git, Jenkins, VS Code" },
  ];

  // Function to trigger confetti
  const triggerConfetti = () => {
    // Create multiple bursts of confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section with Animated Background */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                opacity: 0.2 + Math.random() * 0.5
              }}
              animate={{
                y: window.innerHeight,
                opacity: 0
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Glowing overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/20 to-gray-600" />
        
        {/* Content */}
        <div className="relative z-10 text-white">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            src={mainImg}
            alt="Likith R L"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={triggerConfetti}
            title="Click me for a surprise! 🎉"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-300 mb-4"
          >
            ✨ Click my photo for a fun surprise! ✨
          </motion.p>
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Likith R L
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl mb-6">Software Engineer</p>
          </motion.div>

          {/* Social Links with hover effects */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Likith0023"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
            >
              <span className="text-2xl">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/likith-shiv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 backdrop-blur-sm"
            >
              <span className="text-2xl">LinkedIn</span>
            </motion.a>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
            <a 
              href="https://drive.google.com/file/d/1dmCVDDrjYJ76a8lsHFPY6VweO9nQeaC0/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Passionate Software Engineer with 1+ year of experience crafting full-stack magic! ✨ Whether it’s building sleek, scalable web apps with ReactJS, Firebase, Tailwind CSS, or sprinkling some Wix Velo wizardry, I’ve got it covered. 🛠️ Agile enthusiast on a mission to deliver software so efficient, it practically runs itself. 🚀 Let's turn ideas into digital masterpieces!
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="py-16 px-4 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all dark:text-white"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-600">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Projects Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Add floating party button */}
      <motion.button
        className="fixed bottom-6 left-6 p-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg z-50"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 },
            colors: ['#FF69B4', '#FFD700', '#FF6B6B', '#4CAF50', '#64B5F6']
          });
        }}
        title="More confetti!"
      >
        🎊
      </motion.button>
    </div>
  );
};
