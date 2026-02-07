const OpenToWork = () => {
    const textItem = "Open to Work";
    // Create a large enough array to ensure coverage
    const items = Array(20).fill(textItem);

    return (
        <section className="open-work-section reveal">
            <div className="open-work-container">
                <div className="open-work-track">
                    {items.map((item, index) => (
                        <div key={index} className="open-work-item">
                            <span className="dot">●</span>
                            <span className="text">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenToWork;
