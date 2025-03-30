import React from 'react'
import Orb from './components/Orb';
import { forwardRef } from 'react';
import AnimatedContent from './components/AnimatedComponent';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Twitter } from 'lucide-react';
const Contact = forwardRef((props, ref) => {
    return (
        <div>
            <section id="contact" ref={ref} className="py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen relative">
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
                <AnimatedContent

                    distance={100}

                    direction="vertical"

                    reverse={false}

                    config={{ tension: 50, friction: 25 }}

                    initialOpacity={0.0}

                    animateOpacity

                    scale={1.0}

                    threshold={0.1}
                    className="scroll-smooth transform-gpu ease-in-out"

                >

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8">
                            I'm currently looking for new opportunities. Whether you have a question
                            or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="mailto:shreyansh.ind18@thapar.edu" className="text-gray-400 hover:text-emerald-400 transition duration-300 hover:scale-120">
                                <Mail className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/Shreyansh7676" className="text-gray-400 hover:text-emerald-400 transition duration-300 hover:scale-120">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/shreyansh-srivastava-945034257/" className="text-gray-400 hover:text-emerald-400 transition duration-300 hover:scale-120">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://x.com/zenettcodes" className="text-gray-400 hover:text-emerald-400 transition duration-300 hover:scale-120">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                </AnimatedContent>

            </section>
        </div>
    )
});

export default Contact
