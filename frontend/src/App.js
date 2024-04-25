import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/FAQ' element={<FAQ />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
