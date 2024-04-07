import React , {useState} from 'react';
import './App.css';
import Preloader from './Preloader';
import HomePage from './HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  };

  return (
    <div className="App">
      <div>
      {loading ? (
        <Preloader onLoad={handleLoad} />
      ) : (
        <HomePage/>
      )}
    </div>
    </div>
  );
}

export default App;
