import React from 'react'
import { Layers, Type } from 'lucide-react'
import AnimatedContent from './components/AnimatedComponent'
import { forwardRef } from 'react'


import LogoLoop from './components/LogoLoop'
import { SiReact, SiJavascript, SiTypescript, SiMongodb, SiTailwindcss, SiPython, SiExpress, SiNodedotjs, SiCss3, SiHtml5, SiFlask, SiVercel, SiSocketdotio, SiBootstrap, SiVite, SiUnity, SiOpencv, SiGithub, SiBlender } from 'react-icons/si';
import { BiLogoFirebase } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
const techLogos = [

    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <TbBrandCpp />, title: "C++", href: "https://isocpp.org/" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com/" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
    { node: <SiMongodb />, title: "Vite", href: "https://vitejs.dev/" },
    { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com/" },
    { node: <SiCss3 />, title: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3.org/TR/html52/" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <BiLogoFirebase />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiSocketdotio />, title: "Socket.io", href: "https://socket.io/" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org/" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev/" },
    { node: <SiUnity />, title: "Unity", href: "https://unity.com/" },
    { node: <VscVscode />, title: "VS Code", href: "https://code.visualstudio.com/" },
    { node: <BiLogoFirebase />, title: "Firebase", href: "https://firebase.google.com" },

];

const TechStack = forwardRef((props, ref) => {

    return (
        <div className='min-h-full flex flex-col items-center justify-start' ref={ref}>
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
                {/* <h2 className="text-xl font-right italic font-bold flex items-center justify-center">
                    <Layers className="w-8 h-8 mr-4 text-emerald-400 text-center" />
                    Tech Stack & Tools
                </h2> */}
                <h2 className="text-4xl md:text-4xl md:pl-0 max-w-6xl mx-auto py-5 font-right italic font-bold flex items-center justify-center mb-12">
                    <Layers className="w-10 h-10 mr-4 ml-3 text-emerald-400 text-center" />
                    Tech Stack & Tools
                </h2>
                <div className='relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 md:px-8 mt-20 md:mt-20 mb-12'>

                    {/* <GlassIcons items={items} className="custom-class" /> */}
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        ariaLabel="Technology partners"
                    />

                </div>
            </AnimatedContent>
        </div>
    )
});

export default TechStack
