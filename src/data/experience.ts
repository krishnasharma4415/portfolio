export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: "work" | "education" | "certification";
  description: string[];
  technologies?: string[];
  achievements?: string[];
  logo?: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "zeronsec-intern",
    title: "AI/ML Intern",
    company: "Zeronsec",
    location: "Vadodara",
    duration: "May 2024 – July 2024",
    type: "work",
    description: [
      "Developed ML-based log parsing solution processing 15 GB of cybersecurity data daily, achieving 78% accuracy in threat pattern recognition and 85% improvement in data structure standardization.",
      "Conducted comprehensive analysis identifying 3 critical workflow bottlenecks contributing to 60% slower threat detection times.",
      "Collaborated with 4 senior security analysts to validate parsing algorithms against real-world attack scenarios, building automated modules that reduced manual preprocessing time by 45%.",
      "Documented 12 production enhancement recommendations and presented scalability roadmap for handling enterprise-level log volumes exceeding 50 GB daily."
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Cybersecurity", "Log Analysis"],
    achievements: [
      "78% accuracy in threat pattern recognition",
      "85% improvement in data structure standardization",
      "45% reduction in manual preprocessing time",
      "Processed 15 GB of data daily"
    ],
    logo: "/companies/zeronsec.png"
  },
  {
    id: "srm-university",
    title: "B.Tech Computer Science Engineering",
    company: "SRM University AP",
    location: "Andhra Pradesh",
    duration: "Oct 2022 – Aug 2026",
    type: "education",
    description: [
      "Currently pursuing Bachelor of Technology in Computer Science Engineering with a focus on Machine Learning, Data Science, and Software Development.",
      "Maintaining a CGPA of 7.85 while actively participating in various technical projects and competitions.",
      "Coursework includes Data Structures & Algorithms, Machine Learning, Database Management Systems, Software Engineering, and Cloud Computing."
    ],
    achievements: [
      "CGPA: 7.85",
      "Active participation in technical projects",
      "Strong foundation in CS fundamentals"
    ],
    logo: "/education/srm.png"
  },
  {
    id: "st-josephs",
    title: "XII (ISC)",
    company: "St. Joseph's School",
    location: "India",
    duration: "2022",
    type: "education",
    description: [
      "Completed Higher Secondary Education with ISC curriculum, focusing on Mathematics, Physics, Chemistry, and Computer Science.",
      "Built strong foundation in analytical thinking and problem-solving skills."
    ],
    logo: "/education/st-josephs.png"
  }
];

export const certifications: Experience[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    location: "Online",
    duration: "2024",
    type: "certification",
    description: [
      "Demonstrated foundational knowledge of AWS Cloud concepts, services, and terminology.",
      "Validated understanding of AWS architectural principles and value proposition."
    ],
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/9b5583ee3150421abca545011d8eba45",
    logo: "/certifications/aws.png"
  },
  {
    id: "oracle-ai-professional",
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    company: "Oracle",
    location: "Online",
    duration: "2025",
    type: "certification",
    description: [
      "Certified in Oracle Cloud Infrastructure Generative AI services and solutions.",
      "Demonstrated expertise in implementing AI/ML solutions on Oracle Cloud."
    ],
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=19F793FCD8D9C489A691D6CE662B444A85609E8D6B95B046CAB62F47DEC099E0",
    logo: "/certifications/oracle.png"
  },
  {
    id: "aws-solutions-architect",
    title: "Architecting Solutions on AWS and Migrating to the AWS Cloud",
    company: "Amazon Web Services",
    location: "Online",
    duration: "2024",
    type: "certification",
    description: [
      "Completed advanced training in AWS solution architecture and cloud migration strategies.",
      "Gained expertise in designing scalable, reliable, and cost-effective AWS solutions."
    ],
    logo: "/certifications/aws.png"
  }
];