import React, { useState } from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const [activeBubble, setActiveBubble] = useState(null);

  const createBubbles = (skillId) => {
    setActiveBubble(skillId);
    const colors = ['#FF69B4', '#FFD700', '#FF6B6B', '#4CAF50', '#64B5F6'];
    
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'floating-bubble';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.animationDuration = `${1 + Math.random() * 2}s`;
      document.body.appendChild(bubble);
      
      setTimeout(() => bubble.remove(), 2000);
    }
    setTimeout(() => setActiveBubble(null), 1000);
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java 8", "JavaScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚡",
      skills: ["ReactJS", "Spring MVC", "Hibernate", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases & Tools",
      icon: "🛢️",
      skills: ["MySQL", "MongoDB", "Firebase", "Git","Eclipse", "VS Code"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Other Skills",
      icon: "🔧",
      skills: ["RESTful APIs", "Agile Methodologies", "SDLC", "Unit Testing", "Problem Solving"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Pravaah Consulting, Bangalore",
      period: "Jan 2023–Present",
      description: "Developed and maintained full-stack web applications using Java and ReactJS. Optimized database queries, enhancing performance by 20%. Collaborated with teams to deliver features using Agile methodology.",
    },
    {
      title: "Java Full Stack Developer Training",
      company: "TAP Academy, Bangalore",
      period: "2023",
      description: "Completed hands-on training in full-stack web development. Delivered a project using Spring Boot and ReactJS with MySQL.",
    },
  ];

  return (
    <div className="py-12 px-4 dark:bg-gray-900">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
      >
        Skills & Experience
      </motion.h1>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => createBubbles(category.title)}
            className={`bg-gradient-to-r ${category.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1`}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{category.icon}</span>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 bg-white/20 rounded-full text-sm ${
                    activeBubble === category.title ? 'bg-white/40' : ''
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary-600">{exp.title}</h3>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <div className="text-lg font-medium text-gray-600 mb-2">{exp.company}</div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-primary-50 p-6 rounded-xl">
            <h3 className="font-semibold text-primary-600">Java Full Stack Web Development</h3>
            <p className="text-gray-600">TAP Academy</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-secondary-50 p-6 rounded-xl">
            <h3 className="font-semibold text-secondary-600">Data Science Essentials</h3>
            <p className="text-gray-600">Great Learning</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-primary-50 p-6 rounded-xl">
            <h3 className="font-semibold text-primary-600">Cyber Security Awareness</h3>
            <p className="text-gray-600">Great Learning</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 