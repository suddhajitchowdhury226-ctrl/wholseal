import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const ChildrensHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Children’s Health</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Children’s Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Children’s immune system is still developing and so they are highly susceptible to catch viral diseases.</li>
                            <li>• During teething, babies chew toys. These toys are the reason children contract bacteria and end up with a fever and diarrhea.</li>
                            <li>• One out of every five children’s decaying tooth is left untreated by parents.</li>
                            <li>• Weak immune system in children can turn their syncytial virus into pneumonia.</li>
                            <li>• If a baby’s rate of breathing is higher than 50 to 60 per minute, must call emergency.</li>
                            <li>• When the child is starting to turn blue, medical attention is required immediately</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Even the healthiest babies need proper attention and nutrients to start their life with fitness and top-notch health. However due to lack of preventative measures, children’s unclean habits and close relation with fellow children make them a victim of various viral conditions. These viral conditions are not untreatable but they take time to recover and make it uncomfortable for children. Some of the most common conditions that most children experience are:
                        </p>
                        <h2 className="tp-4 text-2xl font-bold mb-6">
                            Vomiting:
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Stomach virus in children’s stomach can make them vomit frequently. It happens because children are always ingesting unhealthy things.
                        </p>
                        <h5 className="text-2xl font-bold mb-6-4">
                            Coughing:
                        </h5>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Asthma, allergies, cold and viruses can make children cough frequently. It can also be chronic infection if the sinuses.
                        </p>
                        <h5 className="text-2xl font-bold mb-6">
                            Stomach ache:
                        </h5>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This is a common condition experienced by youngsters due to appendicitis, gas or constipation among other causes.
                        </p>
                        <h5 className="text-2xl font-bold mb-6-4">
                            Diarrhea:
                        </h5>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Diarrhea occurs when child is suffering from food poisoning. It can also be a side effect of various medications or antibiotic a child might be taking.
                        </p>
                        
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Diagnosing and recognizing symptoms of any disease and condition is most difficult with children because they are unable to describe their sensations more openly. With babies it is nearly impossible unless you are paying attention. Here are some symptoms:
                                                    </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">

                               <li>• Eating disorder</li>
                               <li>• Mood changes</li>
                               <li>• Vomiting</li>
                               <li>• Diarrhea  </li>
                               <li>• Crying inconsolably</li>
                                <li>• Fever</li>
                                <li>• Red and itchy spots on the face or body</li>
                                <li>• Clogged nasal cavity</li>
                                <li>• Red and itchy eyes</li>
                                <li>• Wheezing in breathing</li>
                                <li>• Swollen face or lips</li>
                                <li>• Glands under the ears </li>
                                <li>• Inactive and limp</li>
                                <li>• blue nails and lips</li>
                                <li>• Convulsion</li>
                                
                            </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                            Some babies don’t show any of the symptoms until their fever is too high.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Children’s Health, it is not enough to keep you fit and healthy. Supplements are essential for managing Children’s Health and reducing symptoms. But it should be kept in mind that supplements should not be used to replace the treatment. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit Children:


                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Chamomile has been in use as a stomach settler for ages. A safe plant and harmless supplements for children, chamomile eases all the troubles of an upset stomach, heartburn, nausea and vomiting. It also eases the pain of colicky babies. Diarrhea, anxiety and insomnia in children are also treated with the help of chamomile.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Arnica</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Arnica is packed with properties of anti-inflammation and is analgesic. These two qualities in one place have made it an ideal part of first-aid kit for children. It reacts fast to deal with painful tissues caused by injuries children are prone to. It also helps to relax after a hyperactive day and relieve pain from joints and muscles. Arnica encourages the painful tissues to remain open heal faster. It is best to keep at home for everyday bumps and bruises.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Usnea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Usnea is effective for the extra boost of immune we need to expedite the recover process. It protects the children from catching cold and flu from their peers at school. This herbal tonic has no side effects whatsoever is perfectly safe for children’s use. It also promotes healing of sinus and respiratory issues experienced commonly by young people.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Immuno Well RX</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Immuno Well RX is a combination of Western and Eastern Herbs with Medicinal Mushrooms. This healthy supplement enhances resistance in children, gives a boost to the immune system and makes the body more stress-resistant.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Neutralizing Cordial</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Majority of children suffer from upset stomach, sour stomach, burning belches, vomiting and indigestion along with diarrhea. These conditions are prevailing during the summer holidays. Neutralizing Cordial acts as a soothing laxative and does a good job of washing out the intestinal tracts. Children don’t even consuming it because of its pleasant peppermint and cinnamon flavor.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Children’s Health, but you should exercise proper caution and ask your doctor before adding any such supplements in to the diet of your child. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ChildrensHealth;