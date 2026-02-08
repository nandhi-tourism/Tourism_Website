import React from 'react';
import './Style/PackageCard.css';
import { VITE_WHATSAPP_NUMBER} from '../pages/script/socialMediaAcc';


const PackageCard = ({ package: pkg }) => {
    // WhatsApp booking function
    const handleBookNow = () => {
        // Replace with the actual WhatsApp number provided by the owner
        const message = `Hello, I'm interested in booking the "${pkg.title}" package.`;
        const whatsappUrl = `https://wa.me/${VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="package-card">
            <div className="package-image">
                <img src={pkg.image} alt={pkg.title} loading="lazy" />
                <div className="package-price">${pkg.price}</div>
            </div>
            <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
                <div className="package-details">
                    <span><i className="fas fa-calendar"></i> {pkg.duration}</span>
                    <span><i className="fas fa-user-friends"></i> {pkg.groupSize}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {pkg.location}</span>
                </div>
                <button 
                    onClick={handleBookNow} 
                    className="package-button"
                    aria-label={`Book ${pkg.title} package`}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default PackageCard;