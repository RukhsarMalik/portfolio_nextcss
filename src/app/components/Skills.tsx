export default function Skills() {
    return (
      <div id="Skill">
        <section className="skills-section">
          <div className="skill_container">
            <div className="section-header">
              <h2>SKILLS</h2>
              <h1>My Skills</h1>
            </div>
            <div className="skills-row">
              <div className="skill-card">
                <div className="skill-icon">HTML</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="skill-percentage">100%</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">CSS</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="skill-percentage">90%</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">TypeScript</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="skill-percentage">80%</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">Next.js</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="skill-percentage">60%</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">Python</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="skill-percentage">70%</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">Tailwind CSS</div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-inner"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="skill-percentage">60%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  