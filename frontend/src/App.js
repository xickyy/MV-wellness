import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import NewPatients from './components/NewPatients';
import About from './components/About';
import Reviews from './components/Reviews';
import Services from './components/Services';
import MensHealth from './components/Services/MensHealth';
import PrimaryCare from './components/Services/PrimaryCare';
import WomensHealth from './components/Services/WomensHealth';
import StdScreen from './components/Services/StdScreen';
import WalkIns from './components/Services/WalkIns';
import Telehealth from './components/Services/Telehealth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/FAQ' element={<FAQ />} />
          <Route exact path='/new-patients' element={<NewPatients />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/reviews' element={<Reviews />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/services/mens-health' element={<MensHealth />} />
          <Route exact path='/services/primary-care' element={<PrimaryCare />} />
          <Route exact path='/services/womens-health' element={<WomensHealth />} />
          <Route exact path='/services/std-screening' element={<StdScreen />} />
          <Route exact path='/services/walk-ins' element={<WalkIns />} />
          <Route exact path='/services/telehealth' element={<Telehealth />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
