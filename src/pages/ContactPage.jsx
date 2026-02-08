import './Style/ContactPage.css';
import { VITE_WHATSAPP_NUMBER,VITE_GMAIL,VITE_OFFICE_ADDRESS} from '../pages/script/socialMediaAcc';



const ContactPage = () => {

    const contactInfo = [
        { icon: 'fas fa-map-marker-alt', text: VITE_OFFICE_ADDRESS },
        { icon: 'fas fa-phone', text: VITE_WHATSAPP_NUMBER},
        { icon: 'fas fa-envelope', text: VITE_GMAIL},
        { icon: 'fas fa-clock', text: 'Mon-Fri: 9am-6pm, Sat: 10am-4pm' }
    ];


    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">
                            Have questions or ready to book your next adventure? Get in touch with our team.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h2 className="section-title">Get in Touch</h2>
                        
                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <i className={info.icon}></i>
                                    </div>
                                    <p>{info.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp Direct Button */}
                        <div className="whatsapp-direct">
                            <div className="whatsapp-direct-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="whatsapp-direct-content">
                                <h3>Quick Chat on WhatsApp</h3>
                                <p>Get instant responses from our travel experts</p>
                                <a 
                                    href={`https://wa.me/${VITE_WHATSAPP_NUMBER}?text=Hello%20Nandi%20Tourism%2C%20I%20have%20a%20question`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-direct-button"
                                >
                                    <i className="fab fa-whatsapp"></i> Chat Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;