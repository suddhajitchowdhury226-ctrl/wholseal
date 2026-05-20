

import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
import { ProductDetails } from "./Pages/ProductDetails";
import { Profile } from "./Pages/Profile";
import { Login } from "./Pages/auth/Login/Login";
import { Register } from "./Pages/auth/Register/Register";
import { ForgotPassword } from "./Pages/auth/ForgotPassword/ForgotPassword";
import PurchaseSummary from "./Pages/PurchaseSummary";
import OrderSuccess from "./Pages/OrderSuccess";
import { Navbar } from "./components/common/Navbar/Navbar";
import OrderDetails from "./components/Profilepage/OrderDetails";
import TrackingDetail from "./components/Profilepage/TrackShipmentDetails";
import FilterProduct from "./components/ProductPage/ProductLists/FilterProduct";
import Aboutpage from "./Pages/AboutPage";

import Contactpage from "./Pages/ContactPage";
import Conditionofuse from "./Pages/conditionofuse";

import ReturnPolicy from "./Pages/ReturnPolicy";

import PrivatePolicy from "./Pages/PrivatePolicy";

import DeliveryPolicy from "./Pages/DeliveryPolicy";

import CommentingPolicy from "./Pages/CommentingPolicy";

import Faq from "./Pages/Faq";

import Mystorya from "./Pages/Mystory"
import Testimonial from "./Pages/Testimonial";
import Feedback from "./Pages/Feedback";
import FixedButtons from "./components/FixedButton";
import CounselingPage from "./Pages/CousellingPage";
import SuccessPage from "./Pages/SuccessPage";
import CancelPage from "./Pages/CancelPage";
import { ChatWidget } from "./components/ChatWidget/ChatWidget";










import HealthConcern from "./Pages/HealthConcern.jsx";
import ADDHADH from "./Pages/A-ZList/AddAdhd";
import Alcholism from "./Pages/A-ZList/Alcholism";
import Alopecia from "./Pages/A-ZList/Alopecia";
import Amyotrophic from "./Pages/A-ZList/Amyotrophic";
import Angina from "./Pages/A-ZList/Angina";
import Arrhythmia from "./Pages/A-ZList/Arrhythmia";
import Arthritis from "./Pages/A-ZList/Arthritis";
import Asthama from "./Pages/A-ZList/Asthama";
import Atherosclerosis from "./Pages/A-ZList/Atherosclerosis";
import AutoimmuneDisorders from "./Pages/A-ZList/AutoimmuneDisorders";
import AvianInfluenza from "./Pages/A-ZList/AvianInfluenza";
import Ayurveda from "./Pages/A-ZList/Ayurveda";
import ENT from "./Pages/A-ZList/ENT";
import Eyeandvision from "./Pages/A-ZList/Eyeandvision";
import Fatigue from "./Pages/A-ZList/Fatigue";
import Fibromyalgia from "./Pages/A-ZList/Fibromyalgia";
import FoodAllergy from "./Pages/A-ZList/FoodAllergy";
import FootCenter from "./Pages/A-ZList/FootCenter";
import Gallstones from "./Pages/A-ZList/Gallstones";
import GastricUlcer from "./Pages/A-ZList/GastricUlcer";
import Gout from "./Pages/A-ZList/Gout";
import Headache from "./Pages/A-ZList/Headache";
import HeartburnAndGERD from "./Pages/A-ZList/HeartburnAndGERD";
import Hemorrhoids from "./Pages/A-ZList/Hemorrhoids";
import Hepatitis from "./Pages/A-ZList/Hepatiti";
import ImmuneSupport from "./Pages/A-ZList/ImmuneSupport";
import JointsAndLegaments from "./Pages/A-ZList/JointsAndLegaments";
import KidneyBladderDiseases from "./Pages/A-ZList/KidneyBladderDiseases";
import Leukemia from "./Pages/A-ZList/Leukemia";
import Menopause from "./Pages/A-ZList/Menopause";


import Backpain from "./Pages/A-ZList/Backpain";
import BacterialInfections from "./Pages/A-ZList/BacterialInfections";
import BladderInfection from "./Pages/A-ZList/BladderInfection";
import BoneOsteoporosis from "./Pages/A-ZList/BoneOsteoporosis";
import BrainandCognitiveFunction from "./Pages/A-ZList/BrainAndCognitiveFunction";
import Breastcancer from "./Pages/A-ZList/BreastCancer";
import BruisingAndContusions from "./Pages/A-ZList/BruisingAndContusions";
import VaricoseAndVeinCare from "./Pages/A-ZList/VaricoseAndVeinCare";
import UterineFibroid from "./Pages/A-ZList/UterineFibroid";
import Trauma from "./Pages/A-ZList/Trauma";
import RespiratoryHealth from "./Pages/A-ZList/RespiratoryHealth";
import Stroke from "./Pages/A-ZList/Stroke";
import ParkinsonsDisease from "./Pages/A-ZList/ParkinsonsDisease";
import OralCare from "./Pages/A-ZList/OralCare";
import NailHealth from "./Pages/A-ZList/NailHealth";
import Thyroid from "./Pages/A-ZList/Thyroid";
import SleepSupport from "./Pages/A-ZList/SleepSupport";
import SkinHealth from "./Pages/A-ZList/SkinHealth";


import Cancer from "./Pages/A-ZList/Cancer";
import Cataract from "./Pages/A-ZList/Cataract";
import Candida from "./Pages/A-ZList/Candida";
import CankerSores from "./Pages/A-ZList/CankerSores";
import Cardiomyopathy from "./Pages/A-ZList/Cardiomyopathy";
import CarpalTunnel from "./Pages/A-ZList/CarpalTunnel";
import ChildrensHealth from "./Pages/A-ZList/ChildrensHealth";
import Cholesterol from "./Pages/A-ZList/Cholesterol";
import ChronicFatigue from "./Pages/A-ZList/ChronicFatigue";
import CleanseAndDetox from "./Pages/A-ZList/CleanseAndDetox";
import ColdFluAndViral from "./Pages/A-ZList/ColdFluAndViral";
import Constipation from "./Pages/A-ZList/Constipation";


import Depression from "./Pages/A-ZList/Depression";
import Diarrhea from "./Pages/A-ZList/Diarrhea";
import DietAndWeightLoss from "./Pages/A-ZList/Diet And Weight Loss";
import DigestionAndStomachAilments from "./Pages/A-ZList/Digestion And Stomach Ailments";
import DryMouth from "./Pages/A-ZList/Dry Mouth";
import ColonHealth from "./Pages/A-ZList/Colon Health";
import CongestiveHeartFailure from "./Pages/A-ZList/Congestive Heart Failure";
import Blog from "./Pages/auth/Blog.jsx";
import BlogDetail from "./Pages/BlogDetail.jsx";
import BengalReview from "./Pages/BengalReview.jsx";
import { AnimatePresence } from 'framer-motion';
import DiagonalLoader from './components/Loader/DiagonalLoader';
import { useState, useEffect } from 'react';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { CookieConsentBanner } from './components/CookieConsent/CookieConsentBanner';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading or minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products-details/:pid" exact element={<ProductDetails />} />
          <Route path="/account/my-profile" exact element={<Profile />} />
          <Route path="/account/order-details/:orderId" exact element={<OrderDetails />} />
          <Route path="/auth/login" exact element={<Login />} />
          <Route path="/auth/register" exact element={<Register />} />
          <Route path="/auth/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/purchase-summary" exact element={<PurchaseSummary />} />
          <Route path="/order-success" exact element={<OrderSuccess />} />
          <Route path="/tracking" element={<TrackingDetail />} />

          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/bengal-reviews" element={<BengalReview />} />
          <Route path="/product/:categoryId" element={<Products />} />
          <Route path="/contact" exact element={<Contactpage />} />

          <Route path="/conditionofuse" exact element={<Conditionofuse />} />
          <Route path="/return-policy" exact element={<ReturnPolicy />} />
          <Route path="/private-policy" exact element={<PrivatePolicy />} />
          <Route path="/delivery-policy" exact element={<DeliveryPolicy />} />
          <Route path="/commenting-policy" exact element={<CommentingPolicy />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/my-story" exact element={<Mystorya />} />
          <Route path="/our-testimonials" exact element={<Testimonial />} />


          <Route path="/feedback" exact element={<Feedback />} />

          <Route path="/counseling" exact element={<CounselingPage />} />

          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />




          <Route path="/health-concern" exact element={<HealthConcern />} />
          <Route path="/health-concern/add-adhd" exact element={<ADDHADH />} />
          <Route path="/health-concern/alcoholism" exact element={<Alcholism />} />
          <Route path="/health-concern/alopecia" exact element={<Alopecia />} />
          <Route path="/health-concern/amyotrophic-lateral-sclerosis" exact element={<Amyotrophic />} />
          <Route path="/health-concern/angina" exact element={<Angina />} />
          <Route path="/health-concern/arrhythmia" exact element={<Arrhythmia />} />
          <Route path="/health-concern/arthritis" exact element={<Arthritis />} />
          <Route path="/health-concern/asthma" exact element={<Asthama />} />
          <Route path="/health-concern/atherosclerosis" exact element={<Atherosclerosis />} />
          <Route path="/health-concern/autoimmune-disorders" exact element={<AutoimmuneDisorders />} />
          <Route path="/health-concern/avian-influenza" exact element={<AvianInfluenza />} />
          <Route path="/health-concern/ayurveda" exact element={<Ayurveda />} />
          <Route path="/health-concern/ear-hearing-and-tinnitus" exact element={<ENT />} />
          <Route path="/health-concern/eye-and-vision-care" exact element={<Eyeandvision />} />
          <Route path="/health-concern/fatigue" exact element={<Fatigue />} />
          <Route path="/health-concern/fibromyalgia" exact element={<Fibromyalgia />} />
          <Route path="/health-concern/food-allergy" exact element={<FoodAllergy />} />
          <Route path="/health-concern/foot-center" exact element={<FootCenter />} />
          <Route path="/health-concern/gallstones" exact element={<Gallstones />} />
          <Route path="/health-concern/gastric-ulcer" exact element={<GastricUlcer />} />
          <Route path="/health-concern/gout" exact element={<Gout />} />
          <Route path="/health-concern/headache" exact element={<Headache />} />
          <Route path="/health-concern/heartburn-and-gerd" exact element={<HeartburnAndGERD />} />
          <Route path="/health-concern/hemorrhoids" exact element={<Hemorrhoids />} />
          <Route path="/health-concern/hepatitis" exact element={<Hepatitis />} />
          <Route path="/health-concern/immune-support" exact element={<ImmuneSupport />} />
          <Route path="/health-concern/joints-and-ligaments" exact element={<JointsAndLegaments />} />
          <Route path="/health-concern/kidney-bladder-diseases" exact element={<KidneyBladderDiseases />} />
          <Route path="/health-concern/leukemia" exact element={<Leukemia />} />
          <Route path="/health-concern/menopause" exact element={<Menopause />} />



          <Route path="/health-concern/back-pain" exact element={<Backpain />} />
          <Route path="/health-concern/bacterial-infections" exact element={<BacterialInfections />} />
          <Route path="/health-concern/bladder-infection" exact element={<BladderInfection />} />
          <Route path="/health-concern/bone-osteoporosis" exact element={<BoneOsteoporosis />} />
          <Route path="/health-concern/brain-and-cognitive-function" exact element={<BrainandCognitiveFunction />} />
          <Route path="/health-concern/breast-cancer" exact element={<Breastcancer />} />
          <Route path="/health-concern/bruising-and-contusions" exact element={<BruisingAndContusions />} />
          <Route path="/health-concern/varicose-and-vein-care" exact element={<VaricoseAndVeinCare />} />
          <Route path="/health-concern/uterine-fibroid" exact element={<UterineFibroid />} />
          <Route path="/health-concern/trauma" exact element={<Trauma />} />
          <Route path="/health-concern/respiratory-health" exact element={<RespiratoryHealth />} />
          <Route path="/health-concern/stroke" exact element={<Stroke />} />
          <Route path="/health-concern/parkinsons-disease" exact element={<ParkinsonsDisease />} />
          <Route path="/health-concern/oral-care" exact element={<OralCare />} />
          <Route path="/health-concern/nail-health" exact element={<NailHealth />} />
          <Route path="/health-concern/thyroid" exact element={<Thyroid />} />
          <Route path="/health-concern/sleep-support" exact element={<SleepSupport />} />
          <Route path="/health-concern/skin-health" exact element={<SkinHealth />} />


          <Route path="/health-concern/cancer" exact element={<Cancer />} />
          <Route path="/health-concern/cataract" exact element={<Cataract />} />
          <Route path="/health-concern/candida-fungal" exact element={<Candida />} />
          <Route path="/health-concern/canker-sores" exact element={<CankerSores />} />
          <Route path="/health-concern/cardiomyopathy" exact element={<Cardiomyopathy />} />
          <Route path="/health-concern/carpal-tunnel" exact element={<CarpalTunnel />} />
          <Route path="/health-concern/childrens-health" exact element={<ChildrensHealth />} />
          <Route path="/health-concern/cholesterol" exact element={<Cholesterol />} />
          <Route path="/health-concern/chronic-fatigue" exact element={<ChronicFatigue />} />
          <Route path="/health-concern/cleanse-and-detox" exact element={<CleanseAndDetox />} />
          <Route path="/health-concern/cold-flu-and-viral" exact element={<ColdFluAndViral />} />
          <Route path="/health-concern/constipation" exact element={<Constipation />} />

          <Route path="/health-concern/depression" exact element={<Depression />} />
          <Route path="/health-concern/diarrhea" exact element={<Diarrhea />} />
          <Route path="/health-concern/diet-and-weight-loss" exact element={<DietAndWeightLoss />} />
          <Route path="/health-concern/digestion-and-stomach-ailments" exact element={<DigestionAndStomachAilments />} />
          <Route path="/health-concern/dry-mouth" exact element={<DryMouth />} />
          <Route path="/health-concern/colon-health" exact element={<ColonHealth />} />
          <Route path="/health-concern/congestive-heart-failure" exact element={<CongestiveHeartFailure />} />


        </Routes>
        <FixedButtons />
        <ChatWidget />
        <AnimatePresence mode="wait">
          {isLoading && <DiagonalLoader key="loader" />}
        </AnimatePresence>
      </BrowserRouter>
      <CookieConsentBanner />
    </CookieConsentProvider>
  );
}

export default App;