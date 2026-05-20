import React from 'react';
import backgroundImage from '../assets/images/bg/privatepolicy.jpeg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

const Mystory = () => {
    // Using a gradient background similar to the original image
    // const gradientBackground = `linear-gradient(135deg, #ff9a56 0%, #ffad56 25%, #ffd56b 50%, #b8e24f 75%, #7cb518 100%)`;

    return (
        <Layout>
            <div className="min-h-screen ">
                {/* Hero Section with Same Design */}
                <div
                    className="relative h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >

                    <div className="relative z-10 h-full flex items-center px-8">
                        <div className="container mx-auto">
                            <h1 className="text-6xl font-bold text-white mb-2">My Story</h1>
                            {/* <p className="text-xl text-white/90">Private Policy for Ray's Healthy Living</p> */}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-8 py-12 max-w-6xl">
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        RAY’S HEALTHY LIVING
                    </h1>

                    {/* Site User Agreement */}
                    <section className="mb-12">

                        <div className="space-y-4 text-gray-700 leading-relaxed">

                            <p>
                                There are a huge number of health sites on the web today which offer beauty, health, and wellness products, so why should you choose Ray’s Healthy Living? Sure, there’s a lot of stuff out there that promises results and say they are “top of the line”. What makes the Ray’s Healthy Living and product line stand out is we deliver on our promise: Natural products made with the highest quality of organic ingredients with a friendly customer care and service support all-year long. Nothing less than the best when you go with Ray’s Healthy Living!
                            </p>
                            <p>Hi! I’m Ray and my commitment to delivering the best quality organic products isn’t just a motto; it’s a promise. Here are my guarantees:</p>
                            <p>Ray’s Healthy Living is motivated not just to help you live an active, attractive, and healthy lifestyle, but to provide these in the most natural way possible.</p>
                            <p>Our products are not blended with anything artificial, no chemical additives or toxic ingredients tucked away in the fine print. Everything Ray’s Healthy Living produces and sells is genuine organic and under strict quality control.</p>
                            <p>Our company lives by the credo of “take care of your customers, and they’ll take care of you”. Thus, we are committed with your satisfaction and providing excellent customer service and after-sales support. We also welcome your feedback if you have any concern with any product or feature of the website. (I wouldn’t want anything less, since your pal Ray is a customer, too!)</p>
                            <p>Our product line is fully transparent. We want you, as the customer, to know exactly what you’re getting in to. At Ray’s Healthy Living, we provide full disclosure as to the ingredients of the product. We also acquire third party reviews on each product, to ensure you have the insight of a customer like yourself to prove you’re getting only the best.</p>

                        </div>
                    </section>

                    {/* Inaccuracy Disclaimer */}
                    <section className="mb-12">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            MY STORY
                        </h1>

                        <div className="space-y-4 text-gray-700 leading-relaxed">

                            <p>Now, you might be thinking “but I’ve heard all this before, Ray”.</p>
                            <p>Let me tell you a little story about your pal, Ray, and why you’re guaranteed only the best product and support from Ray’s Healthy Living:</p>
                            <p>My folks and family was brought up in grassroots living. Live by your word, work for your dreams, never betray a trust… these were the virtues we lived by. However, we weren’t really concerned with our health and lifestyle. That is, until we lost my dad and my grandmother far too early in life. And the main culprit wasn’t simply the illnesses they had: it was their nutrition and lifestyle.</p>
                            <p>That’s when my mom started her crusade of healthy living. She researched and studied about the essentials of having a beautiful, healthy lifestyle. And she didn’t want to stop with herself and our family. She wanted everyone to enjoy the same benefits.</p>
                            <p>She started to invite people to our home, friends, acquaintances, co-workers, or complete strangers who were interested in a lifestyle that promoted health and wellness. Pretty soon, she was out meeting people in flea markets, farmer’s markets, and such sharing what she knew while building a growing business. Nature SunShine was the first brand mom adopted, as it was the first company to largely promote herbal supplements in capsules. Pretty soon, other family members joined her and now serve communities all around with their own health and wellness stores that both sell natural products and also provide nutritional advice and support.</p>
                            <p>So where does your pal Ray come in?</p>
                            <p>I was a careless youth with a reckless lifestyle back in the day. While my mom was doing her thing with health and wellness, I was going out to make my own stamp in life. Eventually, I started working at a Laundromat. I liked it so much I went into the Laundromat business for 10 years. So, why did I change my line of business and followed my mom’s footsteps?</p>
                            <p>At age 45, I started feeling the consequences of my unhealthy lifestyle as a younger man. I was 45 lbs. overweight and even though I go to the gym, I wasn’t maximizing my health and wellness. I struggled for about 20 years with a sharp pain on my lower hips. I met and got tested by doctors and hospitals, but none of them could figure out what was wrong until I met with a urologist who suggested I change my diet to a more natural one. That’s when I had the revelation that mom was right all along!</p>
                            <p>From then on, I realized mom had been helping a lot of people since the 1980s to live a beautiful and healthy lifestyle. I decided I would do the same, taking up the same goals and motivation mom lived by: offer the highest quality of natural products and help customers live their lives to the fullest. You could say the rest is history from there!</p>
                            <p>But wait, there’s more!</p>
                            <p>I realized mom’s traditional approach might not be the best in this day and age. After carefully studying our options, mom and I decided to take our vision and goals online to reach out to more people who share the same desire: live healthy and beautiful lives with the help of natural products. And so, Ray’s Healthy Living is born and always willing to serve you!</p>
                        </div>

                    </section>

                    {/* Trademarks and Copyrights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            OUR VISION: “TREAT PEOPLE, NOT JUST SYMPTOMS”
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living offers the highest quality line of natural and organic vitamins and supplements from the best companies, including our own home-brewed product line!</p>
                            <p>We use only the highest quality herbal extracts and organic ingredients for Ray’s Healthy Living products. All of these ingredients are wild-harvested or directly imported from top organic producers, guaranteed to be pesticide-free and non-GMO. Each herbal ingredient is carefully picked with respect to environmental standards by well-trained botanists and experts.</p>
                            <p>Our store boasts products with the most widely used and versatile herbal components. At Ray’s Healthy Living, you’ll find organic products that contain Ginkgo and Kava mixtures, Liver Detox, Immuno-Tonic, Aller-Calm, Digest-Ease, Exhinacea/Goldenseal, Kava Gold, Echinacea St. John’s Wort, and a host of other super-healthy supplements.</p>
                        </div>
                    </section>


                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            RESEARCH AND DEVELOPMENT
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>At Ray’s Healthy Living, we pride ourselves with our commitment to healthy and safe products for our clientele. Before we approve of any product sporting our company’s label, we make certain that the highest quality of herbs and natural ingredients are used in its creation. We partner with only the most reputed FDA-registered manufacturing and production companies. I use the products we sell, so I’d be the first to complain if we didn’t follow these standards!</p>
                            </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            SPECIAL NOTE ABOUT OUR HERBALIST
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living employs an expert herbalist for our specially formulated liquid herbs. These have been produced with the utmost care and after many clinical success with patients and through wellness programs. Our expert herbalist serves on the board of the American Herbal Association (APHA) and a faculty member of the National College of Phytohterapy. St. Joseph’s Hospital and Presbyterian Hospital are two noteworthy supporters supplied by our expert Ray’s Healthy Living’s resident herbalist. Ray’s Healthy Living’s professional herbalist also provides products to many different communities, cooperatives, markets, and organizations.</p>
                            </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            ALL ORGANIC
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living products are guaranteed to be produced with nothing but the best organic herbs. Our organic herbs are produced and harvested without the use of artificial septicides and follow the most ideal seasonal cycle. This is an important factor to our adherence to quality and commitment to support organic farmers.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            OUR HERBAL EXTRACTS AND LIQUOR

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Every herb used in a Ray’s Healthy Living product is carefully analyzed to determine the amount of alcohol required to extract the phytochemicals. This is important in making sure quality is maintained in gathering ingredients like alkaloids, glycosides, gums, volatile oil, and polysaccharide, and such. Using grain liquor is ideal for ensuring the extracts have a shelf-life of at least 5 years.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            ALCOHOL PERCENTAGE IN OUR PRODUCTS

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living uses optimal percentage for its use of alcohol in acquiring extracts from the natural ingredients in its products. We use a range of 35% to 90%, depending on what is the best for getting quality extracts. For instance, extracts from mushrooms require a 35% alcohol percentage while we use something closer to 90% for resinous plants like myrrh gum. We ensure this fact is noted in each product Ray’s Healthy Living ships out.</p>
                            <p>On that note, Ray’s Healthy Living also offers a selection products derived from ingredients without alcohol being part of the process, using glycerite instead without any reduction in the quality. Note that all glycerites are extracted using alcohol, which is later removed. This process is done effectively to make sure the extracts retain their essence and potency.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            PERCOLATION IN OUR PRODUCTS

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Percolation is the kinetic process of extraction using deionized water and alcohol liquid mestrum. These are run over the plant material carefully. This is more effective in some instances when acquiring organic extracts, such as extraction from paddocks, which is why Ray’s Healthy Living utilizes it as well.</p>
                            
                        </div>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            WILD HARVESTING

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Our company is committed to morally acceptable wild harvesting. Ray’s Healthy Living is against overharvesting of herbs and ingredients that grow in the wild, as well as the direct or indirect destruction of the natural habitats where these can be found. For instance, our products that use certified organic Echinacea will have a label to let you, our customers, know that the harvest was done ethically and with respect to nature.</p>
                            {/* <p>On that note, Ray’s Healthy Living also offers a selection products derived from ingredients without alcohol being part of the process, using glycerite instead without any reduction in the quality. Note that all glycerites are extracted using alcohol, which is later removed. This process is done effectively to make sure the extracts retain their essence and potency.</p> */}
                        </div>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            COMMITMENT TO SAFETY

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living takes great pride in making sure our products are safe. Our organic and natural ingredients adhere to the prescribed dosage and guidelines that ensure our customers are safe.</p>
                            <p>Be that as it may, we always add a disclaimer at our site and our products, recommending consultation with a healthcare professional. As per industry standard, we will also never market our products as intending to diagnose, cure, or replace the treatment of any health care professional.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            
                            LIQUID VS. PILLS

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Our products are mostly in liquid form. Ray’s Healthy Living has found this choice has benefits over the traditional oral consumption in the form of pills. Let’s look at the most important benefits:</p>
                            <p>BIOAVAILABILITY – You can’t gain benefits from herbs if they aren’t digested properly. Our products in liquid form are more absorbable than they would be as pills. Extracts retain their natural taste which also improves the absorption through digestive enzymes. As they are in liquid form, these products are also more manageable to consume for most customers.</p>
                            <p>EASE OF USE – Some individuals, particularly the elderly and young children, find some difficulty in oral consumption of pills. In liquid form, most people can drink them readily or even mix them in water or juices.</p>
                            <p>POTENCY – When broken down into pills, the herbs lose some of their effectiveness. Liquid herbal products retain greater potency, according to professional herbalists, naturopaths, and other alternative medicine experts.</p>
                            <p>FAST EFFECTS – Thanks to being easier to absorb and being more potent, liquid herbal products produce the intended effects at a faster rate than if they were in the form of pills. This is particularly important for those who are looking relief from conditions like pain management and sleep disorders.</p>
                            <p>These are just some of the key benefits from tinctures and other liquid herbal products in Ray’s Healthy Living product line.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            
                           DOSAGE RECOMMENDATIONS AND GUIDELINES

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Ray’s Healthy Living ensures dosage recommendations are provided in every product we offer. This is to ensure that the customer is aware of the ideal dosages to maximize the benefits from the products as well as make sure the customer is safe. Dosage guidelines are listed in the product descriptions of Ray’s Healthy Living, ranging from drops amount (from 20-60 drops per use) to special warnings when applicable as in the case of pregnant and nursing customers.</p>
                            <p>The products offered by Ray’s Healthy Living are available in different sizes for customer convenience. In addition, our products can be used with water or juices through dilution without any loss of effectiveness and potency. We do not, however, recommend boiling the extracts as this will break down the ingredients and essence, reducing the potential benefits.</p>
                            {/* <p>EASE OF USE – Some individuals, particularly the elderly and young children, find some difficulty in oral consumption of pills. In liquid form, most people can drink them readily or even mix them in water or juices.</p>
                            <p>POTENCY – When broken down into pills, the herbs lose some of their effectiveness. Liquid herbal products retain greater potency, according to professional herbalists, naturopaths, and other alternative medicine experts.</p>
                            <p>FAST EFFECTS – Thanks to being easier to absorb and being more potent, liquid herbal products produce the intended effects at a faster rate than if they were in the form of pills. This is particularly important for those who are looking relief from conditions like pain management and sleep disorders.</p>
                            <p>These are just some of the key benefits from tinctures and other liquid herbal products in Ray’s Healthy Living product line.</p> */}
                        </div>
                    </section>
                    
                </div>
            </div>
            <Footer/>
        </Layout>
    );
};

export default Mystory;