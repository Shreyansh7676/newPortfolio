import React from 'react';
import { 
  Activity, 
  Airplay, 
  Anchor, 
  Aperture, 
  Apple, 
  ArrowBigRight, 
  Atom, 
  Award, 
  Backpack, 
  Battery 
} from 'lucide-react';

const AnimatedIconCloud = () => {
  const icons = [
    Activity, Airplay, Anchor, Aperture, Apple, 
    ArrowBigRight, Atom, Award, Backpack, Battery
  ];

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 5}s`
  });

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
      {icons.map((Icon, index) => (
        <div 
          key={index} 
          className="absolute animate-float opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300 ease-in-out"
          style={getRandomPosition()}
        >
          <Icon 
            size={Math.floor(40 + Math.random() * 60)} 
            className="text-blue-500 hover:text-blue-700"
          />
        </div>
      ))}
    </div>
  );
};

// Custom animation for floating effect
const styles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(-10deg); }
  }

  .animate-float {
    animation: float infinite alternate;
  }
`;

const StyleComponent = () => (
  <style>{styles}</style>
);

const App = () => (
  <>
    <StyleComponent />
    <AnimatedIconCloud />
  </>
);

export default App;