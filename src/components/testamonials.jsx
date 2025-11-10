"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Quote,
  Building,
  MapPin,
  Calendar,
  Award,
  BarChart3,
  Clock,
  DollarSign,
  HeartHandshake
} from "lucide-react";

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Organizations Served", icon: Building },
    { number: "10K+", label: "Professionals Placed", icon: Users },
    { number: "90%+", label: "Success Rate", icon: Target },
    { number: "40%", label: "Faster Hiring", icon: Zap },
    { number: "15+", label: "Industry Verticals", icon: Globe },
    { number: "24/7", label: "Global Support", icon: Clock }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results across UK and USA markets with data-driven recruitment solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understand your hiring needs and define recruitment strategy",
      icon: Target
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Leverage our global network to source qualified candidates",
      icon: Users
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Rigorous vetting process to ensure quality matches",
      icon: Shield
    },
    {
      step: "04",
      title: "Interview & Selection",
      description: "Coordinate interviews and facilitate decision making",
      icon: HeartHandshake
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Manage negotiations and ensure smooth onboarding",
      icon: CheckCircle
    },
    {
      step: "06",
      title: "Continuous Support",
      description: "Ongoing relationship management and performance tracking",
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How We Deliver{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined, transparent process designed to deliver exceptional recruitment outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Phani Datta Pabisetty",
      role: "QA Analyst",
      company: "Ampup",
      content: "Novotion refined my QA testing approach and helped me secure an offer within weeks. Their interview preparation was exceptional.",
      rating: 5,
      verified: true
    },
    {
      name: "Dixit Gupta Garlapati",
      role: "DevOps Engineer",
      company: "Meta",
      content: "The trainers understood exactly what top tech firms expect. Landed my dream role at Meta with their guidance.",
      rating: 5,
      verified: true
    },
    {
      name: "Shajahan Shaik",
      role: "Full Stack Developer",
      company: "Amazon Audible",
      content: "Continuous interview prep and technical mentoring made all the difference. Highly recommend their career support services.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/20" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-700">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real success stories from professionals and organizations we've helped achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Industries Section
const IndustriesSection = () => {
  const industries = [
    { name: "Information Technology", icon: BarChart3, count: "2K+ Placements" },
    { name: "Engineering & Manufacturing", icon: Zap, count: "1.5K+ Placements" },
    { name: "Healthcare & Life Sciences", icon: HeartHandshake, count: "800+ Placements" },
    { name: "Finance & Banking", icon: DollarSign, count: "1.2K+ Placements" },
    { name: "Retail & E-commerce", icon: TrendingUp, count: "900+ Placements" },
    { name: "Logistics & Supply Chain", icon: Globe, count: "700+ Placements" }
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50/30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              15+ Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep expertise across multiple industry verticals with specialized recruitment solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                      <p className="text-sm text-gray-600">{industry.count}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Recruitment
            </span>{" "}
            Strategy
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 500+ organizations and 10,000+ professionals who trust Novotion for their recruitment and career success across UK and USA markets.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Users className="w-5 h-5" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Watch Success Stories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Flexible Engagement Models</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Export all sections
export { 
  StatsSection, 
  ProcessSection, 
  TestimonialsSection, 
  IndustriesSection, 
  CTASection 
};