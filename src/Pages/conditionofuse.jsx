import React from 'react';
import backgroundImage from '../assets/images/bg/conditionofuse.jpeg';
import { Layout } from '../components/common/Layout/Layout';
const Conditionofuse = () => {
  // Using a gradient background similar to the original image
  // const gradientBackground = `linear-gradient(135deg, #ff9a56 0%, #ffad56 25%, #ffd56b 50%, #b8e24f 75%, #7cb518 100%)`;

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Same Design */}
      <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  {/* Decorative circles */}
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full"></div>
                </div>
                <div className="relative z-10 h-full flex items-center px-8">
                  <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-white mb-2">Condition of Use</h1>
                    <p className="text-xl text-white/90">Terms and conditions for Ray's Healthy Living</p>
                  </div>
                </div>
              </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-12 max-w-6xl">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          RAY'S HEALTHY LIVING TERMS & CONDITIONS
        </h1>

        {/* Site User Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            SITE USER AND VISITOR AGREEMENT
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Please read this agreement completely and carefully before accessing and using the features on RaysHealthyLiving.com (referred to as the "site" from here on) including, but not limited to, ordering products or services from us.
            </p>
            <p>
              By accessing the site or ordering any products or services, you, the site visitor, agree to be bound by the terms and conditions set forth herein. If you are not willing to this binding agreement of these terms and conditions, we advise refraining from accessing the site or ordering our products and services. Ray's Healthy Living reserves the right to modify this agreement at any point without prior notice. Any such modifications to said agreement shall be effective immediately upon posting on the site.
            </p>
            <p>
              You agree to be responsible for reviewing the agreement periodically to remain aware of any modifications of this agreement. Continued access or use of the site shall be construed as complete and conclusive acceptance of the agreement at its present form and awareness of any modifications applied.
            </p>
          </div>
        </section>

        {/* Inaccuracy Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            INACCURACY DISCLAIMER
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ray's Healthy Living may, from time to time, alter or modify any information on our website that contain inaccuracies, omissions, or typographical errors related to the product availability, descriptions, and pricing. These alterations/modifications are conducted in order to make necessary corrections or updates. RHL reserves the right to conduct these alterations/modifications at any time and without prior notice (including after a customer has submitted an order).
          </p>
        </section>

        {/* Trademarks and Copyrights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            TRADEMARKS AND COPYRIGHTS
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ray's Healthy Living, RHL, and RaysHealthyLiving.com are owned and operated by Ray's Healthy Living, LLC. All products bearing the Ray's Healthy Living brand logo are proprietary copyright and trademarks of Ray's Healthy Living, LLC. The copyright and trademarks in all material provided on the site is held by Ray's Healthy Living or by the original source (as in the case of products not directly manufactured by our company). Any unauthorized use of any material contained on the site may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes, as dictated by the United States of America or by applicable international laws.
          </p>
        </section>

        {/* Use and Reproduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            USE AND REPRODUCTION OF SITE CONTENTS
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Except as stated herein, none of the material found on the site may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the prior and express written permission of Ray's Healthy Living or the copyright owner, as the case may be. On that note, permission is granted to display, copy, distribute, and download the content/materials on the site for personal, non-commercial use only provided you do not modify the materials and that you retain all copyright and other proprietary notices). This permission terminates automatically and immediately if a breach occurs with any of these terms or conditions. Upon termination, you must immediately destroy any downloaded and printed materials. You also may not, without RHL's express permission, "clone" or "mirror" any content and material contained on this site on any other server. For acquiring permission to use site contents or materials from RHL, please see our Contact Us section.
            </p>
            <p>
              Should permission be granted, you agree to grant to RHL a non-exclusive, worldwide, royalty-free, perpetual license, with the right to sub-license, to reproduce, distribute, transmit, create derivative works of, publicly share and display any materials and other information (including, without limitation, ideas contained therein for new or improved products or services) you submit to public areas of the site or in other sites online (such as Product Reviews and Forum) by all means and in any media now known or hereafter developed. You also agree that you shall have no recourse against RHL for any alleged or actual infringement or misappropriation of any proprietary right in your communication to us or your use of any RHL content/materials.
            </p>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            LEGAL DISCLAIMER AND RESOLUTION AGREEMENT
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You agree to indemnify, defend, and hold harmless Ray's Healthy Living, its officers, directors, employees, agents, licensors and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of this agreement or any activity related to your account (including fraud, negligence, or wrongful conduct) by you or any other person accessing the site using your account.
            </p>
            <p>
              You agree that Ray's Healthy Living will not be liable for lost profits, loss of business, or other consequential, indirect, punitive, or special damages (including instances of prior knowledge of the possibility of such damage), or for any claim of a third party other than what is expressly provided.
            </p>
            <p>
              These terms and conditions contain the complete agreement between Ray's Healthy Living and you. You acknowledge that there are no representations or warranties by (RHL), with respect to this agreement other than those contained herein or elsewhere unless in express written form, signed by a duly authorized representative of RHL.
            </p>
          </div>
        </section>

        {/* Health Disclaimer */}
        <section className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Use of Ray's Healthy Living (RHL) products and results may vary with each individual. Vitamins, herbs, supplements, minerals, home-grown formulas, and alternative health products on this site have not been assessed by the U.S. Food and Drug Administration (FDA). Ray's Healthy Living products are sold in the U.S. and internationally as natural dietary and health supplements and are not proposed to analyze, diagnose, prevent, or treat any medical disease. Any content on the website is for informational purposes only and is not expected, substitute for professional advice from licensed physicians, herbalist, or medical care specialist. It is not recommended by Ray's Healthy Living that information on this site be used in lieu of medical advice by a health care professional for consultation. Ray's Healthy Living recommends consulting your physician before initiating a dietary program, particularly if there are concerns about existing health concerns or are currently taking prescribed medication. Unless specifically stated in the product label of any herbal supplement, natural remedy, alternative health, or homeopathic merchandise sold by Ray's Healthy Living, products offered are not intended for children under 18 years of age, pregnant women, or women currently nursing a baby. Product ingredients and dosages may change – check the product label for current information. See our Site Map for full site list of products. Prices and promotions are subject to change without prior notice. Ray's Healthy Living is not responsible for typographical or other inadvertent errors on the site.
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-600 italic border-t pt-6">
          "Ray's Healthy Living, RHL, and RaysHealthyLiving.com are owned and operated by Ray's Healthy Living, LLC. All products bearing the Ray's Healthy Living brand logo are trademarks of Ray's Healthy Living, LLC."
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Conditionofuse;