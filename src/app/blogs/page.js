"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Search,
  BarChart3,
  ShoppingBag,
  Monitor,
  Smartphone,
  TrendingUp,
  BookOpen,
  ChevronRight
} from "lucide-react";

const BlogPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Advanced SEO Strategies for 2024: Beyond Traditional Optimization",
      excerpt: "Discover cutting-edge SEO techniques that are reshaping digital marketing and driving unprecedented organic growth.",
      category: "SEO",
      date: "27 December, 2024",
      readTime: "8 min read",
      author: "Sarah Chen",
      gradient: "from-fuchsia-500 to-blue-500",
      illustration: "search-analytics",
      tags: ["SEO", "Digital Marketing", "Analytics"]
    },
    {
      id: 2,
      title: "E-commerce Revolution: Leveraging Shopify for Maximum Conversion",
      excerpt: "How top brands are using Shopify's latest features to create seamless shopping experiences and boost sales.",
      category: "E-commerce",
      date: "24 December, 2024",
      readTime: "6 min read",
      author: "Marcus Rodriguez",
      gradient: "from-pink-400 to-green-400",
      illustration: "ecommerce-chart",
      tags: ["E-commerce", "Shopify", "Conversion"]
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends Shaping 2024 and Beyond",
      excerpt: "Explore the emerging technologies and methodologies that are transforming how we build for the web and mobile.",
      category: "Development",
      date: "20 December, 2024",
      readTime: "10 min read",
      author: "Alex Thompson",
      gradient: "from-rose-500 to-blue-500",
      illustration: "team-development",
      tags: ["Web Development", "Mobile", "Technology"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Recruitment Automation: Balancing AI with Human Touch",
      excerpt: "How smart automation is enhancing recruitment processes while maintaining the essential human element.",
      category: "Recruitment",
      date: "18 December, 2024",
      readTime: "5 min read",
      author: "Jessica Williams",
      gradient: "from-indigo-500 to-purple-500",
      illustration: "automation",
      tags: ["AI", "Recruitment", "Automation"]
    },
    {
      id: 5,
      title: "Building High-Performance Tech Teams in Remote Environments",
      excerpt: "Strategies for creating cohesive, productive technology teams in distributed work settings.",
      category: "Team Building",
      date: "15 December, 2024",
      readTime: "7 min read",
      author: "David Kim",
      gradient: "from-orange-500 to-red-500",
      illustration: "remote-team",
      tags: ["Remote Work", "Tech Teams", "Management"]
    },
    {
      id: 6,
      title: "Data-Driven Recruitment: Metrics That Actually Matter",
      excerpt: "Moving beyond vanity metrics to focus on the key performance indicators that drive recruitment success.",
      category: "Analytics",
      date: "12 December, 2024",
      readTime: "6 min read",
      author: "Emily Zhang",
      gradient: "from-teal-500 to-cyan-500",
      illustration: "data-metrics",
      tags: ["Data", "Metrics", "Recruitment"]
    }
  ];

  const categories = [
    { name: "Recruitment", count: 12, icon: User },
    { name: "Technology", count: 8, icon: Monitor },
    { name: "Digital Marketing", count: 6, icon: TrendingUp },
    { name: "Career Growth", count: 9, icon: TrendingUp },
    { name: "Industry Insights", count: 11, icon: BookOpen }
  ];

  const Illustration = ({ type, className }) => {
    const baseClasses = "w-32 h-32";
    
    switch (type) {
      case "search-analytics":
        return (
          <div className={`${baseClasses} ${className} relative`}>
            <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"></div>
            <Search className="absolute top-6 left-8 w-8 h-8 text-white" />
            <BarChart3 className="absolute bottom-6 right-8 w-10 h-10 text-white" />
            <div className="absolute top-10 right-10 w-6 h-6 bg-white/30 rounded-full"></div>
          </div>
        );
      case "ecommerce-chart":
        return (
          <div className={`${baseClasses} ${className} relative`}>
            <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"></div>
            <ShoppingBag className="absolute top-6 left-8 w-8 h-8 text-white" />
            <BarChart3 className="absolute bottom-6 right-8 w-10 h-10 text-white" />
            <div className="absolute top-8 left-12 w-4 h-4 bg-white/40 rounded-full"></div>
          </div>
        );
      case "team-development":
        return (
          <div className={`${baseClasses} ${className} relative`}>
            <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"></div>
            <Monitor className="absolute top-6 left-8 w-8 h-8 text-white" />
            <Smartphone className="absolute bottom-6 right-8 w-6 h-6 text-white" />
            <div className="absolute top-12 right-12 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        );
      default:
        return (
          <div className={`${baseClasses} ${className} bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center`}>
            <BookOpen className="w-8 h-8 text-white" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30">
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
            className="flex justify-center mb-8"
          >
            <nav className="flex items-center space-x-3 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-medium">Blog</span>
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
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Insights, strategies, and trends in recruitment, technology, and business growth
            </motion.p>
          </motion.div>

          {/* Featured Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className={`bg-gradient-to-br ${post.gradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>
                    
                    {/* Illustration Section - Top 60% */}
                    <div className="h-60 relative flex items-center justify-center p-8">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <Illustration 
                        type={post.illustration} 
                        className="transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full border border-white/30">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section - Bottom 40% */}
                    <div className="bg-white p-6 flex-1 flex flex-col">
                      {/* Metadata */}
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all duration-300">
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Posts & Sidebar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Recent Posts - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                    >
                      <Link href={`/blog/${post.id}`}>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                          
                          {/* Gradient Header */}
                          <div className={`h-4 bg-gradient-to-r ${post.gradient}`}></div>
                          
                          <div className="p-6 flex-1">
                            {/* Category & Date */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-gray-500">{post.category}</span>
                              <span className="text-sm text-gray-400">{post.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Read More */}
                            <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all duration-300">
                              <span className="text-sm font-medium">Read article</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Categories */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <category.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest insights on recruitment and technology trends.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(0deg,transparent,black)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Recruitment Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts and discover how Novotion can help you build exceptional teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-gray-800 text-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
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

export default BlogPage;