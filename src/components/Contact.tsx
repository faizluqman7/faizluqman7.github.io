const AboutSection = () => (
    <section className="section d-flex flex-column justify-content-center align-items-center text-center py-5">
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
)

export default AboutSection;``