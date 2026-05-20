import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BreastCancer = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Breast Cancer</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Breast Cancer</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Breast cancer is the most commonly occurring cancer in women across the world. It is also ranked second in the most commonly prevailing cancers in the world.</li>
                            <li>•  In America, breast cancer is the second most common cause of death in women</li>
                            <li>•  1 in every 8 women in the U.S. – 12% of the total female population in the country develop breast cancer (invasive) during their lifetime.</li>
                            <li>•  BreastCancer.Org predicts that an estimated 316,120 women in the U.S. will be diagnosed with breast cancer in the year 2017.</li>
                            <li>•  It also predicts the number of deaths caused by Breast Cancer will be 40,610 women in the U.S.</li>
                            <li>• The African-American women aged 45 or below are more prone to developing breast cancer than the Caucasian women in the same age bracket.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Breast cancer occurs when cell growth in the breast gets out of control. The proliferation of these cells causes the formation of tumors. These tumors are mostly malignant, because they have the tendency to invade cells and tissues surrounding it; and sometimes even spread to other areas of the body.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Breast cancer mostly occurs in women, but there are cases where men get breast cancer as well. Breast cancers can form in any part of the breast – the ducts, the nipple, and even the glands.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
However, just like any other part of our body, the brain also suffers from various conditions due to the following causes:
                        </p> */}
                        {/* <ul>
                            <li>• Brain diseases can be due to infections</li>
                            <li>• seizures</li>
                            <li>• trauma</li>
                            <li>• tumors</li>
                            <li>• autoimmune conditions</li>
                            <li>• vascular conditions</li>
                            <li>• and neurodegenerative conditions</li>
                        </ul> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        {/* <ul className="text-gray-700 space-y-2 ml-6">

                            <li>• Alopecia areata</li>
                            <li>• Pattern baldness for both men and women</li>
                            <li>• Scarring alopecia</li>
                            <li>• Telogen effluvium</li>
                            <li>• Anagen effluvium</li>
                        </ul> */}

                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Hair loss or alopecia can be temporary or permanent. It can be cause by several different factors. The factors that most commonly trigger hair loss in people include:
                        </p> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Scientists are still struggling to figure out what causes it in the first place. Many hypotheses suggest the following causes:
                        </p> */}
                        {/* <ul className="text-gray-700 space-y-2 ml-6">

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
                    </div> */}

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Normally, the symptoms of blood cancer may not begin to appear until the disease has matured into a tumor. When that happens, one may witness the following red flags:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Tenderness or pain in the breast(s)</li>
                                <li>• A lump in the underarm or in the breast that doesn’t go away even after the end of your menstrual cycle.</li>
                                <li>• Swelling in your armpit</li>
                                <li>•  An obvious indentation or flattening of the breast</li>
                                <li>•  A change in the contour, size, temperature, or texture of the breast</li>
                                <li>•  A pitted, reddish skin surface that resembles an orange peel</li>
                                <li>•  Change in your nipple (retraction, itching, dimpling, ulceration, or burning sensation).</li>
                                <li>•  Unusual discharge coming out of the nipple.</li>
                                <li>•  A formation of marble-like area beneath the skin.</li>
                                {/* <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li> */}
                            </ul>
                            
                            
                        </div>
                        {/* <p className="text-gray-700 leading-relaxed mb-4 pt-4">
                            These symptoms can indicate brain diseases and must be discussed with a qualified doctor without delay. Tumors can grow quickly, so haste is prudent – just in case.
                        </p> */}
                        {/* <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p> */}
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Breast Cancer, it is not enough to keep you fit and healthy. Supplements are essential for managing Breast Cancer and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Breast Cancer. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Breast Cancer:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Popularly known as the life-giving vine from Peru, cat’s claw is an efficient natural remedy for averting the risk of breast cancer in women. Researches reveal that cat’s claw supplies the body with essential compounds that activate the T-helpers and the phagocytes (specific immune cells). This helps the body speed up its DNA repair process as well as make up for the cells damaged due to the presence of cancer.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Kelp</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Kelp is an efficient detoxifying agent that cleans the body off excess hormones like estrogen. Unhealthy estrogen metabolism in the body can increase the risk of breast cancer in women. Kelp also contains rich iodine content that regulates the healthy function of hormones in the female body and helps maintain stronger immune systems in them.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Black Cohosh</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Black Cohosh contains triterpene glycosides and cinnamic acid esters, which collectively act to restrict the growth of breast cancer cells in women. These powerful compounds also trigger and speed up the process of apoptosis (natural death of cells) for breast cancer cells, helping the body overcome the damage done so far.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        CTurmeric is one of the most powerful natural remedy for a wide range of medical conditions. Not-so-surprisingly, this spice is great for averting the risk of developing breast cancer in women. It regulates the hormones, inhibiting the growth of cancerous tumors and prevents the damage already done from spreading to the lungs.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Studies revealed that dandelion root is packed with anti-cancer properties. The herb strengthens the body’s immune system and fights off toxins that may cause the cells to mutate. Dandelion has also shown efficacy in limiting the growth of cancer cells, especially in the case of breast, colorectal, and pancreatic cancers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing  Breast Cancer,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BreastCancer;