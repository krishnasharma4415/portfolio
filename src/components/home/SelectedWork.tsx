"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metric: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const selectedProjects: Project[] = [
  {
    id: "shipstream",
    title: "ShipStream",
    description: "Vercel-like deployment platform with 100% free-tier operation",
    techStack: ["React", "Node.js", "Redis", "Docker", "Cloudflare R2"],
    metric: "100% Free-tier",
    image: "/projects/shipstream-preview.jpg",
    liveUrl: "https://ship-stream.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/shipstream"
  },
  {
    id: "log-anomaly",
    title: "Cross-Source Log Anomaly Detection",
    description: "ML system processing 16 log sources with domain-adversarial training",
    techStack: ["Python", "PySpark", "BERT", "TensorFlow", "MongoDB"],
    metric: "78% Accuracy",
    image: "/projects/log-anomaly-preview.jpg",
    liveUrl: "https://log-anomaly-frontend.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/log-anomaly-detection"
  },
  {
    id: "fashion-community",
    title: "Fashion Community Platform",
    description: "Full-stack MERN social platform with real-time engagement",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
    metric: "10K+ Users",
    image: "/projects/fashion-community-preview.jpg",
    liveUrl: "https://fashion-community-mguq.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/fashion-community"
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
  isLarge?: boolean;
}

const ProjectCard = ({ project, index, isLarge = false }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        enhanced-card glow-border group relative bg-[#252535] border border-[#35354a] rounded-2xl p-8 
        hover:border-[#a78bfa] cursor-pointer
        ${isLarge ? 'min-h-[400px]' : 'min-h-[400px]'}
      `}
    >
      {/* Project Image */}
      <div className="relative aspect-video mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#a78bfa]/20 to-[#fb7185]/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
        <div className="card-image w-full h-full">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover enhanced-image"
            unoptimized
            sizes={isLarge ? "(max-width: 1024px) 100vw, 100vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"}
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
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
              aria-label={`View ${project.title} live demo`}
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
              aria-label={`View ${project.title} source code`}
            >
              <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#e9e9f0] group-hover:text-[#a78bfa] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-[#9898a8] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="
                px-3.5 py-1.5 text-sm font-medium text-[#e9e9f0]
                bg-[rgba(167,139,250,0.15)] border border-[rgba(167,139,250,0.3)]
                rounded-full transition-all duration-200
                hover:bg-[rgba(167,139,250,0.25)] hover:border-[rgba(167,139,250,0.5)]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metric Badge */}
        <div className="flex items-center justify-between">
          <div className="
            inline-flex items-center space-x-2 px-4 py-2 
            bg-[rgba(110,231,183,0.15)] border border-[rgba(110,231,183,0.3)]
            text-[#6ee7b7] rounded-lg text-sm font-semibold
          ">
            <TrendingUp size={16} />
            <span>{project.metric}</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="enhanced-link text-[#9898a8] hover:text-[#a78bfa] transition-colors text-sm font-medium"
                aria-label={`View ${project.title} live demo`}
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="enhanced-link text-[#9898a8] hover:text-[#a78bfa] transition-colors text-sm font-medium"
                aria-label={`View ${project.title} source code`}
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Focus outline for accessibility */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-within:ring-[#a78bfa] transition-all duration-200" />
    </motion.article>
  );
};

export default function SelectedWork() {
  return (
    <section className="py-20 bg-[#1c1c28]" aria-labelledby="selected-work-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="selected-work-title"
            className="text-3xl md:text-5xl font-bold text-[#e9e9f0] mb-4"
          >
            Selected Work
          </h2>
          <p className="text-xl text-[#9898a8] font-normal max-w-2xl mx-auto">
            Showcasing ML systems and scalable platforms
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
          {/* First two projects side by side on desktop */}
          {selectedProjects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
          
          {/* Third project full width on desktop */}
          <div className="md:col-span-2">
            <ProjectCard
              project={selectedProjects[2]}
              index={2}
              isLarge={true}
            />
          </div>
        </div>

        {/* View All Projects CTA */}
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
            className="
              enhanced-button magnetic-button inline-flex items-center space-x-2 px-8 py-4 
              bg-[#fb7185] text-[#1c1c28] rounded-xl font-semibold
              hover:bg-[#fb7185]/90 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#1c1c28]
            "
            aria-label="View all projects in portfolio"
          >
            <span>View All Projects</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}