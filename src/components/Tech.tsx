const AboutSection = () => (
    <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{height: "100vh"}}>
        <div className="w-75">
            <h3 className="mb-4">🛠️ Technologies & Frameworks</h3>
            <p className="mb-5">Here's a selection of some of the technologies and frameworks I frequently work with:</p>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                {[
                    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Swift / SwiftUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
                    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                    { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
                    { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
                    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
                ].map((tech, idx) => (
                    <div key={idx} className="col d-flex flex-column align-items-center">
                        <img src={tech.logo} alt={tech.name} width="60" height="60" className="mb-2" />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default AboutSection;