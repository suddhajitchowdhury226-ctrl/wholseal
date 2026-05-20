import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Leukemia = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Leukemia</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Leukemia</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Leukemia is a blanket term that describes four types of cancer of bone marrow and blood cells.</li>
                            <li>• Leukemia is equally common in children under 15 and adults over the age of 55.</li>
                            <li>• A family history with leukemia increases the chances of the disease.</li>
                            <li>• People suffering from chronic leukemia may not notice any symptoms until a blood test is conducted.</li>
                            <li>• Every four minutes, someone in America is diagnosed with blood cancer.</li>
                            <li>• Every 10 minutes, someone in America dies from blood cancer.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Leukemia is an umbrella term used to define four different kinds of cancer of blood cells. Leukemia cells begin to form in the bone marrow and drive out the healthy blood cells that a body needs to survive and develop. Some kinds of leukemia are common in children, while others are more common in adults. The abnormal cells refuse to die and, over time, they take over the healthy ones. At most times, leukemia can be controlled and treated with a survival rate ranging from 60 to 70%, but this depends on various factors.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are four kinds of leukemia:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                            <li><strong>Acute and Chronic:</strong> Acute leukemia worsens rapidly and weakens the patient severely. Chronic leukemia, on the other hand, progresses slowly and is difficult to diagnose.</li>
                            <li><strong>Lymphocytic or Myelogenous:</strong> Lymphocytic affects the white blood cells, whereas myelogenous affects other types of cells like red blood cells and platelets.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Leukemia is mostly caused by intense exposure to radiation or certain chemicals such as benzene.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            People who suffer from leukemia end up with a non-existent immune system and may contract various other diseases, which often serve as symptoms. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Anemia</li>
                                <li>• Frequent bleeding from the gums, nose, and other parts</li>
                                <li>• Weight loss</li>
                                <li>• Bruising</li>
                                <li>• Sudden and unexplained fevers</li>
                                <li>• Night sweats</li>
                                <li>• Swollen lymph nodes</li>
                                <li>• Fatigue and weakness</li>
                                <li>• Pain in bones and joints</li>
                                <li>• Purplish patches on the skin</li>
                                <li>• Small red dots on the skin</li>
                                <li>• Swelling and pain on the left side of the belly</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            The treatments for leukemia include radiation therapy and stem cell transplant.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage leukemia, it is not enough to keep you fit and healthy. Supplements are essential for managing leukemia and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for leukemia. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with leukemia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Dong Quai */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dong Quai</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dong Quai is known as the queen of herbs and is a perennial plant, native to China, Korea, and Japan. Often combined with other herbs, it has been used as a medicine for centuries. Dong Quai is very effective for use in blood-related diseases. It has anti-tumor, anti-tuberculosis, and neuroprotection capabilities.
                                    </p>
                                </div>

                                {/* Artichoke */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Artichoke is abundant with nutrients, minerals, and phytochemicals. The polyphenol-type antioxidants present in artichokes make it a preventive medicine for leukemia. The rutin, quercetin, and gallic acid found in artichoke are effective in restraining the growth of leukemia cells in a body as well as supporting the process of apoptosis, i.e., cell death.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Red Raspberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red raspberry is abounding with minerals and vitamins like iron, magnesium, phosphorus, calcium, vitamin C, and potassium. Consuming red raspberries slows down the growth of leukemia cells in a human body because of the ellagitannins present in them.
                                    </p>
                                </div>

                                {/* Maca */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Maca</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Maca root, known scientifically as Lepidium meyenii, is a plant found in Peru and has been consumed for centuries by the people of the Andes for treatments of HIV/AIDS and leukemia, among other diseases. Anti-carcinogenic properties found in maca have proved to be very active in protecting cells against cancer as well as fighting cancer cells. It not only saves a person from contracting fatal diseases but also protects people who have a high chance of contracting it.
                                    </p>
                                </div>
                            </div>

                            {/* Cinnamon Bark Oil */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cinnamon Bark Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Cinnamon bark oil has the ability to fight cancer cells. Research conducted by USDA researchers backs up the fact that cinnamon has properties to not just inhibit the growth of cancer cells but also trigger the process of apoptosis. The research showed that cinnamon successfully reduced the growth of leukemia cells.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing leukemia, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Leukemia;