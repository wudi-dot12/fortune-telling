import React from "react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Compass, Moon, Sun } from "lucide-react";

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  icon = <BookOpen className="h-8 w-8 text-primary" />,
  title = "原理标题",
  description = "这里是原理的详细描述内容。",
}) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CalculationPrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "东方玄学",
      description:
        "结合传统五行学说、八字命理和风水原理，分析个人命盘与当日能量场的互动关系。",
    },
    {
      icon: <Moon className="h-8 w-8 text-primary" />,
      title: "紫微斗数",
      description:
        "采用古老的紫微斗数星盘分析法，通过出生年月日时计算命宫位置和主星分布，预测运势走向。",
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "易经卦象",
      description:
        "基于易经六十四卦的哲学智慧，解读当日卦象变化，提供行动指引和决策建议。",
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "西方星座学",
      description:
        "结合现代西方占星学理论，分析行星相位、宫位能量和星座特质，提供全面的运势解读。",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">运势计算原理</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们的运势计算系统融合东西方多种预测学说，通过复杂算法为您提供精准的运势分析
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PrincipleCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-4">科学与传统的完美结合</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            我们的算法不仅基于古老的预测体系，还融合了现代数据分析技术，通过大数据处理和模式识别，
            为每位用户提供个性化的运势分析报告，帮助您把握人生机遇，趋吉避凶。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculationPrinciplesSection;
