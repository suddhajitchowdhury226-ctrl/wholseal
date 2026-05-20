import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Fibromyalgia = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Fibromyalgia</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Fibromyalgia</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Every 1 in 73 Americans suffers from fibromyalgia, making for about 3 to 6 million people in America currently living with fibromyalgia.</li>
                            <li>• According to the statistics presented by the National Institute of Health, the disease is most prevalent in women. 90% of the cases reported are in females, but adults and children can also be affected.</li>
                            <li>• The symptoms of fibromyalgia are most commonly observed in middle-aged individuals.</li>
                            <li>• People who are at a higher risk of fibromyalgia include those who suffer from lupus, rheumatoid arthritis, or spinal arthritis.</li>
                            <li>• Medical experts are still baffled as to what causes fibromyalgia in the first place. However, it isn’t a chronic disease and therefore can be treated and managed.</li>
                            <li>• Some studies suggest that fibromyalgia could be hereditary. Women who have relatives with fibromyalgia can develop it too.</li>
                            <li>• The word fibromyalgia has Greek origin. It is the amalgamation of two Greek words: myos meaning muscle and algos meaning pain.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When one experiences widespread musculoskeletal pain that is accompanied by sleep, fatigue, memory, and mood issues, it is termed as fibromyalgia. According to researchers, fibromyalgia intensifies painful sensations in the body by affecting the way one’s brain processes pain. Although medical experts still aren’t sure what causes it in the first place, decades of research have put together a list of risk factors that might make one prone to fibromyalgia.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These risk factors include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li><strong>Genetics:</strong> The first and foremost cause, as suggested by researchers, is genes. If the disease runs in the family, the chances of developing it increase. Although, it is just a theory.</li>
                            <li><strong>Infections:</strong> Many prior diseases might trigger the symptoms of fibromyalgia or worsen the already existing ones.</li>
                            <li><strong>Stress:</strong> Stress can leave one feeling low, blue, or down for months, despite medication. The prolonged condition might give rise to some hormonal disturbances which lead to fibromyalgia.</li>
                            <li><strong>Trauma:</strong> People who suffer from some form of physical or mental trauma are also at a high risk of developing fibromyalgia. Many symptoms of fibromyalgia are also linked with PTSD.</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the most common symptoms of fibromyalgia include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Morning stiffness</li>
                                <li>• Disruptive sleep patterns</li>
                                <li>• Headaches</li>
                                <li>• Irritable bowel syndrome</li>
                                <li>• Restless leg syndrome</li>
                                <li>• Aching menstrual periods</li>
                                <li>• Feelings of numbness and tingling in the fingers and toes</li>
                                <li>• Fibro fog</li>
                                <li>• Sensitivity to cold or heat</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            In some severe cases of fibromyalgia, the following symptoms can also be observed:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Widespread pain</li>
                                <li>• Vision problems</li>
                                <li>• Nausea</li>
                                <li>• Weight gain</li>
                                <li>• Urinary and pelvic problems</li>
                                <li>• Dizziness</li>
                                <li>• Breathing problems</li>
                                <li>• Skin problems</li>
                                <li>• Cold/flu</li>
                                <li>• Pain in the jaw</li>
                                <li>• Stiffness</li>
                                <li>• Anxiety</li>
                                <li>• Depression</li>
                                <li>• Myofascial pain syndrome</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage fibromyalgia, it is not enough to keep you fit and healthy. Supplements are essential for managing fibromyalgia and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for fibromyalgia. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with fibromyalgia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Ashwagandha */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Also referred to as Ayurvedic Ginseng, the benefits offered by this herb are uncountable. It is known to treat a wide range of health conditions, including fibromyalgia. It reduces body pains and readies the body by boosting energy levels. It comes highly recommended for those who have a hard time channeling their breakdowns.
                                    </p>
                                </div>

                                {/* Astragalus Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The root of astragalus comes packed with many healthy nutrients. Its extract is used in a number of medications to treat bacterial and viral infections, control diabetes, treat cases of upper respiratory infections, and fibromyalgia. When used as a dietary supplement, it can also improve overall weakness in the body.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Passion Flower */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Passion Flower</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Passion flower has long been used as a mild sedative to calm the nerves. The herb is known to reduce muscle strain caused by overexertion, athletic workout, accident, or fibromyalgia. It does so by making the pain tolerable and reducing its severity.
                                    </p>
                                </div>

                                {/* FM (Fibromyalgia) */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">FM (Fibromyalgia)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        FM is a long-term tonic for fibromyalgia. It helps reduce muscle pain and inflammation and also increases blood circulation to the muscle. FM is ideal to be used after one feels tired after a hardcore workout or experiences aches due to some accident or sprain. Although it may not completely alleviate the pain, it most certainly brings it to a level where it becomes tolerable.
                                    </p>
                                </div>
                            </div>

                            {/* SLEEP w/ Valerian & Melatonin */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">SLEEP w/ Valerian & Melatonin</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    These supplements can be taken to treat jetlag, cure macular degeneration, epilepsy, fibromyalgia, and more. They alleviate pain and calm the nerves.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing fibromyalgia, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Fibromyalgia;