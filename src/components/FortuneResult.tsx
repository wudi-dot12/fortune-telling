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
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import {
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";

interface FortuneResultProps {
  name?: string;
  birthdate?: string;
  rating?:
    | "great-fortune"
    | "good-fortune"
    | "neutral"
    | "bad-fortune"
    | "terrible-fortune";
  score?: number;
  recommendations?: {
    title: string;
    description: string;
    type: "do" | "avoid";
  }[];
  interpretation?: string;
}

const ratingConfig = {
  "great-fortune": {
    label: "大吉",
    color: "bg-green-500",
    textColor: "text-green-500",
    icon: <CheckCircle className="h-6 w-6" />,
    description: "今日运势极佳，万事顺遂",
  },
  "good-fortune": {
    label: "小吉",
    color: "bg-emerald-400",
    textColor: "text-emerald-400",
    icon: <ThumbsUp className="h-6 w-6" />,
    description: "今日运势良好，适合进行大多数活动",
  },
  neutral: {
    label: "中平",
    color: "bg-blue-400",
    textColor: "text-blue-400",
    icon: <Info className="h-6 w-6" />,
    description: "今日运势平稳，宜守不宜进",
  },
  "bad-fortune": {
    label: "小凶",
    color: "bg-orange-400",
    textColor: "text-orange-400",
    icon: <ThumbsDown className="h-6 w-6" />,
    description: "今日运势欠佳，需谨慎行事",
  },
  "terrible-fortune": {
    label: "大凶",
    color: "bg-red-500",
    textColor: "text-red-500",
    icon: <AlertTriangle className="h-6 w-6" />,
    description: "今日运势不佳，宜静养避祸",
  },
};

const FortuneResult: React.FC<FortuneResultProps> = ({
  name = "张三",
  birthdate = "1990-01-01",
  rating = "good-fortune",
  score = 78,
  recommendations = [
    {
      title: "宜：投资理财",
      description: "今日财运亨通，适合进行投资活动或理财规划。",
      type: "do",
    },
    {
      title: "宜：社交活动",
      description: "人缘运势佳，适合参加社交活动，拓展人脉。",
      type: "do",
    },
    {
      title: "宜：学习进修",
      description: "思维敏捷，记忆力增强，是学习新知识的好时机。",
      type: "do",
    },
    {
      title: "忌：冲动消费",
      description: "虽然财运不错，但仍需避免不必要的冲动消费。",
      type: "avoid",
    },
    {
      title: "忌：激烈运动",
      description: "身体能量略有不足，不宜进行剧烈运动。",
      type: "avoid",
    },
  ],
  interpretation = "根据紫微斗数和八字分析，您今日的整体运势良好。财运和人际关系方面尤为突出，可把握机会拓展人脉和进行适度投资。健康方面需要注意休息，避免过度劳累。工作学习效率较高，适合处理需要专注力的任务。感情方面平稳，已有伴侣的人可增进感情交流。",
}) => {
  const currentRating = ratingConfig[rating];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg"
    >
      <Card className="border-none shadow-none bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-2">
            个人运势分析报告
          </CardTitle>
          <CardDescription className="text-lg">
            {name} · {birthdate}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* 运势评级区域 */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center"
            >
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${currentRating.color} text-white`}
              >
                <span className="text-4xl font-bold">
                  {currentRating.label}
                </span>
              </div>
            </motion.div>

            <div className="text-center">
              <h3
                className={`text-xl font-semibold ${currentRating.textColor}`}
              >
                {currentRating.description}
              </h3>
            </div>

            <div className="w-full max-w-md">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">运势评分</span>
                <span className="font-medium">{score}/100</span>
              </div>
              <Progress value={score} className="h-3" />
            </div>
          </div>

          <Separator />

          {/* 宜忌事项区域 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">今日宜忌</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="mr-2 h-5 w-5" /> 宜做事项
                </h4>
                {recommendations
                  .filter((r) => r.type === "do")
                  .map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-3 bg-green-50 rounded-lg"
                    >
                      <h5 className="font-medium text-green-700">
                        {rec.title}
                      </h5>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </motion.div>
                  ))}
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center text-red-600 font-medium">
                  <AlertTriangle className="mr-2 h-5 w-5" /> 忌做事项
                </h4>
                {recommendations
                  .filter((r) => r.type === "avoid")
                  .map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-3 bg-red-50 rounded-lg"
                    >
                      <h5 className="font-medium text-red-700">{rec.title}</h5>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* 详细解读区域 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">详细解读</h3>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">{interpretation}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-4">
          <Badge variant="outline" className="text-xs">
            基于东方玄学、紫微斗数、易经和西方星座学综合分析
          </Badge>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FortuneResult;
