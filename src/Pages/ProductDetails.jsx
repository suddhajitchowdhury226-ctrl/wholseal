import React, { useEffect } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { Productoverview } from "../components/Productdetails/Productoverview/Productoverview";
import { SimilarProduct } from "../components/Productdetails/SimilarProduct/SimilarProduct";
import { Layout } from "../components/common/Layout/Layout";

export const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <Productoverview />
        {/* <SimilarProduct /> */}
        <Footer />
      </Layout>
    </>
  );
};
