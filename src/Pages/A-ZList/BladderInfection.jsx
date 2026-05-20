import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const BladderInfection = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Bladder Infection</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Bladder Infection</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                    
                            <li>• Urinary tract infection is the second most common infection type suffered by people in general.</li>
                            <li>• It accounts for around 8.1 million visits to hospitals/clinics in the country every year.</li>
                            <li>• UTI is more common in women. They have a 50% higher risk of getting a UTI than men.</li>
                            <li>• Almost 30% women in the age range of 20 to 40 years have suffered a urinary tract infection.</li>
                            <li>• Around 80% of bladder infections are triggered by the E.coli. – A naturally occurring bacterium.</li>
                            <li>• A Urinary Tract infection recurs within a years’ time in almost 40% of patients.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
As the name suggests, bladder infections are usually bacterial infections occurring within the bladder. They are often popularly categorized collectively as the urinary tract infection (UTI). The UTI includes all bacterial infections that occur in your urinary tract – that includes the kidneys, bladder, and the ureters/urethra.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
In most cases, bladder infections are of acute nature. However, certain infections become chronic and may spread to and damage the kidneys. Early treatment is therefore, extremely important in this case. Bladder infections are usually caused by bacteria – the Escherichia coli (E. coli) that occur naturally in our large intestine.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 pt-4 pb-4">
                            
The other types of bacteria that may cause bladder infections are the Chlamydia and Mycoplasma. These bacteria are transmitted during sexual intercourse.
                        </p>
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
                            The symptoms of a bladder infection vary depending on the severity. You’ll immediately notice changes during urination. As the infection progresses, pain also occurs.The most common symptoms of bladder infections may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                                <li>• Frequent urination (often more than usual)</li>
                                <li>• Urinating urgency (the constant sensation of the need to urinate</li>
                                <li>• Bloody or cloudy urine</li>
                                <li>• Foul smelling urine</li>
                                <li>• Inflammation or pain while urinating</li>
                                <li>• Pressure or cramping in the lower back or lower abdomen</li>
                            </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Bladder infections may also lead to back pains. This pain is usually linked to pain or problems in the kidneys. In case you have any of the above mentioned symptoms, or are experiencing pain in the middle or both sides of your back, consult a doctor immediately. Back pain induced by bladder infections may mean the infection has spread all the way to the kidneys.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Bladder Infection, it is not enough to keep you fit and healthy. Supplements are essential for managing Bladder Infection and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Bladder Infection. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Bladder Infection:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cranberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Probably the most common natural remedy for bladder infections that we come across is the cranberry juice. It was found that cranberry extracts help prevent the E.coli. from connecting with other bacteria. When the E.coli. sticks to other bacteria, it forms a biofilm in the urinary tract, which allows them to grow into an infection.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nettle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Nettle increases the output and frequency of urination. This helps the body get rid of the E.coli that passes out with the urine, preventing its numbers from growing into an infection. Nettle leaves have also displayed efficacy in healing the urinary tract and putting a stop to the bleeding cause by the infection.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Artichoke has diuretic properties that make it a trusted natural remedy for maintaining the overall health of the urinary tract. It improves the urinary frequency and output that makes sure that the excess population of infectious bacteria is timely discarded from the body.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Usnea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Usnea is a medicinal herb with anti-inflammatory and antimicrobial properties. The herb has been effective in reducing the pain and inflammation caused by the presence of the infection in the urinary tract. Its antimicrobial properties help stop infectious bacteria from multiplying and spreading the infection.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
Uva Ursi</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Uva Ursi is a naturally diuretic herb with anti-inflammatory and antiseptic properties. This herb reduces the inflammation in the urinary tract induced by the infection, and increases the urine output that helps the body flush out excess E.coli and control the infection from spreading too much.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Bladder Infection, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default BladderInfection;