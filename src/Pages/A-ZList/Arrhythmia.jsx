import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Arrhythmia = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Arrhythmia</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Arrhythmia</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">

                            <li>• As per the American Heart Association, currently there are around 5 million arrhythmia patients in America.</li>
                            <li>• Arrhythmia is more common in people above the age of 50.</li>
                            <li>• Studies suggest that a majority of sudden cardiac deaths in both men and women result from irregularity in the heart rhythm.</li>
                            <li>• Women older than 75 and suffering from atrial fibrillation have higher chances of cardiovascular deaths or strokes than men in the same situation.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The normal heart beat rhythm varies from person to person. On an average, a human heart usually beats around 60 to 80 times a minute. When you receive a diagnosis of arrhythmia, it is an abnormal heart rhythm for you. The heart beats in a rhythm, the pace of which depends on the electrical impulses that trigger the pumping function.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Arrhythmia is the term that defines changes in the standard rhythm of these electrical impulses – either they happen too fast or too slow or become erratic – causing the heartbeat to quicken, slow down, or become too irregular. This hampers the overall hear function.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A heart that doesn’t beat properly has trouble in effectively pumping blood to the rest of the body. This puts body organs like the brain, lungs, and kidney at risk of damage or malfunction.
                        </p>
                        {/* <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>• Stable angina (angina pectoris)</li>
                            <li>• Unstable angina</li>
                            <li>• Prinzmetal (variant) angina</li>
                            <li>• Microvascular angina</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Arrhythmia often does not exhibit distinct symptoms. Sometimes, arrhythmia patients show no symptoms at all; or even if they do, these symptoms are too normal to trigger curiosity in them. However, this medical condition can be easily detected by a healthcare professional during the course of a routine medical examination.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of arrhythmia include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Shortness of breath and/or breathlessness</li>
                                <li>• Quivering in the chest</li>
                                <li>• Lightheadedness or Dizziness</li>
                                <li>• Nearly fainting or fainting (Syncope)</li>
                                <li>• Weakness</li>
                                <li>• Angina</li>
                                <li>• Confusion and/or difficulty in concentrating</li>
                                <li>• Trouble exercising</li>
                                <li>• Fatigue</li>
                                <li>• Palpitations</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At times, even if an individual notices these symptoms in them, it does not imply that they have arrhythmia.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                           While eating a healthy diet and regular exercise helps to manage Arrhythmia, it is not enough to keep you fit and healthy. Supplements are essential for managing Arrhythmia and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Arrhythmia. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with arrhythmia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Hawthorn has been used since the ancient Roman epoch to cure a variety of health conditions. Today, the berries, leaves, and flowers of this medicinal plant are used to make modern medicines for the treatment of chest pain (angina) and arrhythmia. It specifically strengthens the heart muscles and controls the irregular heartbeat. The herb proves to be an effective remedy for optimal functioning of the heart.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Cayenne is generally a powerful herb that acts as an immediate stimulant for the heart. This herb is strong and herbalists may not recommend it to everyone. Even small amount of cayenne extracts have proven extremely effective in controlling erratic heartbeats resulting from arrhythmia. The adequate amount of this herb to treat palpitations may vary from person to person.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea-Goldenseal Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Together, Echinacea and goldenseal make a strong antioxidant that strengthens the immune system. However, the benefits of this combination are not just limited to providing immune support. The formula strengthens the heart muscles, reducing palpitations and erratic heartbeats. Plus they regulate a healthy blood pressure and blood sugar levels.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Goldenseal is yet another herbal remedy for overcoming arrhythmia. It contains Berberine, which according to scientific studies has proved beneficial for arrhythmia caused by the deficiency of oxygen in the body. This is one of the major reasons why goldenseal is considered effective for promoting general heart function and preventing heart-related diseases.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    CoQ10 or Coenzyme Q10 is a potent antioxidant necessary for the optimal functioning of the heart. CoQ10 is responsible for triggering the antitachycardia pacing of the heart that maintains its rhythm and makes it beat. CoQ10 ensures that the heart beats and functions at the normal pace. It is often a CoQ10 deficiency that leads to possible arrhythmia
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Arrhythmia, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Arrhythmia;