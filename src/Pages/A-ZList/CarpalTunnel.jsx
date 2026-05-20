import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const CarpalTunnel = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Carpal Tunnel</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Carpal Tunnel</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Carpal tunnels may be defined as the numbness, pain and tingling in the first three index fingers.</li>
                            <li>• The condition develops when the median nerve is pressed due to inflammation or swelling of the tendons around it.</li>
                            <li>• The symptoms of carpal tunnel may worsen if the wrist is repeatedly overextended.</li>
                            <li>• Carpal tunnel is the second most common reason why men and women across the globe miss work days.</li>
                            <li>• Following surgery, only 23% of all workers return to their previous jobs as reported by the NIOSHA.</li>
                            <li>• Compared to men, women are twice as likely to develop carpal tunnel.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Carpal tunnel is health condition in which a person may experience numbness, weakness; tingling or other problems in his/her hand especially in the wrist area. This happens because the medium nerve is pressed against the wrist.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The carpal canal is a rigid, narrow passageway of the ligament and the bones located at the hand’s base. Also located in the same region are the tendons and median nerve. When the tendons become irritated, inflamed, or swollen for some reason, the resulting swelling puts some pressure on the median nerve, causing it to rub against the wrist. This action further increases the swelling and causes pain. Some of the most common causes of this inflammation of the tendons include obstructed blood flow or an underlying condition. The conditions may include:
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Diabetes</li>
                            <li>• high blood pressure</li>
                            <li>• trauma or fracture of the wrist</li>
                            <li>• Thyroid dysfunction</li>
                            <li>• Fluid retention from menopause or pregnancy</li>
                            <li>• Autoimmune disorders</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of carpal tunnel often go undiagnosed as they come and go. The very first signs may include some numbness or tingling but goes away on its own. The main area sod concern include the index finger, thumb and the middle finger, any numbness in them be it only for a few minutes must not be taken lightly. This happens because there is some overlapping or obstruction in the nerve path. Other common symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• Burning sensation</li>
                               <li>• Wrist pain that interferes with sleep</li>
                               <li>• Pain</li>
                               <li>• Weakness in the hand</li>
                               <li>• Swelling</li>
                                <li>• Hand falling asleep and dropping things</li>
                                
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage carpal tunnel, it is not enough to keep you fit and healthy. Supplements are essential for managing carpal tunnel and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for carpal tunnel. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with carpal tunnel:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Black Cohosh</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Black Cohosh is an effective alternative medication used for centuries to treat rheumatic, muscle and joint pains. When taken to treat carpal tunnel, its intake helps alleviate the pain and restores the full motion of the hands and the wrist.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lavender</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The oil extracted for lavender has also shown remarkable benefits when treating carpal tunnel. Much better than many over-the-counter medications, it reduces inflammation, while calming the nerves and alleviating stress. It does so by relaxing the muscles in the wrist. Regular incorporation will soon lessen the swelling and inflammation without the need for surgery.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">St. John’s Wort</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It works as an all-natural antidepressant. Not many are aware that despite that, it also repairs nerve damage. When used to treat carpal tunnel, it reduces both inflammation and pa experienced.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cypress Oil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        With a sweet and balsamic aroma, cypress oil performs a similar function as that of lavender essential oil. It helps calm the nerves and reduce inflammation. The oil is extracted raw from the leaves and branches of the plant
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Organic Turmeric Root Powder</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Referred to as the king of spices, when the dried roots of the curcuma longa plant are grinded, the active ingredient curcumin is extracted. It is a potent ingredient in treating a number of health conditions including carpal tunnel. It posses many anti-inflammatory properties that help alleviate the inflammation and reduce the pain experienced by one when suffering from carpal tunnel
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing carpal tunnel, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default CarpalTunnel;