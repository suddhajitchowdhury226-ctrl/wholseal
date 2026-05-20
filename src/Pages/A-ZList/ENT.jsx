import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const ENT = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Ear, Hearing, and Tinnitus</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Ear, Hearing, and Tinnitus</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Hearing loss and tinnitus are mostly caused by prolonged exposure to loud sounds.</li>
                            <li>• Extreme conditions of tinnitus can affect a person’s work and personal life and can cause psychological distress.</li>
                            <li>• Men are twice as likely to experience hearing loss as women.</li>
                            <li>• 2 to 3 out of every 1,000 children in the United States are born with hearing loss in one or both ears.</li>
                            <li>• 10% of Americans experience symptoms of tinnitus for more than 5 minutes on a regular basis.</li>
                            <li>• Nearly 50 million Americans experience hearing loss.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When the sound waves in the air reach the structure inside our ears and when this structure converts these sound vibrations into nerve signals, hearing occurs. Our ears are composed of eardrums, cochlea, and tiny hairs, and when either of these components is affected due to various reasons, hearing loss, ear diseases, or tinnitus is experienced.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Tinnitus:</strong> Tinnitus is one of the conditions experienced in the ear and is often considered a symptom for diagnosing various other ear diseases. Tinnitus is a sensation where one feels ringing, hissing, buzzing, whistling, or chirping, or other continuous sounds in the ear. It is caused by continuous exposure to loud noise. Severe cases can cause difficulty in sleeping as the ringing sensation intensifies during quiet.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Causes Behind Hearing Loss and Tinnitus:</strong>
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Infections in the ear canal</li>
                            <li>• Fluid in the middle ear</li>
                            <li>• Exposure to loud noise</li>
                            <li>• Malformation of outer, middle, or inner ear</li>
                            <li>• Tumors</li>
                            <li>• Aging</li>
                            <li>• Injuries on the head or neck</li>
                            <li>• Viruses and diseases</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are various kinds of ear disease conditions that can ultimately lead to hearing loss. To prevent it before it happens, the following symptoms are used to identify such diseases:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Having difficulty in hearing what people are saying</li>
                                <li>• Severe dizziness</li>
                                <li>• Vertigo</li>
                                <li>• Buzzing and ringing</li>
                                <li>• A feeling of fullness in the ears due to buildup of fluid</li>
                                <li>• A small painful bump in the ear</li>
                                <li>• Clear discharge from the ears</li>
                                <li>• Inflammation in the ear canal</li>
                                <li>• Popping sound followed by dizziness, pain, and temporary hearing loss</li>
                                <li>• Growth of small pouches and cysts in the ear</li>
                                <li>• Paralysis of facial muscles</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            These symptoms may indicate diseases like boils, swimmer’s ear, Meniere’s disease, tinnitus, and otomycosis.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage ear, hearing, and tinnitus conditions, it is not enough to keep you fit and healthy. Supplements are essential for managing ear, hearing, and tinnitus and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for ear, hearing, and tinnitus. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with ear, hearing, and tinnitus conditions:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* CoQ10 */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Due to bacterial infections in the mastoid bone in our ears, the cells become infected and inflamed, and as a result, the infection spreads rapidly to the outside of our ears. Coenzyme Q10 is a naturally occurring agent in our body and is also present in much of the food we consume on a daily basis. CoQ10 functions as an antioxidant and protects the cells in our ears from breaking down or getting damaged.
                                    </p>
                                </div>

                                {/* Holy Basil */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Various ear conditions and infections lead to severe pain in the ears. Holy Basil Veggie Caps are antioxidants and help with treating the ear by removing damaging agents and relieving earaches.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Eyebright */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Eyebright</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Eyebright is a very effective supplement used against allergies and hence offers relief and treatment for those suffering from allergenic ear infections. Severe ear infections that result in bleeding, inflammation, and discharge from the ear also cause high fever, and Eyebright helps in bringing down the high temperature. This supplement is for oral intake.
                                    </p>
                                </div>

                                {/* Red Yeast Rice + CoQ10 */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Yeast Rice + CoQ10</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Tinnitus symptoms and cholesterol levels are closely related. Studies showed that lowering cholesterol levels can also lower the intensity of tinnitus in the ear. Red Yeast Rice combined with CoQ10 is mostly used to support healthy cardiovascular functions because it helps fight high cholesterol levels, and therefore those suffering from tinnitus can also use this for treatment.
                                    </p>
                                </div>
                            </div>

                            {/* Hops */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hops</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Hops flowers are known for their calming effect and for allowing better sleep. Therefore, in addition to helping tinnitus patients with a good night’s sleep, hops also treat earaches. Hops are anti-infective in nature and are very effective in treating infections in our ears, reducing symptoms, bringing relief from pain, and helping patients calm down.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing ear, hearing, and tinnitus conditions, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ENT;