// KidneyBladderDiseases.jsx

import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const KidneyBladderDiseases = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Kidney/Bladder Diseases</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Kidney/Bladder Diseases</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Kidney diseases caused the death of around 47,000 people in America in the year 2013.</li>
                            <li>• It is estimated that kidney diseases cause more deaths every year than those caused by prostate or breast cancer.</li>
                            <li>• On average, there are 661,000 people in America suffering from kidney failure.</li>
                            <li>• Out of these people, around 468,000 undergo regular dialysis procedures and almost 193,000 get a functioning kidney transplant.</li>
                            <li>• African Americans are 3.7 times more prone to having kidney failures than their Caucasian counterparts.</li>
                            <li>• Almost 14% of the population in America suffers from a chronic kidney disease at a given period in time.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The kidney and the bladder are part of the urinary tract in your body. These organs are the main components of the drainage system of your body and are responsible for removing urine from it. Any problems in these organs can make the proper disposal of urine difficult for your body and lead to a number of different health conditions.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Urologic or kidney-related conditions or diseases include kidney stones, urinary tract infections, problems with bladder control, and prostate-related problems, among others. While some kidney conditions are short-term, others may take a while before they can be cured.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Kidney ailments are often called the “silent diseases” because they usually don’t show any signs or symptoms of their presence at an early stage. This is one of the major reasons why kidney and bladder-related diseases usually go unnoticed until they reach an advanced stage.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While various kidney and bladder diseases may exhibit symptoms of their own, there are certain common symptoms that point towards possible urological conditions. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Trouble urinating</li>
                                <li>• Pain while urinating</li>
                                <li>• The presence of blood in urine</li>
                                <li>• Unexplained changes in your urinary pattern</li>
                                <li>• Increased urinating frequency</li>
                                <li>• Weak urinary stream</li>
                                <li>• Continuing urinary tract infection</li>
                                <li>• Mass in testicles</li>
                                <li>• Male infertility, erectile dysfunction, or impotence</li>
                                <li>• Incontinence</li>
                                <li>• Pain or discomfort in lower abdomen</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            At the first signs of experiencing any of these symptoms, visit a urologist as soon as you can.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage kidney/bladder diseases, it is not enough to keep you fit and healthy. Supplements are essential for managing kidney/bladder diseases and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for kidney/bladder diseases. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with kidney/bladder diseases:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Holy Basil */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Holy basil is a natural mild diuretic that also acts as an active detoxifying agent for the kidneys. The herb is effective in increasing the urination frequency in people that helps their body flush out the excess amounts of uric acids. Excessive uric acid is the most common cause of kidney stones. Hence, holy basil is a natural remedy for preventing and flushing out kidney stones while maintaining healthy kidney function.
                                    </p>
                                </div>

                                {/* Cranberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cranberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cranberries are the go-to remedies for urinary tract infections and other bladder-related ailments. These berries are rich in antioxidants that specifically counter the free-radical damage in the kidneys and bladder. The berries also prevent the infection-causing bacteria in the urinary tract from sticking to the walls and causing damage.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Milk Thistle */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        For centuries, milk thistle has been used to protect the kidneys, liver, and gallbladder from possible damage. The herb has proven efficacy in regenerating kidney cells that repair any damage to the kidney. It also packs antioxidant properties that prevent oxidative damage in the organs.
                                    </p>
                                </div>

                                {/* Nettle */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nettle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Did you know countries like Germany have approved nettle as a potent herbal treatment for kidney-related diseases? The herb is a natural diuretic that increases the frequency and volume of urine and helps the body flush out disease-causing urea and bacteria out of the urinary tract.
                                    </p>
                                </div>
                            </div>

                            {/* Mushroom Immune */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Mushroom Immune (Organic)</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The organic formula of Ray’s Healthy Living Mushroom Immune contains cordyceps mushrooms – an ancient Chinese herb used in treating various health conditions, including the treatment of renal failure and renal dysfunction and a host of other kidney problems. It also reduces the amount of urea and creatinine in blood and promotes healthy functioning of the kidneys.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing kidney/bladder diseases, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default KidneyBladderDiseases;