import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const GastricUlcer = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Gastric Ulcer</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Gastric Ulcer</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• 1 in 10 people suffer from a stomach ulcer at some point in their lives.</li>
                            <li>• Gastric ulcers are four times less common than duodenal ulcers.</li>
                            <li>• An untreated ulcer can take up to 15 years to heal completely.</li>
                            <li>• Around 5 million new cases of peptic ulcers are diagnosed each year in the US.</li>
                            <li>• Each year, nearly 630,000 people get hospitalized complaining of a gastric ulcer in the USA.</li>
                            <li>• Approximately 4,604 deaths caused by peptic ulcers have been reported in America since 1999.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Commonly known as stomach ulcers, gastric ulcers are a kind of peptic ulcer developed on the stomach’s lining. Gastric ulcers develop in the form of open sores and rarely show any severe symptoms, thus often go undiagnosed.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The stomach produces a number of different chemical acids to help in the digestion of food. These acids are corrosive but don’t harm the lining of the stomach as another protective barrier produced by the small intestine shields it. However, the balance between the two is sometimes distorted, and the stomach produces more acid than usual, damaging the lining of the stomach with its intense acidity. An ulcer develops due to this alteration. What causes the stomach to create more acid? Medical experts are still not sure.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            People at most risk of developing a gastric ulcer include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• People who are 70 or older</li>
                            <li>• People who consume alcohol frequently</li>
                            <li>• People who have a history of peptic ulcers</li>
                            <li>• People who smoke</li>
                            <li>• People who battle with untreated stress</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of ulcers are barely noticeable; however, there are a few general ones that might indicate a problem. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• A burning or gnawing pain in the middle of the stomach</li>
                                <li>• Pain in the upper stomach during meals or after them</li>
                                <li>• Bloating</li>
                                <li>• Heartburn</li>
                                <li>• Vomiting or nausea</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            Some severe symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Black or dark-colored stool (mixed with blood)</li>
                                <li>• Blood vomiting that looks like coffee grounds</li>
                                <li>• Rapid weight loss</li>
                                <li>• Severe abdominal pain</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage gastric ulcers, it is not enough to keep you fit and healthy. Supplements are essential for managing gastric ulcers and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for gastric ulcers. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with gastric ulcers:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Aloe Vera Plus */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Aloe Vera Plus is most commonly used to reduce fat and freckles from the body. But it is also a great natural remedy to treat digestive diseases, heartburn, and multiple types of ulcers. It does so by improving digestion and promoting detoxification, thus restoring a balance between the acids released in the stomach.
                                    </p>
                                </div>

                                {/* Cranberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cranberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A type of evergreen shrub, not only is it delicious in taste, but it is also an exceptionally potent alternative remedy to treat multiple cases of digestive disorders, including stomach ulcers. Natively grown in the United States, cranberries have also proven beneficial in treating viral infections, cancers, the common cold, metabolic syndrome, and inflammation of the stomach lining.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Goldenseal */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Many people use goldenseal to treat a number of digestive disorders, including both types of peptic ulcers. It lessens swelling, provides relief from pain, and helps restore the chemical balance between the stomach acid and mucous barrier that prevents open sores.
                                    </p>
                                </div>

                                {/* Marshmallow */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Marshmallow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Most commonly used to treat whooping cough and sore throats, it also works wonders in treating cases of indigestion and gastric ulcers. It is one of the most beneficial and delicious remedies to prevent stomach ulcers from perforation.
                                    </p>
                                </div>
                            </div>

                            {/* Yarrow */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yarrow</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Yarrow has been used for thousands of years as a healer of infections. Its flowers are known to provide relief during pain, fight off bacteria, and treat cases of stomach ulcers. Regular incorporation will ease indigestion and purify the system of all infection-causing fungi and viruses. If the symptoms of stomach ulcers become severe, it helps provide relief from pain and also stops bleeding in feces.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing gastric ulcers, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default GastricUlcer;