
import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Gallstones = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Gallstones</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Gallstones</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           <li>• Approximately 20% of all American develop gall stones once in their lifetimes; however only 1% to 3% of them actually develop symptoms.</li>
                           <li>• Nearly 80% of all gallstones are cholesterol gallstones and the remaining 20% are calcium carbonate or calcium bilirubin.</li>
                           <li>• People who are at most risk of developing gallstones are women, overweight or elder people.</li>
                           <li>• Pregnancy, birth control or hormone therapy increases a woman’s chance of developing gallstones.</li>
                           <li>• Gallstones don’t show up in x-rays and 80% of them don’t even come with a warning sign.</li>
                           <li>• 90% of people suffering from gallstones receive a laparoscopic cholecystectomy to have gallbladder and stones removed.</li>
                        </ul>
                        
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Gallstones are tiny stones or lumps that develop in the bile duct or gallbladder when chemical substances harden. The hardening occurs to imbalance of chemicals such as cholesterol, calcium carbonate and calcium biliribinate. These solidify into small stones or one larger one. Upon blocking the bile duct, these can be extremely painful to pass. There are two kinds of gallstones –cholesterol stones and pigment stones. Cholesterol stones are yellowish-green in color. 80% of all gallstones are cholesterol stones developed due to excess cholesterol in the body. Pigment stones on the other hand, are much darker in color and smaller than cholesterol stones. These are of made of bilirubin –a fluid that one’s liver secretes.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Over time, due to unhealthy lifestyles and/or aging cholesterol and fat can collects in the arteries and takes the form of plaque. When the plaque buildup thickens, it narrows the blood passageways and makes it difficult for the blood to properly flow through the arteries. If left untreated, atherosclerosis can cause strokes, heart attacks, and even a heart failure.
Atherosclerosis can affect your heart, kidneys, legs, and all other parts of your body. There are several different types of Atherosclerosis. These include the:
                        </p> */}
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Pitta:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although there aren’t any known causes of gallstones, there are many who are at a higher risk of developing them. A person will be at risk if:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• He/she is obese or overweight</li>
                            <li>• He/she is consuming cholesterol-enriched diets frequently</li>
                            <li>• He/she has experienced rapid weight loss</li>
                            <li>• He/she has diabetes mellitus</li>
                        </ul>
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Vata:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Other risk factors involve:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Being a female</li>
                            <li>• Being pregnant</li>
                            <li>• Belonging to an American/Indian or Mexican-American background</li>
                            <li>• Having a history of gallstones in the family</li>
                            <li>• Being over 60</li>
                        </ul>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          There are a few indications to help one know for sure they have developed gallstones.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These symptoms include:
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Abrupt intensifying pain in the upper right of the abdomen</li>
                                <li>• Abrupt intensifying pain in the centre of the abdomen, just below the breastbone</li>
                                <li>• Pain in the right shoulder</li>
                                <li>• Pain in between the shoulder blades</li>
                                <li>• Back pain</li>
                                <li>• Vomiting or nausea</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In case the pain and discomfort persists, one must not waste time before seeking medical assistance as it could even result in one’s death in rare cases.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           The disease can be diagnosed with the help of series of tests.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage gallstones, it is not enough to keep you fit and healthy. Supplements are essential for managing fatigue and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for fatigue. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with gallstones:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Milk thistle protects one’s liver from degeneration. It has been pre-eminent in keeping the liver healthy against toxic damage cause by frequent alcohol consumption, environmental toxins, drugs and other poison. It does so by lowering the formation of unwanted enzymes and prevents harmful secretions into the bile that turn into gallstones. Thus, it reduces the chances of developing gallstones.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      The roots, leaves and stems of artichoke are used to make extracts which is a combination of the many chemicals present in the plant. The extract is then used to treat multiple digestive disorders like gallstones, where it stimulates the flow of bile and secretions from the liver. Artichoke also helps lower cholesterol, fight irritable bowel syndrome, reduce fluid retention and prevent liver damage and bladder infections.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cascara Sagrada</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It is one of the most effective over-the-counter therapy and herbal medication for digestive health conditions including constipation and gallstones. Cascara sagrada is normally considered safe; however, when consumed in higher does, it can have some adverse effects such as injuring the liver. Therefore, whenever using Cascara for pain relief during gallstones, one must always consult their physician first.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregon Grape Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Oregon grape Root is another great herbal remedy to treat multiple infections and digestive conditions such as gallstones. It functions s a tonic to stimulate the flow of secretions and bile in the intestines. It also has many antifungal, antibacterial and anti-inflammatory properties that further prevent gallstone formation.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Valerian</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Known as the most popular western herbal painkiller, Valerian works as a pain sedative and is widely used to treat a number of different health conditions including gallstones. It helps the muscles relax; lowering levels of pain when one suffers from abdominal cramps, menstrual cramps, kidney stones or gallstones.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing gallstones, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Gallstones;