import React, { useState } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const [sparkles, setSparkles] = useState([]);

  const createSparkle = (e) => {
    const rect = e.target.getBoundingClientRect();
    const sparkle = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    
    setSparkles(prev => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 1000);
  };

  const education = [
    {
      degree: "MCA (Computer Science)",
      school: "T. John College, Bangalore University",
      year: "2023",
      score: "85.6%",
      emoji: "🎓",
    },
    {
      degree: "BCA (Computer Science)",
      school: "Kalpatharu First Grade College, Tumkur University",
      year: "2021",
      score: "74.4%",
      emoji: "👨‍🎓",
    },
    {
      degree: "Class XII",
      school: "Udaya Bharathi PU College, Tiptur",
      year: "2018",
      score: "56.4%",
      emoji: "📚",
    },
    {
      degree: "Class X",
      school: "SRS Vidyanikethana, Bangalore",
      year: "2015",
      score: "76.8%",
      emoji: "✏️",
    },
  ];

  const hobbies = [
    { name: "Coffee Enthusiast", emoji: "☕", description: "Can't code without my daily dose of caffeine!" },
    { name: "Swimming", emoji: "🏊‍♂️", description: "Making waves in pools and in tech!" },
    { name: "Sketching", emoji: "🎨", description: "Drawing my way through creative solutions" },
    { name: "Cricket", emoji: "🏏", description: "Gold medalist & team player on & off the field" },
    { name: "Volleyball", emoji: "🏐", description: "Silver medalist, because why not?" },
    { name: "Fun Loving", emoji: "😄", description: "Bringing joy to code and life!" },
  ];

  const languages = [
    { name: "English", level: "Professional", emoji: "🇬🇧" },
    { name: "Kannada", level: "Native", emoji: "🏠" },
    { name: "Hindi", level: "Fluent", emoji: "🇮🇳" },
    { name: "Telugu", level: "Conversational", emoji: "🗣️" },
  ];

  return (
    <div className="py-12 px-4 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto relative overflow-hidden"
        onClick={createSparkle}
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
          About Me 
        </h1>

        {/* Fun Intro */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm a code-loving, coffee-drinking developer who turns caffeine into code! 
            When I'm not debugging, you'll find me making waves in the pool or sketching my next big idea.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">My Learning Journey 📚</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{edu.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-secondary-500 dark:text-secondary-400">{edu.year}</span>
                      <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm">
                        Score: {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Things I Love ❤️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <span className="text-4xl mb-4 block">{hobby.emoji}</span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{hobby.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Languages I Speak 🗣️</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg text-center"
              >
                <span className="text-3xl mb-2 block">{lang.emoji}</span>
                <h3 className="font-bold text-gray-800 dark:text-white">{lang.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
              rotate: [0, 180]
            }}
            transition={{ duration: 1 }}
            className="absolute w-4 h-4 text-yellow-400"
            style={{
              left: sparkle.x,
              top: sparkle.y,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
