"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight,
  Calendar, 
  User, 
  Clock,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  CheckCircle,
  ThumbsUp,
  BookOpen,
  Users,
  Target
} from "lucide-react";

const BlogDetailsPage = ({ params }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const blogPost = {
    id: 1,
    title: "Advanced SEO Strategies for 2024: Beyond Traditional Optimization",
    excerpt: "Discover cutting-edge SEO techniques that are reshaping digital marketing and driving unprecedented organic growth in the ever-evolving search landscape.",
    content: `
      <p>The digital marketing landscape is undergoing a seismic shift, and traditional SEO strategies are no longer sufficient to maintain competitive advantage. As we move deeper into 2024, forward-thinking businesses are embracing advanced techniques that go beyond basic keyword optimization and link building.</p>

      <h2>The Rise of AI-Powered Content Optimization</h2>
      <p>Artificial Intelligence has transformed how we approach content creation and optimization. Modern SEO professionals are leveraging AI tools to:</p>
      
      <ul>
        <li>Analyze user intent with unprecedented accuracy</li>
        <li>Generate semantically rich content structures</li>
        <li>Predict content performance before publication</li>
        <li>Automate technical SEO audits and fixes</li>
      </ul>

      <h2>E-A-T 2.0: Beyond Basic Expertise Signals</h2>
      <p>Google's emphasis on Expertise, Authoritativeness, and Trustworthiness (E-A-T) has evolved. The new paradigm includes:</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
        <p class="text-blue-800 font-semibold">"Content that demonstrates real-world expertise and provides unique insights will outperform generic, surface-level articles in 2024."</p>
      </div>

      <h2>Visual Search Optimization</h2>
      <p>With the proliferation of visual search technologies, optimizing for image and video search is no longer optional:</p>

      <ul>
        <li>Implement structured data for images and videos</li>
        <li>Optimize image file names and alt text with semantic relevance</li>
        <li>Leverage AI-powered image recognition for better indexing</li>
        <li>Create visual content that answers specific user queries</li>
      </ul>

      <h2>Core Web Vitals and User Experience</h2>
      <p>Google's page experience update has made user-centric metrics more important than ever. Key focus areas include:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-green-600 mb-2">LCP</div>
          <div class="text-sm text-gray-600">Largest Contentful Paint should be under 2.5 seconds</div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-green-600 mb-2">FID</div>
          <div class="text-sm text-gray-600">First Input Delay should be under 100ms</div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-green-600 mb-2">CLS</div>
          <div class="text-sm text-gray-600">Cumulative Layout Shift should be under 0.1</div>
        </div>
      </div>

      <h2>Voice Search Optimization</h2>
      <p>As voice assistants become more prevalent, optimizing for conversational queries is crucial:</p>

      <ul>
        <li>Focus on long-tail, question-based keywords</li>
        <li>Structure content in Q&A format</li>
        <li>Optimize for featured snippets and position zero</li>
        <li>Ensure local business information is accurate and comprehensive</li>
      </ul>

      <h2>Conclusion: The Future is Holistic</h2>
      <p>Successful SEO in 2024 requires a holistic approach that combines technical excellence, content quality, and user experience. By embracing these advanced strategies, businesses can position themselves for sustainable organic growth in an increasingly competitive digital landscape.</p>
    `,
    category: "SEO",
    date: "27 December, 2024",
    readTime: "8 min read",
    author: {
      name: "Sarah Chen",
      role: "Senior SEO Strategist",
      bio: "Sarah has over 8 years of experience in digital marketing and has helped numerous Fortune 500 companies achieve their SEO goals.",
      avatar: "/api/placeholder/100/100"
    },
    tags: ["SEO", "Digital Marketing", "AI", "Content Strategy", "Technical SEO", "Voice Search"],
    image: "/api/placeholder/800/400",
    stats: {
      views: "2.4K",
      likes: "184",
      comments: "23",
      shares: "47"
    },
    gradient: "from-fuchsia-500 to-blue-500"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "E-commerce SEO: Driving Revenue Through Organic Search",
      excerpt: "Advanced strategies for optimizing e-commerce websites and maximizing organic revenue.",
      category: "E-commerce",
      date: "24 December, 2024",
      readTime: "6 min read",
      gradient: "from-pink-400 to-green-400"
    },
    {
      id: 3,
      title: "Content Marketing in the Age of AI",
      excerpt: "How artificial intelligence is transforming content creation and distribution strategies.",
      category: "Content Marketing",
      date: "20 December, 2024",
      readTime: "7 min read",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Technical SEO Audit Checklist for 2024",
      excerpt: "Comprehensive guide to conducting thorough technical SEO audits for enterprise websites.",
      category: "Technical SEO",
      date: "18 December, 2024",
      readTime: "10 min read",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const comments = [
    {
      id: 1,
      user: {
        name: "Michael Rodriguez",
        avatar: "/api/placeholder/40/40",
        role: "Digital Marketing Director"
      },
      comment: "This is exactly what our team needed to read. The section on E-A-T 2.0 particularly resonated with our recent experiences with Google updates.",
      date: "2 days ago",
      likes: 12
    },
    {
      id: 2,
      user: {
        name: "Emily Watson",
        avatar: "/api/placeholder/40/40",
        role: "SEO Consultant"
      },
      comment: "Great insights! I've been implementing some of these AI-powered content strategies and have seen a 40% improvement in organic traffic within 3 months.",
      date: "1 day ago",
      likes: 8
    },
    {
      id: 3,
      user: {
        name: "David Kim",
        avatar: "/api/placeholder/40/40",
        role: "Content Strategist"
      },
      comment: "The visual search optimization tips are gold. We often overlook image optimization, but it's becoming increasingly important.",
      date: "12 hours ago",
      likes: 5
    }
  ];

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
      {/* Header Section */}
      <section className="relative py-16 overflow-hidden">
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
              <Link href="/blog" className="hover:text-blue-600 transition-colors duration-300">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-medium">{blogPost.category}</span>
            </nav>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="flex justify-start mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blogPost.stats.views}</span>
                </div>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{blogPost.stats.likes}</span>
                </button>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blogPost.stats.comments}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Article Content */}
              <div className="lg:col-span-8">
                {/* Featured Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className={`bg-gradient-to-br ${blogPost.gradient} rounded-3xl h-64 lg:h-80 flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-white text-center p-8">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">{blogPost.category}</h3>
                      <p className="opacity-90">In-depth analysis and strategies</p>
                    </div>
                  </div>
                </motion.div>

                {/* Article Content */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200"
                >
                  <Tag className="w-5 h-5 text-gray-400" />
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200"
                >
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isBookmarked
                        ? 'bg-blue-100 text-blue-600 border border-blue-200'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* Author Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {blogPost.author.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {blogPost.author.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {blogPost.author.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Comments Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Comments ({comments.length})
                  </h3>

                  {/* Comment Form */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Join the discussion
                    </h4>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    />
                    <div className="flex justify-end mt-4">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300">
                        Post Comment
                      </button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white rounded-2xl p-6 border border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="font-semibold text-gray-900">
                                {comment.user.name}
                              </h5>
                              <span className="text-gray-500 text-sm">
                                {comment.date}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">
                              {comment.comment}
                            </p>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-300">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{comment.likes}</span>
                              </button>
                              <button className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="space-y-8 sticky top-8">
                  
                  {/* Author Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {blogPost.author.name}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium mb-3">
                        {blogPost.author.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {blogPost.author.bio}
                      </p>
                    </div>
                  </motion.div>

                  {/* Table of Contents */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {[
                        "AI-Powered Content Optimization",
                        "E-A-T 2.0: Beyond Basic Expertise",
                        "Visual Search Optimization",
                        "Core Web Vitals and UX",
                        "Voice Search Optimization",
                        "Conclusion: The Future is Holistic"
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </motion.div>

                  {/* Related Posts */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Related Posts
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.id}`}
                          className="block p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                        >
                          <span className="text-sm font-medium text-blue-600 mb-2 block">
                            {post.category}
                          </span>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Newsletter */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-lg font-bold mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get the latest insights on recruitment and technology trends delivered to your inbox.
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
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Article Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Continue Reading
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href={`/blog/${relatedPosts[0].id}`}
                className="group text-left"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Article
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {relatedPosts[0].title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {relatedPosts[0].excerpt}
                  </p>
                </div>
              </Link>

              <Link
                href={`/blog/${relatedPosts[1].id}`}
                className="group text-left"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-3 justify-end">
                    Next Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {relatedPosts[1].title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {relatedPosts[1].excerpt}
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;