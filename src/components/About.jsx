import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
          

          <div className="w-full h-full min-h-[350px] md:min-h-[450px] bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700 shadow-inner overflow-hidden relative group">
             {/* Заглушка. Когда будет фото, замените этот SVG на тег:
                <img src="/ваше_фото.jpg" className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105" /> 
             */}
             <svg className="w-20 h-20 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
             </svg>
             <div className="absolute bottom-4 left-4 bg-orange-500/10 text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-500/20">
               Место под фото
             </div>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-10 text-center md:text-left">
            
            <div>
              <h2 className="text-4xl font-bold mb-5 text-white">Иван Иванов</h2>
              <ul className="text-blue-400 space-y-2.5 font-medium text-lg inline-block md:block mx-auto md:mx-0">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  Врач по образованию
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  Персональный тренер по бегу
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  Специалист по биомеханике
                </li>
              </ul>
            </div>

            <div className="text-slate-300 text-lg leading-relaxed space-y-5 text-justify">
              <p>Я занимаюсь бегом уже 10 лет и пробежал 3 марафона (Москва, Санкт-Петербург, Казань).</p>
              <p>
                Мой подход основан на медицинских знаниях физиологии, анатомии и психосоматики. Моя цель — научить тебя бегать технично, безопасно и с удовольствием, чтобы бег стал источником здоровья и энергии.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-slate-950 rounded-2xl p-6 text-center border border-slate-800 hover:border-slate-700 transition duration-300 group">
                 <div className="flex justify-center mb-3">
                   <svg className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">5+</div>
                 <div className="text-slate-400 text-sm">Лет опыта</div>
              </div>

              <div className="bg-slate-950 rounded-2xl p-6 text-center border border-slate-800 hover:border-slate-700 transition duration-300 group">
                 <div className="flex justify-center mb-3">
                   <svg className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">10+</div>
                 <div className="text-slate-400 text-sm">Учеников</div>
              </div>

              <div className="bg-slate-950 rounded-2xl p-6 text-center border border-slate-800 hover:border-slate-700 transition duration-300 group">
                 <div className="flex justify-center mb-3">
                   <svg className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">42км</div>
                 <div className="text-slate-400 text-sm">Личный рекорд</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;