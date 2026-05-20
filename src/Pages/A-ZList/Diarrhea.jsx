import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Diarrhea = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Diarrhea</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Diarrhea</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Approximately 1.7 million cases of diarrhea are diagnosed in children under the age of 5 globally.</li>
                            <li>• Out of these, nearly 760,000 are killed because of it, making it the second-most common cause of death in children under five.</li>
                            <li>• Diarrhea is also one of the prime causes of stunting and malnutrition in children.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Diarrhea is defined as the frequent passage of watery, loose and soft stools that are often accompanied by abdominal cramps, excessive bloating and gas. At the highest risks are children under five. The most common causes of diarrhea include bacterial and viral infections, parasites, reactions to certain medications, intestinal diseases or disorders and food intolerance etc. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        There are two broad categories to define diarrhea. It can either be absolute or relative. Absolute diarrhea refers to one having more than five bowel movements per day or liquid stool whereas, relative diarrhea is of a slightly more serious nature where the indicial experiences an increase in bowel movements per day or sees an increase in loose stools when compared with their normal bowel habit.
        
                        </p>
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <p>Diarrhea is further subdivided into these 4 categories:</p>
                            <li>• Chronic Diarrhea: It is the presence of liquid stools for more than two weeks</li>
                            <li>• Acute Enteritis: It is the swelling of the intestine</li>
                            <li>• Gastroenteritis: diarrhea linked with nausea or vomiting</li>
                            <li>• Dysentery: diarrhea that contains pus, blood, or mucus.</li>
                            
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Although diarrhea doesn’t always come with a warning sign, there are some symptoms and signs that are most commonly associated with it. The earlier one notices catches these, the better.  The symptoms of diarrhea include:

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Abdominal cramps</li>
                                <li>• Bloating</li>
                                <li>• Watery stools</li>
                                <li>• Nausea or puking</li>
                                <li>• Fever</li>
                                <li>• Blood in stool</li>
                                <li>• Urgency to have a bowel movement</li>
                            
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


                        <p className="text-gray-700 leading-relaxed mb-4 pt-4" >
                            Consultation with a physician becomes crucial when one experiences severe abdominal pain or unvarying fever. Many a times, diarrhea is also an underlying cause of some bigger problems, which is why it must never be taken lightly.
                            </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage diarrhea, it is not enough to keep you fit and healthy. Supplements are essential for managing diarrhea and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for diarrhea. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with diarrhea:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Cinnamon Liguid Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Cinnamon Liguid Veggie Caps are a common treatment to treat diarrhea. Other than improving one’s blood sugar levels, it also treats different bacterial infections, vaginal discharge and prevents diarrhea by drying it up.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    For centuries, cayenne has been used as a medical spice to treat a number of health conditions. Derived from the pepper fruit, it is best to treat the symptoms of diarrhea such as abdominal cramps, upset digestion, intestinal gas and prevent watery stools. Incorporating cayenne in food will surely ease the pain and discomfort caused by diarrhea.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Clove</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Similar to cayenne, cloves also have medicinal benefits to offer. Found on almost every household’s pantry, clove can be used in a number of different ways. Clove oil, in particular, is extremely beneficial for diarrhea as it gets rid of intestinal gas, vomiting and nausea.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Hawthorn’s berries leaves and flower, all are used into make a number of medicines to treat different health conditions. Among the most common include, ingestion stomach pain and diarrhea. Intake of supplements and capsules made using its extract or fruit can ease the discomfort and help drying up diarrhea.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Pau D' Arco</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                It is most commonly used to cure a number of bacterial and viral infections including infectious diarrhea, however, it is not the safest remedy. It is strictly advised that one doesn’t take it in high doses. It is a great alternative to medication and is beneficial treating both absolute and relative the diarrhea.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing diarrhea, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Diarrhea;