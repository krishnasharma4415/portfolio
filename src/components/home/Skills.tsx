"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Skills() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical expertise across different domains"
            centered
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.name} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level
                                  ? `bg-gradient-to-r ${category.color}`
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quick Stats */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Programming Languages", value: "10+" },
              { label: "Frameworks & Libraries", value: "15+" },
              { label: "Databases", value: "5+" },
              { label: "Cloud Platforms", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}