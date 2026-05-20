
import React, { useState } from 'react';
import backgroundImage from '../assets/images/bg/Delivery-Policy-banner.jpg';
import { Layout } from '../components/common/Layout/Layout';
import { Footer } from '../components/common/Footer/Footer';

const DeliveryPolicy = () => {
  // Using a gradient background similar to the original image
//   const backgroundImage = "linear-gradient(135deg, #ff9a56 0%, #ffad56 25%, #ffd56b 50%, #b8e24f 75%, #7cb518 100%)";
  
  // State for toggle sections
  const [activeShippingTab, setActiveShippingTab] = useState('ORDER PROCESSING');
  const [activeInternationalTab, setActiveInternationalTab] = useState('INTERNATIONAL SHIPPING METHODS');

  // Shipping content data
  const shippingContent = {
    'ORDER PROCESSING': (
      <div className="space-y-4">
        <p>Most of the orders for Ray’s Healthy Living products within the United States are shipped within 5 business days upon placement (unless the product is back-ordered). Note that Ray’s Healthy Living does not ship on Saturdays and Sundays.</p>
        <p>TThe total delivery time for each order is the period of time from when the order is placed until the time of customer receipt. This delivery time is divided into processing and shipping.</p>
        <p>Processing time starts from when a customer’s order is submitted to when the product leaves our warehouse. This takes an average of 5 business days (Note: this is an estimate based on regular business activity, but it may vary depending on available stocks and level of demand).</p>
        <p>Shipping time starts at the point that the product leaves the warehouse to when it arrives at the customer's doorstep. Average shipping takes 7 to 10 business days to arrive. Consult the chart below for further information on shipping times.</p>
      </div>
    ),
    'FREE SHIPPING': (
      <div className="space-y-6">
        <p>Ray's Healthy Living products have a minimum shipping charge of $4.95. However, we offer free shipping for orders that weigh less than 3 lbs. (packed weight) with an order value over $79.00 and with a target address within the contiguous states of the United States of America.</p>
        
        <p>For orders processed for shipping weighing more than 3 lbs. (packed weight) and order value over $79.00, a credit of $4.95 will be applied to the shipping charges at the time of product checkout. This shipping fee discount is automatically deducted.</p>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SHIPPING METHODS</h3>
          <p className="mb-4">There are a number of shipping and delivery options for Ray's Healthy Living products processed online, depending on the packed weight of the order and shipping zones.</p>
          
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>USPS Priority with Delivery Confirmation/Signature Confirmation</li>
            <li>UPS Ground or FedEx</li>
            <li>Standard shipment with Delivery Confirmation/Signature Confirmation</li>
          </ul>

          <p className="mb-6">A note on the standard shipment: It can be USPS Top-of-the-Line, Southern California Overnite Express, or any other delivery service that Ray's Healthy Living's shipping department considers to be the fastest and most efficient as appropriate for customer's location.</p>

          <p className="mb-6">The following lists the approximate delivery times for the various shipping options Ray's Healthy Living uses. Please take note that these delivery times based on the shipping methods we use are applicable once the order is in the shipping stage. Most of our orders are processed on an average of 5 business days upon receipt of the order request.</p>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">UPS Ground or FedEx</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>8 business days delivery depending on the Time Zone (please see the outline beneath)</li>
                <li>Exclusions for orders to Hawaii, Alaska and Puerto Rico as well as FPO, APO, and P.O.Box addresses</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">USPS Priority Mail</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>5 business days is the average delivery time.</li>
                <li>Orders to FPO, APO and P.O.Boxes are shipped only by USPS</li>
                <li>Orders to Hawaii, Alaska and Puerto Rico are shipped only by USPS</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">USPS First Class</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>8 business days is the average delivery time.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Ontrac</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Only applies for orders to California, Arizona, and Nevada.</li>
                <li>1 Business day average delivery time for CA. 2 business days average delivery time for requests to Arizona and Nevada. (P.O Boxes excluded)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    'SPECIAL OFFERS': (
      <div className="space-y-4">
        <p>Ray’s Healthy Living is dedicated to offer our loyal customers the best value for their patronage off our business. As such, our business offers special discounts and sales offers for our most valued customers. However, these special discounts and offers cannot be used together (i.e. only one special discount/offer will apply per order). Also, some items already heavily discounted or as part of our inventory clearance sale are ineligible for further discounts and sales. You will be informed at the time of checkout if the product ordered will have these special offers applied.</p>
      </div>
    )
  };

  // International shipping content data
  const internationalContent = {
    'INTERNATIONAL SHIPPING METHODS': (
      <div className="space-y-4">
        <p>Ray's Healthy Living is not responsible for any and all orders blocked, impounded, or returned to us by the country's applicable Customs Department. Customer assumes full responsibility that products ordered such as vitamins and herbal supplements are allowed by their country's customs agency.</p>
        <p>Should any product be returned to us due to non-compliance of laws and regulation applicable to customer's home country, a refund will be applied for the product only (with 20% deduction of the order value as restocking fee), as well as any miscellaneous fees (quarantine, shipping, warehousing assessed by the customs agency.</p>
        <p>International customers may also have to pay import taxes, customs fees, etc. Said charges are separate from the standard shipping charge.</p>
      </div>
    ),
    'FREE SHIPPING': (
      <div className="space-y-4">
        <p>Free international shipping is available on orders over $150 to select countries.</p>
        <p>Free shipping applies to standard international delivery methods only.</p>
        <p>Delivery times for free international shipping may be 2-4 weeks depending on destination.</p>
        <p>Customs duties and taxes are still the responsibility of the customer.</p>
      </div>
    ),
    'INTERNATIONAL CUSTOMS AND DUTIES': (
      <div className="space-y-4">
        <p>All international orders are subject to customs inspection and potential duties/taxes.</p>
        <p>Ray's Healthy Living is not responsible for any customs fees, duties, or taxes imposed by the destination country.</p>
        <p>Customers are responsible for understanding their country's import regulations.</p>
        <p>Orders refused due to customs issues will be subject to return shipping charges and restocking fees.</p>
      </div>
    )
  };

  return (
    <Layout>
    <div className="min-h-screen ">
      {/* Hero Section */}
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
          RAY'S HEALTHY LIVING PROCESS AND POLICY
        </h1>

        {/* Introduction */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p>Ray's Healthy Living (rayshealthyliving.com) is committed to providing the most effective and versatile health and beauty supplement products which help provide essential minerals and vitamins. In relation to that, we offer a wide variety of healthy options for every customer with affordable and timely shipping and delivery choices. For delivery of Ray's Healthy Living products, please take note of the following important details:</p>
        </div>

        {/* Shipping Within the United States */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            SHIPPING WITHIN THE UNITED STATES
          </h2>
          
          {/* Shipping Tabs */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(shippingContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveShippingTab(tab)}
                  className={`px-4 py-2 rounded-md border-2 font-medium transition-colors ${
                    activeShippingTab === tab
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <div className="text-gray-700 leading-relaxed">
                {shippingContent[activeShippingTab]}
              </div>
            </div>
          </div>
        </section>

        {/* Back Orders */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            BACK ORDERS
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ray's Healthy Living website updates our latest inventory status every day. In the unlikely event that one of our quality products gets backordered, we will let the customer know through email or phone within six (6) business days of purchase.</p>
            <p>When such situation arises, Ray's Healthy Living may opt to split the customer's order and send the products currently available to avoid or minimize delays. The remaining backordered products will be shipped at our expense at the soonest availability.</p>
          </div>
        </section>

        {/* Tracking Orders */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            TRACKING ORDERS
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All orders through Ray's Healthy Living can be tracked online. Please make sure to provide an active e-mail address to avail of this service. Online tracking for our products are available at our website through a clickable tracking link which will be provided through the e-mail sent as part of shipping notification. You can also check on the status of your order by calling our friendly customer service or by clicking on the Tracking Your Order option at the top of our home page and providing the required information.
          </p>
        </section>

        {/* Delivery Confirmation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            DELIVERY CONFIRMATION
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>All orders placed at Ray's Healthy Living site are subject to customer agreement to our terms and conditions for shipping and delivery. All shipping labels are generated automatically through the use of FedEx and USPS software from the information provided by the customer at the time of order placement.</p>
            <p>Errors of information provided (incorrect or incomplete address, for example) may lead to the return of package to our warehouse or may incur correction on the label, as per discretion of the shipping carrier. In such cases, customer will be charged $4.95 per package.</p>
            <p>Customers who opt to cancel returned orders will incur a 10% re-stocking fee for each order. In addition, shipping costs cannot be refunded.</p>
            <p>Please note that Ray's Healthy Living is not responsible for any orders undelivered or lost due to customer error.</p>
            <p>All orders processed by Ray's Healthy Living are provided a tracking number upon shipment. By placing an order, our business and the customer agree to use the shipping company's tracking information and system in determining final assessment on whether the package was delivered. Should the package be determined to be undelivered using the tracking information, we will re-ship the package. This agreement is initiated at the time of shipment and risk of loss for such items during shipping passes to the customer upon our delivery to the carrier.</p>
            <p>Please take note that the shipping carrier might opt to leave the package near the customer's door or a neighbor if the customer is not available to receive the delivery. If a customer has reservations about leaving the package at their doorstep or potential of loss, Ray's Health Living strongly advises choosing Signature Confirmation as part of the shipping options.</p>
          </div>
        </section>

        {/* Applicable Taxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            APPLICABLE TAXES
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ray's Healthy Living only charges applicable sales tax on orders shipped to addresses located in the state of California. No sales tax will be charged for orders shipped outside the state of California.
          </p>
        </section>

        {/* International Shipping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            INTERNATIONAL SHIPPING
          </h2>
          
          {/* International Shipping Tabs */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(internationalContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveInternationalTab(tab)}
                  className={`px-4 py-2 rounded-md border-2 font-medium transition-colors ${
                    activeInternationalTab === tab
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <div className="text-gray-700 leading-relaxed">
                {internationalContent[activeInternationalTab]}
              </div>
            </div>
          </div>
        </section>

        {/* First Time International Customers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
            FIRST TIME INTERNATIONAL CUSTOMERS CREDIT CARD VERIFICATION POLICY
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ray's Healthy Living international customers can order online. However, unlike domestic customers, please note that first time international customers must send a fax and/or mail Ray's Healthy Living a copy of the front page of their credit card statement. Alternatively, a copy of the front and back of customer's credit card along with a copy of a utility bill (electricity, gas, or water) which clearly indicates and matches the name and shipping address.</p>
            <p>This security policy is only done once and with utmost confidentiality. Ray's Healthy Living conducts this verification to ensure the customer is the owner of the credit card and to avoid fraud. Only after this credit card verification is accomplished will the order be shipped.</p>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-600 italic border-t pt-6">
          "Ray's Healthy Living is committed to providing excellent customer service and quality products with reliable shipping options."
        </div>
      </div>
    </div>
     <Footer />
    </Layout>
  );
};

export default DeliveryPolicy;