import React from 'react';
import vidImage from '../../../assets/images/bg/vid-img.png';
import guarantyImage from '../../../assets/images/bg/guaranty.jpg';
import madeUsaImage from '../../../assets/images/bg/made-usa.webp';

const Feature = () => {
  return (
    <div 
      className="relative overflow-visible pt-16 pb-2 mt-36 mb-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#4E6E28' }}
    >
      <div className="w-full max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-[450px] ml-16">
            <h2 className="text-5xl font-black mb-4 whitespace-nowrap ml-8" style={{ letterSpacing: '0.5px' }}>
              100% COMPLIANT
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <div className="flex flex-col gap-0 text-[17px] font-medium">
              {[
                'NSF GMP Certified',
                'FDA OTC registered facility',
                'KOF-K kosher certified',
                'Certified Organic',
                'Non-GMO',
                'e Gluten-Free',
                'Allergen Testing',
                'Pesticide Testing'
              ].map((item, index) => (
                <div key={index} className="flex items-center py-1">
                  <svg 
                    className="w-6 h-6 mr-4 flex-shrink-0 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ strokeWidth: '2' }}
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                      strokeWidth="2"
                      stroke="white"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center - Trademark Seals (Hidden on tablet) */}
          <div className="hidden md:hidden lg:flex gap-5 items-center flex-shrink-0 -ml-40 mr-10">
            <div className="w-32 h-32 rounded-full bg-white p-0 shadow-md overflow-hidden">
              <img 
                src={guarantyImage} 
                alt="Guaranteed Quality" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-32 h-32 rounded-full bg-white p-0 shadow-md overflow-hidden">
              <img 
                src={madeUsaImage} 
                alt="Made in USA" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="flex-none relative -mt-40 mb-16">
            <div 
              className="w-[650px] h-[654px] overflow-hidden relative shadow-2xl"
              style={{ 
                border: '3px solid rgba(252, 211, 77, 0.6)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              <img 
                src={vidImage}
                alt="Product Showcase" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden items-center justify-between gap-6 py-4">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-md">
            <h2 className="text-3xl font-black mb-3" style={{ letterSpacing: '0.5px' }}>
              100% COMPLIANT
            </h2>
            <div className="w-16 h-1 bg-white mb-4"></div>
            <div className="flex flex-col gap-0 text-sm font-medium">
              {[
                'NSF GMP Certified',
                'FDA OTC registered facility',
                'KOF-K kosher certified',
                'Certified Organic',
                'Non-GMO',
                'e Gluten-Free',
                'Allergen Testing',
                'Pesticide Testing'
              ].map((item, index) => (
                <div key={index} className="flex items-center py-0.5">
                  <svg 
                    className="w-4 h-4 mr-3 flex-shrink-0 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image Only */}
          <div className="flex-none relative w-[300px] h-[320px]">
            <div 
              className="w-full h-full overflow-hidden relative shadow-xl"
              style={{ 
                border: '2px solid rgba(252, 211, 77, 0.6)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)'
              }}
            >
              <img 
                src={vidImage}
                alt="Product Showcase" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center text-center gap-6 py-6">
          {/* Content */}
          <div className="text-white max-w-xs">
            <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ letterSpacing: '0.3px' }}>
              100% COMPLIANT
            </h2>
            <div className="w-16 h-0.5 bg-white mb-5 mx-auto"></div>
            <div className="flex flex-col gap-1 text-sm font-medium">
              {[
                'NSF GMP Certified',
                'FDA OTC registered facility',
                'KOF-K kosher certified',
                'Certified Organic',
                'Non-GMO',
                'e Gluten-Free',
                'Allergen Testing',
                'Pesticide Testing'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center py-0.5">
                  <svg 
                    className="w-4 h-4 mr-2 flex-shrink-0 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seals (Visible only on mobile) */}
          <div className="flex gap-3 items-center justify-center flex-wrap">
            <div className="w-16 h-16 rounded-full bg-white p-0 shadow-md overflow-hidden">
              <img 
                src={guarantyImage} 
                alt="Guaranteed Quality" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-16 h-16 rounded-full bg-white p-0 shadow-md overflow-hidden">
              <img 
                src={madeUsaImage} 
                alt="Made in USA" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Product Image */}
          <div className="relative w-full max-w-sm">
            <div 
              className="w-full aspect-square overflow-hidden relative shadow-lg mx-auto"
              style={{ 
                border: '2px solid rgba(252, 211, 77, 0.6)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <img 
                src={vidImage}
                alt="Product Showcase" 
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
