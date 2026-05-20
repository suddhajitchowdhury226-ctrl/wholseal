import React, { useState, useEffect } from 'react';
import { Star, Check, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChamberReview = () => {
  const navigate = useNavigate();
  const [showChamberReviews, setShowChamberReviews] = useState(false);
  const [currentChamberReviewIndex, setCurrentChamberReviewIndex] = useState(0);

  const chamberReviews = [
    {
      name: "Holly Grimes",
      text: "Ray is the best and so are his products!",
      location: "Google",
      rating: 5,
      date: "Nov 11th, 2023",
      avatar: "HG",
    },
    {
      name: "piggy and sans yeet",
      text: "Ray is so kind and helpful! He knows just what I need. He actually takes time to understand what you are actually looking for!",
      location: "Google",
      rating: 5,
      date: "Nov 7th, 2023",
      avatar: "PS",
    },
    {
      name: "monique washington",
      text: "I lovvvvveeeeeee Ray and his healthy healing plan....... visited his store today September 29th 2023 , he took his time with my girlfriend and I he gave us samples,so much knowledge, I purchased the best Seamoss I ever taste and I been taking Seamoss for years, I STRONGLY RECOMMEND ESP WATER, that water healed my girlfriend sore throat on the spot I can go on and on about this place.... I'm from Philly but I will be back soon LOVE YOU RAY",
      location: "Google",
      rating: 5,
      date: "Sep 29th, 2023",
      avatar: "MW",
    },
    {
      name: "Rama Latin",
      text: "I LOVE going into Rays - Healthy Living. Its always time well spent, I am learning how to care for myself and my family. My health is wealth goes without saying, I am extremely blessed every time I go in the store. If you havent been to this store (Located in Prince Frederick) Run dont walk, you wont be disappointed. Trust me!",
      location: "Google",
      rating: 5,
      date: "Sep 19th, 2023",
      avatar: "RL",
    },
    {
      name: "Irene Blackson",
      text: "My name is Irene, and my favorite destination for health-focused products and advice in Prince Frederick is Ray's Healthy Living Store. A couple months ago, I broke my ankle after a slip in my apartment. My doctor ended up giving me a foot brace, and it was a struggle to move around the house. Out of desperation, I sought out Ray. He gave me various supplements that ended up speeding my recovery greatly, and in less than 3 weeks I was out and walking without my foot brace...",
      location: "Google",
      rating: 5,
      date: "Aug 4th, 2023",
      avatar: "IB",
    },
  ];

  useEffect(() => {
    if (showChamberReviews) {
      const interval = setInterval(() => {
        setCurrentChamberReviewIndex(
          (prev) => (prev + 1) % chamberReviews.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showChamberReviews, chamberReviews.length]);

  const handleViewChamberReviews = () => {
    setShowChamberReviews(true);
  };

  return (
    <div className="px-4 py-8">
      <div className="bg-slate-900 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-2xl max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-blue-600/10 px-6 py-3 rounded-full border border-blue-400/30 mb-6">
            <Star className="w-5 h-5 text-blue-400 fill-blue-400" />
            <span className="text-blue-100 font-semibold">
              Chamber of Commerce
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Chamber of Commerce Highlights
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Local Chamber recognition and top customer feedback — first
            five 5-star reviews.
          </p>

          <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
              <span className="text-white font-semibold text-sm">
                Chamber Reviews
              </span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">
              5.0
            </span>
            <div className="h-6 w-px bg-slate-700 mx-2"></div>
            <span className="text-slate-300 text-base">
              5 Local 5-star Reviews
            </span>
          </div>

          <button
            onClick={handleViewChamberReviews}
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 text-lg shadow-xl shadow-blue-900/20 transform hover:scale-105"
          >
            <Star className="w-5 h-5" />
            View Chamber Reviews
          </button>
        </div>
      </div>

      {showChamberReviews && (
        <div className="mt-8 animate-fade-in max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center text-white mb-10 flex items-center justify-center gap-3">
              <Check className="text-green-400" />
              Chamber of Commerce - Top 5 Reviews
            </h3>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentChamberReviewIndex * 100
                    }%)`,
                  }}
                >
                  {chamberReviews.map((review, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl flex flex-col min-h-[300px]">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="ml-2 text-sm text-slate-400">
                            {review.date}
                          </span>
                        </div>

                        <Quote className="w-8 h-8 text-blue-500/50 mb-4" />
                        <div className="flex-1 text-slate-200 text-lg mb-6 leading-relaxed italic">
                          "{review.text}"
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {review.avatar}
                            </div>
                            <div>
                              <div className="font-bold text-white">
                                {review.name}
                              </div>
                              <div className="text-blue-400 text-sm">
                                {review.location}
                              </div>
                            </div>
                          </div>

                          <div className="hidden sm:flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-green-400 font-medium text-xs uppercase tracking-wider">
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {chamberReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentChamberReviewIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentChamberReviewIndex
                        ? "bg-blue-500 w-8"
                        : "bg-slate-700 w-2 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => navigate('/bengal-reviews')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-200 text-base shadow-sm"
                >
                  View all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ChamberReview;
