import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FortuneCalculator from "./FortuneCalculator";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import PricingSection from "./PricingSection";
import CalculationPrinciplesSection from "./CalculationPrinciplesSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection onCtaClick={scrollToCalculator} />

        {/* Fortune Calculator Section */}
        <section id="calculator" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FortuneCalculator />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* Calculation Principles Section */}
        <section id="principles">
          <CalculationPrinciplesSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
