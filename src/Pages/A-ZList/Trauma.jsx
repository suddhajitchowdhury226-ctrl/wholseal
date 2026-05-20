import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Trauma = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Trauma</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Trauma</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• In trauma, a person may feel extreme horror, fear, and a sense of bleak helplessness</li>
                            <li>• A person who suffers from a traumatic brain injury has a high risk of suffering from dementia as well.</li>
                            <li>• Children can develop impaired learning after going through a trauma</li>
                            <li>• Women are twice as likely to develop posttraumatic stress disorder than men</li>
                            <li>• Trauma can lead to alcohol and drug abuse as well as suicidal tendencies</li>
                            <li>• One of the leading causes of death in the USA for people above the age of 45 is trauma after a car crash.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
When a person goes through an episode of traumatic event, they experience extreme feelings of helplessness, fear and horror and stay in it long after the event has passed. Some of the common events that result in trauma includes:
                        </p>
                        <ul>
                            <li>• Rape or sexual assault</li>
                            <li>• Car crashes and fire</li>
                            <li>• Catastrophic events</li>
                            <li>• Domestic violence, physical or emotional</li>
                            <li>• Disasters caused by human error, any accident in industrial setting</li>
                            <li>• Kidnapping or torture</li>
                            <li>• Witnessing a horrendous crime</li>
                            <li>• Unexpected and sudden death of someone close</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Post-traumatic stress disorder if diagnosed can be treated with some help. A person can be proscribed some medications, counseling Psychotherapeutic methods such as group discussions and other methods can slowly help the patients come to terms with what has happened and move on. Trauma is as common in children as it is in adults and can make it very difficult for them to attend school, hangout with friends or attend social events.
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
                            Some people show instant reaction to a trauma and theirs’ is easy to detect but some people give into it slowly over the duration of months to several years. These symptoms can help with early diagnosis:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Nightmares</li>
                                <li>• Depression</li>
                                <li>• Hopelessness</li>
                                <li>• Flashbacks</li>
                                <li>• Disturbing thoughts regarding the incident</li>
                                <li>• Feelings word or object that triggers the memory of the events.</li>
                                <li>Avoiding and refraining everything surrounding the event even months and years after</li>
                                <li>Blaming one one’s own self and feeling incomprehensible guilt.</li>
                                <li>Insomnia and disturbed sleeping patterns</li>
                                <li>Headache</li>
                                <li>Lack of food consumption</li>
                                <li>Hypersensitivity</li>
                                <li>A prominent change in habits and behavior for instance a talkative person stopped speaking etc.</li>
                                <li>Aloof and removed from the surroundings.</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            
                            
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
                            While eating a healthy diet and regular exercise helps to manage Trauma, it is not enough to keep you fit and healthy. Supplements are essential for managing Trauma and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Trauma. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Trauma:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Arnica</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Arnica is an analgesic and is in use for centuries as a treatment for surgical or accidental trauma. It is most effective for consumption where a patient has undergone something extremely traumatic and might be in the phase of denial or extreme depression. Surgical treatments or a physical pain left after a traumatic event also leads to distress; consumption of Arnica not only decreases the pain but also helps in calming down and elevating the mood.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Stinging Nettle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Stinging Nettles effectively take control of the overactive glands that releases high amount of adrenaline hormones in situations of extreme duress and shock. Stinging nettle is widely prescribed as a natural treatment of patients suffering from posttraumatic stress disorder. Stinging Nettle slows down the production of adrenaline and helps the patient stabilize their mental health and pull out from the trauma.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Gotu Kola</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Gotu Kola is lovingly named the miracle elixir of life after all the comfort and calm it brought to people going through extreme emotional and mental stress. Gotu Kola has a unique sort of calming effect which instantly reduces stress and work in variety of ways to help a patient come out of trauma. This magical herb allows the PTSD patient to treat fatigue by stimulating healthy sleep cycles and allowing the nervous system to calm down; once the patient is not sleep deprived, this herb then works toward treating anxiety, stress, memory loss and other psychiatric disorders.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        As soon as a person goes through a violent traumatic incident, the adrenaline glands goes into overdrive and the increased secretion only makes the victim’s stress worse. Holy basil works rapidly to control the adrenal hormones and helps the patients survive traumatic episodes, anxiety attack and other mental conditions that triggers after a harrowing event.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Chamomile is a safe plant with little side effects and a vast number of mental and physical health benefits. A chamomile tea helps soothe down the nerves and mental restrain. Chamomile is not just for extreme traumatic event, but even everyday stress, anxiety and depression can be brought under control with a cup of chamomile tea.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Trauma,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Trauma;