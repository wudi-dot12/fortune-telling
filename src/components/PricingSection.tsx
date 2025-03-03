import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, Sparkles, Star } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

interface PricingSectionProps {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "选择适合您的方案",
  description = "我们提供多种价格方案，满足您不同的需求，让您获得更精准、更详细的运势分析。",
  plans = [
    {
      id: "basic",
      name: "基础版",
      price: "免费",
      description: "适合初次体验的用户",
      features: ["基础运势评级", "运势分数", "3项宜忌事项", "简要运势解读"],
      buttonText: "立即体验",
    },
    {
      id: "pro",
      name: "专业版",
      price: "¥39.9/月",
      description: "适合需要详细分析的用户",
      features: [
        "高级运势评级",
        "运势分数",
        "10项宜忌事项",
        "详细运势解读",
        "每日运势提醒",
        "重要日期预警",
      ],
      highlighted: true,
      buttonText: "升级专业版",
    },
    {
      id: "premium",
      name: "尊享版",
      price: "¥99.9/月",
      description: "适合追求极致体验的用户",
      features: [
        "专家级运势评级",
        "运势分数",
        "无限宜忌事项",
        "专业运势解读",
        "每日运势提醒",
        "重要日期预警",
        "一对一专家咨询",
        "个性化运势报告",
      ],
      buttonText: "升级尊享版",
    },
  ],
}) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card
                className={`h-full flex flex-col ${plan.highlighted ? "border-primary shadow-lg relative overflow-hidden" : "border-gray-200"}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-tl-none rounded-br-none bg-primary text-white px-3 py-1">
                      <Sparkles className="h-3.5 w-3.5 mr-1" />
                      推荐
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    {plan.name}
                    {plan.highlighted && (
                      <Star className="h-5 w-5 ml-2 text-yellow-400 inline" />
                    )}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            所有方案均可随时取消。价格已包含增值税。
            <br />
            如有任何疑问，请联系我们的客服团队。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
