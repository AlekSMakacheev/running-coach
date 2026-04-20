import { data } from "../data/data";

const Pricing = ({ onSelectPlan }) => {

  const handlePlanSelect = (planTitle) => {
    onSelectPlan(planTitle); 
    document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'start'});
  };
  
  return (

  <section id="pricing" className="py-20 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto px-8">
      {/* Заголовок секции */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Программы тренировок
      </h2>

      {/* Сетка тарифов */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.pricing.map((plan) => (
          <div
            key={plan.id}
            id={plan.id}

            className={`relative p-8 rounded-2xl border transition duration-300 flex flex-col
              ${plan.isPopular
                ? 'border-orange-500 bg-slate-800 shadow-xl shadow-orange-500/10 scale-105'
                : 'border-slate-700 bg-slate-900 hover:border-slate-600'
              }`
            }
          >

            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                ХИТ
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-300 mb-2 text-center">{plan.title}</h3>
            </div>

            <ul className="mb-8 flex-grow space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  {/* Иконка галочки (SVG) */}
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-4xl font-bold text-white text-center mb-6">
                {plan.price}
              </div>

            <button
              onClick={() => handlePlanSelect(plan.title)}          
              className={`
              block w-full py-3 rounded-xl font-bold transition duration-300 text-center cursor-pointer
              ${plan.isPopular
                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
              }
            `}>
              Записаться
            </button>

          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Pricing;