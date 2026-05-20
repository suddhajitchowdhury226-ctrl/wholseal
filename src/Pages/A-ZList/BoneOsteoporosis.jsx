import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BoneOsteoporosis = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Bone Osteoporosis</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Osteoporosis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Osteoporosis is a disease in which bone loses its density and mass, making one prone to fractures and sprains.</li>
                            <li>•  People at most risk of being affected by osteoporosis include women aged 45+. However, men and children of all both genders can also be affected.</li>
                            <li>•  Although osteoporosis has little to do with ethnicity, it is most commonly in white and Asian women.</li>
                            <li>•  A few risk factors of osteoporosis such as poor nutrition and smoking are modifiable.</li>
                            <li>•  There are rarely any symptoms of osteoporosis. It can only be detected once the bone has already lost some of it density and caused a sprain or fracture.</li>
                            <li>• The fractures occurred due to osteoporosis are mostly in the hip, spine and wrists.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Osteoporosis is a bone disease in which the bones become brittle and weak, so weak that even a little stress might result in a mild fracture or sprain that requires medical assistance. In other words, it is a disease in which the bone and density and mass is lost. When one suffers from severe cases of osteoporosis where the bone density and mass. It is the most common cause of hip, spine and wrist fractures.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
The primary cause of osteoporosis is the imbalance between the old and new bone resorption. It could either be the result of lack of new bone formation or too much reabsorption of the old bone or both. In order to stay healthy, the bones need two essential minerals –phosphate and calcium. The body stores both of these throughout the lifetime. But both of these minerals are also required by the body to perform a number of other tasks such as keeping the kidneys, heart and brain functioning properly. The body occasionally collected the stored calcium form the bones to keep them functioning properly. However, a problem arises where there is not sufficient calcium stored in the body. When the body doesn’t receive enough calcium to reabsorb, it has a direct impact on the bone tissue and bone formation. As a result, the bones become weak over time, becoming prone to fractures, injuries and breaking.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
People who are at most risk include women in their 40s, 50s and above or past menopause. Asian and white women as compared to women of the races contribute the most to the statistics.
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
                            Osteoporosis has no outward symptoms, which is one reason why it is almost impossible to diagnose unless the individual has already suffered a sprain or dislocation. However, there are some noticeable symptoms that one might observe when their bones get weakened due to osteoporosis. These symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• height loss overtime</li>
                                <li>• Back pain triggered by a collapsed or fractured vertebra</li>
                                <li>• Stooped posture</li>
                                <li>•  Fracture occurred very easily while performing day to day task such as bending down or standing up</li>
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
                            While eating a healthy diet and regular exercise helps to manage Osteoporosis, it is not enough to keep you fit and healthy. Supplements are essential for managing Osteoporosis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Osteoporosis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                           The following supplements have proven to benefit people with Osteoporosis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Horsetail</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Probably the most common natural remedy for bladder infections that we come across is the cranberry juice. It was found that cranberry extracts help prevent the E.coli. from connecting with other bacteria. When the E.coli. sticks to other bacteria, it forms a biofilm in the urinary tract, which allows them to grow into an infection.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Wild Oats</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Wild oats perform the same functions as horsetail. These too, are rich in silica, calcium and many other nutrients which help the body prevent osteoporosis, strengthen and repair brittle nails and nourish the nervous system.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Clover</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red clover is an excellent source of valuable nutrients including calcium, magnesium, chromium, phosphorus, Vitamin C and potassium etc All of these, including isoflavones that act like estrogens prevent osteoporosis.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Comfrey</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used topically since ancient times, comfrey is the most effective way to treat condition related to bones. It is also referred to as knitbone by many, thanks to its potent healing properties. Multiple recent studies have confirmed that comfrey possesses may such nutrients and vitamins that aid in the treatment of connective tissue injuries, bruises, muscular impairment etc. it also eases joint pain.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Red raspberry is another all-natural remedy rich in vitamins and minerals. It comes highly recommended when looking to promote the health of bones, teeth and hair.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Osteoporosis,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BoneOsteoporosis;