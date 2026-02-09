import React from 'react';
import './Style/About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Nandhi Tourism</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Founded with a passion for exploration, Nandhi Tourism has been providing 
                            exceptional travel and tour services for over a decade. We specialize in 
                            crafting unforgettable journeys that combine comfort, adventure, and cultural immersion.
                        </p>
                        <p>
                            Our mission is to make quality travel accessible to everyone. We work directly 
                            with local providers to ensure authentic experiences while maintaining competitive 
                            pricing. Whether you're seeking a relaxing getaway or an adventurous expedition, 
                            our team handles every detail with professionalism and care.
                        </p>
                        <p>
                            At Nandhi Tourism, we believe travel should be transformative, not stressful. 
                            That's why we focus on seamless logistics, knowledgeable guides, and personalized 
                            service to create worry-free travel experiences for all our clients.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="image-frame">
                            <img 
                                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                                alt="Nandhi Tourism Team"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;