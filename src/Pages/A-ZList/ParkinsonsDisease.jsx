import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const ParkinsonsDisease = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Parkinson’s Disease</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Parkinson’s Disease</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• According to the National Parkinson Foundation, around one million people suffer from Parkinson’s disease in the United States alone.</li>
                            <li>• Despite advancements in medical science, the actual cause of Parkinson’s disease is still unknown.</li>
                            <li>• There is no specific test for diagnosing Parkinson’s disease.</li>
                            <li>• The world-renowned boxing champion Muhammad Ali, who died on June 3, 2016, was diagnosed with the disease in 1984 at age 42.</li>
                            <li>• Parkinson’s has affected around 4 million people worldwide.</li>
                            <li>• Although treatment can improve patients’ quality of life, the disease itself is incurable.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Parkinson’s is a neurodegenerative disorder of the central nervous system (CNS). It affects the functioning of the nerve cells responsible for producing dopamine and ultimately causes their death. This loss of nerve cells occurs in a specific part of the brain known as the “substantia nigra.”
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dopamine is a neurotransmitter that controls and coordinates the movement of different body parts and emotions as well.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">Although it is not a life-threatening disease, due to the complications it causes, Parkinson’s has been rated as the 14th leading cause of death in the United States by the Centers for Disease Control and Prevention.</p>
                        <p className="text-gray-700 leading-relaxed mb-4">Unfortunately, like its actual cause, no cure has been found for Parkinson’s disease. However, treatment (including medication and/or surgery) can significantly improve the quality of life by hepping patients control the signs and symptoms</p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Also, the absence of a diagnostic test for Parkinson’s makes prognosis very difficult. Doctors must perform a complete neurological examination and consider the medical history of the patient and their family to diagnose the disease.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Parkinson’s disease may show varying symptoms in different patients. Since it is a progressive disease, the signs and symptoms change as it develops. Early symptoms may be very minor, such as a slight tremor in a hand, and often go unnoticed during the early stages.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Symptoms of Parkinson’s disease can be divided into two categories:
                        </p>
                        <h3 className="text-lg font-bold text-gray-700 mb-3">1. Motor Symptoms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Tremor in legs, arms, hands, face, and/or jaw, usually during the resting position, hence called ‘resting tremor’.</li>
                                <li>• Stiff or rigid limbs and muscles.</li>
                                <li>• Freezing, a brief period during which the patient is unable to move.</li>
                                <li>• Slowed and limited movement.</li>
                                <li>• Problems with walking, balancing, and coordination, scientifically called ‘postural instability’.</li>
                                <li>• Loss of facial movement that affects expressions.</li>
                            </ul>
                        </div>
                        <h3 className="text-lg font-bold text-gray-700 mt-6 mb-3">2. Non-Motor Symptoms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Depression and/or anxiety.</li>
                                <li>• Sleep-related problems.</li>
                                <li>• Constipation.</li>
                                <li>• Losing the sense of smell.</li>
                                <li>• Weight gain or loss.</li>
                                <li>• Low blood pressure during standing, called ‘orthostatic hypotension’.</li>
                                <li>• Dental health issues.</li>
                                <li>• Vision problems.</li>
                                <li>• Increased production of saliva.</li>
                                <li>• Certain cognitive issues.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise help manage Parkinson’s disease, it is not enough to keep you fit and healthy. Supplements are essential for managing Parkinson’s disease and reducing its symptoms. However, supplements should not replace treatment for Parkinson’s disease. It is not always true that natural products are safe for use. Many products can react with your body and produce adverse reactions. Thus, it is better to consult your doctor before starting any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Parkinson’s disease:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* CoQ10 */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        According to research by Juntendo University School of Medicine in Japan, CoQ10 (coenzyme Q10) may improve Parkinson’s symptoms. A clinical study on 58 patients during the ‘wearing off’ phase, when medicines lose effectiveness, showed positive results with ubiquinol, the reduced form of CoQ10. It improves mitochondrial function, which is disturbed in Parkinson’s. CoQ10 is found naturally in parsley, organ meat, nuts, sesame seeds, and broccoli, and is available in capsule form.
                                    </p>
                                </div>

                                {/* Red Yeast Rice + CoQ10 */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Yeast Rice + CoQ10</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red yeast rice, a popular ingredient in Chinese cuisine, has been used as a medicinal food for ages. It helps maintain healthy blood circulation, potentially reducing limb freezing in Parkinson’s patients. However, it may lower CoQ10 levels, essential for muscle and heart health, so it should be taken with CoQ10 supplements.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* L-Phenylalanine */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">L-Phenylalanine 500 mg Vegetable Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        L-Phenylalanine is easily converted into tyrosine, an essential amino acid and a building block for neurotransmitters norepinephrine and dopamine. These are crucial for a healthy nervous system. Since the body does not produce L-Phenylalanine naturally, it must be included in the diet.
                                    </p>
                                </div>

                                {/* Essential Oils */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Essential Oils</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Vetiver essential oil helps reduce tremors, while frankincense and helichrysum oils reduce brain inflammation. Essential oils also help relieve digestive and sleep problems, depression, and skin inflammation, making them useful for Parkinson’s patients.
                                    </p>
                                </div>
                            </div>

                            {/* Green Tea */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Tea</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Theanine in green tea improves dopamine levels in the brain. Additionally, it contains polyphenol antioxidants that support the body in fighting free radicals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Parkinson’s disease, but you should exercise proper caution and consult your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before starting any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ParkinsonsDisease;