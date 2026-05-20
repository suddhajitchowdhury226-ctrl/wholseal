import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const UterineFibroid = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Uterine Fibroid</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Uterine Fibroid</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Uterine Fibroids is a highly common problem. According to research, around 75% women have to face the problem of uterine fibroids in their lives.</li>
<li>• More than 200,000 women go through hysterectomy, every year, due to uterine fibroids.</li>
<li>• Harvard School of Public Health and Harvard Medical School have found out a strong relationship between hypertension and the risk of developing uterine fibroids during pre-menopausal years.</li>
<li>• Health experts suggest eating a diet that is rich in fiber and phyto-estrogens and avoiding caffeine, saturated fat and sugar could help in improving the fibroids.</li>
<li>• While the exact cause of uterine fibroid is still not known, hormones, genetics, and any abnormality in the vascular system and blood vessels play role in their formation.</li>
<li>• The problem has been found to more common among women who are obese.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
As evident from the name, uterine fibroids are non-cancerous tumors that form either in the uterus muscles, on the outer side of the uterus or in the uterine cavity. Though very rarely, they can also form in the cervix.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Uterine fibroids, also known as uterine polyps, myomas or leiomyomata, are highly common among women, usually forming during the childbearing years. They can range in size from few millimeters to several inches.
                        </p>
                         <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
Despite all the advancements in medical science, doctors have not yet been able to find the actual cause of these fibroids. However, they have found a connection between the formation of uterine fibroids and progesterone and estrogen hormones and thus, they claim that these fibroids are hormone dependent. Pituitary growth hormone, parathyroid hormone, prolactin and insulin are also found to be associated with the development of uterine fibroids.
                        </p> 
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

                                <li>• Heavy and prolonged bleeding during menstrual cycles</li>
                                <li>• Pelvic pain and pressure</li>
                                <li>• Bladder problems</li>
                                <li>• Pain in lower back</li>
                                <li>• Rectal pressure</li>
                                <li>• Anemia</li>
                                <li>• Distended abdomen</li>
                                <li>• Problems in urination</li>
                                <li>• Irregular bowel movements</li>
                                <li>• Reproductive issues, such as problems in conceiving, miscarriage and even infertility</li>
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
                            While eating a healthy diet and regular exercise helps to manage Uterine Fibroid, it is not enough to keep you fit and healthy. Supplements are essential for managing Uterine Fibroid and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Uterine Fibroid. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                       The following supplements have proven to benefit people with Uterine Fibroid:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Standardized Vitex Berry Extract (Chasteberry) Vegetable Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        As evident from the name, Standardized Vitex Berry Extract Capsules by Bluebonnet contains chasteberry extract, which is an amazing natural supplement for maintaining hormonal balance. It also reduces inflammation and estrogen levels that are contribute to formation of uterine fibroids. It is also helpful in prevention of infertility and miscarriages.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Natural Progesterone Liposomal Skin Cream with Lavender</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        This skin cream is made with a combination of natural ingredients that are beneficial for female health. In addition to balancing the female hormones, it improves the functioning of thyroid gland, prevents blood clotting and is helpful in maintaining uterine lining in a healthy condition. Seeking doctor’s advice is recommended before using this cream.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dandelion is an amazingly beneficial plant. Both its roots and leaves have amazing properties for promoting liver health. The leaves are rich in various types of minerals and vitamins whereas the roots work great for stimulating digestion and improving metabolism of estrogen. Dandelion plant really helps in balancing levels of hormones.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Red Raspberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red Raspberry leaves are highly beneficial for glandular and reproductive system of females. One of the best known herbs for maintaining uterine health, red raspberry tones uterine muscles and strengthens the uterus. The leaves of red raspberry are also known to have astringent properties.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Vitamin D3</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    According to a study conducted by the National Institutes of Health (NIH), Vitamin D has found to be helpful in managing fibroid tumors. Although more research is needed to confirm the benefits of Vitamin D3 for inhibiting the growth of fibroids, researchers are hopeful that Vitamin D3 could be an alternative treatment for fibroids for those who do not want to go for the surgical procedures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing  Uterine Fibroid,but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default UterineFibroid;