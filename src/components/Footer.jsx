"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  ChevronRight, // Cleaner icon for link lists
} from "lucide-react";
import Image from "next/image";

// --- Sub-Components for Optimization ---

// 1. Reusable Contact Item Component
const ContactItem = ({ Icon, title, value, iconColor, bgColor }) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
  >
    <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <div>
      <div className="text-sm text-gray-400">{title}</div>
      <div className="font-medium">{value}</div>
    </div>
  </motion.div>
);

// 2. Reusable Social Link Component
const SocialLinkItem = ({ social }) => {
  const IconComponent = social.icon;
  return (
    <motion.a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20 border border-white/10`}
      aria-label={`Follow us on ${social.name}`}
    >
      <IconComponent className="w-5 h-5" />
    </motion.a>
  );
};

// 3. Reusable Footer Link List Item
const FooterLinkItem = ({ link }) => (
  <li>
    <motion.div whileHover={{ x: 5 }}>
      <Link
        href={link.href}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group text-sm"
      >
        {/* Changed ArrowRight to ChevronRight for a less heavy list marker */}
        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
        {link.name}
      </Link>
    </motion.div>
  </li>
);

// --- Main Component ---
const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  // Optimized Link Data Structure (unchanged but placed here for context)
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "RPO Solutions", href: "/services/rpo" },
        { name: "Career Support", href: "/services/career-support" },
        { name: "IT Recruitment", href: "/services/it-recruitment" },
        { name: "Executive Search", href: "/services/executive-search" },
        { name: "Talent Consulting", href: "/services/consulting" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Process", href: "/process" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "News & Insights", href: "/insights" },
        { name: "Industry Reports", href: "/reports" },
        { name: "Career Tips", href: "/career-tips" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/novotion",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/novotion",
      icon: Twitter,
      color: "hover:text-sky-500",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/novotion",
      icon: Facebook,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/novotion",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Processing", href: "/data-processing" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern (Optimized opacity) */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Brand, Contact, & Links */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Brand & Contact Section */}
              <div className="space-y-8">
                {/* Logo & Description */}
                <div className="space-y-4">
                  <Link href="/" className="inline-block" aria-label="Novotion Home">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 text-2xl font-bold"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">N</span>
                      </div>
                      <span>Novotion</span>
                    </motion.div>
                  </Link>

                  <p className="text-gray-300 leading-relaxed max-w-md">
                    Your strategic RPO partner delivering recruitment excellence
                    across UK and USA markets. Connecting talent with
                    opportunity through innovative, data-driven solutions.
                  </p>
                </div>

                {/* Contact Information (Uses Reusable Component) */}
                <div className="space-y-4">
                  <ContactItem 
                    Icon={Phone}
                    title="Phone"
                    value="+1 786 652 3950"
                    iconColor="text-blue-400"
                    bgColor="bg-blue-500/20"
                  />
                  <ContactItem 
                    Icon={Mail}
                    title="Email"
                    value="info@novotionservices.com"
                    iconColor="text-purple-400"
                    bgColor="bg-purple-500/20"
                  />
                  <ContactItem 
                    Icon={Globe}
                    title="Global Presence"
                    value="UK • USA • India"
                    iconColor="text-green-400"
                    bgColor="bg-green-500/20"
                  />
                </div>

                {/* Social Links (Uses Reusable Component) */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <SocialLinkItem key={social.name} social={social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Sections (Uses Reusable Component) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="font-semibold text-white text-lg mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <FooterLinkItem key={link.name} link={link} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }} // Optimization: only run animation when 10% visible
            className="border-t border-gray-800 py-12"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">
                  STAY UPDATED
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Get Recruitment Insights
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest trends in
                recruitment, career advice, and industry insights delivered to
                your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email subscription input" // Added for accessibility
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" // Added type for form submission
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar: Copyright and Legal Links */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span>
                    © {currentYear} Novotion Inc. All rights reserved.
                  </span>
                  <Heart className="w-4 h-4 text-red-400" />
                </div>

                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Powered by / Made With Love */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
           


                {/* Powered by Gohil Infotech */}
                <Link
                  href="https://gohilinfotech.example"
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Powered by Gohil Infotech (opens in a new tab)"
                >
                  {/* Performance Optimization: Specify size for Image component */}
                  <Image
                    src="/GIPL_Logomark.svg"
                    alt="Gohil Infotech"
                    width={30}
                    height={28}
                    className="object-contain"
                    priority={false}
                  />
                  <div className="text-xs text-gray-300">
                    <div className="text-[11px] font-medium text-gray-100">
                      Powered by
                    </div>
                    <div className="text-xs text-gray-300">
                      Gohil Infotech
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0 }}
          className="lg:hidden fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
            aria-label="Contact Us" // Added for accessibility
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;