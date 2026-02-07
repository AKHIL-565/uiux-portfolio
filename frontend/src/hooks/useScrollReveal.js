import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element hits the view
            threshold: 0.01
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    // Enable GPU acceleration hint just before animation starts
                    el.style.willChange = 'opacity, transform';

                    // Trigger animation
                    requestAnimationFrame(() => {
                        el.classList.add('reveal-active');
                    });

                    // Cleanup: remove will-change after transition
                    const handleTransitionEnd = (e) => {
                        if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
                            el.style.willChange = 'auto';
                            el.removeEventListener('transitionend', handleTransitionEnd);
                        }
                    };
                    el.addEventListener('transitionend', handleTransitionEnd);

                    observer.unobserve(el);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal');

        elements.forEach(el => {
            // Apply initial 3D transform for layer promotion
            el.style.transform = 'translate3d(0, 24px, 0)';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
