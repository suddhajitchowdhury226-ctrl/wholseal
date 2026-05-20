import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Gout = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Gout</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Gout</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• In 2010, there were 4.98 million cases of ambulatory care visits in the US pertaining to gout.</li>
                            <li>• Out of the 38.6 million hospitalizations in America in 2010, 2.35 million accounted for gout and related crystal arthropathies.</li>
                            <li>• Statistics show that people with African-American ancestry are twice as prone to gout as their other American counterparts.</li>
                            <li>• Men have a greater risk of getting gout than women. The men-to-women ratio stands at 3.3:1.</li>
                            <li>• According to a 2007-2008 survey, there were 8.3 million individuals suffering from gout in America.</li>
                            <li>• The prevalence can be accounted as 2% in women and 5.9% in men.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Gout is a specific form of arthritis characterized by severe, sudden pain attacks in the joints. The area around the affected joints may become tender and red, with the big toe being the most susceptible joint. This condition can affect almost anyone, though women are most likely to develop gout following menopause.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            People often describe a gout attack as the sensation that their joint, often the big toe, is on fire. The sharp pain occurs suddenly, while walking or resting, and becomes so intolerable that even the weight of a regular sheet may feel like too much of a burden.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Thankfully, gout is treatable, and with caution, one can reduce the possibility of recurrence.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Gout may occur anytime, usually out of the blue and mostly at night. You may not know you have a gout condition until it’s too late. However, there are certain signs that warn you of the condition, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Excruciating pain in the joint</li>
                                <li>• Extreme discomfort even after the pain subsides</li>
                                <li>• Redness and inflammation around the joint</li>
                                <li>• The affected region often swells up and becomes warm, red, and tender</li>
                                <li>• Restricted joint mobility or range of motion</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            It is important to see a doctor if you’re experiencing these conditions continuously. Also, if pain or inflammation in a certain joint intensifies suddenly, consult a healthcare specialist immediately.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage gout, it is not enough to keep you fit and healthy. Supplements are essential for managing gout and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for gout. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with gout:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Dandelion */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Gout is caused by the buildup of uric acid around the joints. Dandelion is an effective diuretic herb that has been used for decades as a natural treatment for gout. Being diuretic, dandelion increases the urine output of your body, allowing the excess uric acid to flush out and hence reducing the pain and inflammation caused by the condition.
                                    </p>
                                </div>

                                {/* Cat's Claw */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Like most other arthritic conditions, gout is also characterized by constant inflammation in the affected joint. Cat’s Claw possesses potent anti-inflammatory properties that reduce the burning sensation and relieve the resulting pain. It also strengthens the immune system, preventing the recurrence of gout.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Quercetin Relief */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Quercetin Relief</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Quercetin stabilizes the body cells responsible for releasing histamine. Histamine acts as an anti-inflammatory substance that inhibits the inflammation occurring because of gout and reduces the pain.
                                    </p>
                                </div>

                                {/* Devil's Claw */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Devil's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        This herb of South African origin has been used by locals for years to treat arthritic conditions. Its efficacy for gout was first discovered by Europeans. Devil’s Claw is a natural painkiller that relieves even the most excruciating pains resulting from different types of arthritis.
                                    </p>
                                </div>
                            </div>

                            {/* Gravel Root */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Gravel Root</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    This medicinal herb has over 40 species. Just like the dandelion plant, gravel root is also a natural diuretic that increases urine output and frequency. This helps the body get rid of excess uric acid, the main cause of gout.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing gout, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Gout;