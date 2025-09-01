import React from 'react'
import AnimatedContent from './components/AnimatedComponent';
import Img1 from './assets/WhatsApp Image 2024-07-15 at 14.20.07_42ad5da1.jpg'
import TiltedCard from './components/NewTilted'
import { useNavigate } from 'react-router';
import { forwardRef } from 'react';
const About = forwardRef(({ scrollToContact, scrollToProject }, ref) => {
    return (
        <div ref={ref}>
            <div className="min-h-screen flex items-center justify-center relative bg-zinc-950">
                <AnimatedContent

                    distance={100}

                    direction="vertical"

                    reverse={false}

                    config={{ tension: 50, friction: 25 }}

                    initialOpacity={0.0}

                    animateOpacity

                    scale={1.0}

                    threshold={0.1}

                >
                    <section className="w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 lg:gap-20 max-w-7xl mx-auto">
                            <div className="max-w-xl text-start md:text-start">
                                <h2 className="text-5xl font-migra italic font-bold mb-6">About Me</h2>

                                <p className="text-gray-400 font-right text-md mb-8">
                                    A final-year B.E. Student at Thapar Institute of Engineering and Technology, majoring in Computer Science. Passionate about Full Stack Web Development, I love crafting user-friendly and visually appealing web applications using modern web technologies.
                                    <br /><br />
                                    Beyond frontend development, I have a keen interest in Data Structures and Algorithms (DSA), constantly refining my problem-solving skills to write efficient and optimized code. I enjoy tackling coding challenges and participating in contests to improve my algorithmic thinking.
                                    <br /><br />
                                    I'm also fascinated by computer animation and gaming, exploring how technology brings creativity to life. The intersection of design, graphics, and interactivity excites me, and I aspire to contribute to projects that push the boundaries of immersive experiences.
                                    <br /><br />
                                    Always eager to learn and innovate, I'm currently seeking opportunities to grow and contribute to exciting projects. Let’s connect and build something amazing! 🚀
                                    
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4">

                                    <button
                                        className="bg-emerald-400 font-right text-sm md:max-w-1/2 text-white px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:bg-emerald-500 cursor-pointer transition-colors" 
                                        onClick={scrollToContact}
                                    >
                                        Get in touch
                                    </button>
                                    <button
                                        className="bg-transparent font-right text-sm max-w-1/2 md:max-w-1/2 text-emerald-300 px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:text-gray-300 cursor-pointer transition-colors"
                                        onClick={scrollToProject}
                                    >
                                        View my work
                                    </button>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-1">
                                <TiltedCard

                                    imageSrc={Img1}

                                    altText="Kendrick Lamar - GNX Album Cover"

                                    containerHeight="300px"

                                    containerWidth="300px"

                                    imageHeight="300px"

                                    imageWidth="300px"

                                    rotateAmplitude={12}

                                    scaleOnHover={1.2}

                                    showMobileWarning={false}

                                    showTooltip={false}

                                    displayOverlayContent={true}
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedContent>
            </div>
        </div>
    )
});

export default About
