import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Eyeandvision = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Eye and Vision Care</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Eye and Vision Care</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• About 2.5 million people in this world have vision problems, yet they remain uncorrected even though they are preventable.</li>
                            <li>• Cataract is one of the leading causes of blindness.</li>
                            <li>• 60% of road accidents are caused due to uncorrected vision.</li>
                            <li>• About 80% of vision problems worldwide are avoidable and even curable.</li>
                            <li>• According to the American Academy of Ophthalmology, by the age of 75, approximately half of all Americans have cataracts.</li>
                            <li>• A consensus meeting concluded that between the years 2010 and 2050, the estimated number of people affected by the most common eye diseases will double.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our eyes are among our most valuable assets, yet most people live their lives unaware of the fact that there might be something wrong with their vision. Lack of vision care and regular checkups is one of the most common reasons people contract various eye diseases. While most of them can be treated easily, some can lead to blindness if left untreated for long. These issues may include:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Cataracts:</strong> Cataract is one of the leading causes of blindness all over the world. The reason behind the eye disease might differ from person to person. It can be because of high exposure to UV rays, diabetes, or smoking.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Glaucoma:</strong> This eye disease is the second most common reason for blindness. It damages the eye’s optic nerve and is often found in people over 60 years of age. Early treatment of the disease, however, can prevent blindness.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Childhood Blindness:</strong> A blindness caused when a group of conditions and diseases are left untreated in childhood and result in severe visual impairment.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are more than a hundred diseases that are related to eye and vision. But their symptoms range among the following:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Itching, burning, and heavy discharge</li>
                                <li>• Sudden eye pains</li>
                                <li>• Double hazy or double visions</li>
                                <li>• Swollen eyes with redness</li>
                                <li>• Spider webs</li>
                                <li>• Seeing flashing lights or floating spots</li>
                                <li>• Frequent or infrequent blinking</li>
                                <li>• Bloodshot eyes</li>
                                <li>• Bulging eyes</li>
                                <li>• Bump on eye</li>
                                <li>• Clouding of the eye’s surface</li>
                                <li>• Crusty eyelid</li>
                                <li>• Loss of eyelashes</li>
                                <li>• Eyes pointing in different directions</li>
                                <li>• Halos around lights</li>
                                <li>• Large and dilated pupils</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            It’s important to never ignore any of the above symptoms or problems experienced in vision. Early treatment and care can save your eyes and ensure optimal health.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage eye and vision care, it is not enough to keep you fit and healthy. Supplements are essential for managing eye and vision care and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for eye and vision care. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with eye and vision care:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Bilberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberry is a blueberry rich in anthocyanosides. This chemical compound gives it potent antioxidant and anti-inflammatory properties. Among many other advantages, they help increase the retinal pigment in our eyes and increase our sight’s tolerance to light. In addition, bilberry is also effective in maintaining the flexibility of red blood cells and allows them to pass more easily through the capillaries, and since our eyes have many of them, intake of bilberry is beneficial in improving our eyesight. Moreover, bilberry improves our night vision, slows macular degeneration, and prevents cataracts and diabetic retinopathy.
                                    </p>
                                </div>

                                {/* Chlorella */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chlorella</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The benefits of chlorella are widespread; nearly most diseases in a human body from head to toe can be improved by these tiny algae. Chlorella is rich with carotenoids, a special plant pigment that feeds our eyes and nerves.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Ginkgo */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginkgo</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Consuming ginkgo on a daily basis improves our blood circulation to the brain, head, and eyes. It protects our eyes against visual field damage, improves allergy symptoms, and provides protection against eye damage from type 2 diabetes, i.e., retinopathy.
                                    </p>
                                </div>

                                {/* Eyebright */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Eyebright</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Eyebright herb is used for countless eye conditions. Many people use it as a lotion or eyewash for treating conditions such as conjunctivitis, inflammation of the eyelids at the edge of the lashes, eye fatigue, inflammation of the blood vessels, and glued and inflamed eyes.
                                    </p>
                                </div>
                            </div>

                            {/* Oregon Grape Root */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregon Grape Root</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Oregon grape root is a valuable herb and has been helpful in purifying the blood. It is used extensively in herbal remedies for infections, including those of the eyes. Herbalists recommend it as an eyewash after considerable dilution. Oregon grape root has anti-inflammatory, antifungal, and antibacterial properties and helps with the treatment of dry eyes, red eyes, excessive watering, and macular degeneration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing eye and vision care, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Eyeandvision;