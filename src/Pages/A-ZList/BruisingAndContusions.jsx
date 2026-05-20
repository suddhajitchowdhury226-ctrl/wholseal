import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BruisingAndContusions = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Bruising And Contusions</h1>
                             {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p>  */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Bruising and Contusions</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Contusions or bruises happen when there is leakage of blood from the veins or arteries. During a contusion, the blood enters the tissues and causes the skin to swell up or discolor.</li>
                            <li>• The discoloration of the skin is the first sign of a contusion.</li>
                            <li>• A majority of people believe in waiting out rather than go see a physician to deal with a contusion or bruise.</li>
                            <li>• Anyone is prone to experience a bruise or contusion regardless of age, ethnicity or gender.</li>
                            <li>• Contusions or bruises are most commonly the result of blunt trauma or a hard blow.</li>
                            <li>• If the swelling doesn’t go despite the application of gels, serums and oils like the Arnica oil, one must seek a consult.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
A contusion, more commonly known as a bruise happens when the blood vessels get damaged, cracked or broken, as a resultof which, the blood leads into the tissue and forms a bluish or purplish color under the skin. Bruises or contusions are formed when one receives a hard blow on the skin, such as bumping the toes nail on the edge of the table or hitting the floor hard while playing some sports. The bruised area can also form a bump sometimes, when the blood flow from the blood vessels gathers in one spot. Any trauma causedby sufficient force on the muscle can be the reason for a contusion or bruise.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
There are three main types of contusions that include:
                        </p>
                        <ul>
                            <li>• Intramuscular bruises refers to injury occurred in the underlying tissues</li>
                            <li>• Subcutaneous bruises refers to injury occurred in the fatty tissues just beneath the skin</li>
                            <li>• Periosteal bruise refers to bruises that are occurred on the bone.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Since a bruise is not a health condition or a disease, it can happen to anyone at any age. Many bruises will cause one to experience mild pain; however, if the bleeding continues underneath the skin, one must get it checked immediately.
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
                            The symptoms of a contusion may vary depending on type and cause of the injury. One may notice some discoloration as the first sign. A mile pain or tenderness is usually followed by discoloration. Other severe symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Discoloration after a hard blow</li>
                                <li>• Discoloration after taking blood thinners or aspirin</li>
                                <li>• Swelling over the injured area</li>
                                <li>• Bruising that is accompanied by bleeding from the nose, gums or mouth</li>
                                <li>• Bruising that is accompanied by bleeding from the eyes or in the urine or stool</li>
                                <li>• Discoloration under the nail which hurts upon contact</li>
                                <li>• Pain over the injured area that doesn’t go away long after four weeks</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            
                        </div>
                        {/* <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage bruising and contusions, it is not enough to keep you fit and healthy. Supplements are essential for managing bruising and contusions and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for bruising and contusions. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                           The following supplements have proven to benefit people with bruising and contusions:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Arnica</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Arnica has long been used to treat an umber of trauma-related injuries, including bruises and contusions. It is one of the most commonly available medications. Arnica helps heal injured tissues that have received some severe blow from overexertion, accident or sports-related injuring. It is recommended by many chiropractors’ and therapists to reduce pain and swelling from the injured tissue. When applied, it increases the blood circulation leans up after bruises, diminishes the pain and heals the tissue by reducing its recovery time.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Comfrey</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used topically since olden times, comfrey is an herb that is most commonly used to heal broken bones and tissues damage. Comfrey can also be take orally to treat a number of internal problems such as bruising and contusions as it contains many substances that help in the healing or bones, muscles, bruises, connective tissues, and joint pain.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Propolis</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Propolis is a first aid remedy. It has strong anti-bacterial, anti microbial and antiviral properties that makes it a beneficial alternative medication to be applied on cuts and bruises. It comes highly recommended for those who heal slowly. Whether applied topically or taken orally, it helps clean the infected wound and repair the damages tissue underneath the skin.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Moringa</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The powerhouse of all important minerals such as potassium, iron, phosphorus, zinc, magnesium and calcium, Moringa also contains 18 essential amino acids. May research studies concluded that moringa possess the highest protein ratio among all the plant studies so far. As a result of these minerals, moringa is effective in treating a number of health conditions and injuries caused by blunt trauma including bruises and contusion. Its intake helps the tissue heal faster and even reduce some of the pain and swelling one experience.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Arnica Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Also known as Wolf’s bane, Leopard’s bane or mountain tobacco, the flows and plant of arnica contains many active ingredients that help improve the blood circulation within the body and reduced pain caused by swelling underneath the skin.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    {/* <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Osteoporosis,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div> */}
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BruisingAndContusions;