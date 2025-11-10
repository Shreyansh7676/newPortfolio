import React from 'react'
import SpotlightCard from './components/SpotlightComponent'
import AnimatedContent from './components/AnimatedComponent'
import { Trophy } from 'lucide-react'
import Img1 from './assets/SIH2024_IDEA_Presentation_Format.pptx.png'
import Img3 from './assets/Screenshot 2025-11-11 010816.png'
import Img2 from './assets/download (1).png'
import { forwardRef } from 'react'
import { RiShareBoxFill } from "react-icons/ri";

const Achievements = forwardRef((props, ref) => {
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
                        <h2 className="text-3xl font-right italic font-bold mb-12 flex items-center justify-center">
                            <Trophy className="w-8 h-8 mr-4 text-emerald-400 text-center" />
                            Achievements & Experience
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-right font-bold'>LeetCode Ratings</p>
                                <div className='flex flex-col md:flex-row items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <img src={Img3} className='h-32 md:h-40 object-cover md:object-cover mt-5 ' />
                                    </div>
                                    <div className='flex flex-col max-w-xl items-center pt-5 gap-6 scale-90 md:scale-100'>
                                        <p className='text-md font-right-light text-gray-400'>Solved over <b>450+ problems</b> across leading online coding platforms such as Leetcode, GeekforGeeks, etc. Achieved a LeetCode <b>Contest Rating of 1570+</b>, ranking in the top 28% globally among competitive programmers on
                                        LeetCode. Earned 6 badges including a 365 day badge indicating 365 days of submissions on LeetCode</p>
                                        <a href="https://leetcode.com/shreyansh_s18" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-md font-right-light text-gray-400 hover:text-gray-200'>LeetCode Profile
                                        <RiShareBoxFill />
                                        </a>
                                    </div>
                                </div>

                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">

                                <p className='text-2xl font-right font-bold'>SIH 2024 National Round</p>
                                <div className='flex flex-col md:flex-row items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <img src={Img1} className='h-32 md:h-48 object-cover md:object-cover mt-5 ' />
                                    </div>
                                    <div className='flex max-w-xl items-center pt-5 gap-1 scale-90 md:scale-100'>
                                        <p className='text-md font-right-light text-gray-400'>Selected among the top 50 teams out of 200+ competing teams, I successfully qualified for the prestigious National Round of Smart India Hackathon (SIH) 2024. This achievement highlights my ability to tackle real-world challenges through innovation, teamwork, and problem-solving, standing out in a highly competitive pool of talented participants. ⭐</p>
                                    </div>
                                </div>

                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(52, 211, 153, 0.2)">
                                <div className='flex flex-col gap-3 md:gap-0 md:flex-row justify-between  items-center'>
                                    <p className='text-2xl font-right font-bold'>Media Secretary - ISTE Thapar Chapter</p>
                                    <p className='text-md text-gray-400 font-light'>2022-25</p>
                                </div>

                                <div className='flex flex-col gap-0 md:gap-5 md:flex-row items-center justify-between'>
                                    <div className='mt-5 flex gap-5 items-center justify-start scale-90 md:scale-100'>
                                        <img src={Img2} className='h-32 md:h-40 object-cover md:object-cover mt-5 ' />
                                    </div>
                                    <div className='flex max-w-xl items-center pt-5 gap-1 scale-90 md:scale-100'>
                                        <p className='text-md font-right-light text-gray-400'>As Media Secretary, I led a 300+ member team for two years, showcasing strong leadership and management skills. I developed a ReactJS & Tailwind CSS-based Login and Sign-Up system for a College Society Event Management Portal, enabling seamless access for 50+ members and boosting event participation (1000+ attendees). Conducted workshops on video editing & graphic design, enhancing mentorship and public speaking skills. Drove a 300% social media growth, significantly expanding the society’s digital presence. 🚀</p>
                                    </div>
                                </div>

                            </SpotlightCard>


                        </div>
                    </AnimatedContent>
                </div >
            </section >
        </div >
    )
});

export default Achievements
