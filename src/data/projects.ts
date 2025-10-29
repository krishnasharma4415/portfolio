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
      "Built microservices deployment platform with 100% free-tier operation using Cloudflare R2, Upstash Redis, and Render.com",
      "Architected 4-service pipeline with Redis queue managing concurrent builds and automated npm workflows for 10+ frameworks",
      "Developed real-time React dashboard with TypeScript backend, deployment tracking, persistent history, and responsive UI using Vite + TailwindCSS + Shadcn/ui"
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
      "Engineered scalable data pipeline processing 16 diverse log sources (Windows, Linux, Hadoop, HDFS, Spark) using PySpark for distributed computing",
      "Implemented 9 ML models including Isolation Forest, LOF, and BERT-based architectures with domain-adversarial training for cross-source generalization",
      "Designed ETL workflows with optimized SQL queries, Drain template extraction, and BERT embeddings, evaluated using PR-AUC and Macro-F1 metrics"
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
      "Developed full-stack MERN platform with Google OAuth, JWT authentication, multi-media uploads via Cloudinary, and real-time engagement features",
      "Built scalable REST APIs with MongoDB Atlas architected to handle 10,000+ concurrent users with efficient database indexing and query optimization",
      "Implemented hashtag-based search, trending analysis, infinite scroll, and personalized content feed with responsive React UI"
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
      "Developed data pipeline processing 100,000+ interactions with normalized SQL database schema for optimized query performance",
      "Applied K-Means clustering for customer segmentation across 5 user groups, achieving 78% precision@10 through collaborative filtering"
    ]
  }
];

export const categories = ["All", "Full Stack", "Machine Learning", "Data Science", "Web Development"];