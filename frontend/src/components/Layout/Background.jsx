import { useState, useEffect, useRef } from 'react';

const Background = () => {
    const backgroundGlowRef = useRef(null);
    const [stars, setStars] = useState([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const starsDataRef = useRef([]);
    const starRefs = useRef([]); // Cache DOM refs

    // Initialize stars
    useEffect(() => {
        const starCount = 40;
        const initialStars = [];
        for (let i = 0; i < starCount; i++) {
            const size = Math.random() * 3 + 3;
            initialStars.push({
                id: i,
                width: size,
                height: size,
                baseX: Math.random() * 100,
                baseY: Math.random() * 100,
                duration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }
        setStars(initialStars);

        // Setup internal data for animation
        starsDataRef.current = initialStars.map(s => ({
            ...s,
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0
        }));
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            if (backgroundGlowRef.current) {
                const xPct = (e.clientX / window.innerWidth) * 100;
                const yPct = (e.clientY / window.innerHeight) * 100;
                // Optimized gradient update
                backgroundGlowRef.current.style.backgroundImage = `
                    radial-gradient(circle at ${xPct}% ${yPct}%, rgba(138, 43, 226, 0.2) 0%, transparent 40%),
                    radial-gradient(circle at 70% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 20% 70%, rgba(65, 105, 225, 0.1) 0%, transparent 50%)
                `;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation loop
    useEffect(() => {
        let rafId;
        const update = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const { x: mx, y: my } = mouseRef.current;

            starsDataRef.current.forEach((star, index) => {
                const sx = (star.baseX / 100) * width;
                const sy = (star.baseY / 100) * height;

                const dx = mx - sx;
                const dy = my - sy;
                const distSquare = dx * dx + dy * dy; // Avoid sqrt where possible
                const limit = 250;
                const limitSquare = limit * limit;

                let tx = 0, ty = 0;

                if (distSquare < limitSquare) {
                    const dist = Math.sqrt(distSquare);
                    const power = Math.pow((limit - dist) / limit, 2);
                    const force = 80;
                    tx = -(dx / dist) * power * force;
                    ty = -(dy / dist) * power * force;
                }

                // Smooth following logic (easing)
                star.currentX += (tx - star.currentX) * 0.08;
                star.currentY += (ty - star.currentY) * 0.08;

                const el = starRefs.current[index];
                if (el) {
                    // Optimized transform use translate3d
                    el.style.transform = `translate3d(${star.currentX}px, ${star.currentY}px, 0)`;
                }
            });

            rafId = requestAnimationFrame(update);
        };

        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, [stars]);

    return (
        <>
            <div className="background-glow" ref={backgroundGlowRef}></div>
            <div className="stars-container">
                {stars.map((star, index) => (
                    <div
                        key={star.id}
                        ref={el => starRefs.current[index] = el}
                        className="star"
                        style={{
                            width: `${star.width}px`,
                            height: `${star.height}px`,
                            left: `${star.baseX}%`,
                            top: `${star.baseY}%`,
                            '--duration': star.duration,
                            opacity: star.opacity,
                            transition: 'opacity 0.3s ease'
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default Background;
