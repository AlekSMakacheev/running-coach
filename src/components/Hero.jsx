import { data } from "../data/data"
import HeroImg from "../assets/hero.png"


const Hero = () => {

  return (

    //   relative h-screen flex items-center justify-center text-center text-white -mt-20
    <section className="relative h-screen flex justify-center text-center text-white -mt-20 pt-32">

      {/* 1. Фоновая картинка */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src={HeroImg}
          alt="Running background"
          className="w-full h-full object-cover object-top"
        />

        {/* Затемнение (Overlay), чтобы текст читался */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 2. Контент */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight mt-10 md:mt-28">
          {data.hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl">
          {data.hero.subtitle}
        </p>

        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-orange-500/30 inline-block cursor-pointer"
        >
          {data.hero.buttontext}
        </a>

      </div>

    </section>
  );
};

export default Hero;