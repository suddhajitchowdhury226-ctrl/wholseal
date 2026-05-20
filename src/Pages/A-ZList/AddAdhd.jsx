import React from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const ADHDInfoPage = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">ADD/ADHD</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about ADD/ADHD</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• ADD stands for Attention Deficit Disorder and ADHD stands for Attention Deficit with Hyperactivity Disorder.</li>
                            <li>• Global statistics reveal that 3-5% of children have ADHD.</li>
                            <li>• ADD/ADHD is much more common in boys than girls. The prevalence ratio is 4 to 1.</li>
                            <li>• As reported by American Psychiatric Association, 5% of all American children suffer from ADHD.</li>
                            <li>• Worldwide, 6.4 million kids are affected by ADHD.</li>
                            <li>• Most of the kids diagnosed with ADHD are in between the age of 4 to 17 but ADHD is not commonly diagnosed and many adults live without the knowledge of having it.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            It is very common that many of us find it difficult to focus or concentrate at times. But there are people who feel that way all the time throughout their lives. ADD or ADHD are both mental health conditions in which people experience lack of concentration with or without hyperactivity. The victims are left with a crippled self-esteem as they realize they aren't as smart or efficient as others. When combined with hyperactivity or an impulsive behavior, ADD or ADHD leaves one helpless to form stable relationships, enjoy family or social life or get a good job for that matter.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p>
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <li>• Genetics: Children more likely to be born with ADD or ADHD if it runs in the family.</li>
                            <li>• Surroundings: many environmental factors such as exposure to lead at an early age also increases the chances of developing ADD or ADHD.</li>
                            <li>• Unbalanced development: any child whose nervous system doesn't develop like other kids at key developmental stages may also be at risk of developing ADD or ADHD as they grow old.</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A majority of adults with ADHD depict very mild symptoms of the condition, however, there are few who suffer from severe symptoms, rendering them helpless to perform even the most basic of everyday tasks. The most commonly experienced symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Restlessness</li>
                                <li>• Impulsiveness</li>
                                <li>• Disorientation and problems prioritizing</li>
                                <li>• Difficulty multitasking</li>
                                <li>• Extreme impatience</li>
                                <li>• Difficulty focusing on a single task</li>
                            </ul>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Hot temper</li>
                                <li>• Poor planning</li>
                                <li>• Difficulty following through</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Difficulty coping with stress</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage ADD/ADHD, it is not enough to keep you fit and healthy. Supplements are essential for managing ADD/ADHD and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for ADD/ADHD. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with ADD/ADHD:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Arnica</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Arnica has long been used to treat an umber of trauma-related injuries, including bruises and contusions. It is one of the most commonly available medications. Arnica helps heal injured tissues that have received some severe blow from overexertion, accident or sports-related injuring. It is recommended by many chiropractors' and therapists to reduce pain and swelling from the injured tissue. When applied, it increases the blood circulation leans up after bruises, diminishes the pain and heals the tissue by reducing its recovery time.
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
                                    Also known as Wolf's bane, Leopard's bane or mountain tobacco, the flows and plant of arnica contains many active ingredients that help improve the blood circulation within the body and reduced pain caused by swelling underneath the skin.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing ADD/ADHD, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ADHDInfoPage;