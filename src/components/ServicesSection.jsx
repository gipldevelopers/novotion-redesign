"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Rocket, 
  Layers, 
  ArrowRight, 
  Users, 
  Target, 
  Zap, 
  CheckCircle,
  Globe,
  Shield,
  BarChart3
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "rpo",
      title: "Recruitment Process Outsourcing",
      subtitle: "Your Hiring Goals, Accelerated",
      bullets: [
        "End-to-End Recruitment Management",
        "Offshore Recruitment Support",
        "Talent Sourcing & Headhunting",
        "CV Formatting & Candidate Preparation",
        "Lead Generation & Marketing Support"
      ],
      cta: "Explore RPO Services",
      icon: Briefcase,
      color: "blue",
      stats: "500+ Organizations Served",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: "career-support",
      title: "Career Support & Recruitment Facilitation",
      subtitle: "Connect with contract-based roles in USA",
      bullets: [
        "Professional Marketing & Profile Positioning",
        "Precision-Matched Submissions",
        "Interview Coaching & Feedback",
        "Contract Negotiation & Onboarding Support"
      ],
      cta: "Explore Services",
      icon: Rocket,
      color: "purple",
      stats: "10K+ Professionals Placed",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: "specialized-services",
      title: "Specialized Solutions",
      subtitle: "Deep industry vertical expertise",
      bullets: [
        "Tech & Cloud Recruiting",
        "Data & Analytics Hiring",
        "Cybersecurity Talent",
        "ERP / CRM Specialists"
      ],
      cta: "Contact Us",
      icon: Layers,
      color: "green",
      stats: "15+ Industry Verticals",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-10"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                               linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-6 shadow-sm"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Comprehensive Solutions
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Two distinct service lines, one unified mission — connecting talent and opportunity 
            across UK and USA markets with measurable impact.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-2 mb-6">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        {service.stats}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * bulletIndex }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/${service.id}`}
                        className={`group/btn inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                    <div className="absolute inset-[2px] rounded-3xl bg-white/80 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Recruitment Strategy?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Join 500+ organizations that trust Novotion for their recruitment success across UK and USA markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Target className="w-5 h-5" />
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;