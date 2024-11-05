
import './App.css';
import Navbar from './components/Navbar';
import AbouUs from './components/AbouUs';
import Events from './components/Events';
import HumansOfEGG from './components/HumansOfEGG';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {
  const[windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    } 
  window.addEventListener("resize", handleSize);
  handleSize();
  return () => window.removeEventListener("resize", handleSize);
  },[]);

  useEffect(() =>{
      if(windowSize.width < 500){
        setMobile(true);
      }else{
        setMobile(false);
      }
  },[windowSize])


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-red-200 to-white  overflow-x-hidden">
      <div className="flex-grow mx-5p font-montserrat mt-8">
        <Navbar isMobile={isMobile}/>
        <AbouUs />
        <Events />
      </div>
      <div>
      <HumansOfEGG />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

