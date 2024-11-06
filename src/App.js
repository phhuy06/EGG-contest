
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import HumansOfEGG from './components/HumansOfEGG';
import Footer from './components/Footer';
import { useIsMobile } from './components/hooks/useIsMobile';


function App() {
  const { isMobile } = useIsMobile()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-red-200 to-white  overflow-x-hidden">
      <div className="flex-grow mx-5p font-montserrat mt-8">
        <Navbar isMobile={isMobile}/>
        <AboutUs />
        <Events />
      </div>
      <HumansOfEGG />
      <Footer />
    </div>
  );
}

export default App;

