import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const SleepSupport = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Sleep Support</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Sleeping Disorders</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• As of today, more than 70 million Americans suffer from multiple sleeping disorders.</li>
                            <li>• Women, as compared to men, are twice as likely to battle symptoms of insomnia including difficulty in falling asleep, waking up from hot flashes, and other sleeping disorders.</li>
                            <li>• It is estimated that every 20 to 30% of American adults suffer from insomnia once every year.</li>
                            <li>• Among the myriad sleeping disorders, insomnia leads the rest. Around 10% of adults complain of having chronic insomnia, while 30% of adults are suffering from acute insomnia.</li>
                            <li>• The harmful impact of sleepless nights results in approximately $18 billion in absenteeism and poor productivity.</li>
                            <li>• An average American adult enjoys less than 7 hours sleep daily when it should technically be between 7 to 9 hours.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sleeping disorders are one of the most common complaints of teenagers, adults, and seniors these days. Many complain of restless leg syndrome, hot flashes, inability to dream, and unsatisfactory sleep. Among all these, insomnia takes the lead. Millions of people all around the globe complain of insomnia. Insomnia refers to the inability to fall asleep or stay asleep. It includes both the quality and quantity of sleep any individual receives.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Typically, there are three different types of insomnia. These include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2 mb-4">
                            <li>• Transient insomnia: When symptoms persist for a few days or weeks.</li>
                            <li>• Acute insomnia: When symptoms last for more than a few weeks.</li>
                            <li>• Chronic insomnia: When symptoms last for months or even years.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            People who are most likely to suffer from cases of short-term insomnia (acute insomnia) include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Night shift workers</li>
                            <li>• Travelers</li>
                            <li>• Elderly</li>
                            <li>• Teenagers or adolescents</li>
                            <li>• Menopausal or pregnant women</li>
                            <li>• Drug users</li>
                            <li>• People with some mental disorder</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although insomnia is just one of the many sleeping disorders, most of them show similar symptoms. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Difficulty in falling asleep</li>
                                <li>• Waking up earlier than desired</li>
                                <li>• Waking up during the middle of the night</li>
                                <li>• Experiencing daytime fatigue</li>
                                <li>• Feeling tired or groggy all day</li>
                                <li>• Depression</li>
                                <li>• Anxiety</li>
                                <li>• Irritation</li>
                                <li>• Tension and headaches</li>
                                <li>• Gastrointestinal issues</li>
                                <li>• Poor focus and concentration</li>
                                <li>• Difficulty socializing</li>
                                <li>• Worrying about getting sleep</li>
                                <li>• Feeling uncoordinated</li>
                                <li>• Making an increased number of mistakes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage insomnia, it is not enough to keep you fit and healthy. Supplements are essential for managing insomnia and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for insomnia. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with insomnia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* SLEEP w/Valerian & Melatonin */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">SLEEP w/Valerian & Melatonin</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        These supplements contain all-natural ingredients that promote sleep. Not only that, their intake also promises relaxation during sleep and reduces the chances of waking up in the middle of the night.
                                    </p>
                                </div>

                                {/* Sleep with Melatonin */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Sleep with Melatonin</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Commonly known as the herbal formula for sleep support, Melatonin is the hormone made by one’s pineal gland – a gland in the brain. Its sole responsibility involves controlling the wake and sleep cycles. These supplements help those who experience irregular sleeping patterns causing fatigue and grogginess.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Valerian */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Valerian</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Valerian is by far the most potent nervous system sedative. It promotes calmness and is often consumed to calm a busy mind. It facilitates sleep, especially for those who wake up and can’t fall back asleep. It is a stronger version of sleeping medication and also a safer one.
                                    </p>
                                </div>

                                {/* Lavender */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lavender</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The extract of this beautiful flower is used in multiple cosmetic, medicinal, and culinary dishes to beautify, add flavor, and boost scent. It helps quiet a restless mind, fights depression, strengthens the nervous system, and alleviates nervousness – all of which are symptoms of insomnia. Its calming scent promotes natural sleep.
                                    </p>
                                </div>
                            </div>

                            {/* Passion Flower */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Passion Flower</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Passion flower is a relaxing herb, known to calm the mind and nervous system. One of the primary reasons why one is unable to fall asleep is anxiety or stress. Passion flower works wonders in overcoming that stress and anxiety, promoting a sound sleep for those suffering from insomnia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing insomnia, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default SleepSupport;