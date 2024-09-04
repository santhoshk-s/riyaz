import {NavbarWithMegaMenu} from './components/Navbar';
import Clients from './pages/Clients';
import Cta from './pages/Cta';
import Footer from './pages/Footer';
import HeroSection from './pages/Hero';
import Intro from './pages/Intro';
import Services from './pages/Services';
import Services2 from './pages/Services2';

function App() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <HeroSection />
      <Intro />
      <Services />
      <Services2 />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
