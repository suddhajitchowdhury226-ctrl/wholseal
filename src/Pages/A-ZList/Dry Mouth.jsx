import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const DryMouth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Dry Mouth</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Dry Mouth</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Dry mouth is a health condition in which an individual experiences a decreased amount of saliva in the mouth. It is referred to as Xerostomia in medical terms.</li>
                            <li>• Dry mouth is most prevalent in older or ageing population</li>
                            <li>• There are a number of different causes that results in the drying of mouth, one of the most common being the side effects of drugs.</li>
                            <li>• Dry mouth is not always a health condition of its own; it can also be a sign or symptom of some underlying disease such as amyloidosis or sarcoidosis.</li>
                            <li>• Individuals prone to developing a dry mouth must abstain from sugary drinks and spicy food</li>
                            <li>• One’s chances of developing a dry mouth increases when they have a habit of sleeping with their mouth open.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Dry mouth is a medical health condition during which one experiences a decreased amount of saliva in mouth. The health condition makes it difficult for one to speak, consume or digest food, ultimately leading to malnutrition if not treated on time. The lack of saliva in the mouth can also lead to a number of psychological disorders such as anxiety and impair one’s quality of life. Dry mouth is most common in adults and seniors. Its several causes include:
                        </p>
                        
                        <ul className="text-gray-700 space-y-2 ml-6">
                            
                            <li>• The side effects of medication</li>
                            <li>• A side effect of some medical condition such as infections</li>
                            <li>• The aftereffects of many medications</li>
                            <li>• A person’s unhealthy lifestyle</li>
                            <li>• Any nerve damage</li>
                            <li>• A person’s unhealthy lifestyle</li>
                            <li>• The removal of salivary glands surgically</li>   
                            <li>• Dehydration</li>   
                            
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        The most common signs and symptoms of dry mouth include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• A bad breath</li>
                                <li>• Extreme dryness</li>
                                <li>• Fungal infections in mouth</li>
                                <li>• Taste disorders</li>
                                <li>• Inflammation of the lips</li>
                                <li>• Fissuring or cracking or the oral mucosa</li>
                                <li>• Tooth decay or plaque</li>
                                <li>• Tongue ulcers or inflammation of the tongue</li>
                                <li>• Glossodynia</li>
                                <li>• An increased urge to drink more water</li>
                                <li>• Difficulty swallowing</li>
                                <li>• Gum diseases</li>
                                <li>• Difficulty swallowing and chewing of food</li>
                                <li>• Difficulty wearing dentures</li>
                                <li>• Salivary gland infection</li>
                                <li>• Stingy saliva</li>
                                <li>• A sore throat</li>


                            
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
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage dry mouth, it is not enough to keep you fit and healthy. Supplements are essential for managing dry mouth and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for dry mouth. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                       
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with dry mouth:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Peppermint breath spray (a/f)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Peppermint’s most active ingredient menthol helps treat a number of different health conditions and disorders including an irritable bowel, sinus congestion, body aches and headaches etc. It has antiviral and anti-inflammatory properties that facilitate saliva production in the mouth, thus preventing a dry mouth. It helps cleanse the mouth from bad breath and freshen the digestive tract.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne pepper</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Cayenne pepper is yet another great herbal remedy to treat cases of dry mouth, it too helps in the stimulation of the salivary glands, ensuring that sufficient amount of saliva is produced by the glands. Furthermore, it helps one better distinguish the different tastes by bolstering up the taste buds. It can be incorporated in diet in a number of different ways.
                                    
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Fennel Seeds</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Fennel seeds are one of the most highly recommended herbal treatments for dry mouth. It has been used by Indians for centuries to treat a number of digestive disorders and to fight bad breath. Fennel seeds stimulate the salivary glands and helps in the flow of saliva.

                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Slippery Elm</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Slippery elm is known to contain mucilage –a slick gel-like substance important to produce salvia. The gel must not be consumed on its own but mixed in water. Its stickiness coats the oral mucous (inner lining of the cheeks) and soothes the muscles of the throat. Furthermore, it contains anti-inflammatory properties that alleviate many of the symptoms of dry mouth.
                                    
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Chamomile has long been used as a pain reliever or soother. Its calming effect relaxes the nerves and alleviates anxiety and stress. Its tea infused with lemon help in the production of saliva in the mouth and relieves pain in the throat, tongue and salivary glands.
                    
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing dry mouth, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default DryMouth;