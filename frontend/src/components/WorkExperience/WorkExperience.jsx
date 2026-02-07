import { FaBriefcase, FaUser, FaPalette, FaSearch, FaLayerGroup, FaMobile, FaLightbulb, FaPencilRuler, FaBook, FaBullhorn, FaMousePointer } from 'react-icons/fa';

const WorkExperience = () => {
    return (
        <section className="work-section reveal">
            <div className="work-container">
                <div className="work-top">
                    <div className="work-left">
                        <h2 className="work-duration">6-Months<br />2025</h2>
                    </div>

                    <div className="work-right">
                        <div className="work-header">
                            <FaBriefcase className="work-icon" />
                            <h2 className="work-title">WORK EXPERIENCE</h2>
                        </div>
                        <div className="work-experience-list">
                            <div className="experience-item reveal">
                                <div className="work-role">
                                    <span className="role-name">TRAINEE UI/UX DESIGNER</span>
                                    <span className="company-name"> – ARCRAFT INFOTECH</span>
                                </div>
                                <span className="experience-date">MAY 2025 – OCT 2025</span>
                            </div>

                            <div className="experience-item reveal">
                                <div className="work-role">
                                    <span className="role-name">UI/UX INTERN</span>
                                    <span className="company-name"> – ZOOPLE TECHNOLOGIES</span>
                                </div>
                                <span className="experience-date">NOV 2024 – DEC 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-grid">
                    <div className="skill-row row-1">
                        {[
                            { name: "User\nResearch", icon: <FaSearch /> },
                            { name: "Branding", icon: <FaBullhorn /> },
                            { name: "Visual\nDesign", icon: <FaLayerGroup /> },
                            { name: "Usability\nTesting", icon: <FaSearch /> },
                            { name: "Prototyping", icon: <FaMobile /> }
                        ].map((skill, index) => (
                            <div key={`row1-${index}`} className="skill-tag reveal">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-text">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="skill-row row-2">
                        {[
                            { name: "Responsive\nDesign", icon: <FaLayerGroup /> },
                            { name: "Design\nThinking", icon: <FaLightbulb /> },
                            { name: "Wire-framing", icon: <FaPencilRuler /> },
                            { name: "Interaction\nDesign", icon: <FaMousePointer /> }
                        ].map((skill, index) => (
                            <div key={`row2-${index}`} className="skill-tag reveal">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-text">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
