import React, { useEffect } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { ProductLists } from "../components/ProductPage/ProductLists/ProductLists";
import { Layout } from "../components/common/Layout/Layout";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <ProductLists />
        <Footer />
      </Layout>
    </>
  );
};
