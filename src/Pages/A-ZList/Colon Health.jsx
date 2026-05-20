import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const ColonHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Colon Health</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Colon Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Bowel problems, often associated with an unhealthy colon, affect more than 50 million people in the United States alone.</li>
                            <li>• More than 100,000 people have to go through a colostomy surgery every year in the US, because of issues related to colon health</li>
                            <li>• In a healthy body, food takes less than 24 hours to transit through the body, but unhealthy lifestyle has increased this time period to as much as 70 hours</li>
                            <li>• A survey conducted by the National Institute of Health found out that 4.5 million people in the US suffer from constipation many times.</li>
                            <li>• According to experts, a toxic colon not only causes general discomfort, but also the main contributing factor behind 80% of all diseases.</li>
                            <li>• A person having a toxic or unhealthy colon carries about 40 pounds (or even more) of accumulated waste in colon.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Colon, or large intestine, is such an important part of human digestive system that it is called the ‘sewer system’ of human body.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Food enters the colon, after passing through all other organs of the digestive system, for final processing after which it is eliminated from the body. The glands and sensitive nerves in the lining of colon help in assimilation of essential nutrients from food, including the water, several enzymes and vitamins in particular.
        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">

                        The colon or large intestine is about five feet long and can be divided into six sections; the cecum, ascending colon, transverse colon, descending colon, sigmoid and rectum.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Multiple factors can contribute to an unhealthy colon. These include sedentary life style /lack of physical activity, poor diet, drug intake, stress etc. Problems in the functioning of colon means the waste is not properly eliminated from the body and starts accumulating in the colon pockets and along its walls.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Although not generally taken seriously, unhealthy colon can cause many health problems. When toxins are not removed from the body, they may re-enter the bloodstream causing self-poisoning or auto-intoxication, meaning the body poisons itself.
                        
                        </p>

                        
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Following are some signs and symptoms that hint towards an unhealthy colon that needs to be cleaned:
                        </p>
                        <div className="grid grid-cols-1  gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Constipation</li>
                                <li>• Fatigue</li>
                                <li>• Bad breath</li>
                                <li>• Bloating</li>
                                <li>• Bad body odor</li>
                                <li>• Different types of pains, such as headache, sciatic pain and back pain, caused by the Candida fungus that grows in the accumulated waste.</li>
                                <li>• Pimples and bumps on skin caused by bacterial and fungal growth in the waste that ultimately poison the cells and skin pores with toxins.</li>
                            
                            </ul>
                            
                            {/*<ul className="text-gray-700 space-y-1">
                                <li>• Hot temper</li>
                                <li>• Poor planning</li>
                                <li>• Difficulty following through</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Difficulty coping with stress</li>
                            </ul>*/}

                        </div>


                       
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Colon Health, it is not enough to keep you fit and healthy. Supplements are essential for managing Colon Health and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Colon Health. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Colon Health:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Cat’s claw or ‘uncaria tomemtosa’ has long been used to treat various health problems, such as diabetes, tumors, arthritis, inflammation of the urinary tract, gastric ulcers, and many problems associated with the digestive system. Cat’s claw works great for regulating the lower bowel system, provides relief from stomach ulcers and hemorrhoids and also helps reducing inflammation in stomach.
                                  
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Colon Clean</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    As stated above a toxic or unhealthy colon is related to about 80% of the diseases humans suffer from. As evident form the name itself, Colon Clean helps in proper elimination of waste from the body and cleanses it from all toxics, bacteria and impurities that could cause many serious health issues.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Triphala</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    One of the most popular herbal formulas used in Ayurvedic medicines since ages, Triphala improves digestion, enhances the functioning of liver and helps regulating bowel movements. Additionally, it is useful for managing high blood pressure, promoting cardiovascular health, and for reducing serum cholesterol. Triphala is also known for its anti-inflammatory and anti-viral properties.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    All Cell Detox</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    All Cell Detox capsules help stimulating and maintaining healthy functioning of digestive system, by promoting the absorption of essential nutrients. They also help in detoxification of various digestive organs, such as kidneys, liver and colon, naturally.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Para Cleanse</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Para Cleanse is a 10 days course for creating healthy intestinal system and for promoting the natural detoxification of body.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing Colon Health, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ColonHealth;