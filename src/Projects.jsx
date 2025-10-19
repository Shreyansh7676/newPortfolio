import React from 'react'
import { Code2, Github, ExternalLink, Link2 } from 'lucide-react'
import Img1 from './assets/Screenshot 2025-03-22 212336.png'
import Img2 from './assets/image.png'
import Img3 from './assets/Screenshot 2025-03-24 184446.png'
import Img4 from './assets/VoiceCloning-DataCollection-scaled.jpeg'
import Img5 from './assets/Screenshot 2025-08-05 114031.png'
import Img6 from './assets/Screenshot 2025-08-30 181640.png'
import SpotlightCard from './components/SpotlightComponent'
import AnimatedContent from './components/AnimatedComponent';
import { forwardRef } from 'react';
import { Carousel, Card } from "./components/apple-cards-carousel";
import { link } from 'framer-motion/client'

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};


const data = [
    {
        category: "React JS, Express JS, Socket.IO, MongoDB",
        title: "CodeWeave",
        src: Img6,
        content: "A real-time collaborative code editor enabling seamless multi-user editing with low latency, syntax highlighting, and reusable components.",
        github: "https://github.com/Shreyansh7676/CodeWeave",
        link: "https://codeweave-7yxf.onrender.com/"
    },
    {
        category: "React JS, Flask, OpenCV",
        title: "SmartPano",
        src: Img5,
        content: "A web application that leverages advanced image processing techniques to create stunning panoramic images. Users can upload their photos and let SmartPano stitch them together seamlessly.",
        github: "https://github.com/Shreyansh7676/Smart-pano",
        link: "https://smart-pano.vercel.app/"
    },
    {
        category: "React JS, FireBase",
        title: "Campus MarketPlace",
        src: Img1,
        content: "A vibrant peer-to-peer marketplace tailored for university students to buy, sell, or exchange essentials within their campus. With a built-in chat feature, it fosters seamless communication and trust between users-making campus trading smarter and more social.",
        github: "https://github.com/Shreyansh7676/college-marketplace",
        link: "https://college-marketplace-sand.vercel.app/"
    },

    {
        category: "React JS",
        title: "Edit-Ease",
        src: Img3,
        content: "An intuitive photo editing platform where users can effortlessly enhance their pictures, apply creative filters, and achieve stunning results. With powerful background removal and easy-to-use tools, it delivers studio-quality edits right from your browser.",
        github: "https://github.com/Shreyansh7676/Edit-Ease",
        link: "https://edit-ease-five.vercel.app/"
    },
    {
        category: "React TS",
        title: "Detectly",
        src: Img2,
        content: "An AI-powered tool designed to analyze and detect whether written content is human-crafted or AI-generated. Perfect for educators, content creators, and editors seeking content authenticity with just a click.",
        github: "https://github.com/Shreyansh7676/Detectly",
        link: "https://ai-content-detector-ashy.vercel.app/"
    },
    {
        category: "Python, PyTorch",
        title: "Audio Spoof Detection System",
        src: Img4,
        content: "A Machine Learning project which differentiates spoofed vs real speech generated through techniques like voice conversion, speech synthesis."
    },
];

const Projects = forwardRef((props, ref) => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));
    return (
        <div ref={ref}>
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto py-5">
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 50, friction: 25 }}
                        initialOpacity={0.0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        className="scroll-smooth"
                    >
                        <h2 className="text-4xl font-right italic font-bold flex items-center justify-center">
                            <Code2 className="w-10 h-10 mr-4 text-emerald-400 text-center" />
                            Featured Projects
                        </h2>
                        <Carousel items={cards} />
                        
                    </AnimatedContent>
                </div >
            </section >
        </div >
    )
});

export default Projects
