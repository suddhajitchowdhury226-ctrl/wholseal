import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const CankerSores = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Canker Sores</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Canker Sores</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• A canker sore can be defined as a painful ulcer or sore on the mouth or on the insides of it.</li>
                            <li>• There are three types of canker sores –minor, major and herpetiform. The minor canker sores can take up to 2 weeks to completely heal.</li>
                            <li>• Most prone to developing canker sores are children and teenagers. A majority of cases diagnosed are in children aged between 10 and 20.</li>
                            <li>• Canker sores aren’t chronic in nature. They also don’t require surgery or any major lifestyle changes. They usually heal themselves without treatment.</li>
                            <li>• Since the symptoms are often painful. They can be relieved using multiple herbal remedies and organic tonics.</li>
                            <li>• Studies show that women are more prone to developing canker sores.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Canker sores or as put in medical terms –aphthous ulcers – occur in the mouth. These are small oval-shaped white or yellow sores that usually develop inside the lining of the mouth or on the inner lip area. They are usually benign, not contagious, but very painful. Canker sores are most common in people between the ages of 10 and 40. Most of its victims are women.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The cause for canker sores is still unknown however many medical researchers believes there are certain conditions and risk factors that increases the chances of one of developing canker sores. The most common risk factor is genetics.
                        </p>
                        <p class="pb-4">
                            Other risk factors include:
                        </p>
                        <ul className="text-gray-700 space-y-1">

                               <li>• Stress</li>
                               <li>• Viral Infection</li>
                               <li>• Food allergy</li>
                               <li>• Hormonal fluctuations</li>
                               <li>• Vitamin deficiency</li>
                                <li>• Weak immune system</li>
                                
                            </ul>
                        <p class="pt-4">
                            There are three types of canker sores:
                        </p>
                        <ul className="pt-4 text-gray-700 space-y-1">

                               <li>1. Minor Canker Sores: last for a few days and are ½ inch in diameter</li>
                               <li>2. Major Canker Sores: Last for up to six weeks and are ½ inch in diameter as well   </li>
                               <li>3. Herpetiform Canker Sores: Heals in a week or two and are 1/8 inch in diameter</li>
                               
                                
                            </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although, canker sores are an impromptu disease and therefore may not have any symptoms, there are some signs which can indicate that canker sores are on the way. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• The presence of a small yellow or white oval-shaped ulcer in the mouth or the inner lip</li>
                               <li>• Tingling sensation in the mouth</li>
                               <li>• Redness around the area or in the mouth</li>
                               <li>• Fever</li>
                               <li>• Swollen lymph nodes</li>
                                
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage canker sores, it is not enough to keep you fit and healthy. Supplements are essential for managing canker sores and reducing symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for canker sores. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with canker sores:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red raspberry comes packed with essential minerals and vitamins and there is beneficial to improve one’s overall health. It has also proven highly effective in treating cases of canker sores by relieving the pain and burning sensation one experiences. Its intake or application both help alleviate the symptoms of canker sores and cold sores.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Canker Soother w/ Oregano Oil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Canker soother with oregano oil is a blend of different oil suitable to treat inflamed canker sores. The concoction is alcohol free, kosher, gluten-free and vegan. The soother is also mixed in multiple homeopathic remedies. The many oils present in it include tea tree oil, which is responsible for warding off infections, oregano leaf essential oil known for its effective antibacterial properties; coptis root oil which reduces inflammation and clove bud oil which works as a potent analgesic. All of these when combined reduce the inflammation experienced during canker sores.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea-Goldenseal Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        These veggie capsules pack in themselves the power of 7 potent herbs; all aimed to support and strengthen the immune system. This unique formula is also beneficial when taken for canker sores. It provides relief from pain, reduces inflammation and swelling, and speeds up the healing time.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Licorice</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Known as a flavoring agent in many food dishes, licorice also possesses many understated medicinal properties. Not many people know that licorice is a great alternative to many gels and creams applied on canker sores. Its application or intake, both alleviates the pain, inflammation, and swelling.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Coconut Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Coconut oil is no less than a miracle concoction. It possesses antimicrobial, anti-inflammatory and antibacterial properties which makes it fail- safe to be applied on canker sores or all over the face when the skin acts oily.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing canker sores, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default CankerSores;