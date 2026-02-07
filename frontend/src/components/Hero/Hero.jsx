import { FaBehance, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import avatarLog from '../../assets/avatarlog.png';

const Hero = ({ profile }) => {
    return (
        <main>
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="headline">
                            HI, I'M {profile ? profile.name : "AKHILA U"}<br />
                            <span className="highlight">{profile ? profile.role : "UX/UI DESIGNER"}</span>
                        </h1>
                        <p className="description">
                            {profile ? profile.bio : "I design intuitive and user-centered digital experiences for mobile and web applications."}
                        </p>
                        {/* Desktop Social Links */}
                        <div className="social-links desktop-only">
                            <a href="https://www.behance.net/akhilaakhi9" className="social-box behance" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                            <a href="https://www.linkedin.com/in/akhila-u-5a091b229" className="social-box linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://dribbble.com/AkhilaSurejan" className="social-box dribbble" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="avatar-container relative w-full max-w-[450px] aspect-square flex justify-center items-center rounded-full overflow-hidden">
                            <div className="avatar-glow"></div>
                            <img
                                src={avatarLog}
                                alt="Avatar"
                                className="hero-avatar w-full h-full object-contain z-10"
                                fetchpriority="high"
                                loading="eager"
                                decoding="async"
                            />
                            {/* Mobile Floating Social Links */}
                            <div className="social-links mobile-only">
                                <a href="https://www.behance.net/akhilaakhi9" className="social-box behance" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                                <a href="https://www.linkedin.com/in/akhila-u-5a091b229" className="social-box linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href="https://dribbble.com/AkhilaSurejan" className="social-box dribbble" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
