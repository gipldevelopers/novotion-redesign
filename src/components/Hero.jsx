"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

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
      features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Reduction"],
      image: "images/hero-img.jpg",
      floatingElements: [
        { icon: Building, text: "RPO Experts", color: "blue" },
        { icon: Users, text: "Team Building", color: "green" },
        { icon: Target, text: "Strategic Goals", color: "purple" }
      ]
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
      features: ["Multi-Region Support", "Cultural Alignment", "24/7 Operations"],
      image: "images/hero-img4.jpg",
      floatingElements: [
        { icon: Globe, text: "Global Reach", color: "green" },
        { icon: Building, text: "International", color: "blue" },
        { icon: Users, text: "Diverse Talent", color: "purple" }
      ]
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
      features: ["Interview Coaching", "Contract Negotiation", "Skill Development"],
      image: "images/hero-img3.jpg",
      floatingElements: [
        { icon: Briefcase, text: "Career Support", color: "purple" },
        { icon: Zap, text: "IT Professionals", color: "blue" },
        { icon: Target, text: "Success Rate", color: "green" }
      ]
    },
  ];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
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
      <div className="relative z-10 min-h-screen flex items-center pt-16 lg:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl lg:mt-12">
              {/* Trust Badge - Moved down with more margin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 lg:mb-10 shadow-sm"
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6"
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

              {/* Slide Indicators */}
              <div className="flex items-center gap-3 mt-8 lg:mt-12">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Image Section - Faster transitions and background */}
            <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center lg:mt-12">
              <motion.div
                className="relative w-full h-full max-w-md mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Main Image Container with permanent background */}
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Gradient that's always visible */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                  
                  {/* Main Image with faster transitions */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlideData.image}
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        duration: 0.4, // Faster transition
                        ease: "easeInOut" 
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20" />
                  
                  {/* Floating Elements with faster animations */}
                  {currentSlideData.floatingElements.map((element, index) => {
                    const IconComponent = element.icon;
                    const colorClasses = {
                      blue: "text-blue-600",
                      purple: "text-purple-600",
                      green: "text-green-600"
                    };

                    return (
                      <motion.div
                        key={element.text}
                        className={`absolute ${
                          index === 0 ? "top-6 right-6" :
                          index === 1 ? "bottom-20 left-6" :
                          "bottom-6 right-6"
                        } bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg z-30`}
                        initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.3, // Faster floating element animation
                          delay: 0.2 + index * 0.1 
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className={`w-5 h-5 ${colorClasses[element.color]}`} />
                          <span className="text-sm font-semibold text-gray-700">{element.text}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-2xl blur-xl opacity-50 z-0"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-2xl blur-xl opacity-50 z-0"
                  animate={{
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden lg:flex absolute top-1/2 left-4 right-4 transform -translate-y-1/2 justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-6 h-6 text-gray-700 transform rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default NovotionHero;