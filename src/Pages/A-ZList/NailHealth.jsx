import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const NailHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Nail Health</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Nail Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Nails are indicative of our general health, any abnormal changes in them can be hinting towards a chronic disease.</li>
                            <li>• Fungus is the culprit behind half of the nail conditions.</li>
                            <li>• Diabetes patients and those with poor circulation seem to have more nail problems than a healthy person.</li>
                            <li>• Cutting the nails right prevent growth of ingrown nails.</li>
                            <li>• Self-treating an ingrown nail can make the situation worse.</li>
                            <li>• Compulsive Nail biting is a condition called onychophagia with psychological causes involved.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Maintaining our nail health is not that hard. If we keep our nails washed, trimmed and dry then we can stay safe from bacterial and fungal infections. However if the nails become swelled, blue, discolored and thick then it might very well be indicating towards an acute and chronic condition like a kidney disease, lung conditions, heart problems, anemia, diabetes or poor circulation.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common nail health problems are:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>
                                <strong>Nail Biting:</strong> Even though nail biting is mostly considered a psychological stress-relieving condition, it impacts the health of the nails badly.
                            </li>
                            <li>
                                <strong>Beau’s lines:</strong> This condition refers to the horizontal lines and ridges across the nails.
                            </li>
                            <li>
                                <strong>Blue Nails:</strong> When we suffer from poor circulation or if we have a reduced level of red blood cells then our nails tend to turn blue. It shows that we are suffering from lacks of oxygen.
                            </li>
                            <li>
                                <strong>Nail clubbing:</strong> Heart and lung diseases cause the nails to swell and turn purplish blue.
                            </li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            It is necessary that none of the nail deformity or condition should be ignored. By witching closely towards the symptoms you can help with early diagnosis and disease of chronic diseases.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Half portion of the nail is white and half red</li>
                                <li>• Swollen nail with discharge or bleeding</li>
                                <li>• Green color of nails</li>
                                <li>• Blue color of nails</li>
                                <li>• Ridges across the nails</li>
                                <li>• Thick and curved nails</li>
                                <li>• Raised ridges of finger nails that are scooped outwards and have brittle ends</li>
                                <li>• White spots on the nails</li>
                                <li>• Tiny depressions in the nails</li>
                                <li>• Dark yellow nails that are thick and may be pulling away from the nail bed</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Nail health, it is not enough to keep you fit and healthy. Supplements are essential for managing Nail health and reducing symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for any Nail condition. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with maintaining their nail health:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Red Raspberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red Raspberry is packed with rich minerals that improve the health of teeth, hair, skin, nails and bones. With non-existent side effects, red raspberry is rich in magnesium, iron, calcium, phosphorous, potassium and vitamin B and C and works vigorously together for the betterment of ours general health.
                                    </p>
                                </div>

                                {/* Wild Oats */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Wild Oats</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Seeds of the Wild oats acts as a soothing tonic and being rich in nutritive herbs such as calcium, and silica, it not only promotes the health of hair and nails but also repair them at the same time. Brittle nails can be treated with the seeds of wild oats.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Tea Tree Oil */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Tea Tree Oil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Tea tree oil is one of the most affective and commonly used essential oil for beauty and cosmetic purposes. Mostly applied topically to treat acne and skin conditions it is equally affective in killing fungus that is most prevalent on our nails. Highly antiseptic, it treats all kinds of bacteria and fungus that might be living on our nails.
                                    </p>
                                </div>

                                {/* Healthy Nails w/ Oregano Oil */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Healthy Nails w/ Oregano Oil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        As the name of the supplement suggest, the oregano oil works explicitly to improve the health and beauty of or nails. It rejuvenates the dead and stressed nails with its antimicrobial ingredients and then consequently nurtures it with sweet almost oil; the two combine together to revive our nails and give it a glow and improved look.
                                    </p>
                                </div>
                            </div>

                            {/* E-Oil */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">E-Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    E-coil is a multipurpose supplement that works to improve our skin, hair, and nail. E-coil is composed with vitamin E which is a potent antioxidant and protects the skin from lipid peroxidation. This supplement can be used orally and topically for an overall improved skin, hair and nail health.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing nail health, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default NailHealth;