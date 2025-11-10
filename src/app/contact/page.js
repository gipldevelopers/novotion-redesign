"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Building,
  Users,
  Star,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      country: "United States",
      address:
        "123 Tech Avenue, Suite 400\nSan Francisco, CA 94105\nUnited States",
      phone: "+1 (555) 123-4567",
      email: "us@novotion.com",
      workingHours: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
    },
    {
      country: "United Kingdom",
      address: "45 Innovation Street\nLondon, EC2A 4BQ\nUnited Kingdom",
      phone: "+44 20 7123 4567",
      email: "uk@novotion.com",
      workingHours: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
    },
    {
      country: "India",
      address: "78 Digital District\nBangalore, KA 560001\nIndia",
      phone: "+91 80 4123 4567",
      email: "in@novotion.com",
      workingHours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
    },
  ];

  const services = [
    "Recruitment Process Outsourcing",
    "Career Support & Facilitation",
    "Specialized Tech Recruitment",
    "Executive Search",
    "Global Expansion Support",
    "Other",
  ];

  const budgets = [
    "Less than $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
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
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-medium">Contact Us</span>
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
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Get in touch with our team to discuss how we can help transform
              your recruitment strategy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Collaborate With Us!
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We're excited to hear from you! Whether you have a question
                    about our services, want to discuss a new project, or need
                    recruitment support, our team is here to help.
                  </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Two-column grid for name and company */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Two-column grid for email and phone */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Company Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your company email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Two-column grid for service and budget */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-gray-700 font-medium mb-3"
                      >
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-3"
                    >
                      How can We Assist You? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, challenges, or any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with our teams around the world for localized recruitment
              expertise and support
            </p>
          </motion.div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className={`${office.bgColor} rounded-3xl p-8 border-2 ${office.borderColor} hover:shadow-xl transition-all duration-500`}
              >
                {/* Country Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${office.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {office.country}
                  </h3>
                </div>

                {/* Address */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin
                      className={`w-5 h-5 text-${office.color}-600 mt-1 flex-shrink-0`}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Office Address
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 bg-${office.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Phone className={`w-5 h-5 text-${office.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Call 24/7 Hours
                      </h4>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 bg-${office.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Mail className={`w-5 h-5 text-${office.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Send Us Mail
                      </h4>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 bg-${office.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Clock className={`w-5 h-5 text-${office.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Working Hours
                      </h4>
                      <p className="text-gray-600">{office.workingHours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Prefer a Quick Chat?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Sometimes a conversation is better. Schedule a quick call with our
              experts to discuss your specific needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+15551234567"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Clock className="w-5 h-5" />
                Schedule Meeting
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "24h", label: "Average Response Time", icon: Clock },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "500+", label: "Projects Completed", icon: Users },
              { number: "15+", label: "Countries Served", icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
