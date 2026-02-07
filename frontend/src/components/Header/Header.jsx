import akhilaLogo from '../../assets/akhila logo.png';
import resumePdf from '../Public/AKHILAResume.pdf';

const Header = ({ profileName }) => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={akhilaLogo} alt="Logo" className="logo-image" />
                    <div className="logo-text">{profileName ? profileName.split(' ')[0] : 'AKHILA'}</div>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#project">PROJECT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                <div className="nav-cta">
                    <a href={resumePdf} download="AKHILA_Resume.pdf" className="resume-btn">RESUME</a>
                </div>

            </nav>
        </header>
    );
};

export default Header;
