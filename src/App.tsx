import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    useEffect(() => {
        gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                }
            );
        });
    }, []);

    const projects = [
        {
            title: 'NASA Satellite Observer Web Application',
            description: [
                'A user-friendly web application that allowed users to define target locations and receive notifications for Landsat satellite overpasses, in addition to obtaining satellite data such as Surface Reflectance (SR) and image captures.',
                'Utilized Node.js and SendGrid API to automate real-time Landsat overpass notifications for users.',
                'Integrated Google Maps API with location search to allow precise and interactive target location selection by users.',
            ],
            link: 'https://github.com/faizluqman7/Hackathon-NASA-Landsat',
        },
        {
            title: 'Hand-Tracked Mouse Controller',
            description: [
                'An accessibility tool built to control mouse movements and clicks using only hand gestures and movements.',
                'Utilized OpenCV and MediaPipe to implement the machine learning and computer vision back-end.',
                'Achieved a 96% true positive rate for total expected mouse clicks.',
            ],
            link: 'https://github.com/faizluqman7/HandTrackingMouse',
        },
        {
            title: 'Virtual Memory and Cache Simulator',
            description: [
                'Implemented a robust cache simulator in C to simulate memory accesses within the CPU architecture of computers.',
                'Modelled the interactions between the cache, Translation Lookaside Buffer (TLB) and virtual memory subsystems.',
                'Employed a Least Recently Used (LRU) eviction policy to manage cache entries and virtual pages.',
            ],
        },
        {
            title: 'Product Items Management System',
            description: [
                'Developed a system to read, store, and modify product item details in CSV files as part of a summer school programme assignment.',
            ],
        },
        {
            title: 'iOS Health Tracking App',
            description: [
                'Developed a mobile app for users to keep track of health metrics such as blood pressure readings.',
            ],
            link: 'https://github.com/faizluqman7/MyBP',
        },
        {
            title: 'Hackathon Website',
            description: [
                'Developed a website to promote sustainable cities, with features such as an energy consumption calculator.',
            ],
            link: 'https://github.com/faizluqman7/imaginehack2021',
        }
    ];

    return (
        <main className="fullpage-container">
            <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{height: "100vh"}}>
                <h2 className="mb-3">👋 Hi, I am</h2>
                <h1 className="display-4 fw-bold">Faiz Luqman</h1>
                <p className="lead">Computer Science Student | Aspiring Software Engineer</p>
            </section>

            <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{height: "100vh"}}>
                <div className="w-75">
                <h3 className="mb-3">About Me</h3>
                    <p>
                        👨‍💻 I am a current computer science student at the University of Edinburgh, UK! 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇬🇧 <br /><br />
                        ❤️ Currently most interested in software development and artificial intelligence / machine learning ! 🧠<br /><br />
                        💡 Looking forward to advancing my career in the technology industry, with a goal of becoming a responsible and innovative full-stack software engineer in the near future to contribute to society 🚀
                    </p>
                </div>
            </section>

            <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{height: "100vh"}}>
                <div className="w-75">
                    <h3 className="mb-4">🛠️ Technologies & Frameworks</h3>
                    <p className="mb-5">Here's a selection of some of the technologies and frameworks I frequently work with:</p>

                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                        {[
                            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "SwiftUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
                            { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                            { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                            { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                            { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                            { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                            { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
                            { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
                            { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
                            { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
                            { name: "Seaborn", logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" }
                        ].map((tech, idx) => (
                            <div key={idx} className="col d-flex flex-column align-items-center">
                                <img src={tech.logo} alt={tech.name} width="60" height="60" className="mb-2" />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="section d-flex flex-column justify-content-center align-items-center text-center">
                <div className="w-75">
                    <h3 className="mb-4">Projects</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {projects.map((project, index) => {
                            const isExpanded = expandedIndex === index;

                            return (
                                <div key={index} className="col">
                                    <div
                                        className={`card h-100 ${isExpanded ? 'shadow-lg' : 'shadow-sm'} transition`}
                                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="card-body text-start">
                                            <h5 className="card-title fw-bold">
                                                {project.link ? (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-decoration-none"
                                                        onClick={(e) => e.stopPropagation()} // prevent card expand on link click
                                                    >
                                                        {project.title}
                                                    </a>
                                                ) : (
                                                    project.title
                                                )}
                                            </h5>

                                            {isExpanded && (
                                                <ul className="card-text mt-3">
                                                    {project.description.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section d-flex flex-column justify-content-center align-items-center text-center" style={{height: "100vh"}}>
                <div className="w-75">
                    <h3 className="mb-3">Contact Me</h3>
                    <p>If you're interested in collaborating, have questions, or just want to say hi – feel free to drop a message!</p>
                    <form
                        action="https://formspree.io/f/mgedpvbp"
                        method="POST"
                        className="row g-3 justify-content-center"
                    >
                        <div className="col-md-6">
                            <input type="text" name="firstname" className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="lastname" className="form-control" placeholder="Last Name" required />
                        </div>
                        <div className="col-12">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="col-12">
                            <textarea name="message" rows={4} className="form-control" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default App;
