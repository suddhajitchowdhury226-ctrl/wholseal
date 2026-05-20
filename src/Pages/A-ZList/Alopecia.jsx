import React from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Alopecia = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Alopecia</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Alopecia</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Hair loss/alopecia is more common in men than in women, but the condition affects nearly 50% of the female population.</li>
                            <li>• In men, 40% lose considerable hair by the time they reach the age of 35. 65% lose hair nearing the age of 60, and 80% by the time they are 80.</li>
                            <li>• Alopecia affects one in every 100 persons.</li>
                            <li>• Genetics is one of the main contributors in around one fifth cases of alopecia.</li>
                            <li>• In America, around 25% men affected by the condition will experience the initial signs of hair loss even before they turn 21.</li>
                            <li>• Specialists reveal that the condition also affects almost 3% of children in the country.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Alopecia is a commonly used term in the medical world for different hair loss conditions. Hair loss conditions are not just limited to the hair on the scalp. It can occur anywhere on the body.  There are several different hair loss conditions that can be categorized under alopecia. These conditions include, but are not limited to:
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        <ul className="text-gray-700 space-y-2 ml-6">

                            <li>• Alopecia areata</li>
                            <li>• Pattern baldness for both men and women</li>
                            <li>• Scarring alopecia</li>
                            <li>• Telogen effluvium</li>
                            <li>• Anagen effluvium</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hair loss or alopecia can be temporary or permanent. It can be cause by several different factors. The factors that most commonly trigger hair loss in people include:
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        <ul className="text-gray-700 space-y-2 ml-6">

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
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Each different type of hair loss condition may show different symptoms depending on the factors that cause them. The most commonly experienced symptoms of alopecia include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Thinning of hair, especially on the top of your head.</li>
                                <li>• Patchy or circular bald spots on the scalp.</li>
                                <li>• Scaly scalp or scaly patches that cover the scalp</li>
                                <li>• Loosening of hair that may occur suddenly</li>
                                <li>• Full body hair loss</li>
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
                            While eating a healthy diet and regular exercise helps to manage Alopecia, it is not enough to keep you fit and healthy. Supplements are essential for managing Alopecia and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Alopecia. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Alopecia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Mushroom Immune (ORGANIC)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The Mushroom Immune formula by Ray’s Healthy Living contains and effective blend of mushrooms immune boosting mushrooms that help strengthen the immune system. This blend has reishi mushrooms – that have been used over the years in herbology as a treatment for hair re-growth. The inherent properties of reishi mushrooms also help counter the various factors that may contribute to hair loss.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red raspberry contains rasketone – a chemical compound that stimulates hair growth and re-growth, improves hair health, and strikes hormonal balance that may be the underlying cause of alopecia in the person. Red raspberry is also great for regulating overall female health.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nature's Sunshine Free Amino Acids (60 tabs)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        This supplement provides you with the necessary dosage of amino acids that help the production of keratin in the body. About 88% of our hair is made up of keratin, which means amino acids provide the necessary nutrients our hair needs to grow better and stronger. They also improve blood circulation that improves the overall health of the hair.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Now Foods Xanthan Gum Powder</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Xanthan gum is a commonly used ingredient in the cosmetic industry. This natural ingredient holds immense skin and hair benefits. Applying the xanthan gum powder on your scalp after dissolving it in water, or consuming it internally can help boost hair growth and improve hair health.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Now Foods Golden Flax Seed Meal, Organic</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Flax seeds are a rich source of Omega 3 fatty acids. These fatty acids nourish hair follicles and improve hair health. They also make keratin that triggers hair growth and makes the hair stronger from the roots to the shaft. This in turn reduces hair fall and stimulates better hair growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Alopecia, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Alopecia;