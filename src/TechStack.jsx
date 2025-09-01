import React from 'react'
import GlassIcons from './components/GlassIcons'
import Photoshop from './assets/svg/Adobe Photoshop.svg'
import ReactIcon from './assets/svg/React.svg'
import Javascript from './assets/svg/JavaScript.svg'
import Typescript from './assets/svg/TypeScript.svg'
import CPlus from './assets/svg/C++ (CPlusPlus).svg'
import Python from './assets/svg/Python.svg'
import Git from './assets/svg/Git.svg'
import GitHub from './assets/svg/GitHub.svg'
import Tailwind from './assets/svg/Tailwind CSS.svg'
import Opencv from './assets/svg/OpenCV.svg'
import Vscode from './assets/svg/Visual Studio Code (VS Code).svg'
import HTML from './assets/svg/HTML5.svg'
import Vercel from './assets/svg/Vercel.svg'
import Express from './assets/svg/express.webp'
import Flask from './assets/svg/flask.webp'
import Vite from './assets/svg/Vite.js.svg'
import Unity from './assets/svg/Unity.svg'
import C from './assets/svg/C.svg'
import Socket from './assets/svg/Socket-io.svg.png'
import Node from './assets/svg/node.webp'
import CSS from './assets/svg/CSS3.svg'
import BootStrap from './assets/svg/Bootstrap.svg'
import Firebase from './assets/svg/Firebase.svg'
import { Layers, Type } from 'lucide-react'
import AnimatedContent from './components/AnimatedComponent'
import { forwardRef } from 'react'
import SpotlightCard from './components/SpotlightComponent'

const TechStack = forwardRef((props, ref) => {
    const items = [

        { icon: <img src={ReactIcon} alt="Photoshop" />, color: 'indigo', label: 'React' },
        { icon: <img src={Express} alt="Photoshop" />, color: 'grey', label: 'Express' },

        { icon: <img src={Javascript} alt="Photoshop" />, color: 'yellow', label: 'JavaScript' },
        { icon: <img src={Node} alt="Photoshop" />, color: 'red', label: 'Node.js' },

        { icon: <img src={Typescript} alt="Photoshop" />, color: 'blue', label: 'TypeScript' },

        { icon: <img src={CPlus} alt="Photoshop" />, color: 'indigo', label: 'C++' },

        { icon: <img src={Python} alt="Photoshop" />, color: 'red', label: 'Python' },
        { icon: <img src={Flask} alt="Photoshop" />, color: 'blue', label: 'Flask' },

        { icon: <img src={Git} alt="Photoshop" />, color: 'orange', label: 'Git' },
        { icon: <img src={GitHub} alt="Photoshop" />, color: 'grey', label: 'GitHub' },
        { icon: <img src={Tailwind} alt="Photoshop" />, color: 'indigo', label: 'Tailwind CSS' },
        { icon: <img src={Opencv} alt="Photoshop" />, color: 'green', label: 'OpenCV' },
        { icon: <img src={Socket} alt="Photoshop" />, color: 'yellow', label: 'Socket.io' },
        { icon: <img src={Vscode} alt="Photoshop" />, color: 'red', label: 'VS Code' },
        { icon: <img src={HTML} alt="Photoshop" />, color: 'orange', label: 'HTML' },
        { icon: <img src={C} alt="Photoshop" />, color: 'blue', label: 'C' },
        { icon: <img src={Firebase} alt="Photoshop" />, color: 'indigo', label: 'Firebase' },
        { icon: <img src={Vercel} alt="Photoshop" />, color: 'grey', label: 'Vercel' },
        { icon: <img src={CSS} alt="Photoshop" />, color: 'blue', label: 'CSS' },
        { icon: <img src={BootStrap} alt="Photoshop" />, color: 'indigo', label: 'BootStrap' },
        { icon: <img src={Vite} alt="Photoshop" />, color: 'red', label: 'Vite' },
        { icon: <img src={Unity} alt="Photoshop" />, color: 'grey', label: 'Unity' },

    ];
    return (
        <div className='min-h-screen flex flex-col items-center justify-start' ref={ref}>
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
                <h2 className="text-3xl font-right italic font-bold flex items-center justify-center">
                    <Layers className="w-8 h-8 mr-4 text-emerald-400 text-center" />
                    Tech Stack & Tools
                </h2>
                <div className='flex items-center justify-center mt-4 md:mt-20'>

                    <GlassIcons items={items} className="custom-class" />

                </div>
                </AnimatedContent>
        </div>
    )
});

export default TechStack
