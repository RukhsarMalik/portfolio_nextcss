"use client";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="Hero" className="hero-container">
      <div className="hero-container-inner">
        <div className="hero-image-container">
          <img className="hero-image" alt="hero" src="/images/profile/pic.jpg" />
        </div>
        <div className="hero-text-container">
          <h1 className="typewriter-text">
            I am <br className="hidden lg:inline-block" />
            <span className="typewriter">
            <Typewriter
            options={{
                strings: ['Web Developer', 
                  'UI/UX Designer'],
                autoStart: true,
                loop: true,
            }}
              />
            </span>
          </h1>
          <p className="hero-description">
            Hello! I’m a passionate front-end developer dedicated to crafting intuitive and responsive web experiences.
          </p>
          <div className="cta-container">
            <a href="#Contact">
              <button className="cta-button">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
