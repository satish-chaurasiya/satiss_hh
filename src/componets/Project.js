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
                    <h3>DevFriends Project</h3>
                    <p>
                        A project that lets group of developer colab together setting the goals for each one and finally achieving it faster.
                    </p>
                    <ul>
                        <li>Technologies: Java, Spring Boot, MySQL, Redis,Spring security,React</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;