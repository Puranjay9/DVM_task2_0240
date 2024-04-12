import React, { createContext, useState, useContext , useEffect } from 'react';

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
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowButton(true);
      }, 1010); 
  
      return () => clearTimeout(timeout);
    }, []);
  
    if (!showButton) {
      return (
        <div></div>
      ); 
    }
  
    return (
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={toggleColorMode}>
        {colorMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
  };

