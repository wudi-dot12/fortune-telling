import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQSectionProps {
  faqs?: {
    question: string;
    answer: string;
  }[];
  title?: string;
  subtitle?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = [
    {
      question: "运势计算是基于什么原理？",
      answer:
        "我们的运势计算系统结合了东方玄学、紫微斗数、易经和西方星座学的精华，通过复杂算法分析您的姓名和生日信息，生成精准的运势预测报告。",
    },
    {
      question: "运势报告的准确性如何？",
      answer:
        "我们的运势分析系统经过多年研发和验证，准确率在业内处于领先水平。但请记住，运势预测仅供参考，最终的人生选择仍由您自己决定。",
    },
    {
      question: "免费版和付费版有什么区别？",
      answer:
        "免费版提供基础的运势评级和简要分析，而付费版则提供更详细的运势解读、个性化建议、长期运势趋势分析以及专业顾问一对一咨询服务。",
    },
    {
      question: "我的个人信息安全吗？",
      answer:
        "我们非常重视用户隐私，所有个人信息均采用高级加密技术保护，绝不会泄露或用于运势分析以外的任何目的。",
    },
    {
      question: "如何获取更准确的运势预测？",
      answer:
        "提供准确的姓名（最好是您的法定姓名）和精确的出生日期（包括年、月、日），这样可以获得最准确的运势预测结果。",
    },
    {
      question: "运势报告多久更新一次？",
      answer:
        "基础运势报告每日更新，高级会员可获取每周、每月和年度运势预测，帮助您做好长期规划。",
    },
  ],
  title = "常见问题",
  subtitle = "关于运势计算的一些常见疑问解答",
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
