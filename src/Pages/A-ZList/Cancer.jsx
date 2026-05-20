import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Cancer = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cancer</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cancer</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• The American Cancer Society predicts there will be 1,688,780 new cases of cancer diagnosed in the country this year.</li>
                            <li>• The society also estimated that there will be approximately 601,000 Americans will dies of cancer in 2017.</li>
                            <li>• According to these statistics there will be approximately 1,650 cancer deaths and 4,630 new cancer cases occurring every day in the year 2017.</li>
                            <li>• Cancer is one of the top causes of death in the world. The disease alone caused 8.2 million deaths across the world in the year 2012.</li>
                            <li>• Over 60% of the world’s new cancer cases and around 70% of its cancer deaths occur in Asia, Africa, and South and Central America.</li>
                            <li>• The national expenditure on cancer care in the U.S. is expected to reach almost $156 billion by the year 2020.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cancer is a disease that attacks the cells in our body. These cells, each kind have associated jobs to perform in order to keep the body functioning properly. In normal circumstances, cells orderly divide and die once they get damaged or worn out. Then new cells form and replace them. Cancer causes cells to mutate and grow out of proportion and control.                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cancer cells keep on multiplying and eventually begin crowding out the normal cells in the body. This is where the problem starts. Cancer can occur in any part of the body. It restricts the normal functioning of the body.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Common cancers showcase certain widespread symptoms that may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• Fatigue</li>
                               <li>• Fever</li>
                               <li>• Unusual weight loss</li>
                               <li>• Skin discoloration, changes, and/or irritability</li>
                               <li>• Emergence of unusual warts or moles</li>
                                <li>• Pain</li>
                                <li>• Unexplained changes in bladder function or bowel habits</li>
                                <li>• Unusual discharge or bleeding</li>
                                <li>• White spots or patches on the tongue or in the mouth.</li>
                                <li>• Sores that don’t heal</li>
                                <li>• Hoarseness or nagging cough</li>
                                <li>• Lumps in a particular part of your body</li>
                            </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                                While the above listed symptoms could possibly be the telltale signs of cancer, it doesn’t always have o be so. However, it is still recommended to consult a doctor at the first signs of appearance. If these conditions are persistent, make sure you get yourself screened for cancer.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Cancer, it is not enough to keep you fit and healthy. Supplements are essential for managing Cancer and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Cancer. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Cancer:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10 Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        CoQ10 is a naturally occurring chemical compound in the body that promotes the growth of cells. This natural compound works on strengthening the immune system and allows it to fight infections and cellular damage that may lead to cancer. In addition to that, CoQ10 provides protection to the heart from the detrimental side-effects of the cancer treatment drug doxorubicin.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Following research that proves Echinacea is an excellent natural remedy for treating cancer tumors, the herb is now being widely used alongside the conventional cancer therapies as treatment. Echinacea contains unique, powerful phytochemicals that combat and kill cancer cells that form tumors in the body.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Goldenseal</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Goldenseal contains Berberine – a potent alkaloid with some powerful anti-cancer properties. Research shows that Berberine has the amazing ability of arresting the cancer cell cycle and inducing apoptosis (programmed death of cells), which enables the inhibition of cancerous tumors up to 91%. This is far more impressive than the success rate of doxorubicin – a commonly used drug for chemotherapy.

                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kelp</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Another powerful natural remedy for cancer prevention is kelp. This brown sea weed contains fucoidan – an anti-carcinogen element that induces anti-tumor activity in the body. Fucoidan has shown efficacy in limiting the growth of cancer cells by speeding up the apoptosis of lymphoma, leukemia, and colorectal cancer cells.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Milk thistle has powerful cancer suppressing properties. This powerhouse herb contains Silymarin – a non-toxic flavanoid that inhibits the proliferation of cancer cells in the body. It detoxifies the body promoting the regular removal of dangerous free radicals by keeping the liver healthy and functioning properly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Alcoholism, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Cancer;