import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shipstream from "../../Assets/Projects/shipstream.png";
import sevak from "../../Assets/Projects/sevak.png";
import logAnomaly from "../../Assets/Projects/log-anomaly.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shipstream}
              isBlog={false}
              title="ShipStream — Full-Stack Deployment Platform"
              ghLink="https://github.com/krishnasharma4415"
              demoLink="https://ship-stream.vercel.app/"
              description="Built a Vercel-like deployment platform with GitHub OAuth, auto-builds, and live domain routing using Next.js 15 and Node.js. Designed microservice architecture with Redis queues for parallel build workflows. Integrated Cloudflare R2, Upstash Redis, and Render for cost-free scalability and zero-downtime builds."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sevak}
              isBlog={false}
              title="Sevak — AI-Powered Legal Chatbot"
              ghLink="https://github.com/krishnasharma4415/NyayAI"
              description="Developed an AI chatbot using FastAPI and Gemini to explain Indian laws, handling 1,000+ user queries with 95% positive feedback. Added OTP-based verification, role-based access, and ticket system with admin escalation. Integrated location-based emergency contact feature for 50+ city zones. Deployed via Docker with React.js frontend and MongoDB backend."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logAnomaly}
              isBlog={false}
              title="Cross-Source Log Anomaly Detection"
              ghLink="https://github.com/krishnasharma4415"
              demoLink="https://log-anomaly-frontend.vercel.app/"
              description="Designed a distributed log analysis system using PySpark and parallel processing to handle 16+ heterogeneous sources (Windows, Linux, Hadoop, HDFS, Spark). Implemented and benchmarked 9+ ML models including DANN-BERT, LoRA-BERT, and Hybrid-BERT. Optimized pipelines through multi-core parallelism, reducing processing time by 65%."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
