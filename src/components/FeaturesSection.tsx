import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Star, Sparkles, Brain, Compass, Zap, BarChart } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-purple-100 rounded-full mb-4 text-purple-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

interface FeaturesSectionProps {
  features?: FeatureProps[];
  title?: string;
  subtitle?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "精准运势分析",
      description: "结合东方玄学与西方星座学，提供全面且精准的个人运势分析",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "个性化报告",
      description: "根据您的姓名和生日，生成专属于您的个性化运势报告",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "紫微斗数解读",
      description: "运用古老的紫微斗数学，深入解读您的命盘和运势走向",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "宜忌指南",
      description: "详细列出每日宜做与忌做事项，助您趋吉避凶",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "即时计算",
      description: "只需几秒钟，即可获得详尽的运势分析结果",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "运势评分",
      description: "直观的运势评分系统，让您一目了然地了解自己的运势状况",
    },
  ],
  title = "我们的特色功能",
  subtitle = "探索运势计算的强大功能",
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
