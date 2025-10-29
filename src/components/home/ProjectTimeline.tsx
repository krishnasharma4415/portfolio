"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  type: 'project' | 'experience';
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  achievement?: string;
}

export default function ProjectTimeline() {
  // Combine projects and experiences into timeline
  const timelineItems: TimelineItem[] = [
    {
      id: 'zeronsec',
      title: 'AI/ML Intern at Zeronsec',
      date: 'May 2024',
      type: 'experience',
      description: 'Developed ML-based log parsing solution processing 15 GB of cybersecurity data daily',
      technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      achievement: '78% accuracy in threat pattern recognition'
    },
    {
      id: 'shipstream',
      title: 'ShipStream Platform',
      date: 'Apr 2024',
      type: 'project',
      description: 'Vercel-like deployment platform with 100% free-tier operation',
      technologies: ['TypeScript', 'Node.js', 'Redis', 'Docker'],
      liveUrl: 'https://ship-stream.vercel.app/',
      githubUrl: 'https://github.com/krishnasharma4415/shipstream',
      achievement: '100% free-tier operation'
    },
    {
      id: 'log-anomaly',
      title: 'Log Anomaly Detection System',
      date: 'Mar 2024',
      type: 'project',
      description: 'ML system processing 16 log sources with domain-adversarial training',
      technologies: ['Python', 'PySpark', 'BERT', 'TensorFlow'],
      liveUrl: 'https://log-anomaly-frontend.vercel.app/',
      githubUrl: 'https://github.com/krishnasharma4415/log-anomaly-detection',
      achievement: '78% accuracy across 16 sources'
    },
    {
      id: 'fashion-community',
      title: 'Fashion Community Platform',
      date: 'Feb 2024',
      type: 'project',
      description: 'Full-stack MERN social platform with real-time engagement',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://fashion-community-mguq.vercel.app/',
      githubUrl: 'https://github.com/krishnasharma4415/fashion-community',
      achievement: '10,000+ concurrent users'
    },
    {
      id: 'university',
      title: 'Started B.Tech CSE',
      date: 'Oct 2022',
      type: 'experience',
      description: 'Began Computer Science Engineering at SRM University AP',
      achievement: 'CGPA: 7.85'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of projects, experiences, and milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-start"
              >
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    item.type === 'project' 
                      ? 'bg-primary border-primary' 
                      : 'bg-accent border-accent'
                  }`}></div>
                  
                  {/* Pulse animation */}
                  <div className={`absolute inset-0 w-4 h-4 rounded-full animate-ping ${
                    item.type === 'project' 
                      ? 'bg-primary' 
                      : 'bg-accent'
                  } opacity-20`}></div>
                </div>

                {/* Content card */}
                <div className="ml-8 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={16} className="mr-2" />
                          {item.date}
                        </div>
                      </div>
                      
                      {/* Type badge */}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'project'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Achievement */}
                    {item.achievement && (
                      <div className="mb-4">
                        <span className="text-sm font-semibold" style={{ color: 'var(--success)' }}>
                          ✨ {item.achievement}
                        </span>
                      </div>
                    )}

                    {/* Links */}
                    {(item.liveUrl || item.githubUrl) && (
                      <div className="flex space-x-4">
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enhanced-link inline-flex items-center space-x-2 text-primary hover:text-primary/80 text-sm font-medium"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enhanced-link inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground text-sm font-medium"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}