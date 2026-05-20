import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BrainandCognitiveFunction = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Brain And Cognitive Function</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Brain And Cognitive Function</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">

                            <li>• The people of ancient times thought so little of the brain that the Egyptians of that time would scoop it out from their dead leaders’ skull before burial.</li>
                            <li>• If a brain remains even 5 minutes without oxygen, it can be damaged.</li>
                            <li>• A teenagers’ brain is not completely mature. It is at the age of 25 that brain cells reaches full maturity.</li>
                            <li>•  Lack of sleep has the ability of impair various cognitive functions in our brain including speed, memory and emotional intelligence.</li>
                            <li>•  Alzheimer’s is the sixth leading cause of death in the United States</li>
                            <li>• According to The US National Institute of Mental Health, every one out of 4 Americans suffer from mental a disorder.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
The brain is one of the most fascinating and mysterious creations of the nature. For a long time, no one was able to figure out how this small bundle of nerves even works. But with studies, research, and experience the brain and its cognitive functions were understood in details.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                        This organ allows us to perform everything, from the smallest to the most complex of tasks. Not only does the brain assist with bodily function but also with cognitive functions. The different parts of the human brain help with learning, memorizing, planning, processing, solving, recognizing and discriminate colors among a myriad of other functions. These parts include Prefrontal cortex, frontal cortex, parietal lobes, temporal lobes and occipital lobe.
                        </p>
                         <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
However, just like any other part of our body, the brain also suffers from various conditions due to the following causes:
                        </p> 
                         <ul>
                            <li>• Brain diseases can be due to infections</li>
                            <li>• seizures</li>
                            <li>• trauma</li>
                            <li>• tumors</li>
                            <li>• autoimmune conditions</li>
                            <li>• vascular conditions</li>
                            <li>• and neurodegenerative conditions</li>
                        </ul>                         {/* <p className="text-gray-700 leading-relaxed mb-4">
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
                            There are a number of brain diseases and the symptoms can range from being physical to mental. Here are some of the most common ones that indicate of a brain disease:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Pupil Dilation</li>
                                <li>• Speech Difficulty</li>
                                <li>• Numbness</li>
                                <li>• Paralysis</li>
                                <li>• Memory Loss</li>
                                <li>• Bleeding From The Ear</li>
                                <li>• Depression</li>
                                <li>• Mood Changes</li>
                                <li>• Seizures</li>
                                <li>• Hearing Issues</li>
                                <li>• Vision Issues</li>
                                <li>• Headaches</li>
                                <li>• Loss Of Sensation In Arms And Legs</li>
                                <li>• Swelling On The Face</li>
                                <li>• Flu</li>
                                <li>• Strokes</li>
                                <li>•Forgetting Things</li>
                                <li>•Losing Memory</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            
                            
                        </div>
                         <p className="text-gray-700 leading-relaxed mb-4 pt-4">
                            These symptoms can indicate brain diseases and must be discussed with a qualified doctor without delay. Tumors can grow quickly, so haste is prudent – just in case.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Brain And Cognitive Function, it is not enough to keep you fit and healthy. Supplements are essential for managing Brain And Cognitive Function and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Brain And Cognitive Function. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Brain And Cognitive Function:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        During normal body processes, free radicals are produced and they attack the healthy cells in our body. CoQ10 Veggie Caps with its antioxidant properties protects our brain cells from the attack of free radical attacks and prevent brain damages. Moreover CoQ10, prevents the deterioration of the brain by reducing the oxidation stress and supporting long term brain preservation and disease prevention.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Acai Super Berry Antioxidant</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Acai Super Berry Antioxidant is a combination of various powerful plants and contains high amount of anthocyanins, which gives it strong antioxidant properties and makes it a very affective energy booster. Moreover it also assists anti-cancer activities in brains with tumors along with recycling toxic proteins in brains that are mostly the reason behind age related memory loss.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginkgo</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Gingko is even known as brain herb for its endless benefits to the brain health. Due to its ability to improve blood flow in the brain, it has been noted to help with memory for dementia patients, as well as those who lose memory with age. Gingko is also an effective natural supplement for Alzheimer’s patients as it protects the nerve cells from further damage. Gingko helps our brain with improved thinking, better memory, and ability to handle everyday tasks better and have an enhanced social behavior.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chlorella</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Chlorella is fresh water single-celled algae with potent detoxifying traits. Consuming it can drive out all the toxins that has built-up in our brain and prevent deterioration and impairing brain functions.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Milk Thistle possesses the flavonoid, silymarin which allows it to be antioxidant, ant-viral and anti-inflammatory. With these properties Milk Thistle contains the characteristics of neuron-protection and is given to patients suffering from Parkinson’s and multiple sclerosis. This natural supplement also prevents a human brain from contracting Alzheimer’s by suppressing the disease forming beta-protein amyloid.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Brain and Cognitive Function, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BrainandCognitiveFunction;