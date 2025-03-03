import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "探索你的个人运势",
  subtitle = "只需输入姓名和生日，即可获得专业的运势分析报告，了解你的运势评级、宜忌事项及详细解读。",
  ctaText = "立即计算运势",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4 sm:px-6 lg:px-8 min-h-[700px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            {subtitle}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg px-8 py-6 h-auto rounded-full"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300 rounded-full opacity-70 blur-xl"></div>

            <img
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Mystical night sky with stars"
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                专业运势分析
              </h3>
              <p className="text-sm text-gray-700">
                结合东方玄学与西方星座学，为您提供全面的运势指导。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
