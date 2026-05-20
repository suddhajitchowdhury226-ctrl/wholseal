import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BacterialInfections = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Bacterial Infections</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Bacterial Infections</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• There are millions of bacteria living on our skin, in our intestines, and on our genitalia.</li>
                            <li>• Not all of the bacteria living on or on our bodies are harmful for us.</li>
                            <li>• Medical science usually treats bacterial infections using antibiotics.</li>
                            <li>• Most bacteria have adapted to the widespread exposure to antibiotics and sport great antimicrobial resistance</li>
                            <li>• There are around 2 million people in the U.S. who get infected with antimicrobial resistant bacteria every year.</li>
                            <li>• More than 23,000 Americans die every year because of infections caused by these bacteria.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Bacterial diseases comprise of any and all illnesses caused by the bacteria present in and on our bodies. Bacteria are a common form of microorganism. These tiny organisms are only visible under a microscope. Most of the bacteria present in and on our bodies are harmless and do not lead to infections or diseases. Many of these bacteria are actually necessary and required for optimal health.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The harmful bacteria cause diseases and infections.  These bacteria are called pathogenic bacteria. When the pathogenic bacteria enter into your body and start reproducing, they crowd out the population of healthy bacteria in the body. That is when bacterial infections occur. Harmful bacteria emit toxins in the body that may lead to cellular damage in the body.
                        </p>
                        
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        {/* <ul className="text-gray-700 space-y-2 ml-6">

                            <li>• Alopecia areata</li>
                            <li>• Pattern baldness for both men and women</li>
                            <li>• Scarring alopecia</li>
                            <li>• Telogen effluvium</li>
                            <li>• Anagen effluvium</li>
                        </ul> */}

                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Hair loss or alopecia can be temporary or permanent. It can be cause by several different factors. The factors that most commonly trigger hair loss in people include:
                        </p> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        {/* <ul className="text-gray-700 space-y-2 ml-6">

                            <li>• Allergies</li>
                            <li>• Injuries</li>
                            <li>• Burns</li>
                            <li>• Chronic kidney failure</li>
                            <li>• Irritants</li>
                            <li>• Infections</li>
                            <li>• Toxins</li>
                            <li>• Certain medication (anabolic steroids)</li>
                            <li>• Chemotherapy</li>
                            <li>• Radiation</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sometimes, different hair loss conditions can be triggered by particular deficiencies (especially iron and vitamin E), hormonal imbalances (in times of pregnancy and/or menstruation) or an overdose of Vitamin A.
                        </p>
                    </div> */}

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Most of the time, the symptoms of a bacterial infection will depend on the part of the body it affects, the length of the infection, and the type of bacteria causing it. Normally, the most prominent signs of a bacterial infection may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Cough</li>
                                <li>• Head ache</li>
                                <li>• Runny nose</li>
                                <li>• Fatigue</li>
                                <li>• Aching body</li>
                                <p className="text-gray-700 leading-relaxed mb-6 pt-4 pb-4">
                            Additionally skin infections caused by bacteria can have the following symptoms.
                        </p>
                                <li>• Blisters</li>
                                <li>• Pus filled blisters</li>
                                <li>• Pus</li>
                                <li>• Itchiness</li>
                                <li>• Tenderness or pain</li>
                                <li>• Skin breakdown or sloughing</li>
                                <li>• Dark or discolored skin that becomes painful</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            While most infections aren’t dangerous, some when left untreated can spread and develop into a serious condition. It is often better to visit the doctor for professional advice and nip the problem in the bud.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Bacterial Infections, it is not enough to keep you fit and healthy. Supplements are essential for managing Bacterial Infections and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Bacterial Infections. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Bacterial Infections:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Uva Ursi</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Uva Ursi is one of the stronger antibacterial herbs that should not be consumed without proper moderation. The herb is equally effective for both internal and external use and has shown remarkable effectiveness for treating pathogen-related bacterial infections and urinary tract infections.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yarrow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The yarrow flowers may come off as pretty and harmless, but the story is entirely different when it comes in contact with the bacteria. The herb has powerful antibacterial properties that prove lethal to the bacteria thriving in and on your body. Yarrow has displayed outstanding efficacy for treating urinary tract infections and healing canker sores.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Garlic</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Garlic is one of the friendlier natural remedy for bacterial infections. The herb has strong antibacterial properties. However, once inside the body, garlic does not kill the good bacteria in the process of wiping out the harmful ones. There have been studies that show garlic as more effective than penicillin in fighting off certain types of bacteria.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Echinacea has healing properties. The herb is an excellent immunity booster than leads to stronger and efficient immune system in the body that can ward off the presence of harmful bacteria in or on the body. The herb quickens the healing process that prevents the bacteria from worsening the condition (especially in the case of bacterial skin infections).
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Coffee Bean</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Green coffee beans contain powerful antioxidant properties that help reduce oxidative damage to the cells and strengthen the immune system. The stronger immune system is then capable of fighting off any possible bacterial attack to the skin/body that may lead to severe bacterial infections.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Bacterial Infections, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BacterialInfections;