import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Cholesterol= () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cholesterol</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cholesterol</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>•  There are around 73.5 million American adults who have bad cholesterol.</li>
                            <li>• Only 48.1% of this high-cholesterol population is actually doing something to medically control and lower their cholesterol levels.</li>
                            <li>• The risk of getting a heart disease is twice as much for high-cholesterol people as it is for the normal population.</li>
                            <li>• Around 31 million American adults have total cholesterol level higher than 240 mg/dL.</li>
                            <li>• Between 2011 and 2014, 12.1% of the adult population aged 20 and above had high serum total cholesterol.</li>
                            <li>• The CDC advises adults to get their cholesterol levels checked once in every 5 years.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cholesterol is a lipid (type of fat) present in the blood. The cells in your body require cholesterol and the body makes the required amount on its own. However, we also intake cholesterol from the food we eat.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cholesterol is a lipid (type of fat) present in the blood. The cells in your body require cholesterol and the body makes the required amount on its own. However, we also intake cholesterol from the food we eat.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are two basic types of cholesterol
                        </p>

                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>•  HDL (High-density lipoproteins) also known as the “good cholesterol” is required by the body for the healthy functioning of the heart.</li>
                            <li>• LDL (Low-density lipoproteins) are normally called the “bad cholesterol” responsible for increasing the risk of diseases and strokes.</li>
                            
                        </ul>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            People who smoke, are obese, or have high blood pressure usually have high levels of bad cholesterol. For some people, the high cholesterol levels are passed down through their genes. Whoever has this condition is highly susceptible to a range of fatal health problems including heart attacks and stroke.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms high cholesterol may often go unnoticed. These symptoms may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• Extreme fatigue</li>
                               <li>• Chest pain/angina</li>
                               <li>• Shortness of breath</li>
                               <li>• Nausea</li>
                               <li>• Dizziness</li>
                                
                            </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            It is important to get cholesterol levels checked regularly. Cholesterol cannot be completely eliminated; however, you can always control the condition with regulated diet and medication.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Cholesterol, it is not enough to keep you fit and healthy. Supplements are essential for managing Cholesterol and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Cholesterol. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Cholesterol:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        From treating diarrhea to improving blood circulation, bilberry is a fruit of Eurasian origin with numerous health benefits. The fruit, just like most other berries contains anthocyanosides and polyphenols that lower bad cholesterol levels in the body, improve blood circulation, and boost the overall cardiovascular health ensuring a healthily functioning heart.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Cayenne</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cayenne or the Guinea spice is reputed as an effective treatment for inhibiting and reducing the buildup of plaque within the arteries. This unique spice has been long used for various medicinal purposes, including the improvement in circulatory health. Although there are no plausible sources that link cayenne directly to a reduction in cholesterol levels, but the spice definitely reduces the risk of cardiac illnesses that result from high cholesterol levels.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Fenugreek</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Grown worldwide, this herb has been used for centuries in Asian cuisines as well as medicine. Fenugreek seeds are rich in steroidal saponins that are responsible for slowing down the cholesterol absorption into the intestines, in addition to slowing down the rate at which the liver produces cholesterol in the body.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The extract from hawthorn berries can be best described as the complete heart tonic. When dealing with cholesterol, hawthorn works two ways: it increases the level of HDL (good cholesterol) while simultaneously decreasing the level of LDL (bad cholesterol) in the body. It also reduces the plaque buildup in arteries, promoting better circulatory health.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Milk Thistle is another wonder of the nature that is extremely beneficial in controlling cholesterol levels in the body. The herb protects the liver and promotes increased output of good cholesterol in the body. It also helps reduce the amount of bad cholesterol in the body and promotes an overall good heart and circulatory health.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Cholesterol, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Cholesterol;