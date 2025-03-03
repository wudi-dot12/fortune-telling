import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface TestimonialProps {
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  avatar,
  role,
  content,
  rating,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-primary">
            <Quote size={24} className="opacity-50" />
          </div>

          <p className="text-gray-700 mb-6 flex-grow">{content}</p>

          <div className="flex items-center mt-auto">
            <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
              <StarRating rating={rating} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = [
    {
      name: "李明",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
      role: "企业家",
      content:
        "这个运势计算网站太神奇了！预测的事项非常准确，帮我避开了几次潜在的商业风险。现在我每天早上都会查看我的运势报告，作为决策参考。",
      rating: 5,
    },
    {
      name: "王芳",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      role: "自由职业者",
      content:
        "作为一名自由职业者，时间管理对我来说非常重要。这个网站帮助我选择最佳时机进行重要会议和项目启动，效果显著！",
      rating: 4,
    },
    {
      name: "张伟",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      role: "学生",
      content:
        "起初我抱着怀疑的态度使用这个网站，但连续几次准确的预测让我彻底信服。特别是在考试和面试前查看运势，给了我很大帮助。",
      rating: 5,
    },
  ],
  title = "用户真实体验",
  subtitle = "来自各行各业用户的真实反馈，见证运势预测的神奇力量",
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
