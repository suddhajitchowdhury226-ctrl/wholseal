import React from 'react';
import backgroundImage from '../assets/images/bg/returnpolicy.jpeg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

const ReturnPolicy = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Shipping Return Policy</h1>
                            <p className="text-xl text-white/90">Shipping Return Policy for Ray's Healthy Living</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-8 py-12 max-w-6xl">
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        RAY’S HEALTHY LIVING RETURN POLICY
                    </h1>

                    {/* Site User Agreement */}
                    <section className="mb-12">

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ray’s Healthy Living makes every effort to satisfy our clients and customers. However, should you find any dissatisfaction with a product, please do contact our friendly customer service department by sending an email to this address: info@rayshealthyliving.com within 30 days of the shipment date. Our staff will send a Return Product Authorization and instructions on how to return the product.
                            </p>
                            <p>
                                Returns without Return Product Authorization or that did not follow return instructions may not be honored. In addition, please take note of the following details:
                            </p>

                        </div>
                    </section>

                    {/* Inaccuracy Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            SHIPPING WITHIN THE UNITED STATES
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ray’s Healthy Living reserves the right to apply a 25 % restocking fee for returned products depending on certain circumstances such as, but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4">
                            <li>Some promotional or sale products are discontinued or short-dated by the manufacturer. In these instances, returns may not be accepted without a specific Return Product Authorization from Ray's Healthy Living customer service. Mass shipped products of 4 or more items (or less for some special items).</li>
                            <li>Other circumstances depending on review of our customer service staff.</li>
                        </ul>
                    </section>

                    {/* Trademarks and Copyrights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            DAMAGED OR DEFECTIVE PRODUCTS
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Any damaged or defective product upon receipt through shipment should be noted and recorded. Please contact Ray’s Healthy Living customer service immediately for further guidance.
                        </p>
                    </section>

                    {/* Use and Reproduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            UNOPENED PRODUCTS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Products shipped by Ray’s Healthy Living that remain unopened can be returned for a full refund (not including shipping fees). Please ensure that these product seals and in the original, non-tampered packaging. Shipping fees for these returned products are at customer’s expense. Refunds will be processed upon our receipt of the returned products. We reserve the right to decline refunds for lost or damaged products during return shipping.
                            </p>

                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            REFUSED OR UNDELIVERABLE PRODUCTS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                If a product cannot be delivered due to (but not limited to) customer refusal to accept or due to error in provided shipping address, the customer will be responsible for the cost of return shipment incurred by Ray’s Healthy Living to have said products shipped back to our warehouse.
                            </p>

                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            INCOMPLETE RETURNS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                No refund will be applied for returned products that have less than 60% of the original contents (whether mass orders or single purchases).
                            </p>
                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            SUPERFICIAL CONCERNS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Products cannot be returned and issued a refund due to superficial concerns, such as flavor or texture. Please consult our product information on the site or try out our sample products at a store near you to ensure what you order/purchase meets your specific tastes
                            </p>
                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            INTERNATIONAL ORDERS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                If an order is returned due to local restrictions, incorrect address, or refusal to settle fees, Ray’s Healthy Living can issue a partial refund. Any return shipping charges and for any additional custom fees for products being returned will be the customer’s responsibility. These charges will be deducted from the original order total. The remaining balance, if any, will be the amount refunded after receipt of the returned products.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            PROMOTIONAL PRODUCTS
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Promotional products given by Ray’s Healthy Living as a gift or incentive are not eligible for returns/refunds.
                            </p>
                        </div>
                    </section>
                    {/* Health Disclaimer */}
                    <section className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                                IMPORTANT NOTE
                            </h2>
                            <p>
                                Ray’s Healthy Living products are stored and shipped in fresh condition from a climate-controlled warehouse. During summer, some of Ray’s Healthy Living products are particularly susceptible to the effects of heat (such as health bars, which can melt). Should there be a possibility that you will not be available to receive the package from the carrier, please provide specific instructions to leave the delivery to a sufficiently cool area, an alternate nearby address, or not to deliver should no one be available for receipt on your behalf.
                            </p>
                            <p>
                                Given these points, Ray’s Healthy Living reserves the right to decline refund and return requests for heat-damaged products (including any shipping fees incurred).
                            </p>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="text-center text-sm text-gray-600 italic border-t pt-6">
                        "Ray's Healthy Living, RHL, and RaysHealthyLiving.com are owned and operated by Ray's Healthy Living, LLC. All products bearing the Ray's Healthy Living brand logo are trademarks of Ray's Healthy Living, LLC."
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ReturnPolicy;