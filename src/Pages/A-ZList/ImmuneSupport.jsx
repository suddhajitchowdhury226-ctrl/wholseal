import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const ImmuneSupport = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Immune Support</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Immune Support</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• A study conducted in 2016 revealed nearly 3% of adults in the U.S. suffer from a weakened immune system.</li>
                            <li>• The same study established that weak immunity is more common in whites, women, and people above the age of 50.</li>
                            <li>• According to the study, the prevalence of this health condition in most people peaks between the ages of 50 and 59.</li>
                            <li>• Lack of sleep is one of the major contributors to weakened immune systems.</li>
                            <li>• Although common weak immunity conditions like influenza and cold are easily treatable through vaccines, the vaccines may have decreased efficacy for people who do not sleep for at least 6 hours a day.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Low immune function and weakened immunity are terms often used to describe the poor and less than active functioning of the immune system. The body’s immune system is primarily responsible for protecting the organs and the body structure from infection and diseases – including any possible developments of cancer.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hence, the immune system should have the enhancement and support it requires to function properly. When the immune function is not performing the way it should, it makes the person increasingly susceptible to flus, colds, infections, and even cancer.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There could be several signs and symptoms that help you determine the efficacy of your immune system. In most cases, people with a weak immunity function will usually experience:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Chronic infections, as the immune system cannot fend off the infection-causing bacteria.</li>
                                <li>• Continuously occurring episodes of cold and flu during the year.</li>
                                <li>• Frequent development of genital herpes and/or cold sores.</li>
                                <li>• Swollen or sore lymph glands.</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Of course, these symptoms may vary from person to person, and may occur in combination with other symptoms at times. The good thing is, the immune system can be strengthened using the right supplements and medication where necessary. Make sure you visit a doctor at the signs of weak immunity to get medical help if required.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage a weak immune system, it is not enough to keep you fit and healthy. Supplements are essential for managing a weak immune system and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for a weak immune system. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with a weak immune system:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Echinacea-Goldenseal */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea-Goldenseal Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Both echinacea and goldenseal are rich in antioxidant properties. They provide immune support to the body and help it protect itself better against cellular damage caused by free radicals.
                                    </p>
                                </div>

                                {/* Oregano Oil */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Oregano oil contains rosmarinic acid that qualifies as a powerful antioxidant. This makes oregano a strong immune support ingredient and one of the highest antioxidant activities, which is around 42 times more than what comes in apples. It bolsters the system and helps it ward off free radicals and bacteria that may lead to various health problems.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Acai Super Berry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Acai Super Berry Antioxidant</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Acai Berries are powerful superfoods that are rich in polyphenols and anthocyanins that make potent antioxidants. This formula also contains the antioxidant properties of goji berries and pomegranate that makes it a complete immune-boosting supplement. The formula is specifically good for maintaining optimal heart and circulatory health.
                                    </p>
                                </div>

                                {/* Ashwagandha */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Ashwagandha has been used for centuries in Ayurvedic medicine as a natural energy booster. This fruit, also known as Indian ginseng, revitalizes the nerves, bones, tissues, and muscles by improving the immune function of the body and protecting them from cellular damage.
                                    </p>
                                </div>
                            </div>

                            {/* Elderberry Plus */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Elderberry Plus (Sambucus)</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Just like almost all other berries, elderberries provide powerful immune support to the body. These berries contain anthocyanidins – that have an immune-stimulant effect on the body. These berries have shown remarkable efficacy in fighting off bacteria and viruses that may cause frequent cold and flu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing a weak immune system, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ImmuneSupport;