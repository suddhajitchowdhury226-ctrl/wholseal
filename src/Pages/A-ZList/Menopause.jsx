import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Menopause = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Menopause</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Menopause</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• When the number of mature eggs decreases in a woman’s ovaries, it is termed as menopause. This stops them from having periods.</li>
                            <li>• A majority of women cease menstruating when they reach the age bracket of 45-50.</li>
                            <li>• The average menopause age in America is 51.</li>
                            <li>• 5 out of every 100 women continue to menstruate until 60 years of age.</li>
                            <li>• Symptoms (physical and psychological) differ in women based on their ethnicity. Asian women experience fewer symptoms compared to African-American women.</li>
                            <li>• As a woman reaches the menopause stage, she begins losing her bone density, making her more prone to fractures and bone damage.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When a woman stops menstruating, it is called menopause. It is not a disease or symptom but a naturally occurring biological process. A majority of the population experiences menopause after they reach 45. Menopause marks the end of fertility in women. As a woman ages, the levels of estrogen and progesterone in her body decrease; these two substances/chemicals are responsible for fertility and are produced by the ovaries. When the ovaries stop their production, they shut down completely, ending menstrual periods.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All women go through it; however, many studies reveal that the symptoms may be experienced differently. Ethnicity also plays a major role in determining the symptoms. Another important thing to note here is that menopause doesn’t happen overnight; just because a woman has missed her period once doesn’t mean her menopause has begun. It is a gradual process and can only be termed menopause if the woman hasn’t had periods for a 12-month period.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Menopause depicts a number of symptoms; however, not everyone experiences them the same. Their severity and occurrence may vary from woman to woman.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some general symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Night sweats</li>
                                <li>• Hot flashes in the face, chest, or neck which makes the skin sweaty or dry</li>
                                <li>• Libido (reduced sex drive)</li>
                                <li>• Disruption in sleeping patterns</li>
                                <li>• Forgetfulness and lack of concentration</li>
                                <li>• Palpitations</li>
                                <li>• Headaches</li>
                                <li>• Mood swings</li>
                                <li>• Vaginal pain, itching, and dryness</li>
                                <li>• Decreased muscle mass</li>
                                <li>• Aches, joint stiffness</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage menopause, it is not enough to keep you fit and healthy. Supplements are essential for managing menopause and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for menopause. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with menopause:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Chaste Tree */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chaste Tree</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The berry of the chaste tree is a common women’s herb which has been used since ancient times to regulate hormonal imbalances. It is equally effective for men suffering from excess testosterone levels. Its key functions are to normalize hormone levels, ease pains, treat infertility and irregular periods, and alleviate mood swings, insomnia, nervous tension, tenderness in the breast, and hot flashes. It can also be taken to treat a wide range of physical problems arising due to hormone deficiency.
                                    </p>
                                </div>

                                {/* St. John's Wort */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">St. John's Wort</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A mild sedative, St. John’s Wort helps in treating numerous symptoms of menopause and PMS, including insomnia, hot flashes, mood swings, and painful cramps.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Dong Quai */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dong Quai</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Also termed as Chinese angelica, Dong Quai is a beneficial remedy to treat cases of libido in both men and women, reduce the symptoms of menopause, alleviate menstrual cramps, hot flashes, and more. Due to the many benefits it offers for women, many even call it women’s ginseng.
                                    </p>
                                </div>

                                {/* Black Cohosh */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Black Cohosh</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Proven most effective to treat muscle cramps by relaxing the muscles in the urinary area, Black Cohosh also works wonders in treating symptoms of menopause. It helps women regain their hormonal balance, enjoy the same quality of life as before, and combat a number of menopause side effects such as irritability, lack of sexual desire, and hot flashes.
                                    </p>
                                </div>
                            </div>

                            {/* Motherwort */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Motherwort</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    An effective all-natural remedy to treat muscle aches, cramps, and the symptoms of menopause, Motherwort promises support for all women struggling with imbalanced hormones or hormonal changes. One can take it to relieve headaches, treat insomnia, alleviate depression, calm anxiety, and ease palpitations and hysteria – all of which are symptoms of menopause.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing menopause, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Menopause;