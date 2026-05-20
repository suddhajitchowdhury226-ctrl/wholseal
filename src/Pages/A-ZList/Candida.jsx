import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Candida = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Candida/Fungal</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Candida/Fungal</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Each year, there are nearly 46,000 new cases of Candida diagnosed in America.</li>
                            <li>• As presorted by CDC, 75% of all women suffered from some form of yeast infection at some point in their lives.</li>
                            <li>• Yeast infections are the 2nd most common reason for itching, vaginal burning, and discharge in women.</li>
                            <li>• In order to grow, Candida infections usually host on moist body areas or where the skin touches such as the genitals and underarms</li>
                            <li>• 15% of the people suffering from any form of Candida due to a weakened immune system develop systemic illnesses.</li>
                            <li>• there are more than 150 different species of Candida as reported by the Centers for Disease Control and Prevention (CDC)</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Among the many different kinds of fungus (north good and bad) that host inside our bodies, Candida (candidiasis) is the bad kind. It is a type of yeast that usually sets camp in the mouth, belly or any other part of the skin without causing any harm –unless triggered. When it finds favorable environment, it takes no time to multiply and grow until it gets out of control and leaves its victim with sore, patchy, and flaky skin.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The causes that become the rigger to awaken the host may include intake of antibiotics, contraceptive pills, sugary diet, stress, diabetes, or chemical exposure etc. A person may suffer from one of these three kinds of Candida at a time – oropharyngeal candidiasis, yeast infection and Invasive candidiasis. oropharyngeal candidiasis or thrush is a fungal infection that develops inside one’s mouth or throat. Yeast infection is most common among women and develops around the vaginal areas. Invasive candidiasis is a more severe type of fungal infection as during invasive candidiasis, the infection enters the blood stream and infects the whole body.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of Candida/fungal may vary from person to person depending on the form of Candida infection they suffer from. However, there are some common indicators to urge one to get checked for yeast infections. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• rashes</li>
                               <li>• patches (red or purple)</li>
                               <li>• shredding of the skin</li>
                               <li>• Scaling</li>
                               <li>• flaky skin over the infected area</li>
                                <li>• Cracked skin</li>
                                <li>• soreness</li>
                                <li>• erythema</li>
                                <li>• puss-filled pimples</li>
                                <li>• white and red lesions in the mouth as noticed in an oral thrush</li>
                                <li>• maceration</li>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Candida/fungal, it is not enough to keep you fit and healthy. Supplements are essential for managing Candida/fungal and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Candida/fungal. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Candida/fungal:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Black Walnut (Green)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Black walnuts are harvested early when they are still green in color as they are more potent then. For centuries, people have been using black walnuts to treat fungal infections such as Candida, athlete’s foot and other skin-related disorders. This is one perfect addition to the Candida killing family. It works more effectively when combined with an anti-parasitic treatment.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Pau D'Arco</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Pau D’Arco is mostly used to kill and control Candida yeast inside the body. It works as a mild yeast killer and prevents rapid inundation in the future once the yeast has been controlled by a proper diet. It is beneficial for those who get yeast infections easily.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Thyme</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
Being an expectorant and powerful antiseptic, thyme has been used as a flavoring spice and herbal remedy to relieve pain instantly for centuries. Studies have shown that thyme has proven effective when treating infections caused by fungus such as the Candida.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregano Oil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Oregano oil has the power of both tea tree oil and grapefruit seed extract, making it a more potent concoction. Oregano oil is most commonly used to treat a number of skin infections. Thanks to its antifungal qualities, this herbal medicine kills infections in the body that may or may not have been triggered. When one is prone to parasitic or a bacterial infection, oregano oil helps reduce the symptoms especially soreness and redness experienced during Candida/fungal infections.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea angustifolia root</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    With its antifungal, antiseptic and anti-inflammatory qualities, Echinacea root is an effective natural remedy to heal a number of infections such as colds, Candida, and athlete’s foots etc. When applied, it reduces the length and severity if the infection. It strengthens the immune system making it less prone to infections.
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

export default Candida;