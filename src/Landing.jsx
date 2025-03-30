import React, { useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, House, User, Layers, Trophy } from 'lucide-react';
import Hero from './Hero'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './TechStack';
import Achievements from './Achievements';
import Dock from './components/Dock'
import AnimatedContent from './components/AnimatedComponent';

function App() {
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const homeRef=useRef(null);
    const techRef=useRef(null);
    const aboutRef=useRef(null);
    const achievementsRef=useRef(null);

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

    const items = [

        { icon: <House size={18} className='text-emerald-400' />, label: 'Home', onClick:scrollToHome },

        { icon: <User size={18} className='text-emerald-400' />, label: 'About', onClick:scrollToAbout },

        { icon: <Code2 size={18} className='text-emerald-400' />, label: 'Project', onClick:scrollToProject },

        { icon: <Layers size={18} className='text-emerald-400' />, label: 'Tech Stack', onClick:scrollToTech },
        { icon: <Trophy size={18} className='text-emerald-400' />, label: 'Experience', onClick:scrollToAchievements},
        { icon: <Mail size={18} className='text-emerald-400' />, label: 'Contact', onClick:scrollToContact },

    ];

    return (
        <div className="bg-zinc-950 text-gray-100 min-h-screen">
            <Hero />

            <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-emerald-400" />
            </div>

            {/* Hero Section */}

            <About scrollToContact={scrollToContact} scrollToProject={scrollToProject} />
            
            <Dock

                items={items}

                panelHeight={68}

                baseItemSize={50}

                magnification={70}
                className='fixed z-99 bottom-8 bg-zinc-950/70 backdrop-blur-md scale-75 md:scale-100'

            />
            {/* Projects Section */}
            <Projects ref={projectRef} />
            {/*Tech Stack*/}
            <TechStack />
            <Achievements />
            {/* Contact Section */}
            <Contact ref={contactRef} />
        </div>
    );
}

export default App;