export default function Projects() {
    return (
      <div id="Project">
        <section className="section">
          <div className="project_container">
            <div className="project-header">
              <h1 className="project-title">My Projects</h1>
            </div>
            <div className="project-container">
              {/* Main Project */}
              <div className="project-item">
                <img
                  className="project-image"
                  alt="gallery"
                  src="/images/projects/resume.png"
                />
                <div className="project-content">
                  <h2 className="project-heading">Resume Builder Project</h2>
                  <p className="project-description">Generate resume in one click.</p>
                  <a
                    target="_blank"
                    href="https://milestone5-omega-one.vercel.app/"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Other Projects */}
              <div className="project-list">
                <div className="project-card">
                  <img
                    className="project-image"
                    alt="gallery"
                    src="/images/projects/YouTube.jpg"
                  />
                  <div className="project-content">
                    <h2 className="project-heading">YouTube Clone</h2>
                    <a
                      target="_blank"
                      href="https://myfirst-website-alpha.vercel.app/"
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    className="project-image"
                    alt="gallery"
                    src="/images/projects/book.jpeg"
                  />
                  <div className="project-content">
                    <h2 className="project-heading">Book Readers</h2>
                    <a
                      target="_blank"
                      href="https://multipage-puce.vercel.app/"
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  