import React from 'react';
import './button.css';
import { useColorMode } from '../ColorModeContextProvider';


function AnimaButton({text}) {

  const { colorMode } = useColorMode();

  return (
    <div>
        <button className="bg-tranparent  flex flex-row font-semibold rounded-[30px] items-center border-[1px] border-[#99aed1]  text-xl ml-0 p-3 b-[65px] " >
          <h1 className='ml-2'>{text}</h1>
          <div className={`p-2 ${colorMode ? ' bg-[#86742e]' : ' bg-blue-950'} h-full overflow-hidden min-h-10 min-w-10 rounded-full flex items-center ml-4 self-center justify-center hover-animation`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='arrow'><path fill="#fff" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path></svg>
          </div>
        </button>
    </div>
  )
}

export default AnimaButton
