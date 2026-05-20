import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const AvianInfluenza = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Avian Influenza</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Avian Influenza</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• The first widespread avian influenza type-A outbreak happened in China in the year 2013.</li>
                            <li>• There were a total of 130 reported cases of avian influenza in China that year. With majority of them being men (68%).</li>
                            <li>• According to WHO there were a total of 856 cases of avian influenza reported worldwide during the years 2003 to 2016.</li>
                            <li>• Out of these cases, there were around 452 recorded deaths in the same time duration.</li>
                            <li>• The highest number of avian influenza cases was recorded in Egypt (356), with 119 deaths in total.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Avian influenza is more commonly known as bird flu in lay man terminology. The disease is infectious and common in birds. It is usually caused by influenza strain type-A.  Often in birds, avian influenza brings a broad spectrum of symptoms that usually go unnoticed unless the condition becomes fatal and triggers and epidemic. The frequency of avian influenza outbreaks is higher in the eastern countries compared to the west.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Normally, avian influenza induced viruses do not infect humans. There however, have been instances where specific extremely pathogenic strains of the disease have caused diseases in humans. This usually happens when humans come in close contact or are exposed to infected birds or their droppings. The virus has the tendency to mutate and become easily transmissible between humans. It is contagious and in some cases even fatal if not treated on time.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                           Avian influenza can be:
                        </p>
                        <ul className="pl-6 text-gray-700 space-y-2">
                           <li>Kidney disease</li>
                           <li>Coronary artery disease</li>
                           <li>Peripheral artery disease</li>
                           <li>Carotid artery disease</li>
                        </ul> */}
                        {/* <p className="text-gray-700 leading-relaxed mb-4">
                            Each type of angina pain can be triggered by a number of different factors. Since angina can be an indication of an underlying health condition usually related to the heart, it is important to take the condition seriously and consult a doctor as soon as one or more of the symptoms listed below become apparent.
                        </p> */}
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           The symptoms of avian influenza are quite similar to those experienced during normal flu conditions. However, it is important to keep in mind that avian influenza has several different strains and the symptoms for each may vary.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some of the common symptoms of avian influenza include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                               <li>• Diarrhea</li>
                               <li>• Cough</li>
                               <li>• Difficulty in breathing</li>
                               <li>• Sore throat</li>
                               <li>• Headache</li>
                               <li>• Fever</li>
                               <li>• Malaise</li>
                               <li>• Runny nose</li>
                               <li>• Aching muscles</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                           A number of people tend to mistake avian influenza for common cold and flu. While the symptoms and conditions are more or less the same, t is important to take the condition seriously. If you are experiencing any of the aforementioned symptoms especially after being in close contact with birds, make sure you visit the doctor for proper medical care.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          While eating a healthy diet and regular exercise helps to manage Avian Influenza, it is not enough to keep you fit and healthy. Supplements are essential for managing Avian Influenza and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Avian Influenza. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Avian Influenza:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Elderberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Elderberry is an excellent immune support. It contains anthocyanidins – chemical compounds that provide a strong boost to the immune system and helps in warding off normal symptoms of cold and flu. Elderberry is also rich in flavanoids which have proved beneficial in inhibiting symptoms of avian influenza virus in humans.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lemon Balm</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                     Lemon balm is another efficient anti-viral herb with potent immunity boosting properties that helps the body develop sturdy resistance against viral infections of all types. The herb demonstrated adequate efficacy in fighting off symptoms of avian influenza at pre-infection, simultaneous, and post-infection stages.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        For years, turmeric mixed in milk has been used as an effective remedy for cold in the South Asian countries. Turmeric has powerful antiseptic, anti-inflammatory, and anti-viral properties. It contains curcumin, a bioactive ingredient that has the medicinal properties to deactivate and prevent replication of all sorts of influenza.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Considered as one of the best natural remedies for avian influenza, astragulus contains polysaccharide that stimulates the generation of antibodies in the system, which inhibit various symptoms of avian influenza including: fatigue, diarrhea, and cold.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Garlic</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Garlic is a powerful home remedy for avian influenza. It contains anti-bacterial and anti-biotic properties that eliminate the bacterial presence in the system and strengthens the immune system to ward off and resist the infectious viruses. Garlic is also anti-inflammatory and ideal for getting rid of avian influenza induced inflammation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing avian influenza, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default AvianInfluenza;