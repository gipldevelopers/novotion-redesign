"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Clock, Shield, Users, Trophy, Globe, TrendingUp } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Enhanced Header Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
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
              <span className="text-blue-600 font-semibold">About us</span>
            </nav>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Novotion
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Pioneering the future of recruitment with innovative RPO solutions that bridge 
              exceptional talent with visionary organizations worldwide.
            </motion.p>
          </motion.div>

          {/* Enhanced Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl lg:rounded-[4rem] p-8 lg:p-16 shadow-2xl border border-slate-700/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Enhanced Team Philosophy */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 bg-slate-700/50 rounded-full px-4 py-2 mb-6 border border-slate-600/50">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">Our Philosophy</span>
                  </div>
                  
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                    Beyond
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Recruitment
                    </span>
                  </h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl text-slate-300 leading-relaxed mb-8"
                  >
                    We believe true recruitment excellence lies in understanding the complete 
                    picture—cultural dynamics, long-term ambitions, and untapped potential. 
                    Our approach transforms hiring from transactional to transformational.
                  </motion.p>
                </motion.div>

                {/* Enhanced Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                >
                  {[
                    { number: "500+", label: "Organizations" },
                    { number: "10K+", label: "Professionals" },
                    { number: "98%", label: "Satisfaction" },
                    { number: "24h", label: "Avg Response" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Enhanced Core Values */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8"
              >
                {/* Enhanced Values Header */}
                <div className="mb-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
                  >
                    Core Principles
                    <ArrowRight className="w-6 h-6 text-cyan-400" />
                  </motion.h3>
                  
                  {/* Enhanced Core Values */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="space-y-4"
                  >
                    {[
                      { name: "Truth", color: "cyan" },
                      { name: "Time", color: "blue" },
                      { name: "Honesty", color: "green" }
                    ].map((value, index) => (
                      <motion.div
                        key={value.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                      >
                        <div className={`w-3 h-3 bg-${value.color}-400 rounded-full`}></div>
                        <span className={`text-${value.color}-400 font-semibold text-lg`}>
                          {value.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Values Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="space-y-6"
                >
                  <p className="text-slate-300 leading-relaxed text-lg">
                    These principles guide every interaction, ensuring we build relationships 
                    founded on trust, respect, and mutual success.
                  </p>

                  {/* Enhanced Value Cards */}
                  <div className="grid grid-cols-1 gap-4 pt-6">
                    {[
                      {
                        icon: Shield,
                        title: "Integrity First",
                        description: "Uncompromising ethical standards",
                        color: "cyan",
                        delay: 1.3
                      },
                      {
                        icon: Clock,
                        title: "Time-Respect",
                        description: "Value every moment, deliver promptly",
                        color: "blue",
                        delay: 1.4
                      },
                      {
                        icon: Target,
                        title: "Honest Excellence",
                        description: "Transparency in all engagements",
                        color: "green",
                        delay: 1.5
                      }
                    ].map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: value.delay }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-${value.color}-500/20 rounded-xl flex items-center justify-center group-hover:bg-${value.color}-500/30 transition-colors duration-300`}>
                          <value.icon className={`w-6 h-6 text-${value.color}-400`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-slate-100 transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Enhanced Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-base font-semibold text-blue-700">Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Connecting Extraordinary
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Talent with Vision
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We're redefining recruitment by delivering strategic RPO solutions that create 
                measurable impact, foster meaningful connections, and accelerate business growth 
                across global markets.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                {[
                  { value: "UK & USA", label: "Global Markets", icon: Globe },
                  { value: "90%+", label: "Success Rate", icon: Trophy },
                  { value: "48h", label: "Avg Placement", icon: Clock },
                  { value: "200%", label: "Growth YoY", icon: TrendingUp }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{item.value}</div>
                    <div className="text-slate-600 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/25">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                    <Target className="w-5 h-5 text-white" />
                    <span className="text-base font-semibold">Our Vision</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    The Future of
                    <br />
                    Strategic Recruitment
                  </h2>
                  
                  <p className="text-blue-100 leading-relaxed text-lg">
                    To become the world's most trusted strategic RPO partner, celebrated for 
                    innovative solutions, transparent partnerships, and unparalleled commitment 
                    to delivering exceptional recruitment outcomes that drive business transformation.
                  </p>

                  <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="font-bold text-white text-lg">2021</span>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Founded with Vision</div>
                      <div className="text-blue-200">Beginning our transformative journey</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full blur-sm opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 rounded-full blur-sm opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
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
              <span className="text-sm font-medium text-cyan-400">Ready to Transform Your Recruitment?</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Partner with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Novotion
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of forward-thinking organizations that trust us to deliver 
              exceptional recruitment results. Let's build your dream team together.
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
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-4 bg-slate-800 text-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-600"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;