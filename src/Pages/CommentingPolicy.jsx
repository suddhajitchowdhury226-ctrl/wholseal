import React from 'react';
import backgroundImage from '../assets/images/bg/Commenting-Policy-banner.jpg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

const CommentingPolicy = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Commenting Policy</h1>
                            <p className="text-xl text-white/90">Commenting Policy for Ray's Healthy Living</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-8 py-12 max-w-6xl">
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        RAY’S HEALTHY LIVING COMMENTING POLICY
                    </h1>

                    {/* Site User Agreement */}
                    <section className="mb-12">

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ray’s Healthy Living (rayshealthyliving.com) welcomes comments such as feedback, reviews, and suggestions, whether they are related to our services, products, or website. All comments are posted directly to our website. Each comment requires a name and a valid e-mail address (note: e-mail address will not be posted).
                            </p>
                            <p>
                                Ray’s Healthy Living reserves the right to block or delete comments without notice if they fall under the following considerations:
                            </p>

                            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4">
                                <li>Comment contains obscenity or profanity.</li>
                                <li>Comment contains defamatory statements or threats.</li>
                                <li>Comment contains derogatory statements directed at age, ethnicity, disability, gender, nationality, religion, skin color, or sexual orientation.</li>
                                <li>Comment endorses or promotes services or products that compete or are unrelated to what is on our website.</li>
                                <li>Comment does not contribute to the theme or topic of the relevant post (such as our products or our blog).</li>
                                <li>Any comment that we deem as inappropriate for our audience and customers.</li>
                            </ul>
                            <p>
                                Please note that Ray’s Healthy Living reserves the right to amend this commenting policy as we see fit and without prior notice.
                            </p>
                            <p>
                                We appreciate your cooperation and support to ensure that Ray’s Healthy Living and its website provides useful information and promotes a friendly environment where our visitors can actively participate!
                            </p>
                        </div>
                    </section>

                   </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default CommentingPolicy;