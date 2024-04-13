import React , {useState} from 'react';
import './App.css';
import Preloader from './Preloader';
import HomePage from './HomePage';
import { ColorModeButton, ColorModeProvider } from './ColorModeContextProvider';
import { useColorMode } from './ColorModeContextProvider';


function App() {
  const { colorMode} = useColorMode();
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  };

  return (
    
    <div className={`overflow-hidden  w-[100vw] ${colorMode ?'bg-[#2c2713]' : 'bg-white'}`}>
      <div>
      {loading ? (
        <Preloader onLoad={handleLoad} />
      ) : (
        <HomePage/>
      )}
    </div>
    <div className='fixed bottom-4 right-4'>
    {loading ? <div></div> : <ColorModeButton/>}
    </div>
    </div>
  );
}

export default App;
