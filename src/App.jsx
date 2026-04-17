import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";

function App() {

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    
    <div className="bg-slate-900 min-h-screen">

      {/* Вставляем компонент Шапки */}
      <Navbar />

      {/* Главный экран */}
      <Hero />

      {/* 2. Вставляем блок Обо мне */}
      <About />

      <Pricing onSelectPlan={setSelectedPlan} />

      <Reviews />

      {/* Футер и Контакты */}
      <Footer selectedPlan={selectedPlan} />

    </div>
  );
};

export default App;