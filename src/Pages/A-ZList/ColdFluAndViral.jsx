import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const ColdFluAndViral = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cold, Flu And Viral</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cold, Flu And Viral</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Each year, on an average between 5% and 20% of people in the US get the flu.</li>
                            <li>• Around 200,000 of these people get hospitalized in America due to Cold, Flu and Viral illnesses.</li>
                            <li>• The average hospitalization and outpatient costs pertaining to this disease amount to over $10 billion.</li>
                            <li>• Every flu season there are almost 180 million flu vaccines available in the country.</li>
                            <li>• 6 months is the youngest age at which the CDC recommended flu shot can be taken.</li>
                            <li>• Flu is contagious. The disease can be contracted from anyone suffering from flu from a day before the symptoms emerge till up to 10 days after the start of illness.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Flu is a commonly occurring respiratory illness that is highly contagious. It is generally caused by viral bacteria that infect your lungs, nose, and throat. The disease can cause illness that can be categorized between mild to severe. Usually harmless, the illness when left untreated can sometimes even cause death depending on its severity. The disease can be prevented with a flu vaccine.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Flu complications may include dehydration, sinus infections, bacterial pneumonia, ear infections, and even congestive heart failure or asthma.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Flu viruses spread, causing other people in the surroundings contract the illness. It usually happens when droplets from people’s flu sneeze, talk, or cough travel through air into other people’s systems through way of their noses and mouths. Sometimes, the disease can also be contracted by touching objects or surfaces that have the flu virus on them and then using the same hands to touch their own eyes, nose, or mouth.
                            </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although common and contagious, the symptoms of flu may not be visible in a person until 1 to 4 days have passed after contracting the disease. These symptoms often include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Fever or feverish chills</li>
                            <li>• Sore throat</li>
                            <li>• Cough</li>
                            <li>• Stuffy or runny nose</li>
                            <li>• Fatigue</li>
                            <li>• Body or muscle aches</li>
                            <li>• Headaches</li>
                            <li>• Diarrhea and vomiting is common among children suffering from flu.</li>
                        </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            It is important to note that people may not always experience all of these symptoms together. These symptoms may vary from person to person; but while all other symptoms may be there, fever is something that doesn’t happen to everyone during flu. Getting a flu shot annually can save you from flu throughout the year. The prevalence of flu is extremely common during December to February.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Cold, Flu and Viral , it is not enough to keep you fit and healthy. Supplements are essential for managing Cold, Flu and Viral and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Cold, Flu and Viral. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Cold, Flu and Viral:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cinnamon Liquid Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cinnamon is a powerful natural antibiotic with additional antiviral properties. This spice helps the immune system fight away the viruses and bacteria capable of causing flu and infections. It helps kill and limit the bacteria from growing inside the body and worsening the condition. Cinnamon is also effective for controlling and relieving cough.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea-Goldenseal Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The dynamic Echinacea-Goldenseal duo makes a powerful immune support. While Echinacea works to strengthen the immune system and help ward off the bacteria and viruses causing flu, Goldenseal with its antibiotic properties works on eliminating the viral bacteria within the body to control the condition from worsening.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Holy basil is a powerful immunity booster provided by the nature itself. The herb protects the body from a variety of infectious miscreants including bacteria, fungi, protozoa, and viruses. Holy basil also relieves headaches and fevers that may result due to flu.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregano Oil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Oregano can be your complete garden remedy for combating cold and flu. The herb contains natural antiviral and antibiotic properties that ward off the flu-causing bacteria and viruses and eliminate the ones already present in the body; hence, reducing your chances of falling ill with cold, flu, or a viral infection.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Ashwagandha is a potent adaptogen. The herb has natural properties that boost the immune and endocrine systems in the body. A strong immune system acts efficiently in fighting off bacteria and viruses that can cause common cold, flu, and viral infections.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Cold, Flu and Viral, but you should exercise proper caution and ask your doctor before adding any such supplements in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ColdFluAndViral;