"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  Search,
  TrendingUp,
  Users,
  Target,
  Zap,
  Calendar,
  ExternalLink,
  Play,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

const CaseStudyPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "seo", label: "SEO" },
    { id: "social-media", label: "Social Media Management" },
    { id: "website-dev", label: "Website Development" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "branding", label: "Branding" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Redefining E-commerce: Certified Clippers' 4X Revenue Growth",
      achievement:
        "Dominating the Digital Sphere with a 198% Surge in Organic Traffic",
      category: "ecommerce",
      platform: "shopify",
      client: "Certified Clippers",
      industry: "Beauty & Grooming",
      duration: "6 Months",
      results: [
        { metric: "198%", label: "Organic Traffic Growth" },
        { metric: "4X", label: "Revenue Increase" },
        { metric: "67%", label: "Conversion Rate Boost" },
      ],
      description:
        "Transformed a traditional barbershop into a thriving e-commerce powerhouse with strategic Shopify optimization and digital marketing.",
      tags: ["E-commerce", "Shopify", "SEO", "Conversion Optimization"],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
    {
      id: 2,
      title: "Wellness WordPress: Mindful Moments' Community Expansion",
      achievement:
        "Building a Digital Sanctuary with 300% User Engagement Growth",
      category: "website-dev",
      platform: "wordpress",
      client: "Mindful Moments",
      industry: "Health & Wellness",
      duration: "4 Months",
      results: [
        { metric: "300%", label: "User Engagement" },
        { metric: "150%", label: "Membership Growth" },
        { metric: "89%", label: "Page Speed Score" },
      ],
      description:
        "Crafted a serene digital experience that expanded the wellness community through intuitive WordPress design and content strategy.",
      tags: ["WordPress", "Web Design", "Community", "Content Strategy"],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
    {
      id: 3,
      title: "Tech SaaS Platform: CloudScale's Market Dominance",
      achievement: "Accelerating B2B Growth with 245% Lead Generation Increase",
      category: "website-dev",
      platform: "react",
      client: "CloudScale",
      industry: "SaaS & Technology",
      duration: "8 Months",
      results: [
        { metric: "245%", label: "Lead Generation" },
        { metric: "3.2X", label: "Trial Signups" },
        { metric: "92%", label: "Client Retention" },
      ],
      description:
        "Engineered a cutting-edge SaaS platform that revolutionized cloud management for enterprise clients.",
      tags: ["React", "SaaS", "B2B", "Dashboard"],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
    {
      id: 4,
      title: "Social Media Mastery: UrbanBites' Viral Campaign",
      achievement: "Igniting Brand Awareness with 500% Social Media Engagement",
      category: "social-media",
      platform: "instagram",
      client: "UrbanBites",
      industry: "Food & Beverage",
      duration: "3 Months",
      results: [
        { metric: "500%", label: "Social Engagement" },
        { metric: "2.8X", label: "Foot Traffic" },
        { metric: "15K", label: "New Followers" },
      ],
      description:
        "Orchestrated a viral social media campaign that transformed a local cafe into a city-wide sensation.",
      tags: [
        "Social Media",
        "Instagram",
        "Content Creation",
        "Viral Marketing",
      ],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
    {
      id: 5,
      title: "SEO Transformation: EcoWare's Organic Dominance",
      achievement: "Conquering Search Rankings with 312% Organic Visibility",
      category: "seo",
      platform: "wordpress",
      client: "EcoWare",
      industry: "E-commerce & Sustainability",
      duration: "9 Months",
      results: [
        { metric: "312%", label: "Organic Visibility" },
        { metric: "187%", label: "Keyword Rankings" },
        { metric: "2.5X", label: "Return Customers" },
      ],
      description:
        "Implemented comprehensive SEO strategy that positioned EcoWare as the leading sustainable products provider.",
      tags: ["SEO", "Content Strategy", "E-commerce", "Sustainability"],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
    {
      id: 6,
      title: "Brand Revolution: NovaFitness's Market Repositioning",
      achievement: "Reinventing Fitness Identity with 400% Brand Recognition",
      category: "branding",
      platform: "shopify",
      client: "NovaFitness",
      industry: "Fitness & Wellness",
      duration: "5 Months",
      results: [
        { metric: "400%", label: "Brand Recognition" },
        { metric: "3X", label: "Online Sales" },
        { metric: "78%", label: "Customer Loyalty" },
      ],
      description:
        "Complete brand overhaul that transformed NovaFitness into a premium fitness equipment leader.",
      tags: ["Branding", "Shopify", "Visual Identity", "Market Positioning"],
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/120/40",
    },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  const PlatformIcon = ({ platform }) => {
    const icons = {
      shopify: (
        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs">
          S
        </div>
      ),
      wordpress: (
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
          W
        </div>
      ),
      react: (
        <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">
          R
        </div>
      ),
      instagram: (
        <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center text-white">
          <Smartphone className="w-3 h-3" />
        </div>
      ),
    };

    return icons[platform] || <Globe className="w-5 h-5 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <nav className="flex items-center space-x-3 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-medium">Case Study</span>
            </nav>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6"
            >
              Case{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Studies
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Explore our portfolio of successful projects and measurable
              results
            </motion.p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <Link href={`/case-studies/${study.id}`}>
                  {/* Visualization Block - Top 60% */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-b-3xl overflow-hidden">
                    {/* Laptop Mockup */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-64 h-40 bg-gray-800 rounded-lg shadow-2xl border border-gray-700">
                        {/* Laptop Screen */}
                        <div className="absolute inset-2 bg-white rounded border border-gray-300 overflow-hidden">
                          {/* Mock Website Content */}
                          <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 relative">
                            {/* Website Header */}
                            <div className="h-6 bg-gray-800 flex items-center px-3">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              </div>
                            </div>

                            {/* Mock Content */}
                            <div className="p-3">
                              <div className="h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
                              <div className="h-2 bg-gray-200 rounded mb-3 w-1/2"></div>
                              <div className="grid grid-cols-3 gap-2 mb-3">
                                <div className="h-8 bg-gray-300 rounded"></div>
                                <div className="h-8 bg-gray-300 rounded"></div>
                                <div className="h-8 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Laptop Bottom */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-4 bg-gray-300 rounded-b-lg"></div>
                      </div>
                    </div>

                    {/* Platform Icon */}
                    <div className="absolute top-4 right-4">
                      <PlatformIcon platform={study.platform} />
                    </div>

                    {/* Client Logo */}
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                      <div className="w-12 h-4 bg-white/30 rounded"></div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Block - Bottom 40% */}
                  <div className="p-6 bg-white">
                    {/* Category & Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {study.category.replace("-", " ")}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {study.title}
                    </h3>

                    {/* Achievement */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {study.achievement}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-500 leading-tight">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {study.tags.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{study.tags.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No case studies found
              </h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different filter category
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our data-driven approach delivers measurable success for clients
              worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Users },
              { number: "4.2X", label: "Average ROI", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with our proven
              strategies and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
