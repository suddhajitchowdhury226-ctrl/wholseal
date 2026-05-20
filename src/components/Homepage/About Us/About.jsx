import React, { useEffect, useRef } from 'react';
import imagelogo from '../../../assets/images/bg/imgg.jpg'

export const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add('animate-fadeInLeft');
            } else if (entry.target === rightRef.current) {
              entry.target.classList.add('animate-fadeInRight');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white mb-20 pt-16 pb-10">
      <div className="flex justify-center">
      <div className="w-[85%] flex flex-col lg:flex-row justify-between items-center mt-12rem mb-12rem">
          <div
            ref={leftRef}
            className="fade-element w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-[650px] max-w-full">
              <img
                src={imagelogo}
                alt="Natural health supplements and products"
                loading="lazy"
                className="w-140 aspect-[782/599] object-cover rounded"
              />
            </div>
          </div>

          <div
            ref={rightRef}
            className="fade-element w-full lg:w-1/2 flex justify-center"
          >
            <div className="text-left max-w-[600px]">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  About Our Firm
                </h2>
                <div className="h-[3px] w-[50px] bg-gradient-to-r from-orange-500 to-orange-600 mt-2" />
              </div>

              <div className="text-gray-600 text-base leading-relaxed space-y-5">
                <p>
                  
We do business through a network of traditional brick-and-mortar stores and our own brand website online. Ray’s Healthy Living offers products with enhanced natural vitamins and minerals through herbal supplements that have been produced through the most thorough and effective quality standards in the industry. We take pride in doing business while taking great care of our customers’ satisfaction and safety. Ray’s Healthy Living believes customers are part of the family, and we take care of our family. You can see why this is a key element in our business by reading our founder and CEO’s personal story
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://rayshealthyliving.com/about-us/"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base uppercase tracking-wide px-6 py-3 rounded shadow transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
