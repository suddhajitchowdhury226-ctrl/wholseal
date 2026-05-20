import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Angina = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Angina</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Angina</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">

                            <li>• Every year around 370,000 Americans die of coronary heart disease. The number was 445,687 in 2005.</li>
                            <li>• There are almost 1,260,000 recurrent or new coronary heart attacks recorded every year.</li>
                            <li>• Out of these almost 37% people who suffer a coronary attack, do not live to see the next year.</li>
                            <li>• As of 2009, nearly 10 million Americans suffer from angina.</li>
                            <li>• The Hispanic Americans are more prone to experiencing angina and underlying heart conditions than other ethnicities in the country.</li>
                            <li>• On an average almost 500,000 people report suffering from angina pains in a year.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In the medicine world, angina is described as the discomfort or pain in the chest caused by the shortage of oxygen-rich blood supply to the heart muscle. Someone suffering from angina may feel like there is severe pressure on their chest. The accompanying discomfort from angina may also occur in a person’s arms, shoulders, neck, back, and/or jaw.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Contrary to popular belief, angina is not actually a disease. It is only a symptom that points towards an underlying heart condition. Usually angina indicates the possibility of a coronary heart disease.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are 4 different types of angina. These include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>• Stable angina (angina pectoris)</li>
                            <li>• Unstable angina</li>
                            <li>• Prinzmetal (variant) angina</li>
                            <li>• Microvascular angina</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Like we mentioned, there are 4 known types of angina and the tell-tale symptoms for each can vary given the seriousness of the condition and the underlying illness a person might be experiencing. However, the most common symptoms of angina include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Discomfort or chest pain</li>
                                <li>• Pain in the neck, arms, jaw, back, or shoulder accompanying that pain in chest</li>
                                <li>• Fatigue</li>
                                <li>• Nausea</li>
                                <li>• Dizziness</li>
                                <li>• Shortness of breath</li>
                                <li>• Sweating</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The discomfort and chest pain are the most common angina symptoms that are often described by patients as a building pressure, a squeezing sensation, pain, or fullness experienced in the middle of the chest. Some people even describe it as a heavy weight being placed on their chest, others think it may be happening because of indigestion.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage angina, it is not enough to keep you fit and healthy. Supplements are essential for managing angina and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for angina. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with angina:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberry is an ancient medicinal herb used since the Middle Ages to treat a variety of different health condition. The herb is specifically beneficial for treating blood and vascular disorders. Bilberry has shown efficacy in treating conditions like varicose veins, angina, and thrombosis.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Reishi Mushroom (Red)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used for centuries in Chinese medicine, reishi mushrooms make a potent cardiotonic. A study conducted to gauge the efficacy of this natural remedy revealed that reishi mushrooms brought marked reduction in the symptoms of people suffering from coronary heart disease for over a year. The reishi mushrooms successfully reduced angina pains suffered by these people by more than 80%.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Hawthorn is yet another natural remedy for treating angina. The herb has shown usefulness for improving the flow of blood to the heart and increasing the oxygen supplied through it. Both these factors are primary contributors that lead to angina pain.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Now Foods L-Arginine 1000 mg Tablets</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        L-arginine triggers the production of nitric oxide in the body. This nitric oxide helps prevent the formation of blood clots in the blood vessels that hampers the supply of blood to the heart. It hence, improves blood flow and prevents angina pains.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nature's Sunshine L-Carnitine (30 caps)</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Your heart needs fat (essential fatty acids) to produce the energy it requires to function. L-Carnitine carries these fatty acids to the heart. When the heart functions properly, it maintains regular blood pressure that prevents the accumulation of toxic waste in your veins that may hamper blood flow. When the blood flows freely, angina pains don’t occur.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Angina, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Angina;