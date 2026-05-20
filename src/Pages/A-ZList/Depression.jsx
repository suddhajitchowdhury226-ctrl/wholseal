import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Depression = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Depression</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Depression</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• A form of mental illness, nearly 350 million people (5% of world population) of all age groups suffer from depression globally.</li>
                            <li>• Women are more depressed than men.</li>
                            <li>• Depression is often one of the major leading causes of suicide among teens.</li>
                            <li>• Recently divorced and unemployment individuals are the most likely to be depressed.</li>
                            <li>• Approximately 16 million people in the US have had at least one big depressive episode since 2012.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */} 
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        It is okay to feel sad, down or angry for a little while but if the condition persists, one might be suffering from depression. Depression can be defined as a prolonged state of feeling blue. There are a number of causes that stems depression such as genetics, hormonal factors, stress, chemical imbalance or medial illness. When an individual is depressed he/she suffers from a low mood disorder. Depression affects one’s ability to feel pleasure, or do everyday things with interest. People of all ages are equally at risk of being depressed. 1 in every 6 people is diagnosed with depression annually. 
                        </p>
                        {/*<p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p>*/}
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <p>The most common types of depression include:</p>
                            <li>• Major Depressive disorder</li>
                            <li>• Dysthymia</li>
                            <li>• Psychotic depression</li>
                            <li>• Seasonal affective disorder</li>
                            <li>• Postpartum depression</li>
                            <li>• Atypical depression</li>
                            <li>• Bipolar disorder</li>
                            <li>• Melancholia</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        In order to be diagnosed as depressed, the symptoms have to last at least for a week or more.  However, everyone’s symptoms might differ. Many experience multiple symptoms at the same time while others only a few. How long will they last and what treatment will cure them also varies person to person.  In general, symptoms of depression include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Feeling sad, down, irritable or angry</li>
                                <li>• Lack of energy and willingness to do things</li>
                                <li>• Losing interest in previously enjoyable activities</li>
                                <li>• Losing focus and concentration</li>
                                <li>• Feeling fatigued and tired easily</li>
                                <li>• Difficulty sleeping</li>
                                <li>• Difficulty concentrating</li>
                                <li>• Loss of appetite</li>  
                                <li>• Having thoughts of self-harm</li>  
                                <li>• Feeling worthless or guilty all the time</li>  
                                <li>• Suffer from a low self-esteem and confidence</li>  
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
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage depression, it is not enough to keep you fit and healthy. Supplements are essential for managing depression and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for depression. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with depression:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Also referred to as Ayurvedic” Ginseng, Ashwagandha is an excellent remedy to treat depression, anxiety and stress. It is especially beneficial for those who experience frequent breakdowns and can’t pull themselves back out of it. If not treated at the right time, this can lead to immune breakdown and make an individual vulnerable to a number of bacterial and viral infections including conditions like blood sugar swings, an irritable bowel, fatigue and constitutional weakness etc.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kava (Vanuatu)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    This has been known to reduce anxiety and stress-related symptoms. Many researches support the evidence that it significantly reduces depression and panic attacks. Due to its instant calming nature, many medical experts recommend Kava as an alternative to depression and stress-related medication taken when one suffers from bodily cramps and strains.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">St. John's Wort</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    St. John’s Wort is a powerful all-natural remedy to treat temporary depression. used worldwide to control stress and help one get over the blues, St. John’s Wort is an excellent medicine to treat anxiety, chronic fatigue and mood swings related to PMS and menopause. It also works as a mild sedative to stop one from feeling self-destructive.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Rhodiola</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Used as a herbal remedy for ages, Rhodiola rosea helps fight depression, strengthen one’s nervous system, enhance memory, aid in weight loss, improve one ‘s energy levels and enhance immunity. it is most commonly uses as a potent adaptogen –substance that is responsible for increasing the body’s resistance to diseases and normalize its functions.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lavender</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                The very scent of it is enough to calm one’s nerves and makes one feel refreshed instantly. What it does more is relieve headaches and thoughts of self-harm caused by stress. One reason why it is so commonly used in beauty product is sit helps relieve feelings of depression and also promote natural sleep. Its oil works as a stimulating liniment to prevent pains and bodily aches.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing depresssion, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Depression;