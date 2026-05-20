import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const ChronicFatigue = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Chronic Fatigue</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Chronic Fatigue</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Over a million people in America suffer from chronic fatigue syndrome. CFS’s prevalence is higher than different forms of cancer, lupus sclerosis etc.</li>
                            <li>• Women are 4 times likelier to develop chronic fatigue syndrome as compared to men.</li>
                            <li>• Although people of all ages can get chronic fatigue syndrome, it is most common in people between the ages of 40-50.</li>
                            <li>• CFs is more common in adolescents as compared to younger children.</li>
                            <li>• Teens are at a higher risk of developing chronic fatigue syndrome than m adults after a flu-like disease.</li>
                            <li>• CFS isn’t bounded by any racial or ethnic groups. Everyone around the world has an equal chance of developing it.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One may feel tired after a busy day at work or a hardcore workout, but if the the fatigue and tiredness doesn’t go away after several hours or days, one might be suffering from chronic fatigue syndrome. Chronic fatigue syndrome can be defined as an agonizing pain in the body that doesn’t go away despite taking rest. It is often referred to as systematic exertion intolerance or myalgic encephalomyelitis.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The majority of CFS cases are mild or moderate, but the symptoms can sometimes turn severe when not attended to. When one has mild fatigue syndrome, the symptoms include the urgent need to take off from work to rest, bodily pains and laziness to perform tasks. When one suffers from a mild fatigue syndrome, he/she might experience reduced mobility, disturbed sleeping patters and the urge to take naps during afternoon. When fatigue turns severe, it becomes difficult for one to perform minimal daily tasks such as combing their hair, brushing teeth, changing clothes, bending down to tie shoe lace etc.    
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There aren’t any known causes for CFS; however, many hypotheses indicate that CFS is caused by:
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• a bacterial or viral infection</li>
                            <li>• Hormone imbalance</li>
                            <li>• immunity problems</li>
                            <li>• psychiatric problems</li>
                            
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In order for the symptoms to be diagnosed as those of chronic fatigue syndrome, one must ensure that the pain has lasted for more than 6 months. Currently, there are a number of signs that tell if it is chronic fatigue or not. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Fatigue</li>
                            <li>• Memory loss or lack of concentration</li>
                            <li>• A sore throat</li>
                            <li>• Enlarged lymph nodes</li>
                            <li>• Baffling muscle pain</li>
                            <li>• Pain that transmits form one joint to another</li>
                            <li>• Headache of different patterns type sand severity</li>
                            <li>• Disturbed sleep</li>
                            <li>• Extreme exhaustion </li>
                        </ul>
                            
                        </div>
                        
                        
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage chronic fatigue, it is not enough to keep you fit and healthy. Supplements are essential for managing chronic fatigue and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for chronic fatigue. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with chronic fatigue:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cinnamon Liquid Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cinnamon has been used for centuries as an herbal medicine to treat a number of bacterial and viral infections. its bark is infused to make herbal teas and its extract is included in many medications to treat a number of health conditions, what many people don’t know is that cinnamon liquid veggie capsules are great to soothe aching muscles too. They relieve the pain instantly and at times, improve one’s endurance against pain.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Commonly known as Ayurvedic Ginseng, Ashwagandha works as a rejuvenation treatment to cure a number of health conditions including chronic fatigue syndrome. It also has an affinity to treat conditions like neuromuscular disorders, which is a subsidiary of chronic fatigue.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Quercitin Relief</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        One of the most commonly used natural remedy by athletes to improve their performance Quercitin Relief works great when one suffers from bodily pains caused by chronic fatigue syndrome. Its regular application makes the pain go away.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Most commonly used to treat health conditions like jaundice, internal bleeding, urinary tract infections, cancers liver disorders, bleeding due to childbirth etc. Goldenseal is also a miraculous herb for those suffering from chronic fatigue syndrome.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">St. John's Wort</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    This works as a powerful remedy to treat different forms of depression, aching muscles, chronic fatigue syndrome and help one get over the blues. When used frequently, it helps relieve muscle and joint pain over time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing chronic fatigue, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                                                    </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ChronicFatigue;