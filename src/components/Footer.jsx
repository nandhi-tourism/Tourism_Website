import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Footer.css';
import { VITE_WHATSAPP_NUMBER,VITE_FACEBOOK,VITE_GMAIL,VITE_INSTAGRAM,VITE_LINKEDIN,VITE_TWITTER,VITE_OFFICE_ADDRESS} from '../pages/script/socialMediaAcc';
import logo from '../assets/photos/Logo.webp'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/packages', label: 'Packages' },
        { path: '/contact', label: 'Contact' }
    ];

    const socialLinks = [
        { icon: 'fab fa-facebook-f', url: VITE_FACEBOOK, label: 'Facebook' },
        { icon: 'fab fa-instagram', url: VITE_INSTAGRAM, label: 'Instagram' },
        { icon: 'fab fa-twitter', url: VITE_TWITTER, label: 'Twitter' },
        { icon: 'fab fa-linkedin-in', url: VITE_LINKEDIN, label: 'LinkedIn' }
    ];


    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <img src={logo} alt="Nandi Tourism" />
                            </div>
                            <h2 style={{marginLeft:"10px"}} className="logo-text">Nandi Tourism</h2>
                        </div>
                        <p className="footer-description">
                            Providing reliable, affordable, and comfortable travel and tour services for over a decade.
                        </p>
                        
                        {/* WhatsApp Contact */}
                        <div className="whatsapp-contact">
                            <a 
                                href={`https://wa.me/${VITE_WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-contact-link"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                        
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                                <a href="https://nuthan-444.github.io/HTML-CSS/Contact-Info/"><button className='contact-website-developer'>Contact Website Developer</button></a>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="footer-contact">
                            <li><i className="fas fa-map-marker-alt"></i>{VITE_OFFICE_ADDRESS}</li>
                            <li><i className="fas fa-phone"></i>{VITE_WHATSAPP_NUMBER}</li>
                            <li><i className="fas fa-envelope"></i>{VITE_GMAIL}</li>
                            <li><i className="fas fa-clock"></i> Mon-Fri: 9am-6pm</li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Nandi Tourism. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;