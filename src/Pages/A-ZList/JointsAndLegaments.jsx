

import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const JointsAndLegaments = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Joints and Ligaments</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Joints and Ligaments</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• The joints and ligaments in our body begin to degenerate as we reach old age. The wear and tear drains up the fluid and causes the bones to rub against each other, causing pain while walking.</li>
                            <li>• Osteoarthritis affects about 27 million Americans and is the main reason that so many people “slow down” as they get older.</li>
                            <li>• Smoking can increase the risk of Rheumatic disease.</li>
                            <li>• Arthritis is not just an old people’s disease, it even affects the youngsters.</li>
                            <li>• Unlike what is commonly believed, Rheumatism encompasses 200 different diseases rather than just one.</li>
                            <li>• It is estimated that as much as 80% people will experience back pain at some point in their lives.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Ligaments are the fibrous connective tissues that connect one bone to another. Joints are that point where individual bones meet and allow movement for the bones. Most of the time, it is the body’s own immune system that ends up attacking the connective tissue of our body and causes various joints and ligaments diseases. Other causes include aging, wear and tear in the joints, injury, and overuse.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Many times, the joints and ligaments are damaged as a side effect of other conditions such as drug hypersensitivity, tuberculosis, coccidioidomycosis, leprosy, and sarcoidosis.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The most common kinds of problems caused in the joints that end up affecting the soft tissue of ligaments include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Arthritis</li>
                            <li>• Rheumatoid arthritis</li>
                            <li>• Rotator cuff injuries</li>
                            <li>• Tendonitis</li>
                            <li>• Frozen shoulder</li>
                            <li>• Bursitis</li>
                            <li>• Fibromyalgia</li>
                            <li>• Infectious arthritis</li>
                            <li>• Back Pain</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Most of these bone joint and ligament conditions are degenerative. Back pain is singlehandedly responsible for the disability of many people worldwide.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Any pain in the body should not be taken lightly. Early diagnosis of most diseases can help with treatments and cure. Following are the symptoms that might indicate joint and ligament conditions:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Pain in the joints triggered by any weight lifting, pressuring, or motion activity.</li>
                                <li>• Swelling in the joints.</li>
                                <li>• Tenderness in the joints.</li>
                                <li>• Stiffness in more than one joint.</li>
                                <li>• Warmth in joints.</li>
                                <li>• Redness.</li>
                                <li>• Difficulty in movements.</li>
                                <li>• Weakness and locking of joints.</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Joint pains in the body can be caused by any injury that ends up affecting the tendons and ligaments. Most common are shoulder pains, knee pain, back pains, and ankle pain.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage joints and ligaments, it is not enough to keep you fit and healthy. Supplements are essential for managing joints and ligaments and reducing problems. But it should be kept in mind that supplements should not be used to replace any medical treatment. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with joint and ligament related issues:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Bacopa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used actively in traditional Indian medicine, people also take Bacopa to treat backache, hoarseness, mental illness, epilepsy, and joint pain. Bacopa is very effective as a chronic pain reducer and is a well-established herbal therapy for pain management. Bacopa acts in two ways; it has anti-depressant properties as well as pain reduction abilities.
                                    </p>
                                </div>

                                {/* Bilberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberry is rich in anthocyanosides and, as a result, its strong antioxidant properties strengthen our blood vessels, capillary walls, red blood cells, and stabilize collagen tissues. These collagen tissues include tendons, ligaments, and cartilage. Bilberry is also very effective in reducing swelling, bruising, and burning.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Ginger */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginger</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        While ginger has been in use for centuries for the treatment of various health conditions, recently it has also been discovered to be very effective for treating many forms of arthritis, including rheumatoid, degenerative, and inflammatory.
                                    </p>
                                </div>

                                {/* Glucosamine / Chondroitin */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Glucosamine / Chondroitin</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Glucosamine and chondroitin are two key components found in human cartilage and play an important role in keeping our joints healthy. However, upon aging, our body stops producing more glucosamine and chondroitin, and we end up with stiff and painful joints. The oral intake of this natural supplement proves very valuable when it comes to the treatment of joint-related diseases. It slows down the ongoing degeneration of joints and also prevents further degeneration from happening.
                                    </p>
                                </div>
                            </div>

                            {/* Turmeric */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Turmeric is a natural tonic, and curcumin is its key component. It is one of the traditional Indian herbs and has been in use for ages for the treatment and pain relief from sore joints, arthritis, and rheumatism. Its enzyme-boosting ability helps overweight people cut down weight and feel relief in their knees and ankles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above-mentioned natural supplements are known to help in controlling and managing joints and ligaments, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default JointsAndLegaments;