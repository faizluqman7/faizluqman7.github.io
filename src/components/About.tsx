
const AboutSection = () => (
    <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
        <div className="w-75">
            <h3 className="mb-4">👨‍💻 About Me</h3>
            <p className="lead mb-5">

            </p>

            <div className="imgcontainer">
                <img src="/face.jpeg" width="200" height="200" className="imgcenter img-circular"/>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🎓 Education</h5>
                            <p className="card-text">
                                Studying Computer Science at <strong>The University of Edinburgh</strong> on a fully-funded
                                sponsorship by the Malaysian government.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">💼 Experiences</h5>
                            <p className="card-text">
                                Previous software engineering intern at <strong>Keysight Technologies</strong> <br/><br />
                                Also participated in various projects and hackathons.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">💡 Interests</h5>
                            <p className="card-text">
                                Enthusiastic about <strong>software development</strong>, <strong>AI/ML</strong> and learning about the latest technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 scroll-down-arrow">
                <a
                    href="/2025%20RESUME%20WAN%20FAIZ%20LUQMAN.pdf"
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📄 View My Resume
                </a>
            </div>
        </div>
    </section>
);

export default AboutSection;