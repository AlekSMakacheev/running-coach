import { useEffect, useState } from "react";
import { data } from "../data/data";


const Footer = ({ selectedPlan }) => {

  // Локальное состояние для текста сообщения
    const [message, setMessage] = useState("");

    // 2. Следим за изменениями: если в App.jsx поменялся тариф, обновляем текст
    useEffect(() => {
      if (!selectedPlan) return;
    
      Promise.resolve().then(() => {
        setMessage(`Здравствуйте! Меня интересует тариф '${selectedPlan}'. Расскажите подробнее.`)
      });   
    }, [selectedPlan]);

  // Функция для очистки номера телефона (убирает скобки и пробелы для ссылки tel:)
  const cleanPhone = (phone) => phone.replace(/[^0-9]/g, '');

  // Функция, которая выдает SVG-иконку по названию соцсети
  const getSocialIcon = (name) => {
    switch (name) {
      case 'Telegram':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.638z"/>
          </svg>
        );
      case 'VK':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.004 0C5.377 0 0 5.377 0 12.004c0 6.627 5.377 12.004 12.004 12.004 6.627 0 12.004-5.377 12.004-12.004C24.008 5.377 18.631 0 12.004 0zM17.39 16.243h-1.38c-.522 0-.68-.416-1.615-1.35-.815-.793-1.17-.9-1.37-.9-.28 0-.36.08-.36.46v1.11c0 .33-.11.48-.9.48-1.33 0-2.8-.81-3.85-2.32-1.57-2.15-1.99-3.78-1.99-4.1 0-.22.08-.43.46-.43h1.38c.35 0 .48.18.61.54.67 1.92 1.79 3.6 2.25 3.6.18 0 .26-.09.26-.54V10.1c-.06-1-.58-1.08-.58-1.43 0-.17.14-.35.38-.35h2.17c.32 0 .43.17.43.53v3.02c0 .31.14.42.23.42.18 0 .33-.11.66-.45 1.03-1.13 1.75-2.9 1.75-2.9.1-.24.26-.37.6-.37h1.38c.42 0 .51.21.42.5-.18.8-1.92 3.31-1.92 3.31-.15.23-.21.34 0 .6.14.19.62.61.95 1 .59.66 1.04 1.22 1.16 1.55.14.4-.04.62-.47.62z"/>
          </svg>
        );
      case 'WhatsApp':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        );
      default:
        return null;
    }
  }

  return (

    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-8">

        <div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Левая колонка: Контакты и Текст */}

          <h2 className="text-4xl font-bold mb-6">
            {data.contact.title} <span className="text-orange-500">?</span>
          </h2>

          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            {data.contact.subtitle}
          </p>

          <div className="space-y-4 mb-8">
            {/* Почта с mailto: */}
            <a href={`mailto:${data.contact.email}`}
            className="flex items-center text-xl hover:text-orange-500 transition duration-300 w-fit"
            >
              <span className="text-orange-500 mr-3">✉️</span>
                {data.contact.email}
            </a>
            {/* Телефон с tel: */}
            <a href={`tel:${cleanPhone(data.contact.phone)}`}
            className="flex items-center text-xl hover:text-orange-500 transition duration-300 w-fit"
            >
              <span className="text-orange-500 mr-3">📞</span>
              {data.contact.phone}
            </a>
          </div>

          {/* Соцсети */}
          <div className="flex space-x-4">
            {data.contact.socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="blank" // Открывать в новой вкладке
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-orange-500 transition duration-300 text-white"
              >
                {/* Вызываем нашу функцию для отрисовки иконки */}
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        {/* Правая колонка: Форма */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          {/* YOUR_ID: Это заглушка. Вам нужно зарегистрироваться на Formspree, создать новую форму и заменить YOUR_ID на уникальный код, который вам выдаст сервис  */}
          <form action="https://formspree.io/f/xzznjjej" method="POST" className="space-y-6">  
            <div>
              <label className="block text-slate-400 mb-2 text-sm">Ваше имя</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="ivan@mail.ru"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm">Цель тренировки</label>
              <textarea
                name="message"
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="Хочу пробежать полумарафон..."
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Разрешаем пользователю редактировать текст
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition duration-300">
              Отправить заявку
            </button>

          </form>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;