import { FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const DesignProcess = () => {
    return (
        <section id="project" className="process-section reveal">
            <div className="process-bg-glow"></div>
            <div className="process-container">
                <div className="process-header">
                    <h2 className="process-headline">An inside look at my design process</h2>
                    <p className="process-description">
                        A curated collection of projects that showcase my growth, process, and passion for UI/UX design.
                    </p>
                </div>

                <div className="process-grid">
                    {/* Large Blue Card - Vacation Vibes */}
                    <div className="process-card card-blue reveal">
                        <div className="card-content">
                            <h4 className="card-subtitle">Website Design</h4>
                            <p className="card-desc">Vacation Vibes: A vibrant travel UX/UI concept crafted to simplify trip planning through seamless navigation, personalized recommendations, and a visually engaging experience.</p>
                        </div>
                        <a href="https://www.behance.net/gallery/230414749/VACATION-VIBES" target="_blank" rel="noopener noreferrer" className="case-study-btn">
                            View Flow <FiArrowUpRight />
                        </a>
                    </div>

                    {/* Yellow Card - Rental jewellery (UX Case Study) - STAYED SAME */}
                    <div className="process-card card-yellow reveal">
                        <div className="card-content">
                            <h4 className="card-subtitle">Rental jewellery app</h4>
                            <p className="card-desc">A UX case study simplifying discovery, building trust, and streamlining checkout in jewellery rental experiences.</p>
                        </div>
                        <a href="https://www.behance.net/gallery/226280713/A-UX-Case-Study-on-Rental-Jewellery-Experience" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Project <FiArrowUpRight /></a>
                    </div>

                    {/* Red Card - Now Grocery management app */}
                    <div className="process-card card-red reveal">
                        <div className="card-content">
                            <h4 className="card-subtitle">Grocery management app</h4>
                            <p className="card-desc">An intuitive meal planning and grocery management experience built for mindful eating.</p>
                        </div>
                        <a href="https://www.behance.net/gallery/239088805/Grainful" target="_blank" rel="noopener noreferrer" className="case-study-btn">View Case Study <FiArrowUpRight /></a>
                    </div>

                    {/* Purple Card - Now Rental jewellery (UI Case Study) */}
                    <div className="process-card card-purple reveal">
                        <div className="card-content">
                            <h4 className="card-subtitle">Rental jewellery app</h4>
                            <p className="card-desc">A UI case study elevating jewellery rentals through refined visuals, seamless interactions, and intuitive flows</p>
                        </div>
                        <a href="https://www.behance.net/gallery/226281693/UI-Case-Study-for-a-Luxury-Jewellery-Rental-App" target="_blank" rel="noopener noreferrer" className="case-study-btn">Explore Ui <FiArrowUpRight /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
