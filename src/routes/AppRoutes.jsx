import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart from "../pages/Cart";
import ProductDetailPage from "../pages/ProductDetailPage";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
