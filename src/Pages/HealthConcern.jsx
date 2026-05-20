import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';
import backgroundImage from '../assets/images/bg/healthconcernbanner.jpg';
const HealthConcern = () => {
    const [activeSection, setActiveSection] = useState('A');
    const navigate = useNavigate();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const healthTopics = {
        A: [
            'ADD/ADHD',
            'Alcoholism',
            'Alopecia',
            'Amyotrophic Lateral Sclerosis',
            'Angina',
            'Arrhythmia',
            'Arthritis',
            'Asthma',
            'Atherosclerosis',
            'Autoimmune Disorders',
            'Avian Influenza',
            'Ayurveda'
        ],
        B: [
            'Back Pain',
            'Bacterial Infections',
            'Bladder Infection',
            'Bone Osteoporosis',
            'Brain And Cognitive Function',
            'Breast Cancer',
            'Bruising And Contusions'
        ],
        C: [
            'Cancer',
            'Candida/Fungal',
            'Canker Sores',
            'Cardiomyopathy',
            'Carpal Tunnel',
            'Cataract',
            'Children\'s Health',
            'Cholesterol',
            'Chronic Fatigue',
            'Cleanse And Detox',
            'Cold, Flu And Viral',
            'Colon Health',
            'Congestive Heart Failure',
            'Constipation'
        ],
        D: [
            'Depression',
            'Diarrhea',
            'Diet And Weight Loss',
            'Digestion And Stomach Ailments',
            'Dry Mouth'
        ],
        E: [
            'Ear, Hearing, And Tinnitus',
            'Eye And Vision Care'
        ],
        F: [
            'Fatigue',
            'Fibromyalgia',
            'Food Allergy',
            'Foot Center'
        ],
        G: [
            'Gallstones',
            'Gastric Ulcer',
            'Gout'
        ],
        H: [
            'Headache',
            'Heartburn And GERD',
            'Hemorrhoids',
            'Hepatitis',
            'Herpes',
            'Huntington\'s Disease',
            'Hypertension',
            'Hypoglycemia'
        ],
        I: [
            'Immune Support',
            'Impotence/Erectile Dysfunction',
            'Incontinence',
            'Inflammation',
            'Inflammatory Bowel Disease',
            'Injuries And Burns',
            'Irritable Bowel Syndrome'
        ],
        J: [
            'Joints And Ligaments'
        ],

        K: [
            'Kidney/Bladder Diseases'
        ],
        L: [
            'Leukemia',
            'Liver Disorders',
            'Lung Cancer',
            'Lupus'
        ],
        M: [
            'Menopause',
            'Men’s Health',
            'Multiple Sclerosis'
        ],
        N: [
            'Nail Health',
            'Nasal Health',
            'Nausea Relief'
        ],
        O: [
            'Oral Care',
            'Osteoarthritis',
            'Osteoporosis'
        ],
        P: [
            'Parkinson’s Disease',
            'PMS',
            'Pregnancy',
            'Prostate',
            'Psoriasis'
        ],
        Q: [  ],
        R: ['Respiratory Health'],
        S: ['Skin Health',
            'Sleep Support',
            'Smoking Centre',
            'Stress',
            'Stroke',
            'Substance Abuse / Addiction'],
        T: ['Thyroid',
            'Trauma'],
        U: ['Uterine Fibroid'],
        V: [
            'Varicose And Vein Care'
        ],
        W: [
            
        ],
        X: [
            
        ],
        Y: [
           
        ],
        Z: [
            
        ]
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (letter) => {
        setActiveSection(letter);
        const element = document.getElementById(`section-${letter}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Convert topic name to URL-friendly slug
    const topicToSlug = (topic) => {
        return topic
            .toLowerCase()
            .replace(/['']/g, '') // Remove apostrophes
            .replace(/[\/]/g, '-') // Replace forward slashes with hyphens
            .replace(/[&]/g, 'and') // Replace & with 'and'
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
            .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    };

    const handleTopicClick = (topic) => {
        const slug = topicToSlug(topic);
        navigate(`/health-concern/${slug}`);
    };

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
                            <h1 className="text-6xl font-bold text-white mb-2">Health Concerns</h1>
                            <p className="text-xl text-white/90">Explore various health concerns and their solutions</p>
                        </div>
                    </div>
                </div>

                {/* Alphabet Navigation */}
                <div className="bg-white shadow-sm top-0 z-10">
                    <div className="container mx-auto px-4">
                        {/* Statistics Summary */}
                        <div className="text-center py-4 border-b border-gray-200">
                            <div className="flex justify-center gap-8 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span className="text-gray-600">
                                        {Object.values(healthTopics).filter(topics => topics && topics.length > 0).length} Categories with Content
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                    <span className="text-gray-600">
                                        {Object.values(healthTopics).reduce((total, topics) => total + (topics ? topics.length : 0), 0)} Total Health Topics
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-2 py-4">
                            {alphabet.map((letter) => {
                                const hasContent = healthTopics[letter] && healthTopics[letter].length > 0;
                                return (
                                    <button
                                        key={letter}
                                        onClick={() => scrollToSection(letter)}
                                        className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 relative ${
                                            activeSection === letter
                                                ? 'bg-blue-600 text-white shadow-lg transform scale-110'
                                                : hasContent
                                                ? ' text-green-700 hover:bg-green-200 hover:text-green-800 border-2 border-[#fff]-300'
                                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-500'
                                        }`}
                                        title={hasContent ? `${healthTopics[letter].length} topics available` : 'No topics available'}
                                    >
                                        {letter}
                                        {/* {hasContent && (
                                            // <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                                        )} */}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="container mx-auto px-4 py-8">
                    {alphabet.map((letter) => (
                        <section key={letter} id={`section-${letter}`} className="mb-16">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-4xl font-bold text-gray-800">{letter}</h2>
                                    {healthTopics[letter] && healthTopics[letter].length > 0 && (
                                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {healthTopics[letter].length} topics
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors hover:scale-105 transform duration-200"
                                >
                                    <ChevronUp className="w-4 h-4" />
                                    BACK TO TOP
                                    <ChevronUp className="w-4 h-4" />
                                </button>
                            </div>

                            {healthTopics[letter] && healthTopics[letter].length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {healthTopics[letter].map((topic, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleTopicClick(topic)}
                                            className="text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 hover:scale-105 transform duration-200"
                                        >
                                            <span className="text-green-600 font-medium hover:text-green-700">{topic}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : null}
                            
                            {/* Separator Line */}
                            <div className="mt-12 border-b-2 border-gray-200"></div>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default HealthConcern;
