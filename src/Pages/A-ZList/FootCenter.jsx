import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const FootCenter = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Foot Center</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Foot Center</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Human feet have one fourth of all the bones present in the body.</li>
                            <li>• Our feet have about 25,000 sweat glands and they secrete about half a pint of moisture every day.</li>
                            <li>• 75% of Americans suffer from a health problem related to feet at some point in their lives.</li>
                            <li>• The pressure applied on our feet while running is about 3 to 4 times our body weight.</li>
                            <li>• Neglect and lack of awareness are the major causes of foot problems; only a small number of people are born with foot problems.</li>
                            <li>• Approximately 19% of the population in the US experiences an average of 1.4 foot problems every year.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The human foot is a complex structure that plays a critical role in mobility and balance. Despite its importance, foot health is often overlooked, leading to various issues that can affect overall well-being. Proper foot care and awareness can prevent many common foot problems, which are frequently caused by neglect rather than congenital issues.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While maintaining proper foot hygiene and wearing appropriate footwear helps manage foot health, it is not always enough to address specific foot-related issues. Supplements and topical treatments can be essential for managing foot conditions and reducing symptoms. However, it should be kept in mind that these should not replace medical treatments for foot conditions. Not all natural products are safe for use, as they can react with your body and produce adverse effects. Thus, it is better to consult your doctor before starting to use any supplements or products for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with foot-related issues:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Lavilin Foot Deodorant Cream */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lavilin Foot Deodorant Cream</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        An ultimate solution for stinky feet, Lavilin Foot Deodorant Cream eliminates foot odor mainly caused by excessive sweating. It is exclusively made from herbal ingredients and hence free of any harmful effects. This cream will keep your feet smell-free for as long as seven days and, since it is water-resistant, you don’t need to apply it after every wash or shower.
                                    </p>
                                </div>

                                {/* Echinacea Angustifolia Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Echinacea is a powerful natural antibiotic, antiseptic, antiviral, and antifungal. It also has amazing anti-inflammatory properties. Echinacea Root works great for strengthening the body’s natural immune system and helps in curing respiratory, vaginal, urinary tract, and viral infections. It is also an amazing natural product for curing athlete’s foot.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Super Fruit Grape Seed Extract */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Super Fruit Grape Seed Extract Vegetable Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Derived from Champagne grape seeds, these capsules by Bluebonnet are packed with powerful active constituents that are great for overall health. In particular, they help protect the body from damage caused by free radicals.
                                    </p>
                                </div>

                                {/* Colloidal Silver */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Colloidal Silver</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Colloidal silver oral drops are easy to consume because they do not have any odor or taste. They are great for all types of yeast infections, including athlete’s foot, candida, ringworm disease, eye infections, and many other diseases.
                                    </p>
                                </div>
                            </div>

                            {/* Long-Lasting Deodorant Stick */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Long-Lasting Deodorant Stick</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Perspiration leads to body odor that is unpleasant not only for the person but also for people around them. The long-lasting deodorant stick contains zinc oxide and lavender oil that remove bad odor. It can be used for feet and underarms and is completely free of aluminum.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing foot issues, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default FootCenter;