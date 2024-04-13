import React, { createContext, useState, useContext , useEffect } from 'react';
import button from './button.svg';
import star from './star.svg'

const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(false);
  

  const toggleColorMode = () => {
    setColorMode(prevColorMode => !prevColorMode);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a ColorModeProvider');
  }
  return context;
};


export const ColorModeButton= () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [showButton, setShowButton] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [buttonSize, setButtonSize] = useState('w-[110px] h-[110px]')
    const [isHovered, setIsHovered] = useState(false);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
        setButtonSize('w-[110px] h-[110px]');
      } else {
        setButtonSize('w-[80px] h-[80px]');
      }
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowButton(true);
      }, 1010);
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        clearTimeout(timeout);
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    if (!showButton) {
      return (
        <div></div>
      ); 
    }
  
    return (
      <button className={`relative ${buttonSize} fill-green-950 hover:font-bold py-2 px-4 rounded-full transition-all ${colorMode ? 'bg-[#1f1c16] text-[#ceaa53] hover:bg-blue-950 ' : 'hover:bg-[#ceaa53] bg-white'}`} onClick={toggleColorMode}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={button} alt="Button" className="w-11/12 h-11/12 animate-spin-custom" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="border-2 border-black rounded-full w-[80px] h-[80px] flex justify-center items-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className='w-8 h-8 flex flex-col justify-between transition-all'>
              <div className='flex flex-row justify-between '>
                <img src={star} alt="Star" className={`${isHovered ? 'w-4 h-4 rotate-180' : 'w-2 h-2'}`} />
                <img src={star} alt="Star" className={`${isHovered ? 'w-2 h-2 rotate-180' : 'w-4 h-4'}`} />
              </div>
              <div className='flex flex-row justify-between'>
                <img src={star} alt="Star" className={`${isHovered ? 'w-2 h-2 rotate-180' : 'w-4 h-4'}`} />
                <img src={star} alt="Star" className={`${isHovered ? 'w-4 h-4 rotate-180' : 'w-2 h-2'}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
    );
  };

