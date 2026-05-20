import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const RespiratoryHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Respiratory Health</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Respiratory Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Chronic respiratory diseases are conditions that are caused because of affected airways and lungs.</li>
                            <li>• Every day, 3,200 people below the age of 18 try their first cigarette, and only 1,000 of them are able to resist the addiction. The rest become addicted to smoking.</li>
                            <li>• Asthma is the most common respiratory condition. In 2014, 25 million people were suffering from Asthma.</li>
                            <li>• Smokers are not the only ones to contract lung cancer.</li>
                            <li>• 71% deaths due to lung cancer and 42% of chronic respiratory disease all over the world are caused by smoking.</li>
                            <li>• Damp and mould are the major reasons children and adults suffer from respiratory disorders.</li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 pt-4 px-9">
                            
Lungs enable oxygen intake, subsequently transferring it to the other parts of the body through the bloodstream. But when our lungs are not healthy or suffer from any acute or chronic disease, breathing becomes difficult. Millions of people in the USA suffer from some form of lung disease.
                        </p>
                        <h2 className="px-9 pb-2 text-4xl">Asthma:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 px-9">The airways become inflamed with occasional spasms when a person has asthma. This condition results in trouble in breathing, allergies, wheezing and other conditions.</p>
                        <h2 className="px-9 pb-2 text-4xl">COPD:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 px-9">Chronic obstructive pulmonary disease is a lung condition where a person faces trouble exhaling properly. It is mostly caused because of smoking and the more smoking is done the more damaged the lungs become.</p>
                        <h2 className="px-9 pb-2 text-4xl">Cystic Fibrosis:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 px-9">A hereditary disease, in cystic fibrosis, the mucus is unable to clear up from the bronchi, and as a resulted, gets accumulated in the passageway blacks the passage and causes frequent infection and allergies.</p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 px-9">Most respiratory and lung conditions can be treated except for those in which the lungs has been severely damaged.</p>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Breast cancer occurs when cell growth in the breast gets out of control. The proliferation of these cells causes the formation of tumors. These tumors are mostly malignant, because they have the tendency to invade cells and tissues surrounding it; and sometimes even spread to other areas of the body.
                        </p> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Breast cancer mostly occurs in women, but there are cases where men get breast cancer as well. Breast cancers can form in any part of the breast – the ducts, the nipple, and even the glands.
                        </p> */}
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
                            Most acute or chronic respiratory conditions can be identified if the following symptoms are observed in the patient:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>An unrelenting and recurring cough</li>
                                <li>Trouble in breathing by falling short of it very frequently</li>
                                <li>Blood appears while coughing</li>
                                <li>Pain the chest region</li>
                                <li>People suffering from Bronchiolitis obliterans organizing pneumonia begin to lose weight.</li>
                                <li>Constant hoarseness in voice and wheezing in the chest</li>
                                <li>Frequently occurring pneumonia or one that doesn’t go away.</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                            A medical practitioner usually conducts a chest X-ray, high-resolution CT scan or a computed topography to diagnose any conditions of the lungs or any respiratory disease.
                        </p>
                            
                            
                        </div>
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4">
                            These symptoms can indicate brain diseases and must be discussed with a qualified doctor without delay. Tumors can grow quickly, so haste is prudent – just in case.
                        </p> */}
                        {/* <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Respiratory Health, it is not enough to keep you fit and healthy. Supplements are essential for managing Respiratory Health and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Respiratory Health. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Respiratory Health:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CONGEST-EEZE Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        An effectual remedy for acute respiratory conditions, these healthy supplements offers relief to those suffering from asthma, congestion, colds, and frequent lung congestions. CONGEST-EEZE Veggie Caps also provides protection to the lungs of those who travel frequently or work in a public area with a large number of other human populations.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">ECHINACEA-GOLDENSEAL Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        ECHINACEA-GOLDENSEAL Veggie Caps is a preventative formula and must be consumed after every few hours in a situation where a person feels they are about to come down with a cold or flu or it can be used to speed up the recovery time when already suffering from the flu by taking it at least s three time in a day. ECHINACEA-GOLDENSEAL Veggie Caps works effectively to trigger the innate immune system of our body by triggering the white blood cells in general circulation and also stimulating the immune system in the respiratory tracts. This will not only prevent the flu to spread further but also treat it faster.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A dietary supplement and strongly antiviral, Astragulus helps with the treatment of common cold, infection in upper respiratory, and asthma. Using Astragulus Root daily helps with promotes respiratory health and prevents the viral cold and flu from attacking in the first place.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Triphala</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Triphala is three fruits in one and so the healing and health promoting properties of this natural supplement is also triple. The synergistic affects of this supplements assists in keeping the respiratory system in top working condition. Triphala removes the mucus from the respiratory tract to keep it cleared and the lungs strong.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lobelia</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Lobelia helps with relaxation, soothing and bringing down high adrenaline levels. It also decreases the flight and fright response. These properties make it affective supplements in case of panic attacks, high respiration rates. Lobelia is so sedating and calming that it relaxes the thoracic cavity, opens up the lung capacity and helps with treatment of asthma, and congested reparatory tracts. Lobelia also makes sure that the lung remains happy and healthy by reducing the cravings for cigarettes as it smartly confuses the binding sites that are searching for nicotine.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Respiratory Health,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default RespiratoryHealth;