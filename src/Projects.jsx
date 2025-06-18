import React from 'react'
import { Code2, Github, ExternalLink, Link2 } from 'lucide-react'
import Img1 from './assets/Screenshot 2025-03-22 212336.png'
import Img2 from './assets/image.png'
import Img3 from './assets/Screenshot 2025-03-24 184446.png'
import Img4 from './assets/VoiceCloning-DataCollection-scaled.jpeg'
import SpotlightCard from './components/SpotlightComponent'
import AnimatedContent from './components/AnimatedComponent';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
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
                        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
                            <Code2 className="w-8 h-8 mr-4 text-emerald-400 text-center" />
                            Featured Projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-bold'>Campus MarketPlace</p>
                                <img src={Img1} className='h-32 w-full md:h-48 object-cover md:object-cover mt-5 ' />
                                <div className='flex items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <a href='https://github.com/Shreyansh7676/college-marketplace' className='hover:text-emerald-400' target='_blank'>
                                            <Github />
                                        </a>
                                        <a href='https://college-marketplace-sand.vercel.app/' className='hover:text-emerald-400' target='_blank'>
                                            <Link2 />
                                        </a>
                                    </div>
                                    <div className='flex items-center pt-5 gap-1 scale-90 md:scale-100'>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>React JS</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>Firebase</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>Tailwind CSS</button>
                                    </div>

                                </div>
                                <div className='flex text-start mt-3'>
                                    <p className='text-gray-400 text-sm'>A vibrant peer-to-peer marketplace tailored for university students to buy, sell, or exchange essentials within their campus. With a built-in chat feature, it fosters seamless communication and trust between users—making campus trading smarter and more social.</p>
                                </div>

                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-bold'>Detectly</p>
                                <img src={Img2} className='h-32 w-full md:h-48 object-cover items-center md:object-cover mt-5 ' />
                                <div className='flex items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <a href='https://github.com/Shreyansh7676/Detectly' className='hover:text-emerald-400' target='_blank'>
                                            <Github />
                                        </a>
                                        <a href='https://ai-content-detector-ashy.vercel.app/' className='hover:text-emerald-400' target='_blank'>
                                            <Link2 />
                                        </a>
                                    </div>
                                    <div className='flex items-center pt-5 gap-1 scale-90 md:scale-100'>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>React TS</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>Axios</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-xl text-xs'>Tailwind CSS</button>
                                    </div>
                                </div>
                                <div className='flex text-start mt-3'>
                                    <p className='text-gray-400 text-sm'> An AI-powered tool designed to analyze and detect whether written content is human-crafted or AI-generated. Perfect for educators, content creators, and editors seeking content authenticity with just a click.</p>
                                </div>

                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-bold'>Edit-Ease</p>
                                <img src={Img3} className='h-32 w-full md:h-48 object-cover md:object-cover mt-5 ' />
                                <div className='flex items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <a href='https://github.com/Shreyansh7676/Edit-Ease' className='hover:text-emerald-400' target='_blank'>
                                            <Github />
                                        </a>
                                        <a href='https://edit-ease-five.vercel.app/' className='hover:text-emerald-400' target='_blank'>
                                            <Link2 />
                                        </a>
                                    </div>
                                    <div className='flex items-center pt-5 gap-1 scale-90 md:scale-100'>
                                        <button className='bg-zinc-800 p-2 font-light rounded-2xl text-xs'>React JS</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-2xl text-xs'>Axios</button>
                                        <button className='bg-zinc-800 p-2 font-light rounded-2xl text-xs'>Tailwind CSS</button>
                                    </div>
                                </div>
                                <div className='flex text-start mt-3'>
                                    <p className='text-gray-400 text-sm'>An intuitive photo editing platform where users can effortlessly enhance their pictures, apply creative filters, and achieve stunning results. With powerful background removal and easy-to-use tools, it delivers studio-quality edits right from your browser.</p>
                                </div>
                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-bold'>Audio Spoof Detection System</p>
                                <img src={Img4} className='h-32 w-full md:h-48 object-cover md:object-cover mt-5 ' />
                                <div className='flex items-end justify-between'>

                                    <div className='flex items-end pt-5 gap-1 scale-90 md:scale-100'>
                                        <button className='bg-zinc-800 p-2 font-light rounded-2xl text-xs'>Ongoing</button>
                                    </div>
                                </div>
                                <div className='flex text-start mt-3'>
                                    <p className='text-gray-400 text-sm'>A Machine Learning project which differentiates spoofed vs real speech generated through techniques like voice conversion, speech synthesis.</p>
                                </div>
                            </SpotlightCard>

                        </div>
                    </AnimatedContent>
                </div >
            </section >
        </div >
    )
});

export default Projects
