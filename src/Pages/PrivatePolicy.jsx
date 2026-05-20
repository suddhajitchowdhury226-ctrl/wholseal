import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/images/bg/privatepolicy.jpeg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';
import { useCookieConsent } from '../context/CookieConsentContext';

const PrivatePolicy = () => {
    const manageCookiesRef = useRef(null);
    const { openSettings } = useCookieConsent();

    useEffect(() => {
        if (window.location.hash === '#manage-cookies' && manageCookiesRef.current) {
            setTimeout(() => {
                manageCookiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, []);

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
                            <h1 className="text-6xl font-bold text-white mb-2">Private Policy</h1>
                            <p className="text-xl text-white/90">Private Policy for Ray's Healthy Living</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-8 py-12 max-w-6xl">
                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Terms & Conditions
                    </h1>

                    {/* Site User Agreement */}
                    <section className="mb-12">

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                                Eligibility
                            </h2>
                            <p>
                                You should be at least 18 years old in order to use this website and be legally empowered to enter into binding contracts with Ray’s Healthy Living, and not be in any way disqualified under any and all applicable law to do so. This website is not intended for anyone below 18 years of age and no person of less than 18 may use the Ray’s Healthy Living website. If and when you use the website, you affirm to be at least 18 years of age.
                            </p>


                        </div>
                    </section>

                    {/* Inaccuracy Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            Automatic Renewal Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you order one or more of our products online, through telephone, or through the automatic renewal program, your membership stays in effect unless you cancel it. In case you decide to sign up for the automatic renewal program on the Ray’s Healthy Living website in connection with the purchases you make, your payment card would be charged according to the amount displayed on the corresponding web page of the product you purchase, and the same amount will be automatically charged on a monthly basis i.e. every 30 days following your purchase.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                            IF YOU TAKE UP MEMBERSHIP IN THE AUTOMATIC RENEWAL PROGRAM OFFERED BY RAY’S HEALTHY LIVING AND HAVE PROVIDED A GENUINE CREDIT CARD NUMBER OR AN ALTERNATE PAYMENT METHOD, THE SHIPMENTS WILL BE PROCESSED AUTOMATICALLY AT THE TIME OF EVERY SUCCESSIVE INSTALLMENT OR SHIPMENT AND WILL BE CONSEQUENTLY BILLED TO THE PAYMENT METHOD YOU PRESCRIBED WHEN YOU ENROLLED AND MADE YOUR INITIAL PURCHASE FROM RAY’S HEALTHY LIVING. IF YOU WANT TO CANCEL YOUR REGISTRATION IN THE AUTOMATIC RENEWAL PROGRAM, YOU CAN DO SO BY DROPPING US AN EMAIL OR CALLING A CUSTOMER REPRESENTATIVE AT RAY’S HEALTHY LIVING ON THE TELEPHONE NUMBERS PROVIDED IN THE CONTACTS SECTION OF THE WEBSITE.
                        </p>
                    </section>

                    {/* Trademarks and Copyrights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            Return/Refund Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Items once purchased can be returned pursuant to the terms laid down in our Returns Policy . In case you are still unclear or unsure about the applicability of the policy for the select products you purchase, feel free to get in touch with one of our customer service representative for the same. Ray’s Healthy Living will refund the payments you make according to the refund policy once you timely return the product (with the authorized RMA number) or the order is cancelled in due time. If the purchase was made using third party credits like MasterCard and Visa, the refund will be made within 7 business days of receiving the returned product.
                        </p>
                    </section>

                    {/* Use and Reproduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            USER-GENERATED CONTENT
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Subject to the restrictions listed forth herein, the Ray's Healthy Living website allows visitors to upload comments, reviews, video clips, images, and other forms of content (Your Content) and communication to the website. Unless indicated otherwise, by posting your content on the Ray's Healthy Living website, you grant Ray's Healthy Living perpetual, non-exclusive, fully sub-licensable, royalty-free, and irrevocable right to use, modify, reproduce, translate, publish, display, distribute, and create derivative works out of your content and the corresponding name submitted with the content across the world in any forms of media known today or to be conceived hereafter. Ray's Healthy Living and its affiliate websites are free to use the concepts, ideas, and information that forms part of Your Content for purposes they see fit including, but not limited to manufacturing, distributing, marketing, and developing products with this information.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Ray's Healthy Living is not obligated:
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4 mb-6">
                            <li className='mb-1'>To maintain the privacy of your content</li>
                            <li className='mb-1'>To pay any compensation for Your Content to you or to another third-party.</li>
                            <li className='mb-1'>To respond to or anything related to Your Content. You alone are and will be responsible for Your Content.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            For all the content you post on Ray's Healthy Living website you warrant and represent that
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4 mb-6">
                            <li>You own and/or control all the rights to Your Content</li>
                            <li>The content you post is accurate</li>
                            <li>The use of Your Content (as intended by this contract) does not amount to its violation and will not inflict any harm or injury on a person or an entity.</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            Ray's Healthy Living will not take liability or responsibility towards you or any other third party in case Your Content is not accurate. Ray's Healthy Living has the right, but is not obligated, to edit, monitor and/or remove any content they want. Ray's Healthy Living will not assume responsibility or liability if Your Content is shared by a third party.
                        </p>


                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            User Conduct
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                It is important that you must use this website solely for lawful purposes. You must NOT use this website in any way that breaches the rights of other users or restricts/inhibits the extent of enjoyment of website for anyone else. Also, without obtaining prior consent from Ray’s Healthy Living you may not:
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4">
                                <li>Reproduce, copy, lease, loan, rent, or sell any content obtained from the Ray’s Healthy Living website;</li>
                                <li>For any purpose, modify, re-post, or distribute any content available on the Ray’s Healthy Living website; or</li>
                                <li>Use the website’s content for anything that can be classified as commercial exploitation.</li>
                            </ul>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Ray's Healthy Living is not obligated:
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4 mb-6">
                                <li className='mb-1'>To maintain the privacy of your content</li>
                                <li className='mb-1'>To pay any compensation for Your Content to you or to another third-party.</li>
                                <li className='mb-1'>To respond to or anything related to Your Content. You alone are and will be responsible for Your Content.</li>
                            </ul>

                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                For all the content you post on Ray's Healthy Living website you warrant and represent that
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4 mb-6">
                                <li>You own and/or control all the rights to Your Content</li>
                                <li>The content you post is accurate</li>
                                <li>The use of Your Content (as intended by this contract) does not amount to its violation and will not inflict any harm or injury on a person or an entity.</li>
                            </ul>

                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            Protection of Intellectual Property Rights and License
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                You agree that the content available on the Ray’s Healthy Living websites including (with or without limitation) content (text, software, graphics, music, photographs, sound, and videos) and the content provided by sponsors, suppliers, and/or advertisers constitutes as Intellectual Property and is protected by trademarks, copyright, patents, and/or other laws regulating proprietary rights.
                            </p>
                            <p>
                                You hereby are granted a non-transferable, non-exclusive, limited, and revocable license to view, print, and copy the content available on any of the Ray’s Healthy Living websites for the purpose of placing an order through the website and using it solely for that purpose, given that you do not attempt to obscure or remove the copyright notice and/or any other notices present on the said content. Except as explicitly provided in the Agreement, nothing present in this Agreement and/or on the Ray’s Healthy Living websites shall be interpreted as granting any form of right or license, expressly, by estoppel, by implication, or otherwise under the Intellectual Property Rights of Ray’s Healthy Living or other third parties. Rights that are not expressly granted are reserved.
                            </p>
                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            Links to Other Websites That MaximumCardio Does Not Control
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                This website may have links to websites or other resources, including advertisements that do not fall under the control of Ray’s Healthy Living. These links are incorporated into the website solely user convenience and should be construed as just that, and NOT as endorsements by Ray’s Healthy Living of the items, services, and content available on such third-party websites.
                            </p>
                            <p>
                                In case you access, explore, and use these links, including the items, services, or content on them, you do so at your own risk. Ray’s Healthy Living makes no warranties or representations in lieu of the ownership, legality, or the content of these websites. You concur that Ray’s Healthy Living has no liability or responsibility whatsoever for the presence of these external resources or websites, or the content, products, or advertisements available through them. As soon as you leave Ray’s Healthy Living websites via a link that leads to one of these websites, the Privacy Policy and Terms of Use you will be subject to will change as per the website you visit.
                            </p>
                        </div>
                    </section>

                    {/* Legal Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                            Purchasing Items from Us
                        </h2>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Return and Guarantee Policy
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Products can be returned within 30 days of the shipment date. The finer details of the returns policy can be accessed on the Shipping & Returns page.
                            </p>
                            <p>The only items acceptable for refund are ones attached with our Return Product Authorization. It will be sent to you once you send us a return and refund request on out email address. Ray’s Healthy Living will not pay any postage or shipping charges.</p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Representations
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ray’s Healthy Living has the right to change or discontinue specifications, and imminently change the prices of products, without incurring the obligation to disclose it to you. Ray’s Healthy Living takes reasonable care to make sure they quote correct prices for each product on the website, and to provide visitors with an accurate description of the available product(s) on the website, and to display the latest packaging for each Ray’s Healthy Living product. However, when you order products, be mindful of the fact that Ray’s Healthy Living does not represent or warrant that the descriptions for products are complete, current, error-free, and reliable or that the product packaging shown on the Ray’s Healthy Living website will be the same for the actual product you receive.
                            </p>
                            <p>
                                If the product described and displayed on the website does not match the one you receive, or has a different packaging than the product delivered to you, the only remedy you have is to return the product to us – undamaged and unused pursuant our Return Policy . Ray’s Healthy Living’s references to or descriptions of products is not owned by Ray’s Healthy Living and do not imply any endorsement of the said product or constitute a Ray’s Healthy Living warranty for the same.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Errors and Omissions
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Please bear in mind that product prices, availability, and terms of purchase are all subject to change as and when Ray’s Healthy Living deems it appropriate. Ray’s Healthy Living makes constant efforts to maintain the accuracy of information available on the website and correct errors and omissions as soon as they are detected. In case an error occurs once your credit card is already charged, Ray’s Healthy Living cancels your order and refunds the charged amount in full.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Order Placement and Acceptance
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                The order you place at Ray’s Healthy Living is accepted only when a payment for the same is received in full by Ray’s Healthy Living. Ray’s Healthy Living may ask you to provide additional information regarding the order you place provided you’ve not stated all the important information required for processing the order. Ray’s Healthy Living reserves the right to cancel or limit your order at any time once it is placed
                            </p>
                            <p>
                                Every order you place is explicitly conditioned on your consent of this agreement. We locate product(s) listed on your order only when a complete order is received along with your authorization and a proper mode of payment. The product(s) are then lined for shipment. Despatch of items is subject to their availability. You will be promptly informed if one or more of the product(s) you ordered are unavailable and you may be offered alternative product(s) tantamount in quality and value. Ray’s Healthy Living accepts orders placed for personal use ONLY. You are not permitted to resell the products offered on our website. If Ray’s Healthy Living discovers that you have place orders with the intention to resell them, your order may be immediately cancelled and your account suspended or terminated. Ray’s Healthy Living may also pursue the available legal remedies under applicable law against you. In case you are caught for fraudulent conduct Ray’s Healthy Living will report it to state, local, and/or federal law enforcements authorities.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Shipping and Risk of Loss
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ray’s Healthy Living will add the applicable handling and shipping charges to the final amount of your order. Ray’s Healthy Living employs commercially reasonable services to ship products to you within reasonable time once a properly completed order is received by Ray’s Healthy Living. Although Ray’s Healthy Living may provide expected shipment dates and timeframes, you should understand that these estimates are made by Ray’s Healthy Living in good-faith and are subject to change/delays. Also, at times Ray’s Healthy Living has limited stocks for particular products and immediate delivery in these cases may not be possible. Rest assured, the product will be delivered as soon as it becomes available. In case your order gets delayed (later than the date specified at the time of order confirmation; or in case no specified date was provided, more than 30 days from the order confirmation date Ray’s Healthy Living will make efforts to contact you in reasonable good faith. If Ray’s Healthy Living is unable to contact you, or if you don’t want the product anymore, Ray’s Healthy Living will rescind the order and refund the payment already tendered. Ray’s Healthy Living may reject orders in case the provided delivery address lies outside the USA.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Sales Tax
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Operating in the USA, Ray’s Healthy Living is required by law to collect the applicable local and state sales tax on all orders shipped to particular states. Taxes are applicable on most of the Ray’s Healthy Living products, but certain states exempt taxes on certain items, such as food products. Certain tax authorities additionally require the handling and shipping charges to be included in the calculation of taxable amount, while other states charge sales tax simply on the product price. Ray’s Healthy Living is obligated to follow taxation rules and laws for each state. The final payment amount for your order will be inclusive of the local and state taxes applicable.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Payment Information
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                By ordering products via the Ray’s Healthy Living websites, you consent to provide payment information that is current, accurate, true, and complete. Placing an order, you warrant and represent that you will provide payment information that is strictly yours and you have the sole authorization for it. Ray’s Healthy Living reserves the right to rescind your order or suspend/terminate your account in case Ray’s Healthy Living has reasonable grounds to believe the payment information provided by you is inaccurate, fraudulent, incomplete, or not current; or for reasons beyond that Ray’s Healthy Living deem appropriate.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            International Orders
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ray’s Healthy Living may not sell directly to jurisdictions outside of the USA and Canada, as our products may not have approval for sale in foreign jurisdictions. Ray’s Healthy Living reserves the right to accept or reject purchase orders for Ray’s Healthy Living products placed by non-US residents. The acceptance of these orders and the corresponding sale of our products will be subject to conditions like:
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed ml-4">
                                <li>You acknowledge that the Ray’s Healthy Living products that you purchase not being a resident of US, shall be:</li>
                                <li>Ex works Ray’s Healthy Living facility in the USA per Incoterms 2010, with the title and associated risks and losses of the products transferring to you in full in the USA and</li>
                                <li>Purchased strictly for personal use only, and not for further resale by you in any way possible.</li>
                                <li>You agree to not place an order for more than a 90 day supply of the consumable products within any 90 da duration.</li>
                                <li>You hereby explicitly permit and instruct Ray’s Healthy Living to load and dispatch the products you purchased to your designated shipping address and to contract with a courier service for shipment on your behalf.</li>
                                <li>You are the main importer of record and you undertake the sole responsibility for all shipping charges, import requirements, custom clearance, and import duties from Ray’s Healthy Living in the USA to the foreign shipping address you provided.</li>
                            </ul>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            For Order Placed From Canada ONLY
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                By ordering Ray’s Healthy Living products, you hereby authorize one of the licensed customs broker in Canada chosen by Ray’s Healthy Living to act as the agent, and to coordinate with the CBSA (Canada Border Services Agency) to see the merchandise clearance, handle the duties and taxes applicable, to return products to Ray’s Healthy Living and submit refund claims (if any) on your behalf intended for the products you return. You also acknowledge that any refund of taxes and duties paid on the returned merchandise will be sent by the CBSA to the customs broker, and that you will receive the refund (if any) directly from Ray’s Healthy Living. You also allow the customs broker to endorse the refund check issued in your name by the CBSA so that the amount can be reimbursed to Ray’s Healthy Living.
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Electronic Signatures, Agreements, and Communications
                        </h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                All the information present on the website is classified as electronic communication. When you contact Ray’s Healthy Living through the Ray’s Healthy Living websites or by other types of electronic media (like emails), you choose to communicate with s electronically. By doing that, you allow Ray’s Healthy Living to communicate with you electronically and agree to the fact that all such communications including agreements, disclosures, and notices, electronically provided by Ray’s Healthy Living are tantamount to written communications and shall have the same effect and force like they were signed by the respective parties (Ray’s Healthy Living and You) as written contracts.
                            </p>
                            <p>In addition to that, you also agree and acknowledge that every time you click “I ACCEPT”, “DOWNLOAD”, “SUBMIT”, or any other similar buttons designated by Ray’s Healthy Living, you submit an electronic signature that becomes legally binding similar to the case where you sign a written contractual agreement. You accept that every electronic submission you make constitutes your intent and consent to be legally bound by the terms and conditions of this agreement and the hyperlinks (if any) present herein.</p>
                            <p>
                                In accordance with any applicable rules, regulations, ordinances, statutes, or any other laws together with the E-Sign Act (United States Electronic Signatures in Global and National Commerce Act, P.L. 106-229) or other parallel statutes, YOU HEREBY CONCUR TO THE USE OF ELECTRONIC CONTRACTS, ORDERS, SIGNATURES, AND RECORDS AND TO THE ELECTRONIC DELIVERY OF POLICIES, NOTICES, AND TRANSACTION RECORDS INITIATED OR COMPLETED VIA THE WEBSITE OR OFFERED SERVICES OF RAY’S HEALTHY LIVING. Also, you hereby surrender any requirements or rights under any rules, regulations, ordinances, statutes, or any other laws in any jurisdiction that require original signatures, retention or delivery of any non-electronic records, and payments or credit grants in by any other means except electronic.
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
                </div>
                <div className="container mx-auto px-8 py-12 max-w-6xl bg-emerald-100 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Privacy Policy
                    </h1>
                    <h2
                        className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                        Cookies
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">
                        <p>Ray’s Healthy Living is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website or use our services.
                        </p>
                        <p>These cookies help Ray’s Healthy Living determine the usage patterns and access preferences for each visitor, via Google Analytics. If you don’t want to save cookies on your computers, you should change your browser settings to refuse cookies prior to using the Ray’s Healthy Living websites. Refusing cookies will limit certain features of the Ray’s Healthy Living website and it may not be able to function properly without access to relevant cookies.</p>
                        <p>Ray’s Healthy Living may also send cookies to visitors’ computers. Cookies are data fragments transmitted via web servers and then stored on the hard drives of your computer. Cookies do not have the ability to read or gather information from any of the files stored on your computer. The only purpose they have is to monitor the web traffic received by a particular website. When we at Ray’s Healthy Living receive cookies from your end, we know the exact landing pages that you previously visited on the website. This allows us to improve visitors’ web experiences and makes it easier for the visitors to download information every time they visit the website.</p>
                        <p>Ray’s Healthy Living does not change any settings on your computer, nor does it forward/sell your information to third parties. You have the option to reset your browser settings to either refuse the cookies received or to notify you whenever a cookie is sent through. However, doing this will limit the website features from functioning properly and might slow down the speed and quality of browsing.</p>

                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                        Tracking
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">
                        <p>The Ray’s Healthy Living websites use Google analytics for tracking web response and traffic experienced by the website. Google Analytics is a web analytics tool by Google, Inc. To determine the how visitors use the website, Google Analytics makes use of the cookies (text files stored on your computer). Google Analytics will transmit and store the data (including the IP address) generated by cookies regarding the way you use our website on different servers in the country. It will then use the information to evaluate your website usage and compile reports on the regular website activity that will eventually be provided to the website operators and other services related to internet usage and website activity.</p>
                        <p>Google may also choose to forward the information collected to third parties where the law requires it to do so, or where it is the third parties that process information on behalf of Google. Your IP address will not be associated with any of the data held by Google. In case you don’t want Google or any other party to access your data, you can select the appropriate settings on your browser to refuse cookies. If you choose to do that, keep in mind that it may undermine the overall performance and functionality of the website.</p>
                        <p className='mt-2'>By using the Ray’s Healthy Living website, you permit Google to process and use data related to you in the way and for the reasons explained above.</p>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                        The Collection of Information
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">
                        <p> Every single time you visit the Ray’s Healthy Living websites, your IP address is registered on the website servers. The IP address does not reveal any personal information except for the internet protocol number assigned to you. Ray’s Healthy Living does not make use of this technology to obtain any personal information without your free will or consent. Your IP address is not used for any purpose except monitoring of the traffic received on Ray’s Healthy Living websites, or to comply with law enforcement in case of misuse or criminal activity (if any).</p>
                    </div>
                </div>

                <div ref={manageCookiesRef} id="manage-cookies" className="container mx-auto px-8 py-12 max-w-6xl bg-blue-50 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy & Cookies Policy</h1>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
                        <p className="text-sm text-gray-700"><strong>Below is a clean, modern, compliance-ready rewrite of your policy.</strong> It's written in <strong>plain English</strong>, aligned with <strong>GDPR / CCPA-style standards</strong>.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ray's Healthy Living</h2>
                        <p className="text-gray-700 mb-2"><strong>Last Updated:</strong> [Insert Date]</p>
                        <p className="text-gray-700 leading-relaxed">Ray's Healthy Living respects your privacy and is committed to being transparent about how we collect, use, and protect your information.</p>
                    </div>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
                        <p className="text-gray-700 mb-4">When you visit the Ray's Healthy Living website, we may automatically collect limited technical information, including:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Internet Protocol (IP) address</li>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Pages visited and time spent on the site</li>
                            <li>Referring and exit pages</li>
                        </ul>
                        <p className="text-gray-700 mt-4">This information is used <strong>solely for website functionality, performance monitoring, and improvement</strong>.</p>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">2. Use of Cookies and Similar Technologies</h3>
                        <p className="text-gray-700 mb-4">Cookies are small text files stored on your device when you visit a website.</p>
                        <div className="ml-4 space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">a. Strictly Necessary Cookies</h4>
                                <p className="text-gray-700">These cookies are essential for the website to function properly and cannot be disabled.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">b. Analytics Cookies</h4>
                                <p className="text-gray-700">We use analytics tools (such as Google Analytics) to understand how visitors interact with our website.</p>
                            </div>
                        </div>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">3. Cookie Consent & Your Choices</h3>
                        <p className="text-gray-700 mb-4">When you visit our website for the first time, you will see a <strong>cookie consent banner</strong> that allows you to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Accept all cookies</li>
                            <li>Reject non-essential cookies</li>
                            <li>Manage your cookie preferences</li>
                        </ul>
                        <button onClick={openSettings} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">Manage Cookie Preferences</button>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">4. Managing Cookies Through Your Browser</h3>
                        <p className="text-gray-700 mb-4">Most web browsers allow you to control cookies through their settings.</p>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">5. Third-Party Services</h3>
                        <p className="text-gray-700 mb-4">We use Google Analytics to analyze website traffic and usage patterns.</p>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">6. Data Sharing & Disclosure</h3>
                        <p className="text-gray-700 mb-4"><strong>Ray's Healthy Living:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Does <strong>not</strong> sell, rent, or trade personal information</li>
                            <li>Does <strong>not</strong> share personal data with third parties for marketing purposes</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">7. Data Security</h3>
                        <p className="text-gray-700">We take reasonable technical and organizational measures to protect information collected through our website.</p>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">8. Your Rights</h3>
                        <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Request access to your data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h3>
                        <p className="text-gray-700">We may update this Privacy & Cookies Policy from time to time to reflect legal, technical, or operational changes.</p>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">10. Contact Information</h3>
                        <p className="text-gray-700 mb-4">If you have questions about this policy or how your data is handled, please contact:</p>
                        <div className="text-gray-700">
                            <p><strong>Ray's Healthy Living</strong></p>
                            <p>[Insert Email Address]</p>
                            <p>[Insert Business Address if desired]</p>
                        </div>
                    </section>
                </div>

                <div className="container mx-auto px-8 py-12 max-w-6xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Shipping & Returns
                    </h1>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
                        Ray’s Healthy Living Return Policy
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">
                        <p>
                            Ray’s Healthy Living makes every effort to satisfy our clients and customers. However, should you find any dissatisfaction with a product, please do contact our friendly customer service department by sending an email to this address:info@rayshealthyliving.com within 30 days of the shipment date. Our staff will send a Return Product Authorization and instructions on how to return the product. Returns without Return Product Authorization or that did not follow return instructions may not be honored. In addition, please take note of the following details:
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Shipping Within the United States
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">
                        <p>Ray’s Healthy Living reserves the right to apply a 25 % restocking fee for returned products depending on certain circumstances such as, but not limited to: Some promotional or sale products are discontinued or short-dated by the manufacturer. In these instances, returns may not be accepted without a specific Return Product Authorization from Ray’s Healthy Living customer service. Mass shipped products of 4 or more items (or less for some special items). Other circumstances depending on review of our customer service staff.
                            </p>

                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Damaged or Defective Products
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            Any damaged or defective product upon receipt through shipment should be noted and recorded. Please contact Ray’s Healthy Living customer service immediately for further guidance.
                        </p>
                    </div>



                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Unopened Products
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            Products shipped by Ray’s Healthy Living that remain unopened can be returned for a full refund (not including shipping fees). Please ensure that these product seals and in the original, non-tampered packaging. Shipping fees for these returned products are at customer’s expense. Refunds will be processed upon our receipt of the returned products. We reserve the right to decline refunds for lost or damaged products during return shipping.
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                       Refused or Undeliverable Products
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            If a product cannot be delivered due to (but not limited to) customer refusal to accept or due to error in provided shipping address, the customer will be responsible for the cost of return shipment incurred by Ray’s Healthy Living to have said products shipped back to our warehouse.
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Incomplete Returns

                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            No refund will be applied for returned products that have less than 60% of the original contents (whether mass orders or single purchases).
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Superficial Concerns
                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            Products cannot be returned and issued a refund due to superficial concerns, such as flavor or texture. Please consult our product information on the site or try out our sample products at a store near you to ensure what you order/purchase meets your specific tastes.
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        International Orders

                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            If an order is returned due to local restrictions, incorrect address, or refusal to settle fees, Ray’s Healthy Living can issue a partial refund. Any return shipping charges and for any additional custom fees for products being returned will be the customer’s responsibility. These charges will be deducted from the original order total. The remaining balance, if any, will be the amount refunded after receipt of the returned products.
                        </p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2'>
                        Promotional Products

                    </h2>
                    <div className="text-gray-700 leading-relaxed mb-6">    
                        <p>
                            Promotional products given by Ray’s Healthy Living as a gift or incentive are not eligible for returns/refunds.
                        </p>
                    </div>
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
                </div>
            </div>
            <Footer/>
        </Layout>
    );
};

export default PrivatePolicy;