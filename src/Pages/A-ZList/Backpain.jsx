import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Backpain = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Back Pain</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Back Pain</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Back pain can be defined as a dull, mild or severe pain one feels when lifting heavy object from the ground, or getting up quickly.</li>
                            <li>• According to Global Burden of diseases 2010, lower back is the 2nd leading causes of disability worldwide.</li>
                            <li>• Each year, more than half of all American complain of having a backache. It is most prevalent in working men and women.</li>
                            <li>• More than 80% of the population worldwide experiences back pains at some point in their lives, estimates experts.</li>
                            <li>• Back aches are the number one reason why people miss work.</li>
                            <li>• It is also one of the most common reasons why people visit physicians, outnumbered by many upper respiratory problems and infections.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Back pain isn’t a health condition but rather a symptom of some underlying illness or disease. Back pain can be caused by stiffness or soreness in the muscles of the back or some other area. Most common causes of the back pains, include an injuring or strain on the muscles such as a prolapsed disc –when cartilage presses against a nerve or sciatica –an irritation in the nerve that runs from the feet to one’s pelvis. It could also be trigged by a prolonged improper posture where the bones in the back become sore. There is no specific duration to determine how long the pain lasts and most people take over-the-counter medication on daily basis to treat the pain.
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
                            The symptoms of back pain may vary form person to person as not everyone experiences in the same area. Many experience it in their lower back while others complain of pain in the neck and waist region. Some common symptoms of back pain include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Persistent pain which doesn’t go away despite resting</li>
                                <li>• Inflammation</li>
                                <li>• Urinary incontinence</li>
                                <li>• Numbness in the genitals</li>
                                <li>• Numbness around the buttocks</li>
                                <li>• Chronic fatigue</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Hair loss conditions can escalate quickly. You should make it a point to see a doctor and pursue medical treatment if you’re experiencing extensive hair fall, or you notice bald patches on your head. Hair loss that occurs suddenly can be a symptom of an underlying medical condition that may require immediate treatment.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage back pain, it is not enough to keep you fit and healthy. Supplements are essential for managing back pain and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for back pain. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with back pain:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Gravel Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Also called as Joe Pye in respect for the Native American healer who first used it to cure typhus, gravel root has a number of medicinal benefits to offer. It is one of the strongest and safest herbal remedies to treat backaches caused by inflammation in the kidneys
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
White Willow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used as a painkillerfor thousandsof years, White willow is also known as the herbal aspirin. It is most commonly used to treat pains and discomfort in the bones caused by swelling or inflammation. Its bark can be used to treat both acute and chronic pains in the back, hip, knee and joints, which is why athletes rely most on medications containing its extract. One of the reasons why people should consider using white willow over other aspirins is because its effects last long as it remains in the bloodstream longer.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kava Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        People have been using kava for centuries to reduce symptoms of backaches, anxiety and stress. It is by far one of the most beneficial alterative to pain medication, however must not be used n combination with other medications. It is most effective for those who frequently suffer from stiff muscles, aching joints, strains and cramps.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Belonging to the family of mints, oregano is a perennial plant, native to the Mediterranean and Europe. Used as an aromatic herb to bring out the flavors ofmany Italian dishes, the herb also possesses some remarkable medicinal benefits. The word oregano is a blend of two Greek words oros and gano which means mountain joy. Oregano oil veggie capsules come powered with active ingredients that help provide muscle pain relief, thus highly beneficial to cure backaches.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Bacopa, also known as brahmi by Indians, has long been used as an Ayurvedic remedy to treat a numberof health conditions including joint pains, stiffness and back pains. Its application helps relieve muscle soreness and alleviates pain caused. It is also beneficial in treating a number of other illnesses such as epilepsy and sexual performance problems etc. due to this reason; it is often termed as the water pill by many.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing back pain, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Backpain;