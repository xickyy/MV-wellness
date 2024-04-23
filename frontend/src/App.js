import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>

          {/* <Route exact path='/' element={<HomePage />} /> */}


        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
