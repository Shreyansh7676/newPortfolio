import React, { useEffect } from 'react';
import { Search, BookOpen, DollarSign, Repeat2, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import Auroramainbg from './auroramainbg';
import BlurText from './components/Blurtext';

function App() {

    return (
        <>
            <div className="min-h-screen bg-zinc-950">
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center">
                    {/* Aurora Background */}

                    <Auroramainbg />
                    {/* Content Container */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center" data-aos="fade-up">
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-400 items-start'>Hi, I am</p>
                                
                                <BlurText

                                    text="Shreyansh Srivastava"

                                    delay={150}

                                    animateBy="words"

                                    direction="top"


                                    className="text-3xl md:text-6xl font-bold text-white mb-4"

                                />
                            </div>

                            <div className="flex flex-col my-4 items-center md:flex-row justify-center gap-4">
                                <button
                                    className="bg-transparent text-sm max-w-1/2 md:max-w-1/8 text-emerald-300 px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:text-gray-300 cursor-pointer transition-colors"

                                >
                                    View Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    );
}

export default App;