
import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Fatigue = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Fatigue</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Fatigue</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           <li> • At any given time, about 10% of people universally are suffering from persistent fatigue</li>
                           <li> • According to the National Institute of Health, one in every five people in the US report chronic tiredness that disrupts their normal life.</li>
                           <li> • People who are overweight are more likely to suffer from persistent fatigue.</li>
                           <li> • According to the statistics put forward by the National Highway Traffic Safety Administration, an average of about 100,000 crashes are reported by the police every year that happened because of driver fatigue.</li>
                           <li> • 103 million people reported to have slept while driving in a survey conducted in 2005 by the National Sleep Foundation in the United States.</li>
                           <li> • Chronic Fatigue Syndrome, persistent disabling fatigue, is 2 to 4 times more common in women than men.</li>
                        </ul>
                        <h2 className="text-2xl font-bold mt-4 mb-6">Fast Facts about Energy, Fatigue</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           <li>• At any given time, about 10% of people universally are suffering from persistent fatigue</li>
                           <li>• According to the National Institute of Health, one in every five people in the US report chronic tiredness that disrupts their normal life.</li>
                           <li>• People who are overweight are more likely to suffer from persistent fatigue.</li>
                           <li>• According to the statistics put forward by the National Highway Traffic Safety Administration, an average of about 100,000 crashes are reported by the police every year that happened because of driver fatigue.</li>
                           <li>• 103 million people reported to have slept while driving in a survey conducted in 2005 by the National Sleep Foundation in the United States.</li>
                           <li>• Chronic Fatigue Syndrome, persistent disabling fatigue, is 2 to 4 times more common in women than men.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                           While we all feel tired and fatigued whenever we are overworked or haven’t rested properly and it is normal for the human body, it becomes a problem when it becomes constant , without  any apparent reason.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Over time, due to unhealthy lifestyles and/or aging cholesterol and fat can collects in the arteries and takes the form of plaque. When the plaque buildup thickens, it narrows the blood passageways and makes it difficult for the blood to properly flow through the arteries. If left untreated, atherosclerosis can cause strokes, heart attacks, and even a heart failure.
Atherosclerosis can affect your heart, kidneys, legs, and all other parts of your body. There are several different types of Atherosclerosis. These include the:
                        </p> */}
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Pitta:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A constant state of tiredness that not only reduces your energy, but also affects your concentration and motivation can create psychological and emotional problems and hence, needs to be investigated.
                        </p>
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Vata:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Fatigue is often the symptom or the result of some underlying physical or psychological problem (or a combination of both). It may be associated with various lifestyle factors as well.
                        </p>
                        {/* <h2 className="text-2xl font-bold mb-6">
                           Kapha:
                        </h2> */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Conditions or lifestyle factors that can cause constant fatigue include:
                        </p>

                        <h2 className="text-2xl font-bold mt-6">
                            Serious Health Issues:
                        </h2>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Liver Failure</li>
                            <li>• Diabetes</li>
                            <li>• Kidney disease</li>
                            <li>• Chronic fatigue syndrome</li>
                            <li>• Cancer</li>
                            <li>• Heart disease</li>
                            <li>• Depression</li>
                            <li>• Multiple Sclerosis</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-6">
                            Less Serious Health Issues:
                        </h2>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Anemia</li>
                            <li>• Anxiety</li>
                            <li>• Obesity</li>
                            <li>• Stress</li>
                            <li>• Chronic inflammation</li>
                            <li>• Grief</li>
                            <li>• Persistent pain</li>
                            <li>• Deficiency of certain minerals and/or vitamins</li>
                        </ul>
                        <h2 className="text-2xl font-bold mt-6">
                            Lifestyle Factors:
                        </h2>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Excess or lack of physical activity</li>
                            <li>• Drugs and/or alcohol use</li>
                            <li>• Lack of sleep</li>
                            <li>• Unhealthy diet or eating habits</li>
                            <li>• Certain medications</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
                            Thorough examination and consideration of medical history is required to determine the real casue of fatigue.
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
                          Different people describe fatigue in different manners. Often, they complain of feeling:
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Lack of energy</li>
                                <li>• Weakness</li>
                                <li>• Lack of motivation</li>
                                <li>• Reduced concentration</li>
                                <li>• Constant feeling of exhaustion or tiredness</li>
                                <li>• Difficulty in completing certain regular tasks</li>
                            
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
                          While eating a healthy diet and regular exercise helps to manage fatigue, it is not enough to keep you fit and healthy. Supplements are essential for managing fatigue and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for fatigue. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with lack of energy, and fatigue:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Holy Basil is known for the anti-stress and anti-aging properties and has long been used for these purposes. In addition to these, Holy Basil is highly effective for providing energy and strengthening the stamina and immune system. Thus, it offers relief from continuous fatigue.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Oregano is a member of the mint family and is widely used in the culinary world and traditional medicines. Oregano Oil Veggie capsules are packed with powerful essential nutrients, such as magnesium, manganese, calcium, iron, vitamins A, C and K, antioxidant flavonoids, phenolic and fatty acids. By providing the body with all these nutrients, oregano Oil Veggie capsules provides energy.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Ashwagandha, also known as Indian Ginseng, has long been used in Ayurveda because of its powerful healing and curative properties. It boosts energy and thus helps in reducing fatigue, improves concentration and also strengthens the immune system.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hoodia</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Hoodia is an herb that is used in treatment of various diseases, such as tuberculosis, excessive eating, diabetes, unintended weight loss, and various digestive problems. It also helps overcoming persistant fatigue.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kelp</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Leaves and stem of kelp plant are rich in many trace minerals, like iodine. The kelp supplements by Nature’s Sunshine contain both of these ingredients and thus, are great for increasing the energy levels, and in enhancing the metabolism and glandular system.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Fatigue, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Fatigue;