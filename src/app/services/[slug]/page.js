"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Clock,
  Shield,
  BarChart3,
  Calendar,
  Star,
  Award,
  Play,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Rocket,
  Layers,
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Server
} from "lucide-react";

const ServiceDetailPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const serviceData = {
    rpo: {
      id: "rpo",
      title: "Recruitment Process Outsourcing",
      subtitle: "Your Hiring Goals, Accelerated",
      description: "Comprehensive RPO solutions that transform your hiring process with efficiency and precision, delivering exceptional talent at scale.",
      fullDescription: "Our Recruitment Process Outsourcing service provides end-to-end talent acquisition solutions designed to scale with your business needs. We become an extension of your team, delivering quality candidates faster while reducing hiring costs and improving retention rates.",
      icon: Briefcase,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      stats: "500+ Organizations Served",
      featured: true,
      highlights: [
        "Reduce time-to-hire by 40-60%",
        "Improve quality of hire by 50%",
        "Lower cost-per-hire by 30%",
        "98% client satisfaction rate"
      ],
      features: [
        {
          title: "End-to-End Recruitment Management",
          description: "Complete ownership of your recruitment lifecycle from sourcing to onboarding",
          icon: Target,
          details: [
            "Job description optimization",
            "Candidate sourcing & screening",
            "Interview coordination",
            "Offer management"
          ]
        },
        {
          title: "Offshore Recruitment Support",
          description: "Leverage global talent pools with our offshore recruitment teams",
          icon: Globe,
          details: [
            "24/7 recruitment operations",
            "Multi-timezone coverage",
            "Cost-effective resourcing",
            "Cultural alignment expertise"
          ]
        },
        {
          title: "Talent Sourcing & Headhunting",
          description: "Proactive talent acquisition strategies for hard-to-fill positions",
          icon: Users,
          details: [
            "Passive candidate engagement",
            "Executive search capabilities",
            "Niche skill set targeting",
            "Competitor mapping"
          ]
        },
        {
          title: "CV Formatting & Candidate Preparation",
          description: "Enhance candidate presentation and interview readiness",
          icon: Award,
          details: [
            "Resume optimization",
            "Interview coaching",
            "Skill assessment",
            "Presentation training"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Strategy",
          description: "Deep dive into your requirements and craft a customized recruitment strategy",
          duration: "1-2 weeks",
          deliverables: ["Recruitment Plan", "KPIs Setup", "Team Alignment"]
        },
        {
          step: 2,
          title: "Talent Mapping",
          description: "Comprehensive market analysis and candidate identification",
          duration: "2-3 weeks",
          deliverables: ["Talent Map", "Sourcing Strategy", "Candidate Pipeline"]
        },
        {
          step: 3,
          title: "Screening & Assessment",
          description: "Rigorous vetting process to ensure cultural fit and technical excellence",
          duration: "1-2 weeks",
          deliverables: ["Screened Candidates", "Assessment Reports", "Interview Shortlist"]
        },
        {
          step: 4,
          title: "Placement & Onboarding",
          description: "Seamless transition and comprehensive support through the entire hiring journey",
          duration: "2-3 weeks",
          deliverables: ["Offer Management", "Onboarding Support", "30-Day Check-in"]
        }
      ],
      caseStudies: [
        {
          client: "TechCorp Global",
          industry: "Technology",
          challenge: "High volume hiring for rapid expansion across 3 continents",
          solution: "Implemented scalable RPO model with dedicated recruitment teams",
          results: [
            { metric: "200+", label: "Roles Filled" },
            { metric: "45%", label: "Faster Hiring" },
            { metric: "$2.5M", label: "Cost Savings" }
          ]
        },
        {
          client: "HealthPlus Systems",
          industry: "Healthcare",
          challenge: "Specialized medical staff recruitment in competitive markets",
          solution: "Targeted sourcing strategy with industry-specific recruiters",
          results: [
            { metric: "150+", label: "Medical Professionals" },
            { metric: "60%", label: "Reduced Time-to-Fill" },
            { metric: "95%", label: "Retention Rate" }
          ]
        }
      ],
      pricing: {
        models: [
          {
            name: "Project-Based",
            description: "Ideal for specific hiring projects or seasonal needs",
            price: "Custom",
            features: ["Fixed project scope", "Dedicated team", "Milestone-based delivery"]
          },
          {
            name: "Full RPO",
            description: "End-to-end recruitment management for ongoing needs",
            price: "Monthly Retainer",
            features: ["Unlimited hiring", "Dedicated account manager", "Performance analytics"]
          },
          {
            name: "Hybrid RPO",
            description: "Flexible model combining project and ongoing support",
            price: "Flexible",
            features: ["Scalable resources", "Mix of models", "Cost optimization"]
          }
        ]
      }
    },
    careerSupport: {
      id: "career-support",
      title: "Career Support & Recruitment Facilitation",
      subtitle: "Connect with contract-based roles in USA",
      description: "Strategic career advancement services for professionals seeking US contract opportunities with top-tier companies.",
      fullDescription: "We bridge the gap between exceptional talent and premium US contract opportunities. Our comprehensive career support ensures you're positioned for success in the competitive American market.",
      icon: Rocket,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      stats: "10K+ Professionals Placed",
      featured: true,
      highlights: [
        "Access to exclusive US contract roles",
        "90% interview-to-offer conversion rate",
        "Average 25% salary improvement",
        "Dedicated career consultant"
      ]
    },
    specializedServices: {
      id: "specialized-services",
      title: "Specialized Solutions",
      subtitle: "Deep industry vertical expertise",
      description: "Targeted recruitment solutions for specialized roles and niche skill requirements across technology and business domains.",
      fullDescription: "Leverage our deep expertise in specific industry verticals to find specialized talent that drives innovation and growth in your organization.",
      icon: Layers,
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
      stats: "15+ Industry Verticals",
      featured: false
    }
  };

  const service = serviceData[params.id] || serviceData.rpo;

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "features", label: "Features", icon: CheckCircle },
    { id: "process", label: "Our Process", icon: BarChart3 },
    { id: "case-studies", label: "Case Studies", icon: Award },
    { id: "pricing", label: "Pricing", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start mb-8"
          >
            <nav className="flex items-center space-x-3 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/services" className="hover:text-blue-600 transition-colors duration-300">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-medium">{service.title}</span>
            </nav>
          </motion.div>

          {/* Service Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                <service.icon className={`w-5 h-5 ${service.textColor}`} />
                <span className={`text-sm font-medium ${service.textColor}`}>
                  {service.stats}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.subtitle}
              </p>

              <p className="text-lg text-gray-600 mb-8">
                {service.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center gap-3 bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`${service.bgColor} rounded-3xl p-8 border-2 ${service.borderColor}`}>
                <div className="text-center">
                  <div className={`w-24 h-24 ${service.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 ${service.borderColor}`}>
                    <service.icon className={`w-12 h-12 ${service.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Highlights</h3>
                  
                  <div className="space-y-4">
                    {service.highlights?.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200"
                      >
                        <CheckCircle className={`w-5 h-5 ${service.textColor}`} />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? `border-blue-500 text-blue-600`
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our Recruitment Process Outsourcing service is designed to transform your talent acquisition function into a strategic advantage. We combine deep industry expertise with cutting-edge technology to deliver exceptional results.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Whether you're scaling rapidly, entering new markets, or optimizing your recruitment function, our RPO solutions provide the flexibility and expertise you need to succeed.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Dedicated recruitment team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Advanced analytics and reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Customized recruitment technology</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Who This Service Is For</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Growing Startups</h4>
                        <p className="text-gray-600">Scale your team rapidly without compromising on quality</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Enterprise Organizations</h4>
                        <p className="text-gray-600">Optimize recruitment processes and reduce costs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Global Companies</h4>
                        <p className="text-gray-600">Expand into new markets with local expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && service.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Comprehensive Features</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Everything you need to transform your recruitment process and achieve exceptional results
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center border-2 ${service.borderColor}`}>
                        <feature.icon className={`w-8 h-8 ${service.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                        
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-700">
                              <div className={`w-2 h-2 bg-${service.color}-400 rounded-full`}></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && service.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Proven Process</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                A structured approach that ensures successful outcomes and exceptional experiences
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                  
                  {service.process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="relative flex items-start gap-8 mb-12 last:mb-0"
                    >
                      {/* Step number */}
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center border-2 ${service.borderColor} relative z-10 flex-shrink-0`}>
                        <span className={`text-2xl font-bold ${service.textColor}`}>{step.step}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">{step.title}</h3>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{step.duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <span key={idx} className={`bg-${service.color}-100 text-${service.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Case Studies Tab */}
          {activeTab === "case-studies" && service.caseStudies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Success Stories</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Real results from organizations that transformed their recruitment with our RPO solutions
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                      <span className={`inline-block bg-${service.color}-100 text-${service.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && service.pricing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Flexible Pricing Models</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Choose the engagement model that best fits your organization's needs and budget
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {service.pricing.models.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`bg-white rounded-2xl p-8 border-2 ${
                      index === 1 
                        ? `border-${service.color}-500 shadow-xl scale-105` 
                        : 'border-gray-200'
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    {index === 1 && (
                      <div className={`inline-block bg-${service.color}-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4`}>
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                    <p className="text-gray-600 mb-6">{model.description}</p>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-6">{model.price}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Recruitment?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title} can help you achieve your hiring goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-3 bg-gray-800 text-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing icon component
const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default ServiceDetailPage;