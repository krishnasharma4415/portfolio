import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

// Lazy load below-the-fold components for better initial page load
const SelectedWork = dynamic(() => import("@/components/home/SelectedWork"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

const ProjectTimeline = dynamic(() => import("@/components/home/ProjectTimeline"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

const TechConstellation = dynamic(() => import("@/components/home/TechConstellation"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

const FeaturedProjects = dynamic(() => import("@/components/home/FeaturedProjects"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

const Skills = dynamic(() => import("@/components/home/Skills"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

const Contact = dynamic(() => import("@/components/home/Contact"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
});

export default function Home() {
  return (
    <>
      {/* Above-the-fold content - load immediately */}
      <Hero />
      
      {/* Below-the-fold content - lazy loaded */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <SelectedWork />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <ProjectTimeline />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <TechConstellation />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <FeaturedProjects />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg" />}>
        <Contact />
      </Suspense>
    </>
  );
}
