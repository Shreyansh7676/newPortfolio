import React, { useEffect } from 'react';
import { Search, BookOpen, DollarSign, Repeat2, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import Auroramainbg from './auroramainbg';
import RotatingText from './components/rotatetext';

function App() {

    return (
        <>
            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center">
                    {/* Aurora Background */}
                    
                    <Auroramainbg />
                    {/* Content Container */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center" data-aos="fade-up">
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-400 items-start'>Hi, I am</p>
                                <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
                                    Shreyansh Srivastava
                                </h1>
                                {/* <div className='max-w-6xl flex gap-5 items-center justify-center'>
                                    <h2 className='text-2xl'>A</h2>
                                    <RotatingText

                                        texts={['Coder', 'FrontEnd Developer', 'Student', 'Graphic Designer', 'Video Editor']}

                                        mainClassName="px-2 sm:px-2 md:px-3 bg-emerald-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"

                                        staggerFrom={"last"}

                                        initial={{ y: "100%" }}

                                        animate={{ y: 0 }}

                                        exit={{ y: "-120%" }}

                                        staggerDuration={0.025}

                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"

                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}

                                        rotationInterval={2000}

                                    />
                                </div> */}


                            </div>

                            <div className="flex flex-col my-8 items-center md:flex-row justify-center gap-4">
                                <button
                                    className="bg-transparent text-sm max-w-1/8 text-emerald-300 px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:text-gray-400 cursor-pointer transition-colors"

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