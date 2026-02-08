import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage = () => {
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <About />
            <WhyChooseUs />
            
            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="section-title">Ready for Your Next Adventure?</h2>
                        <p className="section-subtitle">
                            Browse our exciting tour packages and start planning your dream vacation today.
                        </p>
                        <a href="/packages" className="cta-button">Explore All Packages</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;