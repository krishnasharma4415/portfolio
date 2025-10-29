export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "shipstream",
    title: "ShipStream - Vercel-like Deployment Platform",
    description: "Built microservices deployment platform processing GitHub repos with subdomain routing, achieving 100% free-tier operation.",
    longDescription: "A comprehensive deployment platform that mimics Vercel's functionality while operating entirely on free-tier services. The platform processes GitHub repositories and provides automated deployment with custom subdomain routing.",
    technologies: ["TypeScript", "Node.js", "React", "Redis", "Cloudflare R2", "Render.com", "Docker", "Vite", "TailwindCSS", "Shadcn/ui"],
    category: "Full Stack",
    image: "/projects/shipstream.jpg",
    liveUrl: "https://ship-stream.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/shipstream",
    featured: true,
    achievements: [
      "Architected 4-service pipeline with Redis queue managing concurrent builds",
      "Engineered TypeScript backend supporting 10+ frameworks (React, Vue, Next.js, Angular)",
      "Developed real-time React dashboard with deployment tracking and persistent history",
      "Achieved 100% free-tier operation using Cloudflare R2, Upstash Redis, and Render.com"
    ]
  },
  {
    id: "log-anomaly-detection",
    title: "Cross-Source Log Anomaly Detection System",
    description: "Built scalable data pipeline processing 16 log sources using PySpark for distributed computing with ML-based anomaly detection.",
    longDescription: "An advanced machine learning system designed to detect anomalies across multiple log sources including Windows, Linux, Hadoop, HDFS, and Spark systems.",
    technologies: ["Python", "PySpark", "BERT", "Scikit-learn", "Apache Spark", "SQL", "ETL", "Machine Learning"],
    category: "Machine Learning",
    image: "/projects/log-anomaly.jpg",
    liveUrl: "https://log-anomaly-frontend.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/log-anomaly-detection",
    featured: true,
    achievements: [
      "Implemented and benchmarked 9 ML models including Isolation Forest, LOF, and BERT-based architectures",
      "Designed leave-one-source-out cross-validation protocol with interpretable pipeline",
      "Deployed production-ready solution with monitoring dashboards and optimized SQL queries",
      "Processed millions of records with superior generalization through domain-adversarial training"
    ]
  },
  {
    id: "fashion-community",
    title: "Fashion Community - Social Media Platform",
    description: "Developed full-stack MERN social platform with Google OAuth, JWT authentication, and real-time engagement features.",
    longDescription: "A comprehensive social media platform specifically designed for fashion enthusiasts, featuring real-time interactions, content sharing, and community engagement.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Cloudinary", "TailwindCSS"],
    category: "Full Stack",
    image: "/projects/fashion-community.jpg",
    liveUrl: "https://fashion-community-mguq.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/fashion-community",
    featured: true,
    achievements: [
      "Built scalable REST APIs with MongoDB Atlas for 10,000+ concurrent users",
      "Implemented hashtag-based search, trending analysis, and explore page with infinite scroll",
      "Created responsive React UI ensuring seamless cross-platform experience",
      "Integrated multi-media uploads via Cloudinary with real-time engagement features"
    ]
  },
  {
    id: "fashion-recommender",
    title: "Fashion Recommender System",
    description: "Developed data pipeline processing 100,000+ interactions with normalized SQL database schema for optimized query performance.",
    longDescription: "An intelligent recommendation system that analyzes user behavior and preferences to provide personalized fashion recommendations using advanced machine learning techniques.",
    technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "K-Means", "ETL", "Data Analysis"],
    category: "Machine Learning",
    image: "/projects/fashion-recommender.jpg",
    liveUrl: "https://fashion-recommender-demo.vercel.app/",
    githubUrl: "https://github.com/krishnasharma4415/fashion-recommender",
    featured: false,
    achievements: [
      "Engineered ETL workflows for data preprocessing and feature transformation",
      "Applied K-Means clustering for customer segmentation across 5 user groups",
      "Achieved 78% precision@10 through analytical problem-solving",
      "Processed 100,000+ user interactions with optimized database queries"
    ]
  }
];

export const categories = ["All", "Full Stack", "Machine Learning", "Data Science", "Web Development"];