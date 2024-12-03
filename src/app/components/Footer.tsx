import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-content">
            <a href="#" className="footer-logo">
              <img src="/images/logo/logo.png" alt="RM" className="logo-image" />
              <span className="logo-text">Rukhsar Malik</span>
            </a>
            <p className="footer-text">© 2020 Rukhsar Malik</p>
            
            <div className="footer-icons">
              <a
                href="https://www.facebook.com/rukhsar.malik.3194"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/in/rukhsar-malik-164147225"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  