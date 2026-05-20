import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Amyotrophic = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Amyotrophic Lateral Sclerosis</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Amyotrophic Lateral Sclerosis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">

                            <li>• Every year there are around 6,000 Americans diagnosed with Amyotrophic Lateral Sclerosis.</li>
                            <li>• The Amyotrophic Lateral Sclerosis (ALS) Association estimates that there are almost 20,000 people in America suffering from Amyotrophic Lateral Sclerosis at any given point in time.</li>
                            <li>• Out of these people 93% are Caucasian and 60% are men.</li>
                            <li>• On an average, most people are diagnosed with Amyotrophic Lateral Sclerosis at the age of 55.</li>
                            <li>• The disease is more common in people falling in the 40 to 70 age bracket.</li>
                            <li>• The prevalence of this condition in men is 20% more than in women.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Amyotrophic Lateral Sclerosis (ALS) is also known as the Lou Gehrig’s disease. This disease is a neuromuscular disease that is progressive in nature. This disease causes the progressive degeneration of nerve cells that control your motor skills present in the spinal cord and the brain.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Amyotrophic lateral sclerosis is a rare form of neurological disease, which attacks nerve cells that control the voluntary muscle movements you make. Voluntary muscles movements include chewing, breathing, walking, and talking.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When the motor neurons become decapacitated, they are unable to send signals to your muscles. This causes the muscles to wear away (atrophy). The muscles become weak. ALS does not impair a person’s intellectual reasoning, vision, hearing or sense of taste, smell and touch. In most cases, ALS does not affect a person’s sexual, bowel or bladder functions
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since the disease is progressive, it will get worse over time despite treatment
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The ALS may show early signs and symptoms. These will include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>Trouble swallowing</li>
                                <li>Slurred speech</li>
                                <li>Clumsiness or weakness in the hands</li>
                                <li>Trouble in walking or performing everyday tasks</li>
                                <li>Tripping and/or falling</li>
                                <li>Weakness in ankles, feet, or legs</li>
                                <li>Twitching or cramps in the muscles of tongue, shoulder and arms</li>
                                <li>Problem in holding the head up or maintain normal posture</li>
                            </ul>
                            <ul className="text-gray-700 space-y-1">

                                {/* <li>• You can’t stop drinking even when you know it’s troubling you on a social, interpersonal, and physical level.</li> */}
                                <li>• You give up or cut down social activities or personal hobbies.</li>
                                <li>• You experience withdrawal symptoms like sweating, shaking, and nausea every time you try not to drink.</li>
                                <li>• You can’t help but drink even when you know it’s not safe – like before swimming or while driving.</li>
                                <li>• Your alcohol tolerance increases. It takes more drinks then before to get you intoxicated.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Alcoholism, it is not enough to keep you fit and healthy. Supplements are essential for managing Alcoholism and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Alcoholism. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Alcoholism:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Artichoke is a good natural remedy for curing hangovers. In addition to that, the herb has also shown efficacy in controlling alcoholism in people. Also, artichoke is excellent for regulating liver health that may be at risk of damage because of excessive drinking.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kudzu</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Kudzu is a popular Chinese herb that has been used for years to treat alcoholism for over 200 years. Kudzu roots help alcoholics suppress any urges to consume alcohol that may arise owing to their condition. Kudzu extract can be dissolved in water or taken in dietary form to cure alcoholism.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dandelion is an excellent garden remedy for alcoholism. The plant, especially its roots, promotes the production of bile in the body that curbs the alcohol cravings that you may develop from time to time given the influence of this condition.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Milk thistle is a wonder herb when it comes to treating alcoholism. Excessive consumption of alcohol is damaging for the liver and the gall bladder. The herb will control the urge to consume alcohol and simultaneously provide protection to the gall bladder and the liver, ensuring better health for alcoholics attempting to overcome the condition.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Blue Bonnet Evening Primrose Oil 1300 Mg Softgels</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Studies have linked alcohol craving to the lack of PGE1 – a mood-boosting molecule – in the body. In the short run, alcohol increases the PGE1 levels in the body. PGE1 is made up of gamma-linolenic acid, which is found in abundance in evening primrose oil. If taken in moderated quantities, evening primrose oil softgels can help overcome alcoholism.
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

export default Amyotrophic;