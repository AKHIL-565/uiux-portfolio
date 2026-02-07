import { FaPhoneAlt, FaEnvelope, FaBehance, FaLinkedinIn, FaArrowUp, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section reveal">
            <div className="footer-glow"></div>
            <div className="footer-container">
                <div className="footer-items">
                    {/* Phone */}
                    <div className="footer-item reveal">
                        <div className="footer-label-group">
                            <FaPhoneAlt className="footer-icon" />
                            <span className="footer-label">Phone</span>
                        </div>
                        <a href="tel:+916238540496" className="footer-value">+91 6238 540 496</a>
                    </div>

                    {/* Email */}
                    <div className="footer-item reveal">
                        <div className="footer-label-group">
                            <FaEnvelope className="footer-icon" />
                            <span className="footer-label">Email</span>
                        </div>
                        <a href="mailto:akhilasurej@gmail.com" className="footer-value">akhilasurej@gmail.com</a>
                    </div>

                    {/* Behance */}
                    <a href="https://www.behance.net/akhilaakhi9" target="_blank" rel="noopener noreferrer" className="footer-item link-item reveal">
                        <div className="footer-label-group">
                            <FaBehance className="footer-icon" />
                            <span className="footer-label">Behance</span>
                        </div>
                    </a>

                    {/* Dribbble */}
                    <a href="https://dribbble.com/AkhilaSurejan" target="_blank" rel="noopener noreferrer" className="footer-item link-item reveal">
                        <div className="footer-label-group">
                            <FaDribbble className="footer-icon" />
                            <span className="footer-label">Dribbble</span>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/akhila-u-5a091b229" target="_blank" rel="noopener noreferrer" className="footer-item link-item reveal">
                        <div className="footer-label-group">
                            <FaLinkedinIn className="footer-icon" />
                            <span className="footer-label">LinkedIn</span>
                        </div>
                    </a>
                </div>

                <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to top">
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
