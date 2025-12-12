import React, { useEffect } from 'react';
import { Search, BookOpen, DollarSign, Repeat2, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import Auroramainbg from './Auroramainbg';
import BlurText from './components/Blurtext';
import AnimatedContent from './components/AnimatedComponent';
import { forwardRef } from 'react';

const App = forwardRef((props, ref) => {
    return (
        <>
            <div className="min-h-screen bg-zinc-950" ref={ref}>
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center">
                    {/* Aurora Background */}

                    <Auroramainbg />
                    {/* Content Container */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center" data-aos="fade-up">
                            <div className='flex flex-col items-center'>
                                
                                <AnimatedContent
                                    distance={100}
                                    direction="vertical"
                                    reverse={false}
                                    duration={0.8}
                                    ease="bounce.out"
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1.0}
                                    threshold={0.1}
                                    delay={0}
                                >
                                    <p className='font-right italic font-medium text-gray-300 mb-2 items-start'>Hi, I am</p>
                                    <h2 className='font-migra italic font-bold max-w-7xl text-5xl md:text-7xl text-white mb-2'>Shreyansh Srivastava</h2>
                                </AnimatedContent>
                            </div>

                            <div className="flex flex-col my-4 items-center md:flex-row justify-center gap-4">
                                <a className="bg-transparent font-right font-medium text-sm max-w-1/2 md:max-w-1/8 text-emerald-300 px-4 py-3 rounded-full border-2 border-gray-700 hover:text-gray-300 cursor-pointer transition-colors" href='https://drive.google.com/file/d/1Hk3qawM1t345bQZfIbTsqXuYCHL4JwxN/view?usp=sharing' target='_blank'>
                                    View Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    );
});

export default App;