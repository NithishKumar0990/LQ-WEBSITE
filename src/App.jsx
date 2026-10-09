import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Shared Layout & Navigation Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

// Page Components (Strict: 1 Page = 1 File)
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import DigitalMarketingDetailPage from "./pages/DigitalMarketingDetailPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SmoothScroll />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing/:slug" element={<DigitalMarketingDetailPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppWidget />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
