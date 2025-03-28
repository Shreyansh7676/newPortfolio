import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2 } from 'lucide-react';
import Hero from './Hero'
import About from './About';
import Projects from './Projects';
import Orb from './components/Orb';
import TechStack from './TechStack';

function App() {
    return (
        <div className="bg-zinc-950 text-gray-100 min-h-screen">
            <Hero />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-emerald-400" />
            </div>
            {/* Hero Section */}

            <About />
            {/* Projects Section */}
            <Projects />
            {/*Tech Stack*/}
            <TechStack />
            {/* Contact Section */}
            <section id="contact" className="py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen relative">
                {/* Orb positioned absolutely in the background */}
                <div className="absolute inset-0 overflow-hidden">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={97}
                        forceHoverState={true}
                    />
                </div>

                {/* Content positioned relatively to appear above the Orb */}
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:hello@example.com" className="text-gray-400 hover:text-emerald-400 transition duration-300">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default App;