import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const SkinHealth = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div
                    className="relative h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="relative z-10 h-full flex items-center px-8">
                        <div className="container mx-auto">
                            <h1 className="text-6xl font-bold text-white mb-2">Skin Health</h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While maintaining a healthy diet and lifestyle supports skin health, supplements can play a key role in managing skin conditions and enhancing overall appearance. However, supplements should not replace medical treatments for skin conditions. Natural products are not always safe and may interact with your body or medications, potentially causing adverse reactions. Always consult your doctor before starting any supplements to manage your skin health.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with skin health concerns:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Aloe Vera Plus */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Aloe Vera is popularly known for its benefits to skin. This plant contains Auxin and Gibberellins that contain anti-inflammatory and wound healing properties. The Aloe Vera Plus can treat an array of chronic skin conditions including psoriasis, acne, eczema, freckles, and dark spots. It is also used to decrease the intensity of pigmentation on the face. The antioxidants in Aloe Vera Plus slow down and prevent the effects of aging on the skin.
                                    </p>
                                </div>

                                {/* Bacopa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dandruff, itching, and hair loss can be treated with Bacopa as it strengthens the hair follicles and provides a healthier skin and scalp. The antioxidants present in it dispel the toxins present in the epithelium layer and allow regeneration of cells, resulting in cleaner and fairer skin.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Red Raspberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red Raspberry is packed with beneficial minerals and vitamins such as iron, magnesium, phosphorus, calcium, B vitamins, vitamin C, and potassium, making it a healthy agent for hair, skin, and nails. It is especially effective and soothing for the treatment of sunburn, eczema, and rashes.
                                    </p>
                                </div>

                                {/* Olive Leaf */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Olive Leaf</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Olive is among one of the most effective natural ingredients for healthy skin. The leaves from the olive tree also come with an array of skin benefits. Olive leaf is rich with antioxidants, antibacterial, and anti-inflammatory properties and is good for hair, giving a younger and healthier-looking skin due to its anti-aging properties. It also reduces the risk of skin cancer.
                                    </p>
                                </div>
                            </div>

                            {/* Peppermint Spirits */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Peppermint Spirits (A/F)</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Peppermint is antiseptic and antimicrobial, promoting skin health by cooling it down and relieving the itchy sensation. Peppermint also balances out the oil secretion in the skin and prevents acne. It can be applied topically in the affected areas or prepared as a tea for consumption.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing skin health, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default SkinHealth;