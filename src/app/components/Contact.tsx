export default function Contact() {
    return (
      <div id="Contact">
        <section className="contact-section">
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247.03773736974!2d67.5793329924803!3d24.743392905890918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394cd9e8b5c5ad91%3A0xd83d50494137fdde!2sGharo%2C%20Thatta%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731247516674!5m2!1sen!2s"
              className="map"
              allowFullScreen
            ></iframe>
          </div>
          <div className="contact_container">
            <div className="contact-form-container">
              <h2 className="contact-title">Contact</h2>
              <p className="contact-description">Feel free to contact</p>
              <form className="contact-form">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="Your Email"
                />
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  