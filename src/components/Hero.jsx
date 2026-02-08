import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Style/Hero.css';

const Hero = () => {
    const heroContentRef = useRef(null);

    useEffect(() => {
        // Make hero content visible immediately
        if (heroContentRef.current) {
            heroContentRef.current.classList.add('visible');
        }
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-overlay">
                <div className="container">
                    <div className="hero-content" ref={heroContentRef}>
                        <h2 className="hero-title">What are you waiting for?</h2>
                        <p className="hero-subtitle">
                            Discover breathtaking destinations with Nandi Tourism. We provide reliable, 
                            affordable, and comfortable travel experiences that create lifelong memories.
                        </p>
                        <Link to="/packages" className="cta-button">See Packages</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;