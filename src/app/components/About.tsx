export default function About() {
    return (
      <div id="About">
        <section className="about-section">
          <div className="about-container">
            <img
              className="about-image"
              src="/images/profile/pic.jpg"
              alt="About me"
            />
            <div className="about-text">
              <h1 className="about-title">About Me</h1>
              <p className="about-description">
                I hold a Master degree in Mathematics from the University of Karachi and bring six years of teaching experience to my current role as a Junior Elementary School Teacher (JEST) at Government Girls Elementary School Ahmedabad. Currently, I am also advancing my development as a student at GIAIC.
              </p>
              <div className="about-button-container">
                <a
                  href="https://myresume-tau-jet.vercel.app/"
                  target="_blank"
                  className="about-button"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  