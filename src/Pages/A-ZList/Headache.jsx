
import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Headache = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Headache</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Headache</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           <li>• According to the statistics presented by the World Health Organization, half of the world’s population suffers from headaches more than once every year.</li>
                           <li>• Nearly 28 million people in US alone suffer from migraine headaches, making it the second most common type of primary headaches.</li>
                           <li>• Each year, approximately 45 million people complain about a headache in the US.</li>
                           <li>• This means that 1 in every 6 people suffer from headaches. (16.54% of the population)</li>
                           <li>• Only 8 million people seek medical assistance on headaches while the remaining percentage relies on painkillers to get rid of it.</li>
                           <li>• On an average, 25 million men in US suffer from different types of headaches. In comparison, an average 20 million females suffer from headaches in America.</li>
                        </ul>
                        
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Nearly everyone has experienced a headache once in their lives. Headaches make for the most common types of complaints physicians receive annually. Everyone from an adolescent to a senior, all are at an equal risk of developing one, regardless of their gender or ethnicity. But what really is a headache?
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           A headache may be defined as subtle or excruciating pain in any part of the head. Based on the type and severity, not everyone experiences it the same. Many experience it on either side of their heads, some complain about pain in the back of their heads while others keep rubbing their forehead to reduce the pain. Headaches may remain isolated at a certain point, radiate or possess a viselike quality. A headache may start out dull and become severe gradually or develop suddenly and be unbearable to endure. It can last from a few minutes to a few hours to a few days.
                        </p>
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Pitta:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Headaches can be primary or secondary. Primary headaches aren’t linked to any diseases. They include tension headaches migraine headaches and cluster headaches. Secondary headaches on the other hand are a symptom of some underlying medical conditions such as viral and bacterial infections, nerve or heart problems etc.
                        </p>
                        {/* <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• He/she is obese or overweight</li>
                            <li>• He/she is consuming cholesterol-enriched diets frequently</li>
                            <li>• He/she has experienced rapid weight loss</li>
                            <li>• He/she has diabetes mellitus</li>
                        </ul> */}
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Vata:
                        </h2> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Other risk factors involve:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Being a female</li>
                            <li>• Being pregnant</li>
                            <li>• Belonging to an American/Indian or Mexican-American background</li>
                            <li>• Having a history of gallstones in the family</li>
                            <li>• Being over 60</li>
                        </ul> */}
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          When treating headaches, a physician must first rule out all the other health conditions that may be causing the headache. Some general symptoms include:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These symptoms include:
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                               <li>• A subtle but persistent pain in the head.</li>
                               <li>• Feeling of tightness on the forehead, at the back of the forehead or on either side</li>
                               <li>• Tenderness on necks, scalp and shoulder muscles</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Headaches must never be taken lightly. If they continue to come back after the effect of painkillers wears off, it might be an indication of a serious diseases. Therefore, it is best to seek medical help to be sure.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           The disease can be diagnosed with the help of series of tests.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage headache, it is not enough to keep you fit and healthy. Supplements are essential for managing headache and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for headache. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with headache:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Referred to as Ayurvedic Ginseng, Ashwagandha is an effective herb in reducing the pain during headaches. It can also be used as a preventive measure by those who wish to avoid breakdowns and burnouts caused by stress.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Elderberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Being an effective herb to cure multiple viral infections like cold and flu, elderberry also works effectively when it comes to relieving headaches symptoms fighting fatigue and eliminating cough and body aches.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Feverfew</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It is a pre-eminent headache therapy. It is also anti-inflammatory and is known to reduce pains. It is most effective in treating primary headaches especially migraines. One can take it hourly when suspected of getting a migraine. It effectively works at the onset of headaches.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lavender</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      One of the most calming natural remedies, lavender has long been used to treat headaches and recued the severity of pains. It works exceptionally well in clearing depression which is one reason why it is used in many cosmetic products. It helps calm one’s nervous system, and even promotes natural sleep. It can be used in a number of ways –infused in teas, placed as a decoration or used as a soothing stimulator in essential oils.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Pennyroyal</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    For centuries, people have been using pennyroyal to treat cases of cold and other viral infections. But it does more than that. It is a reliable remedy to treat body aches and relieve headaches. It does so by reducing the severity of the pain and preventing it to occur again. It is also beneficial in treating multiple cases of depression that lead to headaches and stress.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing headache, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Headache;