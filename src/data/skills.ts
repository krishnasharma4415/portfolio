export interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Python", category: "Programming", level: 5 },
      { name: "JavaScript", category: "Programming", level: 5 },
      { name: "TypeScript", category: "Programming", level: 4 },
      { name: "Java", category: "Programming", level: 4 },
      { name: "Scala", category: "Programming", level: 3 },
      { name: "SQL", category: "Programming", level: 5 },
      { name: "C/C++", category: "Programming", level: 3 },
      { name: "R", category: "Programming", level: 3 },
      { name: "Bash", category: "Programming", level: 4 },
      { name: "PHP", category: "Programming", level: 3 }
    ]
  },
  {
    name: "Web Development",
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React.js", category: "Frontend", level: 5 },
      { name: "Next.js", category: "Frontend", level: 5 },
      { name: "Node.js", category: "Backend", level: 5 },
      { name: "Express.js", category: "Backend", level: 5 },
      { name: "Flask", category: "Backend", level: 4 },
      { name: "FastAPI", category: "Backend", level: 4 },
      { name: "Spring Boot", category: "Backend", level: 3 },
      { name: "REST APIs", category: "Backend", level: 5 },
      { name: "JWT/OAuth", category: "Backend", level: 4 }
    ]
  },
  {
    name: "Databases & Data",
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "MySQL", category: "Database", level: 5 },
      { name: "MongoDB", category: "Database", level: 5 },
      { name: "PostgreSQL", category: "Database", level: 4 },
      { name: "SQL Optimization", category: "Database", level: 4 },
      { name: "Database Indexing", category: "Database", level: 4 },
      { name: "PySpark", category: "Big Data", level: 4 },
      { name: "Apache Spark", category: "Big Data", level: 4 },
      { name: "Hadoop", category: "Big Data", level: 3 },
      { name: "HDFS", category: "Big Data", level: 3 }
    ]
  },
  {
    name: "Machine Learning & AI",
    color: "from-orange-400 to-red-400",
    skills: [
      { name: "TensorFlow", category: "ML", level: 4 },
      { name: "PyTorch", category: "ML", level: 4 },
      { name: "Scikit-learn", category: "ML", level: 5 },
      { name: "Keras", category: "ML", level: 4 },
      { name: "Hugging Face", category: "ML", level: 4 },
      { name: "BERT", category: "NLP", level: 4 },
      { name: "NLTK", category: "NLP", level: 4 },
      { name: "Anomaly Detection", category: "ML", level: 4 },
      { name: "MLflow", category: "MLOps", level: 3 }
    ]
  },
  {
    name: "Cloud & DevOps",
    color: "from-indigo-400 to-purple-400",
    skills: [
      { name: "AWS", category: "Cloud", level: 4 },
      { name: "SageMaker", category: "Cloud", level: 3 },
      { name: "EC2", category: "Cloud", level: 4 },
      { name: "S3", category: "Cloud", level: 4 },
      { name: "Docker", category: "DevOps", level: 4 },
      { name: "Git/GitHub", category: "DevOps", level: 5 },
      { name: "CI/CD", category: "DevOps", level: 3 }
    ]
  },
  {
    name: "Data Science Tools",
    color: "from-pink-400 to-rose-400",
    skills: [
      { name: "Pandas", category: "Data Science", level: 5 },
      { name: "NumPy", category: "Data Science", level: 5 },
      { name: "OpenCV", category: "Computer Vision", level: 3 },
      { name: "Tableau", category: "Visualization", level: 4 },
      { name: "Power BI", category: "Visualization", level: 4 },
      { name: "Matplotlib", category: "Visualization", level: 4 },
      { name: "Seaborn", category: "Visualization", level: 4 },
      { name: "Plotly", category: "Visualization", level: 4 }
    ]
  }
];