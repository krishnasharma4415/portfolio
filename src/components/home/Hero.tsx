"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background gradient */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          // Use deterministic positions based on index to avoid hydration issues
          const initialX = (i * 137) % 1200; // Use prime number for better distribution
          const initialY = (i * 97) % 800;
          const animateX = ((i + 7) * 149) % 1200;
          const animateY = ((i + 3) * 113) % 800;
          const duration = 25 + (i % 15);
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full floating"
              initial={{
                x: initialX,
                y: initialY,
              }}
              animate={{
                x: animateX,
                y: animateY,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-accent font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold gradient-text"
          >
            Krishna Sharma
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-foreground"
          >
            Full-Stack Developer & ML Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I build innovative web applications and machine learning solutions that solve real-world problems. 
            Currently pursuing B.Tech CSE at SRM University AP with expertise in modern web technologies and AI/ML.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/projects"
              className="group enhanced-button magnetic-button bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group enhanced-button magnetic-button border border-border bg-card text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all duration-200 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
          >
            {[
              { label: "Major Projects", value: 4, suffix: "" },
              { label: "Technologies Mastered", value: 35, suffix: "+" },
              { label: "Data Processed (GB)", value: 15, suffix: "+" },
              { label: "AWS Certifications", value: 3, suffix: "" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={1.5}
                    className="text-primary"
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}