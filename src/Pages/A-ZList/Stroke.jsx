import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Stroke = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Stroke</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Stroke</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Every year, there are around 795,000 people in America suffering from a newly diagnosed or recurrent stroke condition.</li>
                            <li>• Stroke ranks third among the most common causes of death in the United States.</li>
                            <li>• The condition is the biggest cause of long-term disability in American adults.</li>
                            <li>• Nearly one out of 17 deaths in the country happens because of a stroke.</li>
                            <li>• Every 40 seconds on an average, someone in the country suffers a stroke.</li>
                            <li>• The occurrence of stroke is more common in the African-Americans.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
A stroke can be termed as an attack on the brain, which can essentially happen at any time to anyone at all. It usually occurs when the brain does not receive its required supply of blood. It deprives the brain cells of nutrients and oxygen and that causes the cells to die. When the brain cells die, the functional abilities that part of the brain is responsible for are lost – this usually results in loss of muscle control or memory.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
The extent of damage caused by a stroke will vary from one person to another. It is usually dependent on the location and size of the part of the brain that gets damaged. Depending on the extent of damage, some people may be able to completely recover from a stroke, but in most cases, a stroke patient will survive with some form of disability.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
However, just like any other part of our body, the brain also suffers from various conditions due to the following causes:
                        </p> */}
                        {/* <ul>
                            <li>• Brain diseases can be due to infections</li>
                            <li>• seizures</li>
                            <li>• trauma</li>
                            <li>• tumors</li>
                            <li>• autoimmune conditions</li>
                            <li>• vascular conditions</li>
                            <li>• and neurodegenerative conditions</li>
                        </ul> */}
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
                            The red flags for a stroke can occur suddenly. Keep an eye out for any of these symptoms to get timely medical attention to treat your condition.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>Sudden numbness or weakness in the face, leg, arm, or one particular side of your body</li>
                                <li>Unexpected loss strength, vision, coordination, speech, sensation, or trouble in understanding speech</li>
                                <li>Dim vision in one eye. This usually occurs suddenly.</li>
                                <li>Unexplained loss of balance. This might be accompanied by nausea, hiccups, vomiting, fever, or troubled swallowing.</li>
                                <li>Severe unexplained headache that occurs suddenly after which you rapidly lose consciousness</li>
                                <li>Loss of consciousness for a short span of time</li>
                                <li>Sudden falls or unexplained dizziness</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            
                            
                        </div>
                         <p className="text-gray-700 leading-relaxed mb-4 pt-4">
                            Most signs of a possible stroke are mistaken for common health troubles by many until it’s too late. Hence, at even the remotest possibility of experiencing any of these symptoms, visit a doctor immediately.
                        </p> 
                        {/* <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Stroke, it is not enough to keep you fit and healthy. Supplements are essential for managing Stroke and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Stroke. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Stroke:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberries and other related berries (huckleberries and blueberries) are rich in anthocyanidins. Anthocyanidins are chemical compounds that prevent the clotting of blood that may lead to blocked arteries and reduced supply of oxygen and blood to the brain – the leading cause of ischemic stroke.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Garlic</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Garlic is a fantastic natural remedy for preventing the chances of stroke. This wonder herb cuts down cholesterol levels n the body, regulates healthy blood pressure, thins the blood, and acts as an anti-clotting agent that thwart the coagulation of blood in the body. Garlic is great for maintaining optimal circulatory health.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Turmeric has been used for centuries in Ayurvedic medicine. Turmeric contains curcumin – a chemical compound that has anti-coagulate properties. This compound ensures that the blood flows effortlessly through the body and there are no clots formations in it.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginger</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Ginger is a complete cardiac tonic. The herb has remarkable efficacy for lowering cholesterol levels in the body and improving blood circulation. It prevents the clotting of blood and ensures free flow of oxygen and nutrients to the brain. An Indian study on the efficiency of ginger revealed that taking just 2 teaspoons of ginger daily for a week can counteract the blood clotting caused by 100 grams butter.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Another reason why the blood carrying oxygen and nutrients cannot adequately reach the brain is because of atherosclerosis (the narrowing or hardening of arteries). Hawthorn helps attenuate the condition by reducing the plaque buildup in the arteries and restoring normal flow of blood through them.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing  Stroke, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Stroke;