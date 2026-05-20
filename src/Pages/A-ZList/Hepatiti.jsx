import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Hepatitis = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Hepatitis</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Hepatitis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Nearly 250 million people globally are affected by hepatitis C, and a much larger population carries the hepatitis B virus.</li>
                            <li>• According to the Centers for Disease Control and Prevention, approximately 4.4 million American citizens are living with chronic hepatitis, based on hospital diagnoses.</li>
                            <li>• Hepatitis is hard to diagnose as the initial symptoms mimic those of the flu.</li>
                            <li>• During an epidemic year, the count of new cases in America can reach 350,000.</li>
                            <li>• One-third of America’s population has hepatitis A, 1.25 million have hepatitis B, and an estimated 3.9 million Americans have hepatitis C.</li>
                            <li>• Hepatitis B is most prevalent in people aged 20-49.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hepatitis is the inflammation of the liver, most commonly caused by a viral infection, though other causes exist. It is divided into five sub-categories based on severity and cause:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li><strong>Hepatitis A and E:</strong> These are short-term (acute) viral infections transmitted through water or food contaminated by feces, such as food prepared by unwashed hands, uncooked food, or water with animal or human waste.</li>
                            <li><strong>Hepatitis B:</strong> Transmitted through infected blood or sexual interaction with an infected individual, it can also pass from mother to child during childbirth.</li>
                            <li><strong>Hepatitis C:</strong> The most common type among those who share needles for drug use, it spreads through contact with an infected person.</li>
                            <li><strong>Hepatitis D:</strong> Transmitted via shared needles, it only occurs in individuals already infected with hepatitis B.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            People at higher risk include those who consume unhygienic meals, engage in unprotected sex, or use unsanitary needles for drug injection.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The initial symptoms of hepatitis are similar to those of the flu and may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Diarrhea</li>
                                <li>• Nausea and vomiting</li>
                                <li>• Loss of appetite</li>
                                <li>• Fatigue</li>
                                <li>• Fever</li>
                                <li>• Joint aches</li>
                                <li>• Weight loss</li>
                                <li>• Slight abdominal pain</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            These symptoms fall under the acute phase of hepatitis. If not diagnosed, they may progress to severe, fulminant stages, potentially leading to death. Severe symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Circulation problems</li>
                                <li>• Itchy skin</li>
                                <li>• Dark urine</li>
                                <li>• Drowsiness</li>
                                <li>• Dizziness</li>
                                <li>• Enlarged spleen</li>
                                <li>• Hives</li>
                                <li>• Headache</li>
                                <li>• Jaundice</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage hepatitis, it is not enough to keep you fit and healthy. Supplements are essential for managing hepatitis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for hepatitis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with hepatitis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Oregon Grape Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregon Grape Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Oregon grape is a helpful all-natural herb used to purify blood. It is used extensively to prevent viral infections and improve liver health. Its extract is a potent alternative to other medications and is safe for those suffering from conditions like hepatitis, jaundice, and gastrointestinal dysfunction.
                                    </p>
                                </div>

                                {/* Turmeric Veggie Caps */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Turmeric is one of the most effective anti-inflammatory herbs and can be a lifesaver for those suffering from problems like an inflamed liver or liver degeneration. Its antibacterial and antiviral properties lower elevated liver enzymes, helping prevent hepatitis.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Yellow Dock */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yellow Dock</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The tonic of yellow dock helps cleanse harmful toxins from the body, making it a potent remedy for disorders linked with blood impurities. It is most beneficial in treating hepatitis B, C, and D, all of which are caused by blood impurities.
                                    </p>
                                </div>

                                {/* Dandelion */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dandelion is a liver cooler, most beneficial in treating hepatitis C. It lowers elevated liver enzymes, calming the liver and ultimately preventing liver breakdown.
                                    </p>
                                </div>
                            </div>

                            {/* Holy Basil */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Holy basil is more effective than many over-the-counter prescriptions for treating hepatitis. Its main function is to fight viral infections and bacteria, making it an effective remedy for hepatitis caused by viral infections.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing hepatitis, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Hepatitis;