import { data } from "../data/data";


const Reviews = () => {

   return (

    <section id="reviews" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Отзывы учеников
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.reviews.map((review) => (
            <div key={review.id} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 relative">
              <div className="text-orange-500 text-6xl absolute top-4 right-6 opacity-20 font-serif"></div>

              <p className="text-slate-300 mb-6 italic relative z-10">
                {review.text}
              </p>

              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-xs text-slate-500">Любитель бега</span>
                </div> 
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Reviews;