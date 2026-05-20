import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Asthama = () => {
    // Scroll to top when component mounts
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
                            <h1 className="text-6xl font-bold text-white mb-2">Asthma</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Asthma</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• According to the National Health Interview Survey 2014, 17.7 million adults in the US were suffering from chronic asthma. The current figure stands at around 26 million.</li>
                            <li>• The same survey accounted for 6.3 million children in the US suffering from asthma.</li>
                            <li>• The number of people with asthma is increasing every year. By 2025, it is feared that this number will rise further by 100 million or more.</li>
                            <li>• It is estimated that there are 300 million across the world who suffer from asthma.</li>
                            <li>• Every year the disease causes around 250,000 deaths around the world.</li>
                            <li>• Statistics reveal that asthma affects 1 in every 10 school-going kids on an average.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Asthma is one of the most common chronic lung diseases in the world. The condition is characterized by the inflammation and narrowing of the airways, making it difficult and painful to breathe. Asthma leads to inveterate episodes of coughing and wheezing that eventually causes shortness of breath and chest tightness in the patients. The coughing usually occurs or worsens early morning or during the night.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Although asthma can be diagnosed in all age groups, it often begins at an early age. Generally, there are two main types of asthma: allergic and non-allergic. Allergic asthma results due to allergen exposures, while the non-allergic asthma occurs because of certain illnesses, stress, air irritants, or extreme weather conditions.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Arthritis can be:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                           <li>• Degenerative</li>
                           <li>• Inflammatory</li>
                           <li>• Metabolic</li>
                           <li>• Infectious</li>
                        </ul> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Out of the 26 million people suffering from asthma in the US, many may be unaware of having the condition altogether. Asthma symptoms are not always severe. This is a major reason why the disease often goes unnoticed unless it escalates in severity.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of asthma include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Wheezing – the squeaking sound that comes from your chest when you breathe. Wheezing is often more prominent when you exhale.</li>
                                <li>• Tightness in the chest</li>
                                <li>• Problems in breathing</li>
                                <li>• Shortness of breath</li>
                                <li>• Constant coughing during the night. Coughing may also occur when you laugh or exercise.</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           Asthma cannot be cured, but it can be controlled. All of these symptoms, despite appearing harmless can become life-threatening if not treated on time.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage Asthma, it is not enough to keep you fit and healthy. Supplements are essential for managing Asthma and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Asthma. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Asthama:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       For years, the astragulus root has been used in Chinese medicine to strengthen the immune system and ward of diseases. This herb has also been used for the treatment of chronic asthma. It has been found to be an effective natural remedy and supplemental therapy for asthma. It reduces asthma attacks and provides relief. 
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      The turmeric veggie caps contain turmeric extracts that are rich in curcumin – a naturally occurring enzyme that has proved effective in suppressing bronchial asthma. Turmeric also blocks the release of T – lymphocytes in the body. This helps reduce the frequency of allergic asthma. Also, turmeric widens blood vessels and promotes efficient flow of air that eventually restores normal breathing
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The holy basil has been used in Ayurveda medicine for years to treat respiratory disorders caused by infections. It contains minerals, essential oils, and phytonutrients that relieve congestion is the respiratory system and promote normal breathing. The herb has also proved beneficial for treating the underlying stimulants of asthma.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Mushroom Immune (ORGANIC)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        For centuries mushrooms have been used in Chinese medicine to regulate respiratory health in individuals. The mushroom immune contains a blend of medicinal mushrooms like maitake, shiitake, reishi, and cordyceps that fight free radicals directly linked to lung damage and resulting respiratory illnesses like asthma and bronchitis.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lobelia</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Lobelia is often considered to be an effective treatment for asthma and other bronchial disorders. The herb has the natural ability to remove mucus accumulations and obstructions in the bronchial system. It helps control asthma attacks and normalizes the breathing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Asthamaa, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Asthama;