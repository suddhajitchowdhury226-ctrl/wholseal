import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import backgroundImage from '../assets/images/bg/faq-banner.jpg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

export default function Faq() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const faqData = [
        {
            question: "How often should I take these supplements?",
            answer: "Different supplements have different recommended doses. Generally most supplements only need to be taken once per day, but there are a few that are supposed to be taken more than once. You don't have to worry too much about supplements, specially when it comes to the organic health supplements that we specialize in. Our supplements don't contain anything harmful, so even if you take them twice instead of once, there wouldn't be much of a problem, aside from you running out of supplements before you should."
        },
        {
            question: "What is arginine?",
            answer: "A. This is one of the most common questions we get. A: Arginine, or L-arginine (that is its proper scientific name) is an amino acid. It is one of the 22 such amino acids that are naturally found in all of our bodies, and arecalled the building blocks of our body. Amino acids are molecules that contain nitrogen, and they produce the proteins that our body needs. These amino acids perform essential functions in our bodies. They make enzymes, hormones, antibodies, neurotransmitters, and aid in making sure all these things reach the part of the body that needs them. Your body is supposed to create the arginine it needs naturally, but the problem is that our diets are so bad these days that often people end up with lower arginine counts than what should be in their body naturally. Thus we sell supplements that contain this highly useful amino-acid, so you can cover this deficiency without having to completely change your diet."
        },
        {
            question: "If arginine is naturally being produced by my body, why do I need to take supplements that provide it?",
            answer: "This is a great question. The problem is that over the past few decades we have moved away from natural diets, and most of the food we eat is too processed, and too full of harmful materials. Our body’s natural needs just aren’t being met. This is why we see so many people with diabetes, cholesterol, and other similar problems caused by diets. The same thing happens with calcium too – our body is supposed to generate the calcium needed by our bones naturally, from our diets, but our diets are so unnatural now that calcium supplements are needed."
        }
    ];

    return (
        <Layout>
        <div className="min-h-screen ">
            <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >

                <div className="relative z-10 h-full flex items-center px-8">
                    <div className="container mx-auto">
                        <h1 className="text-6xl font-bold text-white mb-2">FAQ</h1>
                        <p className="text-xl text-white/90">Frequently Asked Questions for Ray's Healthy Living</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-8 py-12 max-w-6xl">
                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        We often get questions from people and it is understandable. We know that the products we sell actually help people, and are thus willing to answer any question that comes our way!
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        These are some of the most commonly asked questions. Please go through them, and if the question you wanted to ask is not here, contact our customer service representatives.
                    </p>
                </div>

                {/* FAQ Dropdowns */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                            {/* Dropdown Header */}
                            <button
                                onClick={() => toggleDropdown(index)}
                                className={`w-full px-6 py-4 text-left text-white font-medium text-lg flex items-center justify-between transition-colors duration-200 ${activeDropdown === index
                                        ? 'bg-yellow-500 hover:bg-yellow-600'
                                        : 'bg-green-500 hover:bg-green-600'
                                    }`}
                            >
                                <span>{faq.question}</span>
                                <div className="ml-4 flex-shrink-0">
                                    {activeDropdown === index ? (
                                        <ChevronDown className="w-5 h-5" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5" />
                                    )}
                                </div>
                            </button>

                            {/* Dropdown Content */}
                            <div className={`transition-all duration-300 ease-in-out ${activeDropdown === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                } overflow-hidden`}>
                                <div className="px-6 py-6 text-gray-700 text-base leading-relaxed border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white rounded-lg shadow-sm p-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Have more questions? Contact our customer service representatives for personalized assistance.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </Layout>
    );
}