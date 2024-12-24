import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👨‍💻" },
    { path: "/skills", label: "Skills", icon: "⚡" },
    { path: "/projects", label: "Projects", icon: "🚀" },
    { path: "/contact", label: "Contact", icon: "📬" },
  ];

  // Add hover animation for menu items
  const menuItemVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  // Stagger animation for nav items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.nav 
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shadow-lg' 
          : 'py-4 bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="navbar-container relative overflow-hidden">
        {/* Animated background effects */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Logo section with enhanced animations */}
        <Link to="/" className="navbar-logo group" onClick={closeMobileMenu}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <motion.img 
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171841_ek6D8jhk0oh3rwQgSkBdDHcatLaJZ4iQ.jpg" 
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover border-2 border-transparent group-hover:border-white transition-all"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
            />
            <motion.div
              className="absolute -inset-2 bg-white opacity-0 group-hover:opacity-20 rounded-full blur-md transition-all duration-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-3 text-xl font-bold text-white hidden md:block"
          >
            Likith R L
          </motion.span>
        </Link>

        {/* Mobile menu icon with animations */}
        <motion.div 
          className="menu-icon text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          <motion.i 
            className={click ? "fas fa-times" : "fas fa-bars"}
            initial={false}
            animate={{ rotate: click ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Navigation menu with enhanced animations */}
        <AnimatePresence>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={click ? "nav-menu active" : "nav-menu"}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                className="nav-item"
                variants={menuItemVariants}
                whileHover="hover"
                custom={index}
              >
                <Link
                  to={item.path}
                  className={`nav-links group ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="ml-2 relative">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white origin-left"
                      whileHover={{ scaleX: 1 }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default NavBar;
