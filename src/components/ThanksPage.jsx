import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-slate-800/50 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-orange-500" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Заявка принята!</h1>
        <p className="text-slate-400 text-lg mb-8">
          Спасибо за доверие. Я уже получил ваше сообщение и свяжусь с вами в ближайшее время.
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default Success;