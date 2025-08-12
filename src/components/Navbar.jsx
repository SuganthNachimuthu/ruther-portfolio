import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'work', label: 'Work Experience', icon: '💼' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'certification', label: 'Certification', icon: '🏆' },
        { id: 'education', label: 'Education', icon: '🎓' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = navItems.map(item => item.id);
            const currentSection = sections.find(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} data-active-section={activeSection}>
            <div className="navbar-container">


                {/* Desktop Navigation */}
                <div className="navbar-menu desktop-menu">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            data-section={item.id}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                            <div className="nav-indicator"></div>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                            data-section={item.id}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="mobile-nav-icon">{item.icon}</span>
                            <span className="mobile-nav-label">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
