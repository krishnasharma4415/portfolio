"use client";

import { Download, MapPin, Calendar, GraduationCap, Award } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/experience";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer and machine learning engineer currently pursuing 
                  B.Tech CSE at SRM University AP. I love building innovative solutions that solve 
                  real-world problems and make a positive impact.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Andhra Pradesh, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap size={16} />
                    <span>B.Tech CSE Student</span>
                  </div>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white">
                      KS
                    </div>
                    <p className="text-lg font-semibold text-foreground">Krishna Sharma</p>
                    <p className="text-muted-foreground">Full-Stack Developer & ML Engineer</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="My Journey"
              subtitle="From curious student to passionate developer"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 space-y-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  The Beginning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey into technology started during my school years when I first encountered 
                  programming. The ability to create something from nothing, to solve problems with 
                  code, fascinated me. This curiosity led me to pursue Computer Science Engineering 
                  at SRM University AP, where I've been expanding my knowledge and skills.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Professional Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  During my internship at Zeronsec, I dove deep into the world of cybersecurity and 
                  machine learning. Working with 15 GB of cybersecurity data daily, I developed 
                  ML-based log parsing solutions and collaborated with senior analysts to build 
                  automated threat detection systems. This experience taught me the importance of 
                  scalable, efficient solutions in real-world applications.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Current Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Today, I'm focused on building full-stack applications and machine learning 
                  solutions that make a difference. From deployment platforms like ShipStream to 
                  anomaly detection systems, I enjoy tackling complex problems and creating 
                  user-friendly solutions. I'm always learning new technologies and best practices 
                  to stay at the forefront of development.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Technical Expertise"
              subtitle="A comprehensive overview of my technical skills"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.slice(0, 6).map((category, index) => (
              <AnimatedSection key={category.name} delay={index * 0.1}>
                <div className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.slice(0, 5).map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < skill.level
                                  ? `bg-gradient-to-r ${category.color}`
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    {category.skills.length > 5 && (
                      <p className="text-xs text-muted-foreground">
                        +{category.skills.length - 5} more skills
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Certifications"
              subtitle="Professional certifications and achievements"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.id} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">{cert.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{cert.duration}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-sm font-medium"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Beyond Code"
              subtitle="What drives me outside of programming"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Continuous Learning",
                description: "Always exploring new technologies and methodologies to stay current with industry trends."
              },
              {
                title: "Problem Solving",
                description: "Enjoy tackling complex challenges and finding elegant solutions to difficult problems."
              },
              {
                title: "Open Source",
                description: "Contributing to open source projects and sharing knowledge with the developer community."
              },
              {
                title: "Innovation",
                description: "Passionate about building products that can make a positive impact on people's lives."
              }
            ].map((interest, index) => (
              <AnimatedSection key={interest.title} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-2xl">
                    {interest.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {interest.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}