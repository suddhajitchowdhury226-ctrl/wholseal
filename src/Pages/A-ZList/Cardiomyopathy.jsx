import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
import { Car } from 'lucide-react';
const Cardiomyopathy = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cardiomyopathy</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cardiomyopathy</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Cardiomyopathy can be defined as the weakening or stretching of the blood vessels, which limits the supply of blood and oxygen to and from the heart.</li>
                            <li>• Approximately 50,000 people in America are affected by cardiomyopathy.</li>
                            <li>• It is estimated that annually around 27,260 American die due to the disease.</li>
                            <li>• Annually, more than 53,000 people are hospitalized complaining of one or more of the symptoms of cardiomyopathy.</li>
                            <li>• Everyone, regardless of age, gender, or ethnicity has an equal chance of developing the disease.</li>
                            <li>• Medical researchers are still baffled as to what causes it in the first place; however, multiple studies reveal that it has something to do with genes.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            It is a progressive condition of the heart muscle or the myocardium. Cardiomyopathy develops when the heart can’t pump sufficient blood. It is due to the stretching of the vessels around the heart which limits the supply of blood and oxygen from the heart to the whole body.  As a result of which, the heart muscles weakens overtime. It is often accompanied by life-threatening symptoms such as heart failure, irregular heartbeat or a heart valve complication etc. Medical experts are still unsure as to what causes it on the first place; however, there are a number of conditions or causes that one can associate it with. These include:
                            </p>
                        <ul className=" tp-4 space-y-2 text-sm leading-relaxed">
                           

                            <li>• Genetic conditions</li>
                            <li>• High blood pressure</li>
                            <li>• Heart tissue damage</li>
                            <li>• Rapid heart rate</li>
                            <li>• Metabolic disorders</li>
                            <li>• Heart valve problems</li>
                        </ul>

                        <p class="tp-4">
                            Lastly, there are also a number of risk factors that increase your chances of developing cardiomyopathy. These include:
                        </p>
                        
                        <ul className=" tp-4 space-y-2 text-sm leading-relaxed">
                           

                            <li>• A family history</li>
                            <li>• Alcoholism</li>
                            <li>• Obesity</li>
                            <li>• High blood pressure</li>
                            <li>• Diabetes</li>
                            <li>• Pregnancy</li>
                            <li>• Cancer treatment</li>
                            <li>• Thyroid problems</li>
                            <li>• Infections that injure heart muscles etc.</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since cardiomyopathy is a progressive health condition, its symptoms don’t usually show all of a sudden but develop overtime. Many patients aren’t even aware of it until they visit their physician for some heart-related issue. However, there are many symptoms of cardiomyopathy if one notices with care. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• Frequent breathlessness even at rest</li>
                               <li>• Bloating due to fluid buildup</li>
                               <li>• Unexplained swelling in the legs, feet or around the ankle</li>
                               <li>• Fatigue</li>
                               <li>• Chest pain</li>
                                <li>• Irregular heartbeat</li>
                                <li>• Coughing while lying</li>
                                <li>• Lightheadedness</li>
                                <li>• Dizziness or faint-like feelings</li>
                                
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage cardiomyopathy, it is not enough to keep you fit and healthy. Supplements are essential for managing cardiomyopathy and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for cardiomyopathy. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with cardiomyopathy:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">l-Carnitine (30 caps)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        These capsules are aimed to improve the overall functioning of the heart. These capsules come packed with active ingredients that boost the performance of the heart by enhancing the flow of blood through the blood vessels leading to the heart.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The berries, leaves, roots and flowers of the Hawthorne plant are all used as extracts and later incorporated in a number of medications for cardiovascular health. Its use is most effective when taken for chest pains, irregular heartbeats, congestive heart failure etc. –all of which are symptoms of cardiomyopathy. Although, some more research needs to go into how it boosts the functioning of the heart, many studies support the idea that it does. On the other hand, it also reduces anxiety, and lowers and balances blood pressure in the body.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Tea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The main ingredient in these capsules includes potent herbs combined to promote blood flow in the arteries. Prevent cellular damage and protect the blood vessels. The capsules come packed with antioxidant, bioflavonoid and polyphenols that promote overall cardiovascular health. It also helps maintain the blood pressure in the body.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Organic Turmeric Root Powder</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The king of all spices turmeric not only add flavor to our dishes but has been used for centuries as an Ayurvedic remedy by the Indians. Made by grinding curcuma long plant’s dried roots, it contains active curcumin that has scientifically been proven to boost the overall cardiovascular heath.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing cardiomyopathy, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Cardiomyopathy;