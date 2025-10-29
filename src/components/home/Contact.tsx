"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Let's Work Together"
            subtitle="Ready to bring your ideas to life? Let's discuss your next project"
            centered
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Send me an email
              </h3>
              <p className="text-muted-foreground mb-6">
                Drop me a line and I'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:krishnajan2004@gmail.com"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>krishnajan2004@gmail.com</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let's have a chat
              </h3>
              <p className="text-muted-foreground mb-6">
                Use the contact form to tell me more about your project and requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-border bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <span>Contact Form</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}