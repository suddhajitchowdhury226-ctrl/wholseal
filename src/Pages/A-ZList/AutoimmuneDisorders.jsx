
import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const AutoimmuneDisorders = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Autoimmune Disorders</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Autoimmune Disorders</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Autoimmune Disorders occur when the body’s immune system attacks healthy cells by mistaking them for harmful ones.</li>
                            <li>• There are as many as 80 types of diseases caused by autoimmune disorders and they can affect any part of our body.</li>
                            <li>• In 15 years the numbers went from 9 million to 14.7 million patients In the U.S.</li>
                            <li>• In 6 years it went from 14.7 million to 50 million patients in the U.S.</li>
                            <li>• America is much behind other countries in research into immune system self recognition.</li>
                            <li>• The symptoms of the disorders are often irregular and unspecific and don’t become apparent until later stages.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In response to some unknown triggers, the immune system in the human body begins to produce antibodies and instead of fighting harmful infections ends up attacking the healthy tissues of the body itself. And as a result it attacks joints, intestine, nerve cells, blood cells, thyroid glands and various other significant organs and tissues. Autoimmune disorders are the reason behind more than 80 diseases in the human body.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Over time, due to unhealthy lifestyles and/or aging cholesterol and fat can collects in the arteries and takes the form of plaque. When the plaque buildup thickens, it narrows the blood passageways and makes it difficult for the blood to properly flow through the arteries. If left untreated, atherosclerosis can cause strokes, heart attacks, and even a heart failure.
Atherosclerosis can affect your heart, kidneys, legs, and all other parts of your body. There are several different types of Atherosclerosis. These include the:
                        </p> */}
                        <h2 className="text-2xl font-bold mb-6">
                           Causes behind the autoimmune disorder:
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Due to lack of better research in the field, it is still unknown what causes the immune system to crate antibodies and attack our own system; however there are a few theories:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                           <li>• The autoimmune system is unable to distinguish healthy tissue and harmful antigens and sets off on a chain reaction that begins destruction of normal cells.</li>
                           <li>• Some drugs might also confuse the immune system.</li>
                           <li>• There are certain bacteria and virus that cause the change in the immune system.</li>
                           <li>• Chemical Irritants and environmental irritants could be the reason.</li>
                        </ul>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Autoimmune disorders affects various different tissues of our body and as result cause a number of diseases and their symptoms vary accordingly. However, here are some of the symptoms in the parts they most commonly attack
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of atherosclerosis include:
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                               <li>• Joints: Inflammation and swelling</li>
                               <li>• Muscles: weakness upon minimum physical exertion</li>
                               <li>• Thyroid: fatigue, weight gain, depression, dry skin and sensitivity to cold</li>
                               <li>• Intestine: diarrhea, rectal bleeding and abdominal pains</li>
                               <li>• Skin: silvery, scaly plaques</li>
                               <li>• Nerve cells: pain, blindness, weakness, poor coordination, and muscle spasms.</li>
                               <li>• Pancreas: thirst, dry and itchy skin, slow healing, sores, blurry eyesight, losing weight rapidly</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           The disease can be diagnosed with the help of series of tests.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage autoimmune disorders, it is not enough to keep you fit and healthy. Supplements are essential for managing autoimmune disorders and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for autoimmune disorders. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with autoimmune disorders:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Turmeric Veggie caps is one of the most potent anti-inflammatory herbs and as a result hinders the production of inflammatory agents in the body and stops the immune cells from becoming active. They help with almost all the major diseases caused by autoimmune disorders including Multiple sclerosis, lupus, psoriasis, asthma, allergies, diabetes, digestion, chronic psoriasis, nervous system, and rheumatoid arthritis.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      Ashwagandha is beneficial to the treatments of autoimmune disorders. It helps immunity to self modulate. It also has an affinity to help chronic neuro-muscular disorders such as fibromyalgia and multiple scleroses caused by autoimmune disorder. Ashwagandha’s natural composition is such that it supports both, excessive secretion of hormones and reduced secretion of hormones by balancing it. It is also known for its adrenal rejuvenation and helps with adrenal fatigue. It prevents the body from stressing out as it can cause breaking down of immune system.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Astragalus is a powerful immune-building plant that lowers down the stress building hormone and helps in the activation of T cells and natural killer cells that stimulate immune response. Astragalus is also anti-inflammatory and prevents cancer. This herb essentially regulates the body’s immune responses which are otherwise disturbed in autoimmune disorders.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Organic coconut flour</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Coconut Flour is rich in fiber and so it not only helps with bowel syndromes that are caused by autoimmune disorder but it also contains all the essential minerals that work together to improve metabolism, level of sugar in the blood and supports the autoimmune system.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    One of the healthiest herbs, Bacopa improves our immune functions to fight against bacteria and viruses. Bacopa not only helps in buildings up an immune system and increasing the production of antibodies but it also prevents autoimmune disorders.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Autoimmune Disorders, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default AutoimmuneDisorders;