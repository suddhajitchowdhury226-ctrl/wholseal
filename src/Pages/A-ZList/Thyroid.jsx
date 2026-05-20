import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Thyroid = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Thyroid</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Thyroid</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Thyroid disorders are caused when the thyroid glands are destroyed, often by the antibodies created by our own system.</li>
                            <li>• 27 million Americans suffer from a sort of thyroid diseases where 13 millions are unaware that they even suffer from it.</li>
                            <li>• Women are much more prone to thyroid disorders.</li>
                            <li>• According to American Thyroid Organization, one woman in eight will develop a thyroid disorder in her lifetime.</li>
                            <li>• Some types of Thyroids are genetic in nature.</li>
                            <li>• Save for a few, most thyroid cancers respond positively to medical treatments.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Thyroid is a butterfly shaped gland that is situated on the lower fronts of our neck. Thyroid glands excretes three kind of hormones which affects nearly every cell of our body and influences brain development during infancy and metabolism, body temperature and the overall growth and development of our bodies. There are several conditions involving thyroid that includes:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li>
                                <strong className="text-xl">Thyroid Nodule:</strong> Thyroid Nodule is one of the most common conditions in which the thyroid glands form a small mass or lump. They are mostly harmless when they do not secrete excessive hormones. However few are cancerous.
                            </li>
                            <li>
                                <strong className="text-xl">Thyroid Storm:</strong> When hormones are excreted in high amount, it causes severe illness.
                            </li>
                            <li>
                                <strong className="text-xl">Grave Diseases:</strong> A thyroid condition that triggers high level of secretion of hormones.
                            </li>
                            <li>
                                <strong className="text-xl">Thyroid Cancers:</strong> Thyroid cancer is an uncommon condition and is mostly treatable. People who get treatments do adequately well.
                            </li>
                            <li>
                                <strong className="text-xl">Hyperthyroidism:</strong> Excessive secretion of hormones.
                            </li>
                            <li>
                                <strong className="text-xl">Goiter:</strong> When the thyroid glands get swelled and indicate lack of iodine in the body.
                            </li>
                            <li>
                                <strong className="text-xl">Thyroiditis:</strong> Inflammation in the thyroid glands because of a viral infection or caused by autoimmune disorder.
                            </li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Thyroid conditions and symptoms vary due to the intensity of damage to the glands and the increased or decreases secretion. Here are the most common symptoms of thyroid diseases in adults:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Irregular menstrual periods</li>
                                <li>• Balding hair</li>
                                <li>• Slowed heart rate</li>
                                <li>• Depression</li>
                                <li>• Impaired memory</li>
                                <li>• Weakness in muscles</li>
                                <li>• Swelled face</li>
                                <li>• Weight gain</li>
                                <li>• Pain in muscles and joint followed by stiffness and swelling</li>
                                <li>• Dry skin</li>
                                <li>• Fatigue all the time</li>
                                <li>• High sensitivity to cold</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Symptoms of thyroid diseases in infants:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Frequent Choking</li>
                                <li>• Constipation</li>
                                <li>• A puffy and red face</li>
                                <li>• Yellowish skin and yellow in the white of the eyes</li>
                                <li>• large, protruding tongue</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Thyroid, it is not enough to keep you fit and healthy. Supplements are essential for managing Thyroid and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Thyroid. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Thyroid:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Kelp */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kelp</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        In some of the thyroid conditions, the secretion of iodine-containing hormones is decreased and as a result the body is unable to regulate metabolism and calcium. To balance it out, Kelp is majorly affective as it is a brown algae form deep under the sea and naturally rich in iodine and much safer than chemical synthetics.
                                    </p>
                                </div>

                                {/* Thyroid */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Thyroid</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Thyroid is a supplement taken to support healthy Thyroid functioning as it helps in boosting it naturally. This supplement contains iodine, and other herbs that support better working of thyroid glands.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Gravel Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Gravel Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Gravel Roots is a very beneficial herb that helps bring down the swelling in the neck caused by swollen thyroid glands. Gravel root is the bulb and the root that is above the ground and is also used as a stimulant and tonic which helps with pain relief and brings down inflammations caused by swelling.
                                    </p>
                                </div>

                                {/* Motherwort */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Motherwort</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Motherwort is an herbaceous perennial plant from the mint family and is used to treat an over-active thyroid. This herb helps deal with palpitations which are a common symptom of thyroid disorders as well as slows down the hyperactive thyroid to control excess secretion.
                                    </p>
                                </div>
                            </div>

                            {/* Usnea */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Usnea</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The herb usnea is an immune system tonic and because thyroid disorders care caused due to malfunctioning immune system, this natural herb helps greatly with treatment of the causes. Usnea is also used as an herbal cancer therapy and supports the treatments of thyroid cancer and tumors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Thyroid problems, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Thyroid;