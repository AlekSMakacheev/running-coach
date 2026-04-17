import { data } from "../data/data";

const About = () => {

  return (

    // id="about" нужен, чтобы ссылка "Обо мне" из меню скроллила сюда
    <section id="about" className="py-20 bg-slate-800 text-white">

      <div className="max-w-4xl mx-auto px-8">
        {/* 1. Заголовок и Текст */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {data.about.title}<span className="text-orange-500">.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {data.about.description}
          </p>
        </div>

        {/* 2. Карточки со статистикой */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.about.stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-700/50 p-8 rounded-2xl text-center hover:bg-slate-700 transition duration-300 border border-slate-600 hover:border-orange-500/50"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>

   );
};

export default About;