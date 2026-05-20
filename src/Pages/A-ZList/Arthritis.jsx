import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Arthritis = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Arthritis</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Arthritis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">

                            <li>• Arthritis affects more than 300,000 children and 50 million adults in America.</li>
                            <li>• In America, arthritis is the most common cause of disability that affects people of all sexes, ages, and races.</li>
                            <li>• Women are more prone to arthritis than men. The risk increases further as they age.</li>
                            <li>• Osteoarthritis is the most common form of arthritis. Almost 31 million Americans suffer from osteoarthritis.</li>
                            <li>• Around half of the American population aged 65 and above have some form of arthritis.</li>
                            <li>• Around two-thirds of the arthritis patients in America are less than 65 years old.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Arthritis is a common disease but often misunderstood. The term “arthritis” is a collective reference to joint disease or joint pain – it is not, contrary to popular belief, a single disease. Currently, the medical world categorizes arthritis into more than 100 different types and related conditions.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           In simple words, arthritis is a disorder affecting the joints. It is characterized by severe joint pain and inflammation. In most cases, arthritis can be contained using the right medication. However, there are instances where arthritis causes permanent alterations in joints. This may result in immobility or inability to perform normal tasks. These joint changes are sometimes outwardly visible – like knobby finger joints; at others the damage can be assessed only on X-ray.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Arthritis can be:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                           <li>• Degenerative</li>
                           <li>• Inflammatory</li>
                           <li>• Metabolic</li>
                           <li>• Infectious</li>
                        </ul>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           There are two major types of arthritis: rheumatoid and osteoarthritis. Depending on the type of arthritis, an individual’s symptoms may vary. However, there are certain telltale signs arthritis that announce its presence. These include:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of arthritis include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Joint pain</li>
                                <li>• Joint stiffness</li>
                                <li>• Redness</li>
                                <li>• Swelling</li>
                                <li>• Joint inflammation</li>
                                <li>• Limited range of motion</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           In extreme cases, arthritis can lead to disability. It can hamper an individual’s ability to perform everyday tasks. This is especially the case when arthritis affects your arms and hands in particular. In case a person is suffering from arthritis of hips, ankles, knees, or pelvis, it may rob them off their ability to walk, sit, or stand comfortably.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                           While eating a healthy diet and regular exercise helps to manage Arthritis, it is not enough to keep you fit and healthy. Supplements are essential for managing Arthritis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Arthritis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with arthritis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Turmeric is said to be an effective remedy for reducing stiffness, inflammation, and pain associated with osteoarthritis and rheumatoid arthritis. The herb has been extensively used over centuries in ayurvedic and Chinese medicine. Its anti-inflammatory properties block the inflammatory enzymes and cytokines in the body to relieve arthritis pain.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      For years, the astragulus root has been used in Chinese medicine to strengthen the immune system and ward of diseases. This herb also has anti-inflammatory properties that work wonders inside the body by reducing the inflammatory response of our system to diseases like arthritis and heart problems.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Just like turmeric and astragulus, cat’s claw contains anti-inflammatory properties that release prostaglandin E2 in the body. Prostaglandin E2 is an inflammatory mediator connected to arthritis that helps reduce the inflammation caused by the disease. This rainforest herb is also effective in protecting and preventing the loss of cartilage – a defining characteristic of osteoarthritis.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The Echinacea Angustifolia Root is by far the most effective and reliable natural remedy for inflammation. This North American Native herb has been used in traditional herbal medicine for centuries. In addition to eliminating inflammation resulting from arthritis, this herb also relieves stress and other symptoms that might lead to further inflammation.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Olive Leaf</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Research suggests that olive leaf extracts are just as effective for arthritis pain as the anti-inflammatory drug ibuprofen. The herb lowers the levels of C-reactive protein and homocysteine in the body, both of which are significant contributors to the pain and inflammation caused by rheumatoid and other forms of arthritis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing arthritis, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Arthritis;