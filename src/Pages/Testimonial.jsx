import React from 'react';
import backgroundImage from '../assets/images/bg/returnpolicy.jpeg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      content: "I took a 30 day vacation from June 30 to July 30. I drove over 3400 miles. The last 3 days of the trip, I was anxious to get home and drove too many hours without a rest stop.\n\nI believe it caused a blood clot in my right lung. I did not go to a doctor so I'm only guessing. All I know is I felt puny for the first week I was home.\n\nAt 2:30 am on Sunday, August 5th, I woke up with severe pain in my right lung. If it had been on my left side I would have thought it was a heart attack.\n\nI looked up my symptoms on the 'Net and determined it was a blood clot. So I started drinking about 6 ozs of Maximum Cardio every 2 hours. On the 4th glass the pain went away completely. My blood pressure was 191 over 90 before I started with Maximum Cardio. After the 4th glass, my blood pressure was 128 over 75.\n\nI believe Maximum Cardio probably saved my life. I know for sure it save me a trip to the ER and possible hospitalization.\n\nI turned 79 this year (2018). I take no prescription drugs, no over the counter drugs. I have none of the health problems of men half my age. I'm a firm believer in Maximum Cardio.",
      author: "Elisa Brahom"
    },
    {
      id: 2,
      content: "Ray's essential oils turned out to be awesome. It has an extraordinary effect on boosting brain functions along with dealing with pains reliefs and aches. This essential oils are now essential in my life.",
      author: "Elisa Brahom"
    },
    {
      id: 3,
      content: "Fount de life is just amazing. Thanks to Rayman's healthy Living. You guys rock!",
      author: "David Kingson"
    },
    {
      id: 4,
      content: "I am hugely benefitted by the effects of Maximum cardio 4U. What a useful product! Helps me incredibly in boosting my immunity and keeping cardiac actions smooth. Oh yes! Lovely flavours too.",
      author: "Henry E. Welling"
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen">
        <div
                            className="relative h-64 bg-cover bg-center"
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                            
                            <div className="relative z-10 h-full flex items-center px-8">
                                <div className="container mx-auto">
                                    <h1 className="text-6xl font-bold text-white mb-2">Testimonials</h1>
                                    {/* <p className="text-xl text-white/90">Shipping Return Policy for Ray's Healthy Living</p> */}
                                </div>
                            </div>
                        </div>
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 text-center relative break-inside-avoid mb-8 inline-block w-full"
            >
              {/* Large quotation marks background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <span className="text-9xl font-serif text-gray-400">"</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-800 text-base leading-relaxed mb-8 whitespace-pre-line">
                  {testimonial.content}
                </p>
                
                <h4 className="text-gray-900 font-semibold text-lg">
                  {testimonial.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </Layout>
  );
}