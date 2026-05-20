import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const CongestiveHeartFailure = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Congestive Heart Failure</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Congestive Heart Failure</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Currently, there are 5 million people in America living with congestive heart failure (CHF)</li>
                            <li>• Out of these, nearly 1.4 million people suffering from CHF are aged 60 and below.</li>

                            <li>• Sudden deaths are common in people with a congestive heart failure condition. It is about 6 to 9 times more frequent in this case than compared to the general population.</li>
                            <li>• CHF is the most commonly diagnosed heart condition in people over 65 years of age. </li>
                            <li>• The condition makes up for almost 11 million visits to the physician every year, and accounts for more annual hospitalizations than those resulting from combined cases of cancer in the country.</li>
                            <li>• More than half of the people that are diagnosed with CHF, do not live more than 5 years after diagnosis.</li>




                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Contrary to common belief, heart failure is not a condition where the heart completely stops working. It is in fact the condition where the heart becomes weak, pumping blood at a much slower pace than normal.
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        With congestive heart failure, the blood is transmitted from the heart to the body at a slower rate, which increases pressure on the heart. As the heart becomes unable to pump enough nutrients and oxygen to the body, its chambers stretch in order to hold and pump more blood through the body. Alternatively, the same may even thicken and become stiff.
                        </p>
                        
                    <p>Eventually, the heart muscle weakens, unable to pump blood properly. This takes toll on the kidneys and may lead to water retention in the body. The fluid builds up in different body organs, making it congested – hence the term “congestive” heart failure is used to describe the condition.</p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        The congestive heart failure condition can be both acute (sudden) and chronic (ongoing). There are several symptoms that may hint towards a possible case of congestive heart failure. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Dyspnea (shortness of breath experienced when lying down or due to exertion)</li>
                                <li>• Weakness and fatigue</li>
                                <li>• Edema (swelling in ankles, feet, and legs)</li>
                                <li>• Irregular or rapid heartbeat</li>
                                <li>• Reduced exercising stamina</li>
                                <li>• Continuous wheezing and/or cough with blood-tinged (pinkish) phlegm</li>
                                <li>• Increased urination at night</li>
                                <li>• Rapid weight gain caused by fluid retention</li>
                                <li>• Nausea and lack of appetite</li>
                                <li>• Reduced alertness and problems in concentrating </li>
                                <li>• Extreme shortness of breath</li>
                                <li>• Chest pain (caused usually during a heart attack)</li>

                            
                            </ul>
                            
                            {/*<ul className="text-gray-700 space-y-1">
                                <li>• Hot temper</li>
                                <li>• Poor planning</li>
                                <li>• Difficulty following through</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Difficulty coping with stress</li>
                            </ul>*/}

                        </div>


                        <p className="text-gray-700 leading-relaxed mb-4 pt-4" >
                        It is advised that you get your heart and circulatory health checked if you face any one or more of these symptoms. In case of extreme shortness of breath and/or chest pain, get immediate medical attention.
                            </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Congestive Heart Failure, it is not enough to keep you fit and healthy. Supplements are essential for managing Congestive Heart Failure and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Congestive Heart Failure. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Congestive Heart Failure:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    By now it is common knowledge that CHF leads to slow circulation of blood and less supply of oxygen and nutrients to the rest of the body. Hawthorn is an effective natural remedy for improving blood flow and ensuring adequate supply of oxygen to the body that lessens the risk of congestion.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Heart Formula</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    The Heart Formula by Ray’s Healthy Living contains hawthorn and ginger both of which are potent natural agents for regulating optimal heart health. Ginger heals are repairs the heart, improves circulation of blood, maintains healthy blood pressure, and lowers bad cholesterol – all of which contributes to negating the congestive heart failure.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Dandelion is an excellent herbal diuretic that helps overcome the fluid retention in the body. The use of this herb triggers frequent urination that rids the body off excessive fluid and regulates healhy functioning of the kidney.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    
                            Now Foods Cayenne 500 mg Veg Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Cayenne peppers are natural vasodilators. Vasodilators help open up arterial passageways that allow better flow of blood throughout the body. With improved blood flow, the supply of oxygen and nutrients to the body improves as well.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                CoQ10 is a vital source of energy for the heart – the energy it requires to function properly. Regular use of CoQ10 has shown improvement in the heart function of patients previously suffering from heart failure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing Congestive Heart Failure, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default CongestiveHeartFailure;