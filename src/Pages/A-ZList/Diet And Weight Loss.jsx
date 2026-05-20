import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const DietAndWeightLoss = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Diet And Weight Loss</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Diet And Weight Loss</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>•  In 2010, Americans spent $60.9 billion trying to lose weight.</li>
                            <li>• The most popular method of weight loss adopted by the Americans is cutting down on sugar.</li>
                            <li>• Our body weight does not signify our health. A skinny person can also have poor health.</li>
                            <li>• Anti-oxidants are anti-fat, therefore consuming food with anti-oxidants promotes weight loss.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Almost 50% people in the USA are trying to lose and manage their weight. And they are right in doing so. While an obese person might not be suffering from any disease and illness at the times, it does increase the risk factors of breathing disorders, depression, diabetes, liver diseases, certain cancers and various other acute and chronic diseases. In order to promote weight loss, many people adopt a healthy life style and become active with healthy eating called dieting. This change helps a person prevent and control various health conditions. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        The most weight friendly food includes whole eggs, Salmon, kale, spinach, collards and other green and leafy vegetables. Lean beef, chicken breast, potatoes (boiled or baked), soups, legumes, nuts, apple cider vinegar, fruits, coconut oil, and fat-full yoghurt are some of the weight friendly food.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed mb-4 ">The conditions and diseases that an obese person is most at risk of contracting include sleep apnea, heart disease, and strokes.</p>
                            
                    
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        The symptoms of obesity are most obvious and it can be further noted by measuring your weight using the weighing machine. However if you have any of the following habits in your lifestyle then you are definitely encouraging weight gain and it needs to be changed:

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• High intake of food containing sugar</li>
                                <li>• Irregular sleeping patterns and habits</li>
                                <li>• Too much stress</li>
                                <li>• Unhealthy body fat distribution</li>
                                <li>• Large eating portion</li>
                                <li>• Fast eating</li>
                                <li>• Skipping breakfast</li>
                            
                        
                            
                    
                                <p className="text-gray-700 leading-relaxed mb-4 pt-4">Following are some of the initial conditions experienced by an obese person:</p>
                                <li>• Respiratory problems</li>
                                <li>• High level of cholesterol</li>
                                <li>• Liver conditions</li>
                                <li>• Depression</li>
                                <li>• Breathlessness</li>
                                <li>• Bank and joint pains</li>
                            </ul>

                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage weight Loss, it is not enough to keep you fit and healthy. Supplements are essential for managing weight Loss and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace any treatment. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Diet and Weight Loss:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Oregano is produced from a perennial herb, and packed with free-radical-crushing antioxidants. This herb belongs to the mint family and found abundantly in Europe and Mediterranean countries. Oregano is rich with various nutrients and is known to be one of the best natural supplements. Oregano oil Veggie caps not only gives a boost to our immune system but also is a strong contender of fighting body fats. Those people on diet and aiming for weight loss benefit greatly from the active ingredient of carvacrol in the Oregano Oil Veggie Caps. This ingredient not only fights fat but also cuts down on cholesterol and prevents weight gain.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hoodia Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Hoodia has been in use for centuries by the African and Asian communities for the purpose of treating overeating and other health issues. With no definitive scientific proof, it has been said that Hoodia tricks a person’s mind into thinking that they are full and can help them consume 100 less calories in a day. Another reason for consuming Hoodia Veggie Caps for dieting is its affect noted in terms of burning off fat. When Hoodia Veggie Caps are combines with rigorous workouts then the effect is almost instant. Obese people eat less without suffering from carvings and hunger pangs and even speed up their metabolism.
                                   
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Aloe Vera assists with reducing fats from the body by breaking down fat globules. The presence of natural anti-oxidants in Aloe Vera slows down the growth of free radicals and speeds up our metabolism. It further helps with weigh loss by preventing the fat from storing; instead it turns them into energy. Furthermore the large amount of Vitamins in Aloe Vera Plus burns off calories and trims down body fat.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Coffee Bean</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Green Coffee Beans are the form of coffee beans before they have been roasted. During a show in 2012, Dr. Oz declared it to be one of the fastest fat burning natural supplements that even eliminate the need for exercises and diet. However there is no scientific proof that backs up the claim, further it was noted that green coffee beans are affective on weight loss but not with the absence of healthy diet and exercise. The Green Coffee Beans are packed with the active ingredient Chlorogenic Acid. This acid is known to produce weight loss affects in the body.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                Green Tea</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Green tea is not a solution of weight loss but rather works as an aid to expedite the process of it. Green tea only works best when a person is actively dieting as well as working out regularly. Green Tea is packed with EGCG (Epigallocatechin gallate), a substance that help boost up the metabolism and start fighting fats as quickly as possible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing weight loss, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default DietAndWeightLoss;