import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const OralCare = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Oral Care</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Oral Care</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• According to the National Institute of Dental and Craniofacial Research, around 30,000 Americans are diagnosed with oral cancer each year.</li>
                            <li>• A study conducted by the University of Texas stated that men are more likely to suffer from Human Papillomavirus (HPV) than women. The virus could even lead to oral cancer.</li>
                            <li>• Do you know that if you brush your teeth once a day only, you face a 33% greater risk of tooth decay than those who brush twice a day?</li>
                            <li>• Although a child’s teeth start appearing somewhere between 6 to 12 months of age, baby teeth start forming even before birth.</li>
                            <li>• Our teeth are as unique as our fingerprints. Yes! No two humans can have the same set of teeth.</li>
                            <li>• Diseases such as diabetes, osteoporosis, and other cardiovascular diseases are all linked to our oral health.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Taking care of oral health is not only important for maintaining a beautiful smile and healthy gums, but is also important for maintaining overall health. According to experts, bad oral hygiene is linked with many serious diseases such as respiratory infections, cardiovascular diseases, dementia, and diabetic complications, to name a few.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Also, our mouth is a window to the internal systems of our body. This means that good oral health reflects good overall health, and vice versa. Our teeth and gums are always exposed to a large number of bacteria. And to maintain a good oral routine, brushing is critical.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In addition to poor cleaning practices, there are certain medications that increase the risks of oral issues. These include anti-depressants, decongestants, diuretics, pain killers, and anti-histamines. This is because these medicines reduce the flow of saliva, which acts as a natural barrier against harmful effects of many bacteria by neutralizing the acids they produce.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are a number of oral infections and diseases that are caused by poor oral care. These include:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>• Periodontal disease</li>
                            <li>• Cavities</li>
                            <li>• Oro-dental trauma</li>
                            <li>• Tooth decay and loss</li>
                            <li>• Oral cancer</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Signs and symptoms that show poor oral health and bad oral care practices include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Plaque buildup</li>
                                <li>• Cavities</li>
                                <li>• Stained or discolored teeth</li>
                                <li>• Swollen gums</li>
                                <li>• Enamel demineralization</li>
                                <li>• Bleeding teeth and/or gums</li>
                                <li>• Sensitivity</li>
                                <li>• Bad breath</li>
                                <li>• Tooth pain</li>
                                <li>• Dry mouth</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Signs that hint towards some serious problems, such as oral cancer, diabetes, etc., are as follows:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Sores, tender spots, wounds, or ulcers that don’t heal</li>
                                <li>• Hoarseness</li>
                                <li>• Trouble swallowing</li>
                                <li>• Ear pain</li>
                                <li>• Difficulty in moving tongue or jaw</li>
                                <li>• Numbness in throat and/or tongue</li>
                                <li>• Jaw swelling</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While a healthy diet and regular exercise helps with Oral Care, it is not enough to keep you fit and healthy. Supplements are essential for managing Oral Care and reducing its symptoms. But it should be kept in mind that supplements should not be used as the primary means of Oral Care. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before using any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Oral Care problems:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Clove */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Clove</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cloves contain sufficient amounts of phosphorus, iron, potassium, calcium, Vitamins A & C, and sodium. This power pack natural ingredient thus offers numerous health benefits. Eugenol is a compound that is naturally present in cloves and clove oil that has long been used by dentists. Since ages, clove and clove oil has been used to get immediate relief from tooth ache. It also helps in the treatment of mouth ulcers, sore gums, cavities, and also helps in eliminating bad breath.
                                    </p>
                                </div>

                                {/* Red Raspberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Leaves of Red Raspberry are rich in Vitamin C and also contain tannins, which is a natural astringent. According to Ayurveda, red raspberry leaf tea is really beneficial for oral health and can be of great help in cavities and gum diseases. It also works against several kinds of viral and bacterial infections. Red Raspberries are also found to have anti-cancerous properties.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* XyliWhite Neem & Tea Tree Mouth Wash */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">XyliWhite Neem & Tea Tree Mouth Wash</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Packed with anti-microbial properties of Neem and containing numerous health benefits of green tea and xylitol, this mouth wash makes sure to clean all those bacteria and food particles from your mouth that are left behind after brushing. By eliminating trapped food particles from your mouth, the mouthwash eliminates the chances of bacteria growth and plaque buildup. Also, it protects the enamel and regulates the pH level of the mouth.
                                    </p>
                                </div>

                                {/* Sunshine Heroes Calcium Plus D3 */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Sunshine Heroes Calcium Plus D3</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        We all know how important calcium is for healthy teeth and bones. A chewable calcium and vitamin D3 supplement, Calcium Plus D3 is specifically meant for children. It provides children with the essential amount of calcium and vitamin D3 that their growing bodies need.
                                    </p>
                                </div>
                            </div>

                            {/* Peppermint Oil */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Peppermint Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    An amazing natural product to get rid of bad breath that embarrasses you in front of everyone. It also kills anaerobic bacteria that are one of the biggest reasons behind gum diseases. Peppermint is also useful for providing pain relief.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Oral Care. But you should exercise proper caution and ask your doctor before adding any such supplements in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, which might cause dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to take any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default OralCare;