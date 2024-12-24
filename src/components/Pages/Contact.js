import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.target.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
  };

  const contactInfo = [
    {
      type: "Email",
      value: "shivulikith0023@gmail.com",
      icon: "📧",
      link: "mailto:shivulikith0023@gmail.com",
    },
    {
      type: "Phone",
      value: "+91 9380576442",
      icon: "📱",
      link: "tel:+919380576442",
    },
    {
      type: "Location",
      value: "JP Nagar 6th Phase, Kumarswamy Layout, Bangalore 560078",
      icon: "📍",
      link: "https://maps.google.com/?q=JP+Nagar+6th+Phase+Bangalore",
    },
    {
      type: "GitHub",
      value: "github.com/Likith0023",
      icon: "💻",
      link: "https://github.com/Likith0023",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/likith-shiv",
      icon: "👔",
      link: "https://linkedin.com/in/likith-shiv",
    },
  ];

  return (
    <div className="relative overflow-hidden" onClick={createRipple}>
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-12 h-12 bg-primary-500/20 rounded-full"
            style={{
              left: ripple.x - 24,
              top: ripple.y - 24,
            }}
          />
        ))}
      </AnimatePresence>
      <div className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Let's Connect! 🤝
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl">{info.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{info.type}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick Response Time! ⚡</h2>
            <p className="text-gray-600">
              I usually respond within 24 hours. Looking forward to connecting with you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
