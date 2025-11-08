import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krishna Sharma </span>
            from <span className="purple"> India.</span>
            <br />
            I am pursuing B.Tech in Computer Science and Engineering at <span className="purple">SRM University AP</span> with a CGPA of <span className="purple">7.85</span>.
            <br />
            <br />
            I have experience as an <span className="purple">AI/ML Intern at Zeronsec</span>, where I built data pipelines processing 15GB/day of cybersecurity logs and improved throughput by 60%.
            <br />
            <br />
            I'm certified in <span className="purple">AWS Cloud Practitioner</span> and <span className="purple">Oracle Cloud AI & Data Science</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Scalable Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cloud Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Frameworks
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
