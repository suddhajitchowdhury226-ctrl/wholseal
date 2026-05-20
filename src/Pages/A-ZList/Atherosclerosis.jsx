import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Anterosclerosis = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Atherosclerosis</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Atherosclerosis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• On an average, atherosclerosis deaths make up around 32% of annual deaths in the country.</li>
                            <li>• The disease has a 13.8% prevalence in adults aged 20 and above.</li>
                            <li>• Atherosclerosis causes coronary heart disease that had a mortality rate of 60% in the year 2010.</li>
                            <li>• Atherosclerosis often leads to heart failures that account for almost 30% of atherosclerosis deaths.</li>
                            <li>• Currently, there are over 15,800,000 people in America suffering from the coronary artery disease – a type of atherosclerosis.</li>
                            <li>• Out of these 15,800,000 Americans, around 8 million have suffered heart attacks.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Atherosclerosis can be described as the narrowing of arteries due to plaque buildup in them. The condition is also referred to as hardening of arteries or arteriosclerosis. Arteries are responsible for carrying vital nutrients and oxygen pumped by the heart to the rest of the body.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Over time, due to unhealthy lifestyles and/or aging cholesterol and fat can collects in the arteries and takes the form of plaque. When the plaque buildup thickens, it narrows the blood passageways and makes it difficult for the blood to properly flow through the arteries. If left untreated, atherosclerosis can cause strokes, heart attacks, and even a heart failure.
Atherosclerosis can affect your heart, kidneys, legs, and all other parts of your body. There are several different types of Atherosclerosis. These include the:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Atherosclerosis can be:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                           <li>Kidney disease</li>
                           <li>Coronary artery disease</li>
                           <li>Peripheral artery disease</li>
                           <li>Carotid artery disease</li>
                        </ul>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           There are several tell-tale signs of atherosclerosis. However, most of them do not become evident unless there is a blockage in one or more of your arteries. These symptoms may include:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                               <li> Angina or chest pain</li>
                               <li> Constant fatigue</li>
                               <li> Persisting confusion (may occur in case atherosclerosis is blocking blood supply to the brain)</li>
                               <li> Weak muscles due to limited circulation</li>
                               <li> Pain in your arm, leg, or anywhere else stemming from a blocked artery</li>
                               <li> Shortness of breath</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           A number of people do not comprehend the fact that atherosclerosis is a serious medical condition that can lead to possible strokes and heart attacks. In case you are constantly experiencing any of the above mentioned symptoms, visit a healthcare professional as soon as you can for proper medical care.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage atherosclerosis, it is not enough to keep you fit and healthy. Supplements are essential for managing atherosclerosis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for atherosclerosis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with atherosclerosis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Billberries possess a distinct anthocyanin profile. The extracts from this plant have been found extremely effective in treating atherosclerosis. A study revealed that bilberry extract can inhibit the buildup of plaque in the arteries by up to 15%. Hence, it reduces the chances of artery blockage and possible heart diseases that may occur otherwise.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Garlic</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Garlic has already been proven beneficial for regulating optimal heart health. A recent study revealed that extracts from aged garlic have the ability to reduce and control plaque accumulation in the arteries from reaching dangerous levels. Apart from this, garlic is also effective in preventing the buildup of soft plaque in the arteries
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The hawthorn plant has powerful antioxidant properties. Apart from strengthening the immune system, it was discovered that the hawthorn fruit contains essential nutrients, enzymes, and properties that can protect the body from the dangers of atherosclerosis. The extracts from it can significantly decrease cholesterol levels and atherosclerotic lesions in the body.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregano Supreme (w/ Garlic, Onion, Ginger & Cayenne)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Oregano is a powerful natural antioxidant that bolsters your immune system. That combined with the fat metabolism-improving properties of garlic, capsaicin from cayenne, and the combined anti-atherosclerosis properties of onion and garlic, make this supplement an effective natural supplement for preventing blockage in arteries.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Quercetin Relief</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Quercetin is a potent anti-atherosclerotic compound that has the ability to control the development of plaque in the arteries. Quercetin suppresses the endothelial oxidative damage induced by Oxidized low-density lipoprotein (oxLDL), consequently preventing arterial damage or blockage in any form.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    {/* <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Asthma, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div> */}
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Anterosclerosis;