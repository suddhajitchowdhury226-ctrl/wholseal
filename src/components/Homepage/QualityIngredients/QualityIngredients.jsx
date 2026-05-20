import React from 'react';

const QualityIngredients = () => {
  return (
    <div 
      className="relative overflow-hidden py-20 mt-16 mb-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://rayshealthyliving.com/wp-content/uploads/2022/02/section-bg3.jpg')"
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Content - Paragraph + Button on desktop */}
        <div className="flex-1 text-white max-w-xl order-1 md:order-none">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            Quality Ingredients
          </h2>

          <div className="w-20 h-1 bg-white mb-6"></div>

          <p className="text-base md:text-lg font-normal leading-relaxed mb-8">
            Our herbs are naturally GMO free and have never been fumigated or irradiated. 
            We purchase whole plants whenever possible and grind them in-house. We use the 
            most effective extraction techniques and test 100% of our ingredients and 
            products. Our clinical herbalist develops intelligent formulas with maximum 
            efficacy, potency, and stability.
          </p>

          {/* Button on desktop */}
          <div className="hidden md:block">
            <button
              className="bg-green-600 hover:bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Shop Products
            </button>
          </div>
        </div>

        {/* Image block */}
        <div className="flex justify-center order-2 md:order-none">
          <img
            src="https://rayshealthyliving.com/wp-content/uploads/2021/08/pic2.png"
            alt="Quality ingredients"
            className="w-full max-w-md md:max-w-[500px] h-auto"
          />
        </div>

        {/* Mobile-only Button - at the end */}
        <div className="mt-6 md:hidden order-3 w-full flex justify-center">
          <button
            className="bg-green-600 hover:bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Shop Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityIngredients;
