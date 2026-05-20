import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const FoodAllergy = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Food Allergy</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Food Allergy</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Food allergy is a sudden reaction of the immune system that is experienced by an individual soon after they consume a certain food.</li>
                            <li>• 1 in every 3 kids has food allergies.</li>
                            <li>• Approximately 15 million people in America alone are living with food allergies. 5.9% of that cohort belongs to children below 18.</li>
                            <li>• It is also a fact that 30% of all kids with food allergies are allergic to more than just one food.</li>
                            <li>• Every 3 minutes, someone with a food allergy is sent to the hospital’s emergency room.</li>
                            <li>• Annually, families in the United States spend $25 billion in expenses on caring for kids with food allergies.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When someone is allergic to a certain food, their immune system triggers a reaction by swelling up the airways. Even a small amount of the food can cause the immune system reaction, and the patient must be rushed to the hospital immediately for stomach cleaning, as the airways can get completely swollen and disrupt the passage of oxygen to flow in the body, causing a painful death. It is preventable but can be life-threatening if not treated on time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A number of different risk factors increase one’s chances of developing a food allergy, the most common being hereditary or environmental factors. Any of these can entice a reaction. When the allergens – proteins in the body responsible for causing an allergic reaction – cross the gastrointestinal lining and enter the bloodstream, an allergic reaction is caused throughout the body. Food allergies are most common in kids below the age of 18 and in those who are atopic (born with an inherited tendency).
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of food allergic reactions differ from person to person. Some suffer from a mild reaction, while others get severe ones where they can experience shortness of breath, eczema, and nausea. For them, the symptoms can be scary. The scariest thing about food allergies is that it only gives the sufferer a few minutes to a few hours before getting treated.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some general symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Itching</li>
                                <li>• Tingling</li>
                                <li>• Hives</li>
                                <li>• Eczema, swelling of the lips, throat, or tongue</li>
                                <li>• Shortness of breath</li>
                                <li>• Nasal congestion</li>
                                <li>• Wheezing</li>
                                <li>• Dizziness</li>
                                <li>• Abdominal pain</li>
                                <li>• Fainting</li>
                                <li>• Vomiting and nausea</li>
                                <li>• Lightheadedness</li>
                                <li>• Diarrhea</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage food allergies, it is not enough to keep you fit and healthy. Supplements are essential for managing food allergies and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for food allergies. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with food allergies:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Quercetin */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Quercetin</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Quercetin reduces inflammation. It works as a natural bioflavonoid which stabilizes mast cells and prevents them from releasing histamine. People who frequently suffer from allergic reactions can incorporate this in their daily diets. It is effective as a long-term remedy and can also be taken weeks before the allergy season or consuming anything that may trigger one.
                                    </p>
                                </div>

                                {/* Ginger */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginger</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Ginger has many anti-inflammatory and antiviral properties. Although it may not heal one directly from an allergic reaction, it helps alleviate most of the symptoms such as nausea, vomiting, abdominal aches, inflammation, etc. It improves the body’s overall health and thus must be included in one’s daily diet to prevent any food allergies from being triggered.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Marshmallow */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Marshmallow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Who would have thought that it won’t only be a delightful treat to devour but also possess a number of anti-inflammatory and antibacterial properties? Marshmallows have a soothing effect that reduces the swelling and inflammation experienced in the mucous membrane when a food allergic reaction is triggered.
                                    </p>
                                </div>

                                {/* Burdock */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Burdock</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Burdock is a renowned herbal medication known for its blood-cleansing properties. It also gently cleanses the liver of any harmful chemicals that may trigger food allergies. The plant contains inulin and is diuretic and immune-stimulating. It alleviates multiple symptoms of food allergies such as wheezing, nausea, swelling, and nasal congestion, etc.
                                    </p>
                                </div>
                            </div>

                            {/* Dandelion */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Many people know of the plant because of its antibacterial properties, as it comes highly recommended for many environmental allergies. However, it has also proven effective in treating cases of food allergy and food intolerance. It does so by helping the liver to function properly. Capsules containing its extracts can help fight many symptoms of food allergies, including itching, lightheadedness, or dizziness, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing food allergies, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default FoodAllergy;