import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const HeartburnAndGERD = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Heartburn and GERD</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Heartburn and GERD</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• More than 60 million people in America suffer from acid reflux symptoms every month.</li>
                            <li>• The symptoms of acid reflux can develop in children too, from as early as infancy, but they may stop as they grow.</li>
                            <li>• The symptoms of GERD are experienced by more than 7 million people in the United States alone, as reported by the National Institute of Diabetes and Digestive and Kidney Diseases.</li>
                            <li>• People at most risk of developing acid reflux are pregnant women. In fact, more than 50% of pregnant women experience acid reflux in their third trimester.</li>
                            <li>• In 2004, more than 3.1 million people were hospitalized complaining of GERD-related symptoms.</li>
                            <li>• It is reported that people living with GERD enjoy a lower quality of life, don’t enjoy food, have trouble sleeping, and experience difficulty concentrating when battling with the symptoms.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            GERD, or Gastroesophageal Reflux Disease, is a chronic digestive disease that cannot be cured but can be managed with medication. The term acid reflux is often used synonymously with GERD; however, for acid reflux to be considered GERD, the symptoms must last for more than two weeks, occurring at least twice per week.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Acid reflux occurs when acid or content from the stomach moves back into the esophagus (food pipe). Since the content has turned acidic, it irritates the lining of the esophagus, causing GERD. The most prominent symptom is heartburn, during which an individual may experience sudden pain in the lower chest, shoulder, jaw, or neck area, but it usually lasts for only a few minutes.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of GERD include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Burning sensation in the chest, most commonly in the throat region</li>
                                <li>• Chest pain</li>
                                <li>• Dry cough</li>
                                <li>• Sensation of a lump in the throat</li>
                                <li>• Difficulty swallowing</li>
                                <li>• Hoarseness</li>
                                <li>• Regurgitation of food</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage GERD, it is not enough to keep you fit and healthy. Supplements are essential for managing GERD and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for GERD. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with GERD:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Aloe Vera Plus */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        This tonic is an excellent way to treat a number of digestive disorders, including heartburn and ulcers. It helps in breaking down fat globules, preventing obesity. Regular intake may help alleviate the inflammation caused by heartburn.
                                    </p>
                                </div>

                                {/* Artichoke */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Artichoke is a plant whose roots, stems, and leaves are used as active extracts in a number of medications. The extract contains a high concentration of nutrients that aid in stimulating the flow of bile, thus reducing the likelihood of heartburn or GERD.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Chamomile */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        As soothing as its aroma is, chamomile also offers many health benefits. It has been used as an alternative medication for centuries to treat multiple digestive issues, including heartburn. It works as a mild sedative and helps reduce the symptoms of GERD. It can also be taken to ease an upset stomach or when feeling nauseous.
                                    </p>
                                </div>

                                {/* Licorice */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Licorice</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Recent studies suggest there are more than a hundred healing substances in licorice, the most beneficial being flavonoids and estrogens. Both help balance the amount of acid produced in the stomach to prevent heartburn and acid reflux. It acts as a laxative and relieves inflammation and spasms in the esophagus.
                                    </p>
                                </div>
                            </div>

                            {/* Marshmallow */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Marshmallow</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The marshmallow plant contains polysaccharides that possess antibacterial properties. Not only is it delicious to eat, but it also leaves a soothing effect on inflamed membranes in the throat and mouth. Recent studies have proven that marshmallow is beneficial in treating a number of digestive disorders, including acid reflux and heartburn.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing GERD, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default HeartburnAndGERD;