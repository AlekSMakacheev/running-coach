import { useState } from "react";
import { data } from "../data/data"

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      {/* 1. Логотип */}
      <div className="text-2xl font-bold tracking-wider text-orange-500 cursor-pointer">
        RUN<span className="text-white">COACH</span>
      </div>

      {/* DESKTOP MENU (Обычное меню для ПК) */}
      <div className="hidden md:flex items-center space-x-8">

        <ul className="flex space-x-8">
          {data.navbar.map((item) => (
            <li key={item.id}>
              <a href={item.link}
                  className="hover:text-orange-500 transition duration-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      
        <button
          onClick={scrollToContact}
          className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition">
          Контакты
        </button>
      </div>

      {/* --- МОБИЛЬНАЯ ЧАСТЬ --- */}
      {/* Иконка Бургера (появляется только на мобильных md:hidden) */}
      <div onClick={handleNav} className="md:hidden z-20 cursor-pointer" >
        {nav ? (
          // Иконка "Крестик" (если меню открыто)
          <span className="text-3xl">✕</span>
        ) : (
          // Иконка "Бургер" (если закрыто)
          <span className="text-3xl">☰</span>
        )}
      </div>

      {/* Выпадающее мобильное меню */}
      <div className={
        nav
          ? "fixed left-0 top-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-10" // Открыто
          : "fixed left-[-100%] top-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-10" // Закрыто (улетело влево)
      }>
        <ul className="text-center">
          {data.navbar.map((item) => (
            <li key={item.id} className="py-6 text-3xl">
              <a
                href={item.link}
                onClick={() => setNav(false)} // Закрываем меню при клике на ссылку
              >
                {item.text}
              </a>
            </li>
          ))}
          {/* Кнопка в мобильном меню */}
          <li className="mt-8">
            <button onClick={() => {setNav(false); scrollToContact()}} className="bg-orange-500 px-8 py-3 rounded-full text-xl text-white">
              Контакты
            </button>
          </li>
        </ul>  

      </div>

    </nav>
  );
};

export default Navbar;  