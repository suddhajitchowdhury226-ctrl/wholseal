import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const CleanseAndDetox = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Cleanse And Detox</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Cleanse And Detox</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• The main organ that is central in detoxification process is our liver and it regulates, stores, synthesizes, and secretes in order to remove toxic waste from our body.</li>
                            <li>• Fasting is also one form of cleansing and Detox approach</li>
                            <li>• There are certain side effects of a Detox diet.</li>
                            <li>• Exercise is not needed during a cleansing and detoxification process as the consumption of calories is already low.</li>
                            <li>• The toxins in our body are so dangerous that if the liver doesn’t do its job, we’ll be dead in hours</li>
                            <li>• Some of the toxins in our body get secreted through sweating.</li>
                        </ul>
                        
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A Cleansing and detoxification is a process where a person changes their lifestyle and their diet in order to flush out all the toxins from their body and enjoy a healthy form. The regimen is also picked up by those struggling to lose weight.  The detox and cleansing treatments includes various course of actions. Some of them are:
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Consumption of supplements</li>
                            <li>• Fasting</li>
                            <li>• Adopting a diet based solely on liquids and juices</li>
                            <li>• Eating only specified and restricted food that promotes cleansing</li>
                            <li>• Consuming high amount of laxatives, enemas etc. for colon cleansing</li>
                            
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Unlike other diets, detox and cleansing is not for everyone and not always safe. For instance consumption of healthy juices is good for the detox but if the juices haven’t been filtered and no actions have been taken to kill the bacteria in them, it can result in illness and weak immune system. Also, those who are not used to fasting may experience dehydration, nausea, headache and other conditions. However, if cleansing and detox regimen is adopted smartly it can help in flushing out harmful toxins from the body and help prevent sickness and diseases contracted because of it.
                            </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Toxins have a negative impact on our health and it happens slowly, and sometimes it even results in chronic toxicity in the body.   For this reason, most people take up cleansing and detoxification for the long-standing wellness of their health. Here are some symptoms of toxicity:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Muscle and joint aches</li>
                            <li>• Sinus congestion</li>
                            <li>• Gas  </li>
                            <li>• Constipation</li>
                            <li>• Diarrhea</li>
                            <li>• Weight gain</li>
                            <li>• Dark circles under the eyes</li>
                            <li>• Heartburn</li>
                            <li>• Heartburn</li>
                            <li>• Bloating</li>
                            <li>• Acne</li>
                            <li>• Sleep disorders</li>
                            <li>• Eczema</li>
                            <li>• Water retention</li>
                            <li>• Rashes</li>
                            
                            
                        </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            If chronic toxics are not removed form the body, we remain constantly sick and might even develop conditions like insomnia, cancer, autism, digestive diseases, heart diseases, attention deficit disorder and many more.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage toxic waste, it is not enough to keep you fit and healthy. Supplements are essential for managing toxicity and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for chronic toxicity. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people trying to cleanse and Detox their body:


                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Liver Detox</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Liver detox refers to flushing out toxins as well as minimizing the fats in the body by consuming a healthy combination of natural supplements. In addition to cleansing the toxins, liver detox also promotes maintenance of lever and allows better functioning by providing protection from everyday environmental toxins our body is exposed to.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Milk Thistle is unlike any supplement or drugs found in the world’s pharmaceutical market. This natural supplement works exclusively to protect the liver from toxins with the help of silymarin, silybin and antioxidants present in them. Matter of fact, when consumption of Amanita Mushroom damages the liver, the only treatment available is in the form of Milk Thistle. In addition to protecting the liver, it also makes its work easier by detoxifying other synthetic chemicals from the body.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Neem</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Neem is highly-effective in balancing out our body’s components. It efficiently balances acidity and cleanses our blood from all the harmful toxins we might have extracted from the food we consumed and the ones present in the environment.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nettle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Urtica dioica, or as commonly known as Nettle is a perennial plant which Homo sapiens have been using for centuries as a medicinal source. Nettle comes with many benefits for the human health and one of its most defining ones is its ability to cleanse and flush the body from all the toxins that pose danger to health.                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Spirulina</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Spirulina is a blue-green algae and a freshwater plant found along the coast of Hawaii and other exotic coastal location around the globe. Spirulina is a very effective natural remedy of arsenic toxicity in which heavy metals begin to flow with our blood. What Spirulina does is, attach with these heavy metals in our body and flush out, taking the arsenic toxics with it.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing toxicity, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default CleanseAndDetox;