"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building,
  Globe,
  ArrowRight,
  Users,
  Target,
  Zap,
  Sparkles,
} from "lucide-react";

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null);
  const [particleCount, setParticleCount] = useState(0);
  const containerRef = useRef(null);
  const totalSlides = 3;

  const slides = [
    {
      title: "Strategic RPO Partner",
      subtitle: "Recruitment Excellence",
      description:
        "Delivering measurable recruitment outcomes across UK and USA markets with transparent, data-driven RPO solutions.",
      buttonText: "Explore RPO Services",
      buttonLink: "/services",
      stats: { number: "500+", label: "Organizations Served" },
      color: "blue",
      features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Reduction"]
    },
    {
      title: "Global Talent Connection",
      subtitle: "UK & USA Markets",
      description:
        "Seamlessly connect with top talent and leading organizations through our strategic recruitment process outsourcing.",
      buttonText: "Go Global",
      buttonLink: "/about",
      stats: { number: "10K+", label: "Professionals Placed" },
      color: "purple",
      features: ["Multi-Region Support", "Cultural Alignment", "24/7 Operations"]
    },
    {
      title: "Career Advancement",
      subtitle: "IT Professionals",
      description:
        "Comprehensive career support and placement services for IT professionals seeking contract roles in the USA market.",
      buttonText: "Career Support",
      buttonLink: "/career-support",
      stats: { number: "90%+", label: "Success Rate" },
      color: "green",
      features: ["Interview Coaching", "Contract Negotiation", "Skill Development"]
    },
  ];

  const serviceNodes = [
    { 
      label: "RPO Services", 
      icon: Building, 
      color: "blue",
      description: "Complete recruitment process outsourcing"
    },
    { 
      label: "Global Talent", 
      icon: Globe, 
      color: "purple",
      description: "Access worldwide talent pools"
    },
    { 
      label: "Career Support", 
      icon: Briefcase, 
      color: "green",
      description: "Professional career advancement"
    },
  ];

  // Mouse position tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Particle effects
  useEffect(() => {
    if (activeNode !== null) {
      setParticleCount(15);
      const timer = setTimeout(() => setParticleCount(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [activeNode]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleNodeInteraction = (index) => {
    setActiveNode(index);
    goToSlide(index);
    
    // Reset active node after animation
    setTimeout(() => setActiveNode(null), 1500);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  // Generate particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 1 + 0.5,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 mt-3 via-white to-indigo-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-60 h-60 bg-green-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 lg:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl order-2 lg:order-1">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6 lg:mb-8 shadow-sm"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-blue-700">
                  Trusted by 500+ Organizations Worldwide
                </span>
                <Sparkles className="w-3 h-3 text-blue-600" />
              </motion.div>

              {/* Subtitle */}
              <motion.div
                key={`subtitle-${currentSlide}`}
                className="flex items-center gap-3 mb-4 lg:mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1 h-6 lg:h-8 bg-blue-600 rounded-full" />
                <span className="text-xs lg:text-sm font-semibold tracking-widest text-blue-600 uppercase">
                  {currentSlideData.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7 }}
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {currentSlideData.description}
                </motion.p>
              </AnimatePresence>

              {/* Features List */}
              <motion.div
                className="flex flex-wrap gap-3 mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {currentSlideData.features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Target className="w-3 h-3 text-blue-600" />
                    {feature}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Link
                  href={currentSlideData.buttonLink}
                  className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    {currentSlideData.buttonText}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <Users className="w-5 h-5" />
                    Contact Us
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {[
                  { number: currentSlideData.stats.number, label: currentSlideData.stats.label },
                  { number: "40%", label: "Faster Hiring" },
                  { number: "24/7", label: "Global Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center sm:text-left"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Interactive Visualization */}
            <div 
              ref={containerRef}
              className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 cursor-pointer"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {/* Interactive Background */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-2 border-white/20 backdrop-blur-sm"
                animate={{
                  rotateX: mousePosition.y * 2,
                  rotateY: mousePosition.x * 2,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />

              {/* Central Hub */}
              <motion.div
                className="relative z-20"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotateZ: mousePosition.x * 5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Central Logo */}
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-transparent rounded-2xl shadow-2xl flex items-center justify-center cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    boxShadow: [
                      "0 20px 40px rgba(37, 99, 235, 0.3)",
                      "0 25px 50px rgba(37, 99, 235, 0.4)",
                      "0 20px 40px rgba(37, 99, 235, 0.3)",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                 <img src="/n_logo.png" alt="" />
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </motion.div>

                {/* Service Nodes */}
                {serviceNodes.map((service, index) => {
                  const isActive = currentSlide === index;
                  const IconComponent = service.icon;
                  
                  return (
                    <motion.div
                      key={service.label}
                      className={`absolute w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm border-2 rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-lg z-30 ${
                        isActive
                          ? "border-blue-500 shadow-2xl shadow-blue-500/25 scale-110"
                          : "border-gray-200/50 hover:border-blue-300"
                      }`}
                      animate={{
                        x: Math.cos(index * ((2 * Math.PI) / 3)) * (isMobile ? 120 : 160) + mousePosition.x * 20,
                        y: Math.sin(index * ((2 * Math.PI) / 3)) * (isMobile ? 120 : 160) + mousePosition.y * 20,
                        scale: isActive ? 1.15 : 1,
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNodeInteraction(index)}
                      onMouseEnter={() => !isMobile && setActiveNode(index)}
                      onMouseLeave={() => !isMobile && setActiveNode(null)}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: index * 0.1,
                      }}
                    >
                      {/* Node Icon */}
                      <motion.div
                        animate={{
                          rotate: isActive ? [0, 360] : 0,
                          scale: isActive ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          rotate: { duration: 2, repeat: isActive ? Infinity : 0 },
                          scale: { duration: 0.5 },
                        }}
                      >
                        <IconComponent
                          className={`w-6 h-6 lg:w-7 lg:h-7 ${
                            isActive ? "text-blue-600" : "text-gray-600"
                          }`}
                        />
                      </motion.div>
                      
                      {/* Node Label */}
                      <motion.div
                        className="text-[10px] sm:text-xs font-semibold text-gray-700 mt-1 text-center leading-tight"
                        animate={{
                          color: isActive ? "#2563eb" : "#374151",
                        }}
                      >
                        {service.label}
                      </motion.div>

                      {/* Hover Tooltip */}
                      <AnimatePresence>
                        {activeNode === index && (
                          <motion.div
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-40"
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            {service.description}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Animated Connection Lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                  {[0, 1, 2].map((index) => {
                    const isActive = currentSlide === index;
                    return (
                      <motion.path
                        key={index}
                        d={`
                          M 50%,50%
                          L ${50 + Math.cos(index * ((2 * Math.PI) / 3)) * 45}%,
                            ${50 + Math.sin(index * ((2 * Math.PI) / 3)) * 45}%
                        `}
                        stroke="url(#gradient)"
                        strokeWidth={isActive ? 3 : 2}
                        fill="none"
                        strokeLinecap="round"
                        animate={{
                          strokeDasharray: isActive ? ["10,0", "20,10", "10,0"] : ["5,5"],
                          opacity: isActive ? [0.7, 1, 0.7] : 0.4,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Particles */}
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    initial={{
                      x: `${particle.x}%`,
                      y: `${particle.y}%`,
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x: `${particle.x + (Math.random() - 0.5) * 50}%`,
                      y: `${particle.y + (Math.random() - 0.5) * 50}%`,
                      opacity: [1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>

     
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default NovotionHero;