const AboutSection = () => (
    <section id="contact" className="section d-flex flex-column justify-content-center align-items-center text-center py-5">
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
            <div className="mt-4 d-flex justify-content-center gap-3">
                <a
                    href="https://github.com/faizluqman7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark rounded-circle"
                    style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="GitHub"
                >
                    <i className="bi bi-github"></i>
                </a>

                <a
                    href="https://linkedin.com/in/faizluqman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark rounded-circle"
                    style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="LinkedIn"
                >
                    <i className="bi bi-linkedin"></i>
                </a>

                <a
                    href="mailto:faizluqman7@gmail.com"
                    className="btn btn-outline-primary rounded-circle"
                    style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Email"
                >
                    <i className="bi bi-envelope-fill"></i>
                </a>
            </div>
        </div>
    </section>
)

export default AboutSection;``