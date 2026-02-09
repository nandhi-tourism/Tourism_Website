import React, { useEffect, useRef } from 'react';
import './Style/WhyChooseUs.css';

const WhyChooseUs = () => {
    const featureRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        featureRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            featureRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const features = [
        {
            icon: 'fas fa-compass',
            title: 'Experienced Guides',
            description: 'Our certified guides have extensive knowledge of local cultures, history, and hidden gems to enhance your travel experience.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Comfortable Travel',
            description: 'We prioritize your comfort with carefully selected accommodations, transportation, and well-planned itineraries.'
        },
        {
            icon: 'fas fa-tags',
            title: 'Affordable Packages',
            description: 'Get the best value with our competitive pricing and transparent packages without hidden costs or surprises.'
        }
    ];

    return (
        <section className="why-us" id="why-us">
            <div className="container">
                <h2 className="section-title">Why Choose Nandhi Tourism</h2>
                <p className="section-subtitle">
                    We're committed to delivering exceptional travel experiences with these key advantages
                </p>
                
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            ref={el => featureRefs.current[index] = el}
                            className="feature-card fade-in"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;