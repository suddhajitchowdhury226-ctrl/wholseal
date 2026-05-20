import React from 'react';
import { Link } from 'react-router-dom';

const FixedButtons = () => {
  return (
    <div className="my-[8rem] fixed right-2 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col">
        <Link to={"/counseling"}>

        <button 
          className="bg-gray-800 text-white font-semibold text-xs tracking-wider px-4 py-16 transform rotate-90 origin-center whitespace-nowrap hover:bg-gray-700 transition-colors duration-200"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', padding: '10px', zoom: 0.9 }}
        >
          BOOK A HEALTH CONSULTANT
        </button>
        </Link>

        {/* <Link to="/contact" className="mt-6">
          <button 
            className="bg-green-600 text-white font-semibold text-xs tracking-wider px-4 py-12 transform rotate-90 origin-center whitespace-nowrap hover:bg-green-700 transition-colors duration-200"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', padding: '20px 8px', zoom: 0.9, letterSpacing: '1px' }}
          >
            FEEDBACK
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default FixedButtons;
