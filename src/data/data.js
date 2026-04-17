export const data = {
    
  navbar: [
    {id: 1, text: 'Обо мне', link: '#about'},
    { id: 2, text: "Тренировки", link: "#pricing" },
    { id: 3, text: "Отзывы", link: "#reviews" },
  ],

  hero: {
    title: 'Наслаждайся. Побеждай. Беги!', // 
    subtitle: 'Индивидуальные программы тренировок для подготовки к марафону и улучшения техники бега.',
    buttontext: 'Записаться на тренировку',
  },

  about: {
    title: 'Твой тренер',
    description: "Я занимаюсь бегом уже 10 лет. Пробежал 5 марафонов (Berlin, Boston, Moscow). Моя цель — научить тебя бегать без травм и с удовольствием.",
    stats: [
      { id: 1, value: "10+", label: "Лет опыта" },
      { id: 2, value: "500+", label: "Учеников" },
      { id: 3, value: "42км", label: "Личный рекорд" },
    ]
  },

  pricing: [
    {
      id: 1,
      title: "Старт",
      price: "5 000 ₽",
      features: ["План на неделю", "Чат поддержки", "Разбор техники по видео"],
      isPopular: false,
    },
    {
      id: 2,
      title: "Марафон",
      price: "15 000 ₽",
      features: ["План на месяц", "Ежедневный контроль", "План питания", "Личные встречи"],
      isPopular: true,
    },
  ],

  reviews: [
    {
      id: 1,
      name: "Алексей Смирнов",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop",
      text: "Я никогда не думал, что смогу пробежать марафон. Тренер составил план, который реально работает. Без травм и с удовольствием!",
    },
    {
      id: 2,
      name: "Мария Иванова",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
      text: "Скинула 10 минут с личного рекорда на полумарафоне всего за 2 месяца тренировок. Очень удобный формат связи.",
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
      text: "Понравился индивидуальный подход. Это не просто программа из интернета, а постоянная корректировка нагрузки.",
    },
  ],

  contact: {
    title: "Готов начать",
    subtitle: "Заполни форму, и я свяжусь с тобой в течение 24 часов для обсуждения плана тренировок.",
    email: "amusamus1982@gmail.com",
    phone: "+7 (916) 000-00-00",
    socials: [
      { id: 1, name: "Telegram", link: "#" }, 
      { id: 2, name: "VK", link: "#" }, 
      { id: 3, name: "WhatsApp", link: "https://chat.whatsapp.com/Ds9okpyXL7CKuaGCCyEWlk" }, 
    ]
  },

}