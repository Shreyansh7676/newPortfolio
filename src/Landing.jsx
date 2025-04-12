import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, House, User, Layers, Trophy } from 'lucide-react';
import Hero from './Hero'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './TechStack';
import Achievements from './Achievements';
import Dock from './components/Dock'
import AnimatedContent from './components/AnimatedComponent';
import ScrollVelocity from './components/ScrollVelocity';

function App() {
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const homeRef = useRef(null);
    const techRef = useRef(null);
    const aboutRef = useRef(null);
    const achievementsRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProject = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToTech = () => {
        techRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAchievements = () => {
        achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll handler function
    const controlDock = () => {
        const currentScrollY = window.scrollY;

        // Show dock when scrolling up or at the top of the page
        if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
            setIsVisible(true);
        }
        // Hide dock when scrolling down and not at the top
        else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        }

        // Update scroll position
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', controlDock);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', controlDock);
        };
    }, [lastScrollY]);
    const items = [

        { icon: <House size={18} className='text-emerald-400' />, label: 'Home', onClick: scrollToHome },

        { icon: <User size={18} className='text-emerald-400' />, label: 'About', onClick: scrollToAbout },

        { icon: <Code2 size={18} className='text-emerald-400' />, label: 'Project', onClick: scrollToProject },

        { icon: <Layers size={18} className='text-emerald-400' />, label: 'Tech Stack', onClick: scrollToTech },
        { icon: <Trophy size={18} className='text-emerald-400' />, label: 'Experience', onClick: scrollToAchievements },
        { icon: <Mail size={18} className='text-emerald-400' />, label: 'Contact', onClick: scrollToContact },

    ];

    return (
        <div className="bg-zinc-950 text-gray-100 min-h-screen">
            <Hero ref={homeRef} />

            <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-emerald-400" />
            </div>
            

            {/* Hero Section */}

            <About scrollToContact={scrollToContact} scrollToProject={scrollToProject} ref={aboutRef} />
            <div className={`fixed bottom-0 left-0 right-0 flex justify-center z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                <Dock

                    items={items}

                    panelHeight={68}

                    baseItemSize={50}

                    magnification={70}
                    className='fixed z-99 bottom-8 bg-zinc-950/70 backdrop-blur-md scale-75 md:scale-100 scroll-smooth transition-all'

                />
            </div>

            {/* Projects Section */}
            <Projects ref={projectRef} />
            {/*Tech Stack*/}
            <TechStack ref={techRef} />
            <Achievements ref={achievementsRef} />
            {/* Contact Section */}
            <Contact ref={contactRef} />
        </div>
    );
}

export default App;