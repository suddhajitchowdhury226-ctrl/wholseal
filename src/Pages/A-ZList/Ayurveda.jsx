
import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Ayurveda = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Ayurveda</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Ayurveda</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           <li> • Ayurveda treatment is based on five elements; space, air, water, fire and earth, alternatively called pitta, vata, and kapha.</li>
                           <li> • Ayurveda does not always ensure as a safe practice and can have side effects or negative impact.</li>
                           <li> • Ayurveda divides people into three doshas, each distinct in their mental and physical traits</li>
                           <li> • Ayurveda is Indian in origin and is believed to be one of thethe oldest healing treatments.</li>
                           <li> • Medicines used in Ayurveda are mostly milk, ashes of pearls, ghee, honey, molasses, rock salts, diamonds and several types of herbs.</li>
                           <li> • Ayurveda detoxification technique includes fasting, meditation, massage, yoga and other exercises assigned according to the doshas of the patient.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Ayurveda is a medical practice unlike the conventional one. It originated in India and has been in practice for at least five thousand years. Ayurveda is based on the belief that our body is made of five elements; space water, fire, air and earth and that in order for a person to remain healthy these five elements must work in conformity. Ayurveda is based on three energies.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Over time, due to unhealthy lifestyles and/or aging cholesterol and fat can collects in the arteries and takes the form of plaque. When the plaque buildup thickens, it narrows the blood passageways and makes it difficult for the blood to properly flow through the arteries. If left untreated, atherosclerosis can cause strokes, heart attacks, and even a heart failure.
Atherosclerosis can affect your heart, kidneys, legs, and all other parts of your body. There are several different types of Atherosclerosis. These include the:
                        </p> */}
                        <h2 className="text-2xl font-bold mb-6">
                           Pitta:
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This energy represents fire in our body and is thought to control our digestive and endocrine systems.
                        </p>
                        <h2 className="text-2xl font-bold mb-6">
                           Vata:
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This energy is linked with air and space and associated with breathing and blood circulation.
                        </p>
                        <h2 className="text-2xl font-bold mb-6">
                           Kapha:
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Kapha represents earth and water and linked with growth control and strengths in the upper body.
                        </p>
                        {/* <ul className="pl-6 text-gray-700 space-y-2">
                           <li>• The autoimmune system is unable to distinguish healthy tissue and harmful antigens and sets off on a chain reaction that begins destruction of normal cells.</li>
                           <li>• Some drugs might also confuse the immune system.</li>
                           <li>• There are certain bacteria and virus that cause the change in the immune system.</li>
                           <li>• Chemical Irritants and environmental irritants could be the reason.</li>
                        </ul> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Ayurveda strongly believes in dreams and often take that as an indication of health conditions. The following are considered as symptoms:
Dream of birds building their nest and of hair falling indicates an illness that is about to come
A person who dreams of dogs or a camel ride is more likely to suffer from tuberculosis.
If a person sees himself covered in ghee then they might have a chance of contracting a chronic skin disease.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                               <li>• Disturbed sleep</li>
                               <li>• Panicky and nervous feelings</li>
                               <li>• Overthinking</li>
                               <li>• Weight loss</li>
                               <li>• Dry and flaky skin</li>
                               <li>• Digestive issues</li>
                            </ul>
                            
                        </div>
                        {/* <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           The disease can be diagnosed with the help of series of tests.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps manage your health,  it is not enough to keep you fit and healthy according to Ayurveda. Ayurvedic supplements are essential for managing your health according to Ayurveda. But it should be kept in mind that supplements should not be used to replace any treatment. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following Ayurvedic supplements have proven to benefit people:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Ashwagandha or Rennet is a winter cherry most useful when energy of a person is completely out of hand and when more energy is being used than the energy being put back. Unbalanced energy can lead to excessive stress. And this stress can further lead to other health conditions such as breaking down of immune system, irritable bowel, headaches and unbalanced blood sugar level. Ashwagandha is most prominently known for its rejuvenating properties and as a result proves effective in chronic fatigue syndrome. This herb helps greatly to recover from wasting diseases and from chemotherapy.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Neem</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Azadirachta indica (Neem) is an herb widely utilized in Ayurveda, Unani, and Homoeopathic medication. Neem has anti-cancer, antioxidant, wound healing, and anti-microbial properties and is abundantly used for Ayurveda treatments. They are made into toothpastes and their small twigs are even used as a toothbrush itself. Neem is known for its cleaning properties and helps detoxify blood, provide better vision and balance acidity and beneficial bacteria in the digestive tract.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Triphala</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The literal meaning of Triphala is three fruit which also defines its origins. Containing the properties of three fruits, Triphala works as a gentle bowel tonic and helps with balancing digestion. Not just that but this fruit also helps regulate a healthy respiratory, cardiovascular, renal, reproductive and nervous system.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Turmeric is one of the most commonly used herbs in the Ayurveda treatments. Its strong anti-inflammatory and antioxidant properties make it very effective for use during joint pains, arthritis and rheumatism. Moreover it is also used as a tonic for protecting liver, gallbladder, and improving other digestive functions.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Gotu Kola</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Gotu Kola is an Indian pennywort most commonly known as Centella. This herb is not only used as a traditional Indian medicine but also as ancient Chinese and African medicine. Gotu Kola is effectual for treating bacterial and viral infections in most parts of the body. This herbal medicine is also used for treating fatigue, anxiety, depression, sunstroke, and fluid around the lungs, cognitive function of the brain and for curing wounds among the long list of countless other treatments it provides.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Ayurveda, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Ayurveda;