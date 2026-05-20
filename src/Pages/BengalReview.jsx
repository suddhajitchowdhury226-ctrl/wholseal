import React, { useState, useEffect, useMemo, useRef } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";

const reviews = [
  {
    name: "Holly Grimes",
    date: "Nov 11th, 2023",
    text: "Ray is the best and so are his products!",
    meta: "on Google",
  },
  {
    name: "piggy and sans yeet",
    date: "Nov 7th, 2023",
    text: "Ray is so kind and helpful! He knows just what I need. He actually takes time to understand what you are actually looking for!",
    meta: "on Google",
  },
  {
    name: "monique washington",
    date: "Sep 29th, 2023",
    text: "I lovvvvveeeeeee Ray and his healthy healing plan....... visited his store today September 29th 2023 , he took his time with my girlfriend and I he gave us samples,so much knowledge, I purchased the best Seamoss I ever taste and I been taking Seamoss for years, I STRONGLY RECOMMEND ESP WATER, that water healed my girlfriend sore throat on the spot I can go on and on about this place.... I'm from Philly but I will be back soon LOVE YOU RAY",
    meta: "on Google",
  },
  {
    name: "Rama Latin",
    date: "Sep 19th, 2023",
    text: "I LOVE going into Rays - Healthy Living. Its always time well spent, I am learning how to care for myself and my family. My health is wealth goes without saying, I am extremely blessed every time I go in the store. If you havent been to this store (Located in Prince Frederick) Run dont walk, you wont be disappointed. Trust me!",
    meta: "on Google",
  },
  {
    name: "Irene Blackson",
    date: "Aug 4th, 2023",
    text: "My name is Irene, and my favorite destination for health-focused products and advice in Prince Frederick is Ray's Healthy Living Store. A couple months ago, I broke my ankle after a slip in my apartment. My doctor ended up giving me a foot brace, and it was a struggle to move around the house. Out of desperation, I sought out Ray. He gave me various supplements that ended up speeding my recovery greatly, and in less than 3 weeks I was out and walking without my foot brace. I am so grateful for his knowledge and expertise. I highly recommend Ray's Healthy Living Store to anyone looking for natural health solutions.",
    meta: "on Google",
  },
  {
    name: "Tiffany Gross",
    date: "Jul 28th, 2023",
    text: "Ray is very knowledgeable and helpful. He takes the time to explain everything and answer all questions. I highly recommend his store!",
    meta: "on Google",
  },
  {
    name: "John Smith",
    date: "Jun 15th, 2023",
    text: "Great products that I greatly recommend. The level of customer service and knowledge is impeccable Im truly satisfied with all recommendations given. A satisfied customer for life much continued success and blessings.",
    meta: "on Google",
  },
  {
    name: "Deandre Boodhoo-Howard",
    date: "May 28th, 2022",
    text: "I highly recommend going to Rays Healthy Living. I had a chest injury that I was told would take 3 or more months to heal. Ray had giving me the remedy for a fast recovery. I astounded by the results. I wouldnt recommend going anywhere for vitamins and etc besides this place.",
    meta: "on Google",
  },
  {
    name: "Miranda Paige Beauty",
    date: "May 14th, 2022",
    text: "So helpful, educational & friendly. Amazing service. I am Sad I had not visited this place sooner. Thank you!",
    meta: "on Google",
  },
  {
    name: "Barbara Butler",
    date: "May 11th, 2022",
    text: "Mr. Ray's knowledge, friendliness, wisdom and expertise is impeccable. He takes the time to explain thoroughly all the benefits of each product and has the books also. The store is well stocked with a variety of products to promote healthy living. I've purchased the sea moss, dandelion root tea, maximum cardio and the salmon fish powder 100% natural collagen and i'm feeling awesome! Thanks, Mr. Ray!",
    meta: "on Google",
  },
  {
    name: "Mikki Ward",
    date: "Apr 9th, 2022",
    text: "If your health matters to you, Rays Healthy Living is where you want go! I visited several weeks ago wanting to find a weight loss regime, what I found was so much more. Mr. Ray explained how the body gain and retains weight. I never thought of the trace amounts of sugars and sodium in the so called healthy foods we purchase. Mr Ray promotes cooking foods and taking vitamins and minerals the body needs to sustain health. I purchased an array of items for my journey including, Rays Oregano oil and dandelion tea. By following a daily regime change has began. I started my journey weighing 245. Today, 2 weeks later Im at 242. Im so proud of the 3 pounds, for I know over time these extra pounds will not return! Consistency is the key for success! Thank you Mr. Ray! Ill be back to re-up in a few weeks",
    meta: "on Google",
  },
  {
    name: "Katrina Rice",
    date: "Feb 10th, 2022",
    text: "It amazes me how knowledgeable Ray is. He really take the time to explain every detail to you. His products are amazing. He gave several samples. Prices are VERY reasonable. Sea Moss is great. I will be handing over my paycheck next visit lol. Thanks Ray!",
    meta: "on Google",
  },
  {
    name: "Anthony Feliz Moya",
    date: "Jan 12th, 2022",
    text: "Sea moss gel looks and taste great!!! Ray was very friendly and shared a lot of information with me on health. Will definitely be back to buy more.",
    meta: "on Google",
  },
  {
    name: "Michelle Taylor",
    date: "Oct 6th, 2021",
    text: "Great energy, friendly service, very knowledgeable of products and their function. High quality products. I REALLY love this store!",
    meta: "on Google",
  },
  {
    name: "Tiauna Quarles",
    date: "Feb 3rd, 2021",
    text: "I recommend Rays to anybody looking to change your lifestyle for the better, whether that be detoxing, boosting your immune system etc. Mr. Ray really cares about his customers, and thats rare! Go shop with him, you wont be disappointed.",
    meta: "on Google",
  },
  {
    name: "Erin Knowles",
    date: "Nov 14th, 2020",
    text: "Great store with knowledgeable friendly staff!!",
    meta: "on Google",
  },
  {
    name: "shawn pratt",
    date: "Sep 13th, 2020",
    text: "It's awesome he knows the stuff you need some stuff you need vitamins you need CBD oils and creams the help of back pain he has a very good store",
    meta: "on Google",
  },
  {
    name: "Stacey Savoy",
    date: "Jun 17th, 2020",
    text: "I went in with a lot of questions, he answered every question. Very friendly, even give samples to test before you buy. Will be returning.",
    meta: "on Google",
  },
  {
    name: "Albert Nelson",
    date: "Apr 5th, 2020",
    text: "Ray knows his stuff.. very helpful and knowledgeable. He stands by his products so much that he had given me a free sample. I will definatly be returning.",
    meta: "on Google",
  },
  {
    name: "david fegan",
    date: "Feb 29th, 2020",
    text: "Great place, highly recommend.",
    meta: "on Google",
  },
  {
    name: "Caleb Fry",
    date: "Dec 15th, 2019",
    text: "This man went far out of his way to help me detoxify my body and gave me new insights on how to do it effectively. He understands functional medicine enough to explain it simply and provides what you need in order to heal yourself. He deserves your business",
    meta: "on Google",
  },
  {
    name: "Lisa Hogue",
    date: "May 11th, 2019",
    text: "Great place, wide selection and helpful friendly staff!",
    meta: "on Google",
  },
];

export default function BengalReview() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const listRef = useRef(null);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(reviews.length / pageSize)),
    []
  );

  const pagedReviews = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return reviews.slice(start, start + pageSize);
  }, [currentPage]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Chamber of Commerce - All Reviews
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-slate-800 text-white rounded-xl text-sm hover:bg-slate-700 transition"
          >
            Back
          </button>
        </div>

        <div ref={listRef} className="space-y-6">
          {pagedReviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold text-white">
                  {r.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">
                        {r.name}{" "}
                        <span className="text-sm text-gray-500">{r.meta}</span>
                      </div>
                      <div className="text-xs text-gray-500">{r.date}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {r.text && (
                    <p className="text-gray-700 mt-3 whitespace-pre-line">
                      {r.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-slate-800 text-white rounded-md disabled:opacity-50 hover:bg-slate-700 transition"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-md transition ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-slate-800 text-white rounded-md disabled:opacity-50 hover:bg-slate-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
