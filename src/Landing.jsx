import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2 } from 'lucide-react';
import RotatingText from './components/rotatetext';
import Hero from './Hero'
import About from './About';
import DecryptedText from './components/ScrollReveal';
import SplitText from './components/SplitText';



function App() {
    return (
        <div className="bg-black text-gray-100 min-h-screen">
            <Hero />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-emerald-400" />
            </div>
            {/* Hero Section */}
            
            <About />
            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center">
                        <Code2 className="w-8 h-8 mr-4 text-emerald-400" />
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((project) => (
                            <div key={project} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition duration-300">
                                <img
                                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`}
                                    alt="Project Preview"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                                    <p className="text-gray-400 mb-4">
                                        A brief description of the project and the technologies used in its development.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-2">
                                            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                                            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TypeScript</span>
                                        </div>
                                        <div className="flex space-x-3">
                                            <a href="#" className="text-gray-400 hover:text-emerald-400">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-emerald-400">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
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

            {/* Footer */}
            <footer className="py-6 text-center text-gray-400">
                <p>Built with React & Tailwind CSS</p>
            </footer>
        </div>
    );
}

export default App;