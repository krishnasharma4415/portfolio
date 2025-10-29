"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:krishnajan2004@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnajan2004@gmail.com",
      href: "mailto:krishnajan2004@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9315268810",
      href: "tel:+919315268810"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/krishnasharma4415",
      icon: Github,
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/krishna-sharma441500",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      href: "mailto:krishnajan2004@gmail.com",
      icon: Mail,
      color: "hover:text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Get In Touch"
            subtitle="Let's discuss opportunities, collaborations, or just have a chat about technology"
            centered
          />
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you're looking for a developer, 
                  have a project in mind, or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={info.label}
                      whileHover={{ scale: 1.02 }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-card border border-border rounded-lg text-muted-foreground transition-colors ${link.color}`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-6 border-t border-border">
                <a
                  href="/SDE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full accent-cta hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                This form will open your default email client. Alternatively, you can email me directly at{" "}
                <a href="mailto:krishnajan2004@gmail.com" className="text-primary hover:text-primary/80">
                  krishnajan2004@gmail.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time opportunities, 
              and interesting collaborations. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:krishnajan2004@gmail.com"
                className="accent-cta hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="/SDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-card text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                View My Resume
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}