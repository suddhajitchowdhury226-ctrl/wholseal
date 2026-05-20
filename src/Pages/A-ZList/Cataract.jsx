import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Cataract = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cataract</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cataract</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Cataract can be defined as the clouding of the eye’s lens, which obstructs the passage of light.</li>
                            <li>• Statistics from reports in the year 2015 revealed that there were approximately 24.4 million people with new cases of cataract.</li>
                            <li>• People aged 40 or above are at the highest risk of developing cataract.</li>
                            <li>• In America, whites are more prone to developing cataract than any other race.</li>
                            <li>• In 2015, a majority of cataract cases were diagnosed in women. It is estimated that women are more likely to develop it as compared to men. The ratio is 61 women to 39 men.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cataract is referred to the cloudiness of the eye’s internal lens. It is painless but can leave one unable to see properly, causing complete blindness if left untreated. When the lens becomes clouded, the passage of light is obstructed. A cataract isn’t a chronic health condition. Its symptoms may take several years to fully develop as the disease progresses over time. Cases of cataracts are most common among adults who have crossed the 40 barrier. However, many other risk factors can also increase one’s chances of developing it earlier.
                            </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One is more likely to develop cataracts if they:
                        </p>
                        <ul className="text-gray-700 space-y-1">

                               <li>• Are above 40</li>
                               <li>• Are above 40</li>
                               <li>• Are obese</li>
                               <li>• Are frequently exposed to sunlight</li>
                               <li>• Smoke</li>
                                <li>• Have High blood pressure</li>
                                <li>• Have High blood pressure</li>
                                <li>• Consume Alcohol excessively</li>
                                
                            </ul>
                            <p className='pt-4'>
                                There are three different types of cataracts. A nuclear cataract is formed in the deep centre of the lens called the nucleus. A subcapsular cataract develops on the back of the lens and a cortical cataract occurs in the cortex of the lens which surrounds the nucleus.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although symptoms of the cataracts don’t show up simultaneously, people who have any of these symptoms might have cataract:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li> Chronic infections, as the immune system cannot fend off the infection-causing bacteria.</li>
                               <li> Continuously occurring episodes of cold and flu during the year.</li>
                               <li> Frequent development of genital herpes and/or cold sores</li>
                               <li> Swollen or sore lymph glands.</li>
                               
                            </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            Of course, these symptoms may vary from person to person, and may occur in combination with other symptoms at times. Good thing is, the immune system can be strengthened using the right supplements and medication where necessary. Make sure you visit a doctor at the signs of weak immunity to get medical help if required.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Weak Immune System, it is not enough to keep you fit and healthy. Supplements are essential for managing Weak Immune System and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Weak Immune System. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberry contains potent antioxidants called anthocyanosides which strengthen blood vessels and the capillary walls of the eye. The antioxidants also boost retinal pigments allowing the eye to tolerate light. Furthermore, it maintains the smooth passing of the red blood cells, so that they can easily pass through and supply oxygen. Bilberry is also known to improve one’s eyesight, improve night vision, and prevent cataracts.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Quercitin Relief</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Quercitin relief is a tonic that is known to treat a number of different health conditions including cataract. It does so by improving the overall vision and eyesight of the individual, making him/her less prone to developing it overtime. It is also known to subdue any prevailing symptoms of cataract.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Zinc</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Zinc-enriched capsules have proven a potent remedy to treat multiple eye diseases including macular degeneration, cataracts and night blindness. It helps prevent the symptoms of cataract form setting in, ultimately reducing the chances of developing one.

                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Organic Turmeric Root Powder</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It wouldn’t be wrong to call the spice one of the most potent ones on the earth. The powder is made by grinding the Curcuma longa plant’s roots and used for centuries in many Indian dishes and curries for its Ayurvedic properties. Only recently, has research confirmed that the roots of the plant contain curcumin –an active component known as a natural remedy to prevent cases of cataract
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lutein & Zeaxanthin</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Both of these are commonly found in many vegetables and fruits. However, since their true power is often overshadowed by other vitamins and minerals, they need to be taken in the form of capsules to show an improvement in cataract. When consumed, they are stored in the Macula part of the eye responsible for vision. The capsules are known to improve overall visual health and prevent cataract.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Alcoholism, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Cataract;