import '../style/project.css'

function Project() {
    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-cards">
                <div className="card">
                    <h3>Emotion Detection</h3>
                    <p>
                        A project that combines facial recognition and expression detection to track emotional responses.
                    </p>
                    <ul>
                        <li>Technologies: Python, Deepface, OpenCV</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Middleware Framework</h3>
                    <p>
                        A scalable middleware framework built with Spring Boot to integrate payment gateways with high efficiency.
                    </p>
                    <ul>
                        <li>Technologies: Java, Spring Boot, MySQL, Redis</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;