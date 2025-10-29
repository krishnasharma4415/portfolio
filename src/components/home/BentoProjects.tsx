"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metric: string;
  metricValue?: number;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  size: 'small' | 'medium' | 'large';
}

const bentoProjects: Project[] = [
  {
    id: "shipstream",
    title: "ShipStream",
    description: "Vercel-like deployment platform with 100% free-tier operation",
    techStack: ["React", "Node.js", "Redis", "Docker"],
    metric: "100% Free-tier",
    metricValue: 100,
    image: "/projects/shipstream-preview.jpg",
    liveUrl: "https://ship-stream.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/shipstream",
    size: 'large'
  },
  {
    id: "log-anomaly",
    title: "Log Anomaly Detection",
    description: "ML system with 78% accuracy across 16 sources",
    techStack: ["Python", "PySpark", "BERT"],
    metric: "78% Accuracy",
    metricValue: 78,
    image: "/projects/log-anomaly-preview.jpg",
    liveUrl: "https://log-anomaly-frontend.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/log-anomaly-detection",
    size: 'medium'
  },
  {
    id: "fashion-community",
    title: "Fashion Community",
    description: "Social platform supporting 10K+ users",
    techStack: ["React", "MongoDB", "Express"],
    metric: "10K+ Users",
    metricValue: 10000,
    image: "/projects/fashion-community-preview.jpg",
    liveUrl: "https://fashion-community-mguq.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/fashion-community",
    size: 'medium'
  },
  {
    id: "fashion-recommender",
    title: "Fashion Recommender",
    description: "ML recommendation system with 78% precision",
    techStack: ["Python", "Scikit-learn", "SQL"],
    metric: "78% Precision",
    metricValue: 78,
    image: "/projects/fashion-recommender.jpg",
    size: 'small'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const getGridClass = () => {
    switch (project.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        enhanced-card group relative bg-[#252535] border border-[#35354a] rounded-2xl p-6 
        hover:border-[#a78bfa] cursor-pointer overflow-hidden
        ${getGridClass()}
      `}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Project Image */}
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#a78bfa]/20 to-[#fb7185]/20 ${
        project.size === 'large' ? 'h-48 mb-6' : 'h-32 mb-4'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
        <div className="card-image w-full h-full">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover enhanced-image"
            unoptimized
          />
        </div>
        
        {/* Action buttons overlay */}
        <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-[#a78bfa]/80 transition-colors"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-[#a78bfa]/80 transition-colors"
            >
              <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Title */}
        <h3 className={`font-semibold text-[#e9e9f0] group-hover:text-[#a78bfa] transition-colors duration-300 ${
          project.size === 'large' ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-[#9898a8] leading-relaxed ${
          project.size === 'small' ? 'text-sm line-clamp-2' : 'text-base line-clamp-3'
        }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, project.size === 'small' ? 2 : 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-[#e9e9f0] bg-[rgba(167,139,250,0.15)] border border-[rgba(167,139,250,0.3)] rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (project.size === 'small' ? 2 : 4) && (
            <span className="px-2 py-1 text-xs text-[#9898a8]">
              +{project.techStack.length - (project.size === 'small' ? 2 : 4)}
            </span>
          )}
        </div>

        {/* Metric Badge with Animation */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-2 px-3 py-2 bg-[rgba(110,231,183,0.15)] border border-[rgba(110,231,183,0.3)] text-[#6ee7b7] rounded-lg text-sm font-semibold">
            <TrendingUp size={16} />
            {project.metricValue ? (
              <AnimatedCounter 
                end={project.metricValue} 
                suffix={project.metric.includes('%') ? '%' : project.metric.includes('K') ? 'K+' : ''}
                duration={2}
              />
            ) : (
              <span>{project.metric}</span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="enhanced-link text-[#9898a8] hover:text-[#a78bfa] transition-colors text-sm font-medium"
              >
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="enhanced-link text-[#9898a8] hover:text-[#a78bfa] transition-colors text-sm font-medium"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function BentoProjects() {
  return (
    <section className="py-20 bg-[#1c1c28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#e9e9f0] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[#9898a8] font-normal max-w-2xl mx-auto">
            Apple-style Bento grid showcasing my best work
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {bentoProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="enhanced-button magnetic-button inline-flex items-center space-x-2 px-8 py-4 bg-[#fb7185] text-[#1c1c28] rounded-xl font-semibold hover:bg-[#fb7185]/90 transition-all duration-200"
          >
            <span>Explore All Projects</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}