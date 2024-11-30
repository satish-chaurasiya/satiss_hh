import React from "react";
import '../style/about.css'

function About() {
    return (
        <div className="about" id="about">
            <h2>About Me</h2>
            <div className="content">
                <p>
                    I'm a Software Engineer based in Maharashtra, India. I specialize in backend technologies and microservices, and I'm passionate about building scalable systems. My current focus is working on projects that use the latest cloud-based technologies and agile practices.
                </p>

                <div className="skills">
                    <h3>Skills</h3>
                    <div className="skill-cards">
                        <div className="card">
                            <h4>Backend</h4>
                            <p>Java, Spring, Spring Boot, Spring Batch, REST APIs</p>
                        </div>
                        <div className="card">
                            <h4>DevOps</h4>
                            <p>Docker, Apache Kafka, CI/CD, GitHub Actions</p>
                        </div>
                        <div className="card">
                            <h4>Frontend</h4>
                            <p>React (in progress), HTML, CSS, Bootstrap</p>
                        </div>
                        <div className="card">
                            <h4>Database</h4>
                            <p>MySQL, MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;