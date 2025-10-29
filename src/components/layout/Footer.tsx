"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/krishnasharma4415", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/krishna-sharma441500", icon: Linkedin },
  { name: "Email", href: "mailto:krishnajan2004@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Krishna Sharma</h3>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer and ML engineer passionate about building innovative solutions 
              that make a difference. Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="/SDE.pdf" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">krishnajan2004@gmail.com</p>
              <p className="text-muted-foreground">+91 9315268810</p>
            </div>
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-muted"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Krishna Sharma. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Built with</span>
            <Heart size={16} className="text-accent" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}