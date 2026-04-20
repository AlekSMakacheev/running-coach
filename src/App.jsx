import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Success from "./components/ThanksPage";

function App() {

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <Router>
      <div className="bg-slate-900 min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Pricing onSelectPlan={setSelectedPlan} />
              <Reviews />
              <Footer selectedPlan={selectedPlan} />
            </>
          }/>
          <Route path="/success" element={<Success />} />
          
        </Routes>
      </div>
    </Router>

    
    
  );
};

export default App;