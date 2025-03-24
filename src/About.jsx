import React from 'react'
import AnimatedContent from './components/AnimatedComponent';
import Img1 from './assets/3426526-Photoroom.png'

const About = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center relative bg-black">
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
                                <h2 className="text-3xl font-bold mb-6">About Me</h2>


                                <p className="text-gray-400 text-lg mb-8">
                                    I'm a third-year B.Tech student at Thapar Institute of Engineering and Technology, majoring in Computer Science. Passionate about frontend development, I love crafting user-friendly and visually appealing web applications using modern web technologies. Always eager to learn and innovate, I'm currently seeking opportunities to grow and contribute to exciting projects.
                                    <br /><br />
                                    Let's connect and build something amazing! 🚀
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                   
                                    <button
                                        className="bg-emerald-400 text-sm md:max-w-1/2 text-white px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:bg-emerald-500 cursor-pointer transition-colors"
                                    >
                                        Get in touch
                                    </button>
                                    <button
                                        className="bg-transparent text-sm max-w-1/2 md:max-w-1/2 text-emerald-300 px-4 py-3 rounded-full font-medium border-2 border-gray-700 hover:text-gray-300 cursor-pointer transition-colors"
                                    >
                                        View my work
                                    </button>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-1">
                                <img
                                    src={Img1}
                                    alt="coding-vector"
                                    className="w-72 h-72 object-contain md:ml-10 md:block"
                                />
                            </div>
                        </div>


                    </section>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default About
