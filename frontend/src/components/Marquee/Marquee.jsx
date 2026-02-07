import figmaIcon from '../../assets/figma logo.png';
import photoshopIcon from '../../assets/adobe-photoshop logo.png';
import illustratorIcon from '../../assets/adobe illustrator logo.png';
import adobeXdIcon from '../../assets/png-adobe-xdlogo.png';
import afterEffectsIcon from '../../assets/adobe-after-effect-logo.png';

const Marquee = () => {
    const tools = [
        { name: 'AFTER EFFECTS', icon: 'Ae', color: '#9999FF', useImage: true, image: afterEffectsIcon },
        { name: 'ADOBE XD', icon: 'Xd', color: '#FF61F6', useImage: true, image: adobeXdIcon },
        { name: 'FIGMA', icon: 'F', color: '#F24E1E', useImage: true, image: figmaIcon },
        { name: 'PHOTO SHOP', icon: 'Ps', color: '#31A8FF', useImage: true, image: photoshopIcon },
        { name: 'ILLUSTRATOR', icon: 'Ai', color: '#FF9A00', useImage: true, image: illustratorIcon }
    ];

    // Duplicate the tools array for seamless infinite scroll
    const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

    return (
        <section className="marquee-section reveal">
            <div className="marquee-container">
                <div className="marquee-track">
                    {duplicatedTools.map((tool, index) => (
                        <div key={index} className="marquee-item">
                            <div className="tool-icon" style={{ backgroundColor: tool.useImage ? 'transparent' : tool.color }}>
                                {tool.useImage ? (
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className={`tool-image ${tool.name === 'AFTER EFFECTS' ? 'after-effects-logo' :
                                                tool.name === 'PHOTO SHOP' ? 'photoshop-logo' :
                                                    tool.name === 'FIGMA' ? 'figma-logo' :
                                                        tool.name === 'ADOBE XD' ? 'adobe-xd-logo' : ''
                                            }`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    tool.icon
                                )}
                            </div>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
