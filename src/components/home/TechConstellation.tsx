"use client";

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Search, Code, Database, Cloud, BarChart3, Cpu, Globe, Brain, Settings } from "lucide-react";

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  category: string;
  level: number;
  connections: string[];
}

interface Connection {
  from: string;
  to: string;
  strength: number;
}

// Memoized Node Component for better performance
const SkillNode = memo(({ 
  node, 
  isHighlighted, 
  nodeSize, 
  colors, 
  icon, 
  onMouseEnter, 
  onMouseLeave 
}: {
  node: Node;
  isHighlighted: boolean;
  nodeSize: number;
  colors: { primary: string; gradient: string };
  icon: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <div
    className="absolute cursor-pointer group"
    style={{
      left: node.x - nodeSize / 2,
      top: node.y - nodeSize / 2,
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Node circle with icon */}
    <div
      className="rounded-full border-2 flex items-center justify-center text-white font-semibold transition-all duration-200"
      style={{
        width: nodeSize,
        height: nodeSize,
        background: colors.gradient,
        borderColor: isHighlighted ? '#ffffff' : colors.primary,
        transform: isHighlighted ? 'scale(1.2)' : 'scale(1)',
        boxShadow: isHighlighted 
          ? `0 0 20px ${colors.primary}80` 
          : `0 2px 8px ${colors.primary}40`
      }}
    >
      {icon}
    </div>

    {/* Simple tooltip */}
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-lg">
        <div className="font-semibold">{node.name}</div>
        <div className="text-xs text-muted-foreground">{node.category}</div>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mr-1 ${
                i < node.level ? 'bg-green-400' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
));

SkillNode.displayName = 'SkillNode';

export default function TechConstellation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  // Simplified skill relationships
  const getRelatedSkills = useCallback((skillName: string, allSkills: Array<{ name: string; category: string; level: number }>): { name: string; strength: number }[] => {
    const relations: { [key: string]: { name: string; strength: number }[] } = {
      'Python': [
        { name: 'TensorFlow', strength: 0.9 },
        { name: 'PyTorch', strength: 0.9 },
        { name: 'Pandas', strength: 0.95 },
        { name: 'NumPy', strength: 0.95 },
        { name: 'Scikit-learn', strength: 0.9 }
      ],
      'JavaScript': [
        { name: 'React.js', strength: 0.95 },
        { name: 'Next.js', strength: 0.9 },
        { name: 'Node.js', strength: 0.9 }
      ],
      'React.js': [
        { name: 'JavaScript', strength: 0.95 },
        { name: 'Next.js', strength: 0.9 },
        { name: 'Node.js', strength: 0.8 }
      ],
      'TensorFlow': [
        { name: 'Python', strength: 0.9 },
        { name: 'PyTorch', strength: 0.8 },
        { name: 'Keras', strength: 0.95 }
      ],
      'AWS': [
        { name: 'EC2', strength: 0.9 },
        { name: 'S3', strength: 0.9 },
        { name: 'Docker', strength: 0.7 }
      ]
    };

    return (relations[skillName] || [])
      .filter(rel => allSkills.some(skill =>
        skill.name.toLowerCase().replace(/\s+/g, '-') === rel.name.toLowerCase().replace(/\s+/g, '-')
      ));
  }, []);

  // Initialize constellation with stable positions
  useEffect(() => {
    const initializeConstellation = () => {
      setIsLoading(true);

      const allSkills = skillCategories.flatMap(category =>
        category.skills.map(skill => ({
          ...skill,
          category: category.name
        }))
      );

      const containerWidth = 1000;
      const containerHeight = 600;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      // Create stable grid-based positions
      const generatedNodes: Node[] = allSkills.map((skill, index) => {
        const categoryIndex = skillCategories.findIndex(cat => cat.name === skill.category);
        const skillsInCategory = allSkills.filter(s => s.category === skill.category);
        const skillIndexInCategory = skillsInCategory.findIndex(s => s.name === skill.name);

        // Arrange in concentric circles by category
        const radius = 80 + (categoryIndex * 60);
        const angleStep = (2 * Math.PI) / skillsInCategory.length;
        const angle = skillIndexInCategory * angleStep + (categoryIndex * 0.5);

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const relatedSkills = getRelatedSkills(skill.name, allSkills);

        return {
          id: skill.name.toLowerCase().replace(/\s+/g, '-'),
          name: skill.name,
          x: Math.max(50, Math.min(containerWidth - 50, x)),
          y: Math.max(50, Math.min(containerHeight - 50, y)),
          category: skill.category,
          level: skill.level,
          connections: relatedSkills.map(rel => rel.name.toLowerCase().replace(/\s+/g, '-'))
        };
      });

      // Generate connections
      const generatedConnections: Connection[] = [];
      generatedNodes.forEach(node => {
        const relatedSkills = getRelatedSkills(node.name, allSkills);
        relatedSkills.forEach(related => {
          const targetId = related.name.toLowerCase().replace(/\s+/g, '-');
          const targetNode = generatedNodes.find(n => n.id === targetId);
          if (targetNode && !generatedConnections.some(c =>
            (c.from === node.id && c.to === targetId) ||
            (c.from === targetId && c.to === node.id)
          )) {
            generatedConnections.push({
              from: node.id,
              to: targetId,
              strength: related.strength
            });
          }
        });
      });

      setNodes(generatedNodes);
      setConnections(generatedConnections);
      setIsLoading(false);
    };

    initializeConstellation();
  }, [getRelatedSkills]);

  // Icon mapping for skills
  const getSkillIcon = useCallback((skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // Programming Languages
      'Python': '🐍',
      'JavaScript': <span className="text-xs font-bold">JS</span>,
      'Java': '☕',
      'C/C++': <span className="text-xs font-bold">C++</span>,
      'SQL': <span className="text-xs font-bold">SQL</span>,
      'Scala': <span className="text-xs font-bold">S</span>,
      'R': <span className="text-xs font-bold">R</span>,
      'Bash': '💻',
      'PHP': <span className="text-xs font-bold">PHP</span>,

      // Web Development
      'React.js': '⚛️',
      'Next.js': <span className="text-xs font-bold">N</span>,
      'Node.js': '🟢',
      'Express.js': <span className="text-xs font-bold">E</span>,
      'Flask': '🌶️',
      'FastAPI': '⚡',
      'Spring Boot': '🍃',
      'REST APIs': '🔗',
      'JWT/OAuth': '🔐',

      // Databases & Data Warehousing
      'MySQL': '�️',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘',
      'SQL Query Optimization': '⚡',
      'Database Indexing': '📇',

      // Big Data & Distributed Computing
      'PySpark': '✨',
      'Apache Spark': '⚡',
      'Spark MLlib': '🧠',
      'Hadoop': '🐘',
      'HDFS': '📁',

      // Data Engineering & ETL
      'Data Pipeline Development': '🔄',
      'Data Processing': '⚙️',
      'Data Transformation': '🔀',
      'MLflow': '🌊',

      // Machine Learning & AI
      'TensorFlow': <span className="text-xs font-bold">TF</span>,
      'PyTorch': '🔥',
      'Scikit-learn': '🔬',
      'Keras': <span className="text-xs font-bold">K</span>,
      'Hugging Face Transformers': '🤗',
      'NLP (BERT)': '💬',
      'OpenCV': '👁️',
      'NLTK': '📝',

      // Cloud & DevOps
      'AWS': '☁️',
      'SageMaker': '🤖',
      'EC2': '💻',
      'S3': '🪣',
      'Docker': '🐳',
      'Git/GitHub': '🐙',
      'CI/CD': '🔄',

      // Data Visualization & Analytics
      'Tableau': '📊',
      'Power BI': '📈',
      'Matplotlib': '�',
      'Seaborn': '🌊',
      'Plotly': '📈',
      'Excel': '📗',
      'Pandas': '🐼',
      'NumPy': <span className="text-xs font-bold">#</span>,
      'Statistical Analysis': '📊',
      'Anomaly Detection': '🔍',
      'Customer Segmentation': '👥'
    };

    // Return emoji or fallback to Lucide icon based on category
    if (iconMap[skillName]) {
      return <span className="text-lg">{iconMap[skillName]}</span>;
    }

    // Fallback icons by category
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'Programming Languages': <Code className="w-4 h-4" />,
      'Web Development': <Globe className="w-4 h-4" />,
      'Machine Learning & AI': <Brain className="w-4 h-4" />,
      'Databases & Data Warehousing': <Database className="w-4 h-4" />,
      'Big Data & Distributed Computing': <Cpu className="w-4 h-4" />,
      'Data Engineering & ETL': <Settings className="w-4 h-4" />,
      'Cloud & DevOps': <Cloud className="w-4 h-4" />,
      'Data Visualization & Analytics': <BarChart3 className="w-4 h-4" />
    };

    const node = nodes.find(n => n.name === skillName);
    return categoryIcons[node?.category || ''] || <Code className="w-4 h-4" />;
  }, [nodes]);

  // Color system
  const getCategoryColors = useCallback((category: string) => {
    const colorMap: { [key: string]: { primary: string; gradient: string } } = {
      'Programming Languages': {
        primary: '#a78bfa',
        gradient: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)'
      },
      'Web Development': {
        primary: '#60a5fa',
        gradient: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)'
      },
      'Machine Learning & AI': {
        primary: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
      },
      'Databases & Data Warehousing': {
        primary: '#10b981',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      },
      'Big Data & Distributed Computing': {
        primary: '#06b6d4',
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
      },
      'Data Engineering & ETL': {
        primary: '#14b8a6',
        gradient: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)'
      },
      'Cloud & DevOps': {
        primary: '#8b5cf6',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
      },
      'Data Visualization & Analytics': {
        primary: '#ec4899',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)'
      }
    };

    return colorMap[category] || colorMap['Programming Languages'];
  }, []);

  // Filter nodes based on search and category
  const filteredNodes = useMemo(() => {
    return nodes.filter(node => {
      const matchesSearch = node.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || node.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [nodes, searchTerm, selectedCategory]);

  // Filter connections based on visible nodes
  const filteredConnections = useMemo(() => {
    const visibleNodeIds = new Set(filteredNodes.map(n => n.id));
    return connections.filter(conn =>
      visibleNodeIds.has(conn.from) && visibleNodeIds.has(conn.to)
    );
  }, [connections, filteredNodes]);

  return (
    <div className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Tech Constellation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive map of my technical skills and their relationships
          </p>
        </motion.div>

        {/* Simple Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${!selectedCategory
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
                className={`px-3 py-1 rounded-full text-sm transition-all ${selectedCategory === category.name
                  ? 'text-white'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                  }`}
                style={{
                  background: selectedCategory === category.name
                    ? getCategoryColors(category.name).gradient
                    : undefined
                }}
              >
                {category.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Constellation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            ref={containerRef}
            className="relative w-full h-[600px] bg-background rounded-2xl border border-border overflow-hidden"
          >
            {/* Loading state */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading constellation...</p>
                </div>
              </div>
            )}

            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Render connections */}
              {filteredConnections.map((connection) => {
                const fromNode = filteredNodes.find(n => n.id === connection.from);
                const toNode = filteredNodes.find(n => n.id === connection.to);

                if (!fromNode || !toNode) return null;

                const isHighlighted = hoveredNode === connection.from || hoveredNode === connection.to;

                return (
                  <line
                    key={`${connection.from}-${connection.to}`}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isHighlighted ? '#a78bfa' : '#35354a'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    strokeOpacity={isHighlighted ? 0.8 : 0.3}
                  />
                );
              })}
            </svg>

            {/* Render nodes */}
            {filteredNodes.map((node) => {
              const colors = getCategoryColors(node.category);
              const nodeSize = 16 + (node.level * 4); // Smaller, more consistent sizes
              const isHighlighted = hoveredNode === node.id;

              return (
                <div
                  key={node.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: node.x - nodeSize / 2,
                    top: node.y - nodeSize / 2,
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Node circle with icon */}
                  <div
                    className="rounded-full border-2 flex items-center justify-center text-white font-semibold transition-all duration-200"
                    style={{
                      width: nodeSize,
                      height: nodeSize,
                      background: colors.gradient,
                      borderColor: isHighlighted ? '#ffffff' : colors.primary,
                      transform: isHighlighted ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: isHighlighted
                        ? `0 0 20px ${colors.primary}80`
                        : `0 2px 8px ${colors.primary}40`
                    }}
                  >
                    {getSkillIcon(node.name)}
                  </div>

                  {/* Simple tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-lg">
                      <div className="font-semibold">{node.name}</div>
                      <div className="text-xs text-muted-foreground">{node.category}</div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mr-1 ${i < node.level ? 'bg-green-400' : 'bg-muted'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Simple Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {skillCategories.map((category) => {
            const colors = getCategoryColors(category.name);
            const categorySkills = filteredNodes.filter(n => n.category === category.name);

            return (
              <div key={category.name} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: colors.gradient }}
                />
                <span className="text-sm text-muted-foreground">
                  {category.name} ({categorySkills.length})
                </span>
              </div>
            );
          })}
        </motion.div>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <p>
            Showing {filteredNodes.length} of {nodes.length} skills •
            {filteredConnections.length} connections
          </p>
        </div>
      </div>
    </div>
  );
}