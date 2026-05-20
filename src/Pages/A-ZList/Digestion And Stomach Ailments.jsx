import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const DigestionAndStomachAilments = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Digestion and Stomach Ailments</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Digestion and Stomach Ailments</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Our entire digestive system is 30 feet long.</li>
                            <li>• The most common stomach disease is called Dyspepsia, which we often call an upset stomach.</li>
                            <li>• What we call stomach flu is actually a stomach virus. Flu affects the respiratory tracts, not digestive ones.</li>
                            <li>• Men above the age of 65 who consume a lot of salty, pickled and smoked food, and drink and smoke a lot have a higher risk factor of contracting stomach cancer. </li>
                            <li>• Stomach Cancer mostly affects people who are old. Research shows that 2/3rd patients having the disease are over the age of 65.</li>
                            <li>• It is highly difficult to diagnose stomach cancer as the symptoms are the same as any stomach ailment.</li>

                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        We are what we eat and our overall health depends largely on our eating habits. People, who treat their body like a shrine and whose consumption includes a balanced diet having fats, proteins, carbohydrates, fiber, vitamins and other beneficial nutrients always enjoy good health and a trouble-free digestive tract. There are certain food products that keep our digestive system in top working condition and help us with stomach ailments like diarrhea, constipation and viruses.
                        </p>
                        <h2 className="text-2xl font-bold mb-6">Beans:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        
                            Fiber is a digestive-friendly nutrient which makes sure that our system keeps on running smoothly and without a hitch. Beans are a great source of these fibers which we must consume 25 grams of every day.
        
                        </p>
                        <h2 className="text-2xl font-bold mb-6 ">Yogurt:</h2>
                    
                            <p>Nothing is more beneficial for our stomach than probiotics, and yogurt is rich in it. The consumption of yogurt helps our stomach buildup the friendly bacteria in our stomach and reduce the risks of infections.</p>
                            
                        <h2 className="text-2xl font-bold mb-6 p-2">Ginger:</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                            Ginger is good for many health problems, and stomach ailments are one of them. It soothes an upset stomach and helps eliminate the feelings of nausea and stomach aches.</p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Symptoms that might be indicative of a mild or chronic stomach ailment might include the following:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Abdominal pain</li>
                                <li>• Blood in the stool</li>
                                <li>• Bloating</li>
                                <li>• Diarrhea</li>
                                <li>• Constipation</li>
                                <li>• Heartburn</li>
                                <li>• Incontinence</li>
                                <li>• Nausea and vomiting</li>
                                <li>• Difficulty swallowing</li>
                            
                               
                                
                            
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


                        <p className="text-gray-700 leading-relaxed  pt-4" >
                        One of the most dangerous stomach ailments is colon cancer, and it can be identified by searching for the following symptoms;</p>

                                <ul className="text-gray-700 space-y-1">
                                <li>• Sudden and unexplained weight loss</li>
                                <li>• Fatigue</li>
                                <li>• Weakness</li>
                                <li>• Frequent bowel issues, including diarrhea and constipation for a number of days</li>
                                <li>• Constant feelings of fullness and unease</li>
                                <li>• Rectal bleeding</li>
                                <li>• Blood in the stool</li>
                                <li>• Nausea and vomiting</li>
                                <li>• Cramps, gas and pain in the stomach</li>
                            </ul>



                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps manage digestion and stomach ailments, it is not enough to keep you fit and healthy. Supplements are essential for managing digestion and stomach ailments and relieving their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for digestion and stomach ailments. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before using any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with digestion and stomach ailments:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Oregano is a Greek word which translates into mountain of joy. It sure is one when a person wants to get rid of the irritating and painful infections in their digestive tract. Oregano is rich in magnesium, fatty acids, iron, and manganese, along with other beneficiary nutrients. It makes our digestive system more effective and helps in cleansing the colon.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Acai Super Berry Antioxidant</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Acai is the upshot of various different beneficial plants. These plants are the richest in nature with their potent antioxidant abilities and energy boosting abilities. Being a super food, this natural supplement also helps us with weight loss while aiding us in maintaining a healthy one.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Aloe Vera leaves are rich in latex and contain laxatives. It is consumed for treating mild to severe constipation. Aloe Vera plus is also consumed for detoxification and settling down an upset stomach. Aloe Vera plus also soothes down heartburn and aides in the treatment of ulcers and other digestive diseases.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Also known as Una de Gato, cat’s claw is one of the most potent anti-viral herbs and is commonly used for the treatment of various health problems, including digestive complaints. This natural supplement has anti-inflammatory abilities and can help reduce and slow down cancerous cell formation. One digestive ailment called Crohn’s disease benefits the most from this herb. Crohn’s disease is a condition that causes inflammation in the lining of the digestive tract.
                               
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Among its endless number of benefits, Cayenne is a super food for our stomach as it helps in healing an upset stomach, stomach pain, intestinal gas, diarrhea, and even helps with cramps. This natural remedy triggers our salivary glands. With the increased release of saliva, the digestion becomes improved. Cayenne also stimulates the gastric juices and improves metabolism of food and toxins.
                    
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing digestion and stomach ailments, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default DigestionAndStomachAilments;