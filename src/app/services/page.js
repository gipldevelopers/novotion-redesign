"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Briefcase, 
  Rocket, 
  Layers, 
  Users, 
  Target, 
  Globe, 
  Shield,
  Code,
  Database,
  Cloud,
  Smartphone,
  Search,
  BarChart,
  Zap,
  CheckCircle,
  Star,
  Award,
  Clock,
  TrendingUp
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "rpo",
      title: "Recruitment Process Outsourcing",
      subtitle: "Your Hiring Goals, Accelerated",
      description: "Comprehensive RPO solutions that transform your hiring process with efficiency and precision.",
      bullets: [
        "End-to-End Recruitment Management",
        "Offshore Recruitment Support",
        "Talent Sourcing & Headhunting",
        "CV Formatting & Candidate Preparation",
        "Lead Generation & Marketing Support",
        "Employer Branding Enhancement",
        "Recruitment Analytics & Reporting"
      ],
      cta: "Explore RPO Services",
      icon: Briefcase,
      color: "blue",
      stats: "500+ Organizations Served",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      id: "career-support",
      title: "Career Support & Recruitment Facilitation",
      subtitle: "Connect with contract-based roles in USA",
      description: "Strategic career advancement services for professionals seeking US contract opportunities.",
      bullets: [
        "Professional Marketing & Profile Positioning",
        "Precision-Matched Submissions",
        "Interview Coaching & Feedback",
        "Contract Negotiation & Onboarding Support",
        "Resume Optimization & Portfolio Building",
        "Market Intelligence & Salary Benchmarking",
        "Career Transition Support"
      ],
      cta: "Explore Services",
      icon: Rocket,
      color: "purple",
      stats: "10K+ Professionals Placed",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600"
    },
    {
      id: "specialized-services",
      title: "Specialized Solutions",
      subtitle: "Deep industry vertical expertise",
      description: "Targeted recruitment solutions for specialized roles and niche skill requirements.",
      bullets: [
        "Tech & Cloud Recruiting",
        "Data & Analytics Hiring",
        "Cybersecurity Talent",
        "ERP / CRM Specialists",
        "Executive Leadership Placement",
        "Digital Transformation Roles",
        "Emerging Technology Experts"
      ],
      cta: "Contact Us",
      icon: Layers,
      color: "green",
      stats: "15+ Industry Verticals",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600"
    },
    {
      id: "tech-recruitment",
      title: "Technology Recruitment",
      subtitle: "Top-tier tech talent acquisition",
      description: "Specialized in sourcing and placing elite technology professionals across all domains.",
      bullets: [
        "Software Engineering & Development",
        "Cloud & DevOps Engineering",
        "AI/ML & Data Science",
        "Mobile & Web Development",
        "UI/UX Design & Product Management",
        "QA & Testing Automation",
        "Infrastructure & Network Engineering"
      ],
      cta: "Find Tech Talent",
      icon: Code,
      color: "indigo",
      stats: "5K+ Tech Placements",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-600"
    },
    {
      id: "executive-search",
      title: "Executive Search",
      subtitle: "Leadership that transforms organizations",
      description: "Identifying and securing visionary leaders who drive business growth and innovation.",
      bullets: [
        "C-Level & Board Placement",
        "Director & VP Level Recruitment",
        "Strategic Leadership Assessment",
        "Succession Planning",
        "Compensation Benchmarking",
        "Discreet Executive Search",
        "Global Leadership Acquisition"
      ],
      cta: "Start Executive Search",
      icon: Users,
      color: "amber",
      stats: "200+ Executive Placements",
      gradient: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-600"
    },
    {
      id: "global-expansion",
      title: "Global Expansion Support",
      subtitle: "Building international teams with local expertise",
      description: "Seamless talent acquisition solutions for companies expanding into new global markets.",
      bullets: [
        "International Talent Mapping",
        "Cross-Cultural Recruitment",
        "Local Compliance & Regulations",
        "Global Compensation Structuring",
        "Relocation & Visa Support",
        "Multi-country Team Building",
        "Market Entry Talent Strategy"
      ],
      cta: "Expand Globally",
      icon: Globe,
      color: "red",
      stats: "30+ Countries Served",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Organizations Served", icon: Briefcase },
    { number: "10K+", label: "Professionals Placed", icon: Users },
    { number: "98%", label: "Client Satisfaction Rate", icon: Star },
    { number: "48h", label: "Average Response Time", icon: Clock },
    { number: "15+", label: "Industry Verticals", icon: Layers },
    { number: "30+", label: "Countries Served", icon: Globe }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your requirements and craft a customized recruitment strategy.",
      icon: Search
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Leverage our extensive network and advanced sourcing techniques to identify ideal candidates.",
      icon: Target
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Rigorous vetting process to ensure cultural fit and technical excellence.",
      icon: Shield
    },
    {
      step: "04",
      title: "Placement & Onboarding",
      description: "Seamless transition and comprehensive support through the entire hiring journey.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Header Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <nav className="flex items-center space-x-3 text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                Home
              </Link>
              <span className="text-slate-400">→</span>
              <span className="text-blue-600 font-semibold">Services</span>
            </nav>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive recruitment solutions designed to accelerate your hiring goals 
              and connect exceptional talent with extraordinary opportunities.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group p-4"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What we design and build
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Innovative recruitment solutions tailored to meet your unique hiring challenges 
              and business objectives.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group ${index === 0 ? 'lg:mt-8' : index === 2 ? 'lg:mt-8' : ''}`}
              >
                <div className={`${service.bgColor} rounded-3xl p-8 h-full border-2 ${service.borderColor} transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
                  
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center border ${service.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.textColor}`} />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: bulletIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <CheckCircle className={`w-5 h-5 ${service.textColor} flex-shrink-0`} />
                          <span className="text-sm">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="pt-4 border-t border-slate-200">
                      <div className="text-sm font-semibold text-slate-900">
                        {service.stats}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="pt-6"
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
          >
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${service.bgColor} rounded-3xl p-8 h-full border-2 ${service.borderColor} transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
                  
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center border ${service.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.textColor}`} />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: bulletIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <CheckCircle className={`w-5 h-5 ${service.textColor} flex-shrink-0`} />
                          <span className="text-sm">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="pt-6"
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach that ensures successful outcomes and exceptional experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group-hover:border-blue-200">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  
                  {/* Step Icon */}
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Ready to Transform Your Recruitment?</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Novotion to access elite talent, streamline your hiring process, 
              and drive your business forward with confidence.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-4 bg-slate-800 text-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-600"
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;