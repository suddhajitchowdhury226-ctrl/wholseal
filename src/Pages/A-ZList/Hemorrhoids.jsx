import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Hemorrhoids = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Hemorrhoids</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Hemorrhoids</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Approximately 50% of all Americans above or near the age of 50 suffer from hemorrhoids, while only 4% of them seek medical treatment.</li>
                            <li>• Women are more likely to suffer from hemorrhoids (24.9%) compared to men (15.2%). Men are more likely to get medical treatment compared to women.</li>
                            <li>• An estimated 10 million people in America suffer from hemorrhoids annually.</li>
                            <li>• Each year, approximately 1 million new cases of hemorrhoids are diagnosed, and 10-20% of them require surgical intervention.</li>
                            <li>• Each year, nearly 316,000 people are hospitalized in America for external hemorrhoids.</li>
                            <li>• Out of these 316,000, approximately 17 die each year.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Commonly referred to as piles, hemorrhoids are swollen veins around the rectum and lower part of the anus. When one develops hemorrhoids, the walls of these vessels stretch and become irritated. The word hemorrhoid has Greek origins, meaning veins responsible for discharging blood. Hemorrhoids can be divided into two types based on their severity: internal and external.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Internal hemorrhoids are inside the rectum and invisible from the outside. These are typically not painful, with the most common symptom being rectal bleeding. External hemorrhoids, on the other hand, are visible around the skin of the anus and can be very painful due to the presence of sensitive nerves.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Risk factors for developing hemorrhoids include genetics, heavy lifting, obesity, diarrhea, frequent anal intercourse, or constant strain on the body. Many women develop hemorrhoids during pregnancy as the enlarging uterus presses on the veins in the colon.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of internal hemorrhoids differ from those of external hemorrhoids; however, some common noticeable symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Severe itching around the anal area</li>
                                <li>• Pain and irritation around the anus</li>
                                <li>• Swelling and painful lump formation around the anus</li>
                                <li>• Painful bowel movements</li>
                                <li>• Fecal leakage</li>
                                <li>• Blood on the tissue after bowel movements</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            While hemorrhoids may be painful, they are not life-threatening. They often resolve on their own without medical treatment. However, if blood loss continues or severe pain persists for more than a few hours, seek medical assistance, as prolonged hemorrhoids can lead to anemia, pale skin, and weakness.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage hemorrhoids, it is not enough to keep you fit and healthy. Supplements are essential for managing hemorrhoids and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for hemorrhoids. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with hemorrhoids:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Echinacea Angustifolia Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Known as a miraculous plant, Echinacea angustifolia root is one of the most popular alternatives to natural antibiotics and nutritional supplements. Its antiseptic, antifungal, and antiviral properties help restore the body’s resistance to diseases. Frequent application on areas that itch or are inflamed relieves, disinfects, and numbs them, making it an excellent choice for treating hemorrhoids.
                                    </p>
                                </div>

                                {/* Cascara Sagrada */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cascara Sagrada</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        One of the most effective over-the-counter medications for conditions like constipation and hemorrhoids, Cascara’s herbal benefits are unmatched. Generally safe to use, it may, in rare cases, cause liver injury when taken in high doses.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Goldenseal */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Goldenseal is commonly used to treat digestive disorders, including peptic ulcers, constipation, diarrhea, intestinal gas, and hemorrhoids. It reduces swelling and pain in the applied area. It is frequently used in skin-related products such as vaginal creams and serums for women, as it limits pain and swelling.
                                    </p>
                                </div>

                                {/* Chamomile */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        One of the safest herbal medicines to treat hemorrhoids, chamomile extract works as a mild relaxant to reduce irritation and pain around the anus. It is also beneficial in treating diarrhea, insomnia, and anxiety. When applied to the skin, it heals wounds faster and reduces irritation or burning sensations.
                                    </p>
                                </div>
                            </div>

                            {/* Horsechestnut */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Horsechestnut</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Horsechestnut has been used throughout Europe for nearly a century. Its anti-inflammatory properties are most effective for treating hemorrhoids, frostbite, leg ulcers, and tightening of arteries.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing hemorrhoids, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Hemorrhoids;