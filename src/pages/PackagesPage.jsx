import React, { useState, useEffect } from 'react';
import PackageCard from '../components/PackageCard';
import LoadingSpinner from '../components/LoadingSpinner';
import './Style/PackagePage.css';
import {AllPackages,filterOptions} from './script/AllPackages.js'

const PackagePage = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Simulate API call
        setTimeout(() => {
            setPackages(AllPackages);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        // Show content after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);

    const filteredPackages = filter === 'all' 
        ? packages 
        : packages.filter(pkg => pkg.category === filter);



    return (
        <main className="packages-page">
            {/* Hero Section for Packages Page */}
            <section className="packages-hero">
                <div className="container">
                    <div className="packages-hero-content" style={{opacity: 1}}>
                        <h1 className="packages-title">Our Tour Packages</h1>
                        <p className="packages-subtitle">
                            Discover our curated selection of travel experiences designed to create unforgettable memories.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="filter-section">
                <div className="container">
                    <div className="filter-container">
                        <h3 className="filter-title">Filter by Category:</h3>
                        <div className="filter-buttons">
                            {filterOptions.map((option,idx) => (
                                <button
                                    key={idx}
                                    className={`filter-button ${filter === option.value ? 'active' : ''}`}
                                    onClick={() => setFilter(option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="packages-section">
                <div className="package-container">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <div className="packages-grid">
                                {filteredPackages.map((pkg, index) => (
                                    <div 
                                        key={pkg.id}
                                        className={isVisible ? 'fade-in visible' : 'fade-in'}
                                        style={{ transitionDelay: `${index * 0.1}s` }}
                                    >
                                        <PackageCard package={pkg} />
                                    </div>
                                ))}
                            </div>
                            
                            {filteredPackages.length === 0 && (
                                <div className="no-packages">
                                    <i className="fas fa-search"></i>
                                    <h3>No packages found for this category</h3>
                                    <p>Try selecting a different filter or check back later for new packages.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="whatsapp-cta">
                <div className="container">
                    <div className="whatsapp-content">
                        <div className="whatsapp-icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <h2>Need Help Choosing?</h2>
                        <p>Chat with our travel experts on WhatsApp for personalized recommendations.</p>
                        <a 
                            href="https://wa.me/7829974320?text=Hello%2C%20I%20need%20help%20choosing%20a%20package."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                        >
                            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PackagePage;