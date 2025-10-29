"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { experiences, certifications } from "@/data/experience";

export default function Experience() {
  const workExperience = experiences.filter(exp => exp.type === "work");
  const education = experiences.filter(exp => exp.type === "education");

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Experience & Education"
            subtitle="My professional journey, educational background, and achievements"
            centered
          />
        </AnimatedSection>

        {/* Work Experience */}
        <section className="mt-20">
          <AnimatedSection>
            <div className="flex items-center space-x-3 mb-12">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-primary">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {exp.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-20">
          <AnimatedSection>
            <div className="flex items-center space-x-3 mb-12">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-primary">{edu.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {edu.description.map((desc, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>

                  {/* Achievements */}
                  {edu.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Highlights:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-20">
          <AnimatedSection>
            <div className="flex items-center space-x-3 mb-12">
              <Award className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{cert.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{cert.duration}</p>
                      
                      <div className="space-y-2 mb-4">
                        {cert.description.map((desc, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            • {desc}
                          </p>
                        ))}
                      </div>

                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 text-sm font-medium"
                        >
                          <ExternalLink size={14} />
                          <span>View Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Timeline Summary */}
        <AnimatedSection delay={0.4}>
          <section className="mt-20 bg-card rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Career Timeline</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">2024 - Present:</span>
                  <span className="text-muted-foreground ml-2">Continuing B.Tech CSE, Building Projects</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">May - July 2024:</span>
                  <span className="text-muted-foreground ml-2">AI/ML Intern at Zeronsec</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">2022 - 2026:</span>
                  <span className="text-muted-foreground ml-2">B.Tech CSE at SRM University AP</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-muted rounded-full flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">2022:</span>
                  <span className="text-muted-foreground ml-2">Completed XII (ISC) from St. Joseph's School</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}