import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Constipation = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Constipation</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Constipation</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Nearly 4.4 million people in US alone suffer from constipation.</li>
                            <li>• The prevalence rate is most common among women; people aged over 65 ad children.</li>
                            <li>• Constipation is one of the most commonly developed conditions in women after childbirth or surgery.</li>
                            <li>• Constipation accounts for 2 million doctor visits in America annually.    </li>
                            <li>• The remaining percentage of people suffering from constipation relies on laxatives costing approximately $725.</li>
                            <li>• Although constipation isn’t life-threatening, 29 people have lost their life since 1882 in America.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The word constipation has different meaning for different people. To many, it means difficulty passing stool while others refer passing of dry or hard stool as constipation. In general terms, constipation can be defined as a digestive disorder where the individual experiences difficulty in passing stool. This mostly happens when the colon has absorbed too much water, turning feces hard and dry.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The slower food passes through the large intestine towards the rectum, the harder it becomes to excrete. Some of the most common causes of constipation include consuming more of dairy products, suffering from an irritable bowel syndrome, Parkinson’s disease or stress or being pregnant. People who are at most risk include pregnant women; people aged 65+ and children.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although symptoms vary from person to person depending on the type of constipation, some commonly observed symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• The urge to have a bowel movement right after you had one</li>
                            <li>• Feeling blockage in your rectum or intestine</li>
                            <li>• experiencing dry and hard stool difficult to pass</li>
                            <li>• Having less than 23 bowel movements/ week</li>
                            <li>• straining the body to have a bowel movement</li>
                            
                        </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            Severe symptoms include:
                        </p>

                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• You remain constipated for more than three weeks</li>
                            <li>• experiencing abdominal pain</li>
                            <li>• weight loss</li>
                            <li>• mucus or blood in stool</li>
                            <li>• Difficulty to pass stool</li>
                            
                        </ul>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage constipation, it is not enough to keep you fit and healthy. Supplements are essential for managing constipation and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for constipation. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with constipation:


                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yerba Mansa</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It is an herb. The extract from its roots and rhizome is used in many medicines to treat health conditions like intestinal problems, digestive disorders and sexually-transmitted diseases. Incorporation the herb when suffering from constipation promises a quick relief from the pain and prevents it from happening again.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cascara Sagrada</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        one of the most popular over-the-counter medication for constipation, Cascara Sagrada works as a safe laxative to provide relieve from pain and discomfort experienced when constipated. It encourages bowel movement and makes defecation less painful. However, it must only be taken in certain doses to avoid conditions like live injury.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Fenugreek</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used as a seasoning herb in many middles eastern countries, fenugreek seeds and leaves are not only aromatic but posses multiple healing properties too. They work exceptionally well to reduce cholesterol level in the body and prevent constipation. One of the major reasons why people are constipated is lack of a fiber-enriched diet. Since fenugreek is fueled with fibers, it makes the process of excretion less painful and frequent. Regular incorporation in your diet will relieve one from constipation for a long time.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Fo-Ti</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A mild soothing herb, Fo-Ti has been used in Chinese medicines for centuries. Its main function is to rejuvenate the body, fight exhaustion, and prevent conditions like constipation, high blood pressure, nerve damage and inflammation etc. when taken for constipation; it helps the body relax and relief pain.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Goldenseal is used by many to treat multiple digestive disorders, stomach pains and intestinal problems etc. it is most beneficial to treat cases of constipation, internal bleeding, intestinal gas, jaundice, pneumonia, urinary tract infections etc. When taken to treat constipation, its anti-inflammatory properties provide quick relief form pain and straining experienced when one finds it difficult to pass stool.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing constipation, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Constipation;